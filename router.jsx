import { createBrowserRouter } from "react-router-dom";
import Login from "./src/pages/Login";
import DashboardLayout from "./src/layout/DashboardLayout";
import Insight from "./src/pages/insight/Insight";
import InsightPage from "./src/pages/insight/InsightPage";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./src/providers/AuthProvider";
import { SecurityMiddleware } from "./src/components/SecurityMiddleware";
import { useEffect, useState } from "react";
import SignUp from "./src/pages/SignUp";
import DCF from "./src/pages/DCF";
import News from "./src/pages/News";

// Loading component
function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
    </div>
  );
}

// Secure authentication guard
function RequireAuth({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Show loading screen while validating
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <SecurityMiddleware>{children}</SecurityMiddleware>;
}

// Redirect authenticated users away from login
function RedirectIfAuthenticated({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isAuthenticated) {
    // Redirect to intended page or dashboard
    const from = location.state?.from?.pathname || "/dashboard";
    return <Navigate to={from} replace />;
  }

  return children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RedirectIfAuthenticated>
        <Login />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/signup",
    element: (
      <RedirectIfAuthenticated>
        <SignUp />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <RequireAuth>
        <DashboardLayout />
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="insight" replace />,
      },
      {
        element: <Insight />,
        path: "insight",
      },
      {
        path: "insight/:insightSymbol",
        element: <InsightPage />,
      },
      {
        path: "dcf-calculator",
        element: <DCF />,
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
  {
    path: "/unauthorized",
    element: (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Unauthorized Access
          </h1>
          <p className="text-gray-600 mb-4">
            You don't have permission to access this resource.
          </p>
          <Navigate to="/" replace />
        </div>
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-4">
            The page you're looking for doesn't exist.
          </p>
          <Navigate to="/dashboard" replace />
        </div>
      </div>
    ),
  },
]);

export default router;
