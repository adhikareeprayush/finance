import { createBrowserRouter } from "react-router-dom";
import Login from "./src/pages/Login";
import DashboardLayout from "./src/layout/DashboardLayout";
import Insight from "./src/pages/insight/Insight";

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
        element: <Insight />,
        path: "insight",
      },
    ],
  },
]);

export default router;
