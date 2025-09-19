import { ICONS } from "../../assets/Assets";
import { useTheme } from "../../providers/ThemeProvider";
import { IoMoon, IoSunny } from "react-icons/io5";
import Dropdown from "../resuable/Dropdown";
import { useState } from "react";

const Nav = () => {
  const { theme, toggleTheme } = useTheme();
  const [profileExpand, setProfileExpand] = useState(false);
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
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="bg-neutral-100 dark:bg-neutral-950 shadow-xs border-[1px] border-neutral-100 dark:border-neutral-800 rounded-md px-4 py-1.5 focus:border-0 focus:outline-none text-neutral-600 dark:text-neutral-300 placeholder:text-neutral-500 text-base"
          />
        </div>
        <button onClick={toggleTheme} className="px-3 py-1 rounded-md text-2xl">
          {theme === "light" ? <IoMoon /> : <IoSunny />}
        </button>
        <div className="relative flex items-center justify-center p-[1px] w-[42px] h-[42px] rounded-full bg-neutral-400 dark:border-neutral-800">
          <button
            onClick={() => {
              setProfileExpand((prev) => !prev);
            }}
          >
            <img
              className="w-full rounded-full object-cover"
              src="https://media.licdn.com/dms/image/v2/D4D03AQHZbAwM7Jmx2w/profile-displayphoto-crop_800_800/B4DZeYiIK3H4AI-/0/1750610773248?e=1761177600&v=beta&t=l15P5JMdzro1ljxsGuY4ClXT24KN8uM1j48MieivhdM"
              alt=""
            />
          </button>
          {profileExpand && (
            <Dropdown
              topMenu={
                <div className="flex items-center gap-2 cursor-pointer overflow-hidden border-b-[1px] border-neutral-600 py-2">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHZbAwM7Jmx2w/profile-displayphoto-crop_800_800/B4DZeYiIK3H4AI-/0/1750610773248?e=1761177600&v=beta&t=l15P5JMdzro1ljxsGuY4ClXT24KN8uM1j48MieivhdM"
                    alt=""
                    className="size-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-dark dark:text-white">
                      Prayush Adhikari
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      View Profile
                    </span>
                  </div>
                </div>
              }
              expand={profileExpand}
              menus={[
                { label: "My Profile" },
                { label: "Email Support" },
                { label: "Terms and Use" },
              ]}
              position={"top-[60px] md:right-0 right-[-200px] lg:right-0"}
              signOut
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
