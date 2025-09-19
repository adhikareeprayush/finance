import { createBrowserRouter } from "react-router-dom";
import Login from "./src/pages/Login";
import DashboardLayout from "./src/layout/DashboardLayout";
import Insight from "./src/pages/insight/Insight";
import InsightPage from "./src/pages/insight/InsightPage";
import { Navigate } from "react-router-dom";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
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
    ],
  },
]);

export default router;
