import { useState, useEffect } from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { useSidebar } from "../../providers/SidebarProvider";
import { Link } from "react-router-dom";
import { MdFormatListBulleted, MdInsights, MdMoney } from "react-icons/md";
import { CgTranscript } from "react-icons/cg";
import { FaCalculator } from "react-icons/fa";
import { BsPieChartFill } from "react-icons/bs";

const navMenus = [
  {
    id: 1,
    label: "Insights",
    icon: <MdInsights />,
    url: "insight",
  },
  {
    id: 2,
    label: "Watchlists",
    icon: <MdFormatListBulleted />,
    url: "watchlists",
  },
  {
    id: 3,
    label: "Earnings",
    icon: <MdMoney />,
    url: "earnings",
  },
  {
    id: 4,
    label: "Transcripts",
    icon: <CgTranscript />,
    url: "transcripts",
  },
  {
    id: 5,
    label: "DCF Calculator",
    icon: <FaCalculator />,
    url: "dcf-calculator",
  },
  {
    id: 6,
    label: "Portfolios",
    icon: <BsPieChartFill />,
    url: "portfolios",
  },
];

const Sidebar = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeMenu, setActiveMenu] = useState(1);

  useEffect(() => {
    if (isCollapsed !== undefined) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  }, [isCollapsed]);

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div
      className={`overflow-hidden flex flex-col justify-between py-5 px-4 bg-white dark:bg-[#181818] transition-all duration-300 shadow-lg m-2 border-1 border-dark/10 rounded-2xl text-base`}
      style={{
        width: isCollapsed ? "80px" : "300px",
        filter: isAnimating ? "blur(4px)" : "blur(0px)",
        transition: "width 0.3s, filter 0.3s",
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      <ul className="flex flex-col gap-2 w-full flex-1">
        {navMenus.map((menu) => (
          <li
            key={menu.id}
            className={`w-full gap-3  py-2.5 border-[1px] border-neutral-200 dark:border-neutral-800 dark:text-neutral-100 rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors
            ${!isCollapsed ? "px-5" : "justify-center"} flex items-center
            ${
              activeMenu === menu.id ? "bg-neutral-200 dark:bg-neutral-700" : ""
            }
            `}
          >
            <Link
              to={menu.url}
              onClick={() => setActiveMenu(menu.id)}
              className={`flex items-center gap-2 w-full text-base justify-center
              ${!isCollapsed ? "justify-start" : "justify-center"}
                `}
            >
              {menu.icon}
              {!isCollapsed && <span>{menu.label}</span>}
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleSidebar}
        className={`text-neutral-400 py-2.5 w-full flex items-center gap-2 bg-neutral-100 dark:bg-neutral-950 rounded-2xl ${
          isCollapsed ? "justify-center" : "px-5"
        }`}
      >
        {isCollapsed ? <GoSidebarCollapse /> : <GoSidebarExpand />}
        {!isCollapsed && (
          <span className="w-fit whitespace-nowrap">Toggle Sidebar</span>
        )}
      </button>
    </div>
  );
};

export default Sidebar;
