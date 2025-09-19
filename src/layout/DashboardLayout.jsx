import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Nav from "../components/nav/Nav";
import { SidebarProvider } from "../providers/SidebarProvider";
import Breadcrumb from "../components/resuable/Breadcrumb";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col h-full dark:bg-[#212121]">
        <Nav />
        <div className="flex w-full h-full flex-1">
          <Sidebar />
          <main className="flex-1 mx-3 my-4">
            <Breadcrumb />
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
