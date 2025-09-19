import { ICONS } from "../../assets/Assets";
import { useTheme } from "../../providers/ThemeProvider";
import { IoMoon, IoSunny } from "react-icons/io5";

const Nav = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="w-full flex justify-between py-4 px-6 border-b-[1px] border-[#eaeaea] dark:border-neutral-800 dark:bg-[#181818] dark:text-neutral-300">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img src={ICONS.logo} alt="" className="size-12 object-contain" />
          <h3 className="text-xl font-semibold text-dark dark:text-white">
            Fundo
          </h3>
        </div>
      </div>
      <button onClick={toggleTheme} className="px-3 py-1 rounded-md text-2xl">
        {theme === "light" ? <IoMoon /> : <IoSunny />}
      </button>
    </div>
  );
};

export default Nav;
