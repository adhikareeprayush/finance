import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../../providers/SidebarProvider";

const Breadcrumb = () => {
  const { isCollapsed } = useSidebar();
  const location = useLocation();

  // Remove "dashboard" from the pathnames
  const pathnames = location.pathname
    .split("/")
    .filter((x) => x && x !== "dashboard");

  return (
    <div
      className={`items-center gap-2 text-base text-dark dark:text-neutral-400 mb-4 ${
        isCollapsed ? "flex" : "hidden"
      }`}
    >
      {pathnames.map((name, index) => {
        const routeTo = `/dashboard/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span key={routeTo} className="flex items-center gap-1">
            {/* Only show ">" if not the first item */}
            {index !== 0 && <span className="text-neutral-400"> &gt; </span>}

            {isLast ? (
              <span
                className={`capitalize text-neutral-400  ${
                  name === "dcf-calculator" ? "uppercase" : ""
                }`}
              >
                {name}
              </span>
            ) : (
              <Link to={routeTo} className={`capitalize hover:underline`}>
                {name}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
