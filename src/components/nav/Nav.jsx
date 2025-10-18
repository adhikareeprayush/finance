import { ICONS } from "../../assets/Assets";
import { useTheme } from "../../providers/ThemeProvider";
import { IoMoon, IoSunny } from "react-icons/io5";
import Dropdown from "../reusable/Dropdown";
import { useState, useEffect, useRef } from "react";
import SearchModal from "../reusable/SearchModal";
import SearchInput from "../reusable/SearchInput";

const Nav = () => {
  const { theme, toggleTheme } = useTheme();
  const [profileExpand, setProfileExpand] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const dropdownRef = useRef(null);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileExpand(false);
      }
    };

    if (profileExpand) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileExpand]);
  return (
    <div className="w-full flex justify-between py-4 px-6 border-b-[1px] border-[#eaeaea] dark:border-neutral-800 dark:bg-[#181818] dark:text-neutral-300">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img src={ICONS.logo} alt="" className="size-12 object-contain" />
          <h3 className="text-xl font-semibold text-dark dark:text-white">
            Finance
          </h3>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <SearchInput />
        </div>
        <button onClick={toggleTheme} className="px-3 py-1 rounded-md text-2xl">
          {theme === "light" ? <IoMoon /> : <IoSunny />}
        </button>
        <div
          className="relative flex items-center justify-center p-[1px] w-[42px] h-[42px] rounded-full bg-neutral-400 dark:border-neutral-800"
          ref={dropdownRef}
        >
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
