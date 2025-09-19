import { createBrowserRouter } from "react-router-dom";
import Login from "./src/pages/Login";
import DashboardLayout from "./src/layout/DashboardLayout";
import Dashboard from "./src/pages/Dashboard";

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
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
