import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Nav from "../components/nav/Nav";
import { SidebarProvider } from "../providers/SidebarProvider";
import Breadcrumb from "../components/reusable/Breadcrumb";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex flex-col h-screen overflow-hidden dark:bg-[#212121]">
        {/* Top nav — z-50 so profile dropdown stacks above main/sidebar */}
        <Nav />

        {/* Sidebar + Main Content — stays below nav overlay */}
        <div className="relative z-0 flex flex-1 min-h-0 overflow-hidden">
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
