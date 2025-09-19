import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Nav from "../components/nav/Nav";
import { SidebarProvider } from "../providers/SidebarProvider";
import Breadcrumb from "../components/reusable/Breadcrumb";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen max-h-screen h-screen flex flex-col  dark:bg-[#212121]">
        <Nav />
        <div className="flex w-full flex-1">
          <Sidebar />
          <main className="flex-1 mx-3 my-4 overflow-y-auto max-h-full">
            <Breadcrumb />
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
