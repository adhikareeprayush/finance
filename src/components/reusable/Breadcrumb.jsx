import { useLocation } from "react-router-dom";
import { useSidebar } from "../../providers/SidebarProvider";
const Breadcrumb = () => {
  const { isCollapsed } = useSidebar();
  let location = useLocation();

  // Logic to generate breadcrumb items based on the current location
  // This is a placeholder and should be replaced with actual logic
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div
      className={`items-center gap-2 text-base text-dark dark:text-neutral-400 mb-4 ${
        isCollapsed ? "flex" : "hidden"
      }`}
    >
      {pathnames.length > 0 ? (
        <span className="text-neutral-400 capitalize">
          {pathnames.join(" > ")}
        </span>
      ) : (
        <span className="text-neutral-400">/ Home</span>
      )}
    </div>
  );
};

export default Breadcrumb;
