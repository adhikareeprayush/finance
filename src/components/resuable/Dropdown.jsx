import { Link } from "react-router-dom";
import { GoSignOut } from "react-icons/go";

const Dropdown = ({ menus, topMenu = false, position, signOut, expand }) => {
  return (
    <div
      className={`absolute w-[250px] px-3 py-2 ${position} rounded-lg dark:bg-neutral-800 shadow-lg border-neutral-200 border dark:border-neutral-700 bg-white dark:text-white text-base text-neutral-600 flex flex-col gap-1
        ${expand ? "flex" : "hidden"}
      `}
    >
      {topMenu}
      <ul className="flex flex-col w-full gap-2">
        {menus.map((menu, index) => (
          <li
            key={index}
            className="w-full px-2 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md"
          >
            <Link>{menu.label}</Link>
          </li>
        ))}
      </ul>
      {signOut && (
        <div className="py-1 border-t-[1px] border-neutral-600">
          <button
            className={`text-neutral-400 pl-2 py-1.5 w-full flex items-center gap-2 bg-neutral-100 dark:bg-neutral-950 rounded-lg`}
          >
            <GoSignOut /> Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
