import { ICONS } from "../../assets/Assets";
import { useTheme } from "../../providers/ThemeProvider";
import { IoMoon, IoSunny } from "react-icons/io5";
import Dropdown from "../reusable/Dropdown";
import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "../reusable/SearchInput";
import { useAuth } from "../../providers/AuthProvider";

const Nav = () => {
  const location = useLocation();
  const { user } = useAuth();
  const avatarUrl = useMemo(
    () =>
      `https://picsum.photos/seed/${encodeURIComponent(user?.email || "ledgerlens")}/128/128`,
    [user?.email]
  );
  const displayName = user?.name || "Prayush Adhikari";
  const { theme, toggleTheme } = useTheme();
  const [profileExpand, setProfileExpand] = useState(false);
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

  useEffect(() => {
    setProfileExpand(false);
  }, [location.pathname]);

  return (
    <div className="relative z-50 w-full flex justify-between py-4 px-6 border-b-[1px] border-[#eaeaea] dark:border-neutral-800 dark:bg-[#181818] dark:text-neutral-300 shrink-0 isolate">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img
            src={ICONS.logo}
            alt="LedgerLens logo"
            className="size-11 shrink-0 rounded-xl object-contain shadow-md shadow-black/10 ring-1 ring-black/10 dark:shadow-black/40 dark:ring-white/10"
          />
          <h3 className="text-xl font-semibold text-dark dark:text-white">
            LedgerLens
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
          className="relative z-[60] flex items-center justify-center p-[1px] w-[42px] h-[42px] rounded-full bg-neutral-400 dark:border-neutral-800"
          ref={dropdownRef}
        >
          <button
            onClick={() => {
              setProfileExpand((prev) => !prev);
            }}
          >
            <img
              className="w-full rounded-full object-cover"
              src={avatarUrl}
              alt=""
            />
          </button>
          {profileExpand && (
            <Dropdown
              topMenu={
                <Link
                  to="/dashboard/profile"
                  className="flex items-center gap-2 cursor-pointer overflow-hidden border-b-[1px] border-neutral-600 py-2 no-underline text-inherit rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700/50 -mx-1 px-1 transition-colors"
                >
                  <img
                    src={avatarUrl}
                    alt=""
                    className="size-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-dark dark:text-white">
                      {displayName}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      View profile
                    </span>
                  </div>
                </Link>
              }
              expand={profileExpand}
              menus={[
                { label: "My Profile", to: "/dashboard/profile" },
                { label: "Help & support", to: "/dashboard/support" },
                { label: "Terms of use", to: "/dashboard/terms" },
              ]}
              position={"top-[52px] right-0"}
              signOut
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
