import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Nav from "../components/nav/Nav";
import { SidebarProvider } from "../providers/SidebarProvider";
import Breadcrumb from "../components/reusable/Breadcrumb";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex flex-col h-screen overflow-hidden dark:bg-[#212121]">
        {/* Top nav */}
        <Nav />

        {/* Sidebar + Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content area */}
          <main className="flex-1 flex flex-col mx-3 my-4 overflow-hidden">
            <Breadcrumb />
            <div className="flex-1 overflow-y-auto">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
