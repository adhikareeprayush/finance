import { createBrowserRouter } from "react-router-dom";
import Login from "./src/pages/Login";
import Landing from "./src/pages/Landing";
import DashboardLayout from "./src/layout/DashboardLayout";
import Insight from "./src/pages/insight/Insight";
import InsightPage from "./src/pages/insight/InsightPage";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./src/providers/AuthProvider";
import { SecurityMiddleware } from "./src/components/SecurityMiddleware";
import SignUp from "./src/pages/SignUp";
import DCF from "./src/pages/DCF";
import News from "./src/pages/News";
import Watchlists from "./src/pages/Watchlists";
import Earnings from "./src/pages/Earnings";
import Transcripts from "./src/pages/Transcripts";
import Portfolios from "./src/pages/Portfolios";
import Unauthorized from "./src/pages/Unauthorized";
import NotFound from "./src/pages/NotFound";
import Profile from "./src/pages/Profile";
import Support from "./src/pages/Support";
import Terms from "./src/pages/Terms";
import TermsPublic from "./src/pages/TermsPublic";

function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-950">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500" />
    </div>
  );
}

function RequireAuth({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    return (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  }

  return <SecurityMiddleware>{children}</SecurityMiddleware>;
}

function RedirectIfAuthenticated({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isAuthenticated) {
    const from = location.state?.from?.pathname || "/dashboard";
    return <Navigate to={from} replace />;
  }

  return children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
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
    path: "/terms",
    element: <TermsPublic />,
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
      {
        path: "watchlists",
        element: <Watchlists />,
      },
      {
        path: "earnings",
        element: <Earnings />,
      },
      {
        path: "transcripts",
        element: <Transcripts />,
      },
      {
        path: "portfolios",
        element: <Portfolios />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
    ],
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
