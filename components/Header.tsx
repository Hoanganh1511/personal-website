"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "./icons/SearchIcon";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import appSlice from "@/app/appSlice";
import { RootState } from "@/redux/configure-store";
import CloseIcon from "./icons/CloseIcon";
import { categoryData } from "@/data";

import { RiMoonFoggyFill, RiSunFoggyFill } from "react-icons/ri";
import { Link } from "next-view-transitions";
import { IconMenuDeep, IconMoon, IconSearch, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
const navs = [
  {
    text: "Trang chủ",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Blogs",
    href: "/blogs",
  },
  {
    text: "Projects",
    href: "/projects",
  },
];
const Header = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { setShowSearchDrawer, setDarkTheme } = appSlice.actions;
  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { isShowSearchDrawer, isDarkTheme } = useAppSelector(
    (state: RootState) => state.app
  );
  const toggleDrawer = () => dispatch(setShowSearchDrawer(!isShowSearchDrawer));
  return (
    <nav className="sticky top-0 z-10 w-full bg-white dark:bg-black max-w-[48rem] xl:max-w-[1400px] mx-auto px-[1rem] ">
      <div className=" rounded-b-[28px]">
        <div className="py-[26px] flex items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/ " className="text-[32px] dark:text-white font-bold">
              Tuấn Anh&apos;s Corner
            </Link>
            {/* <p className="text-[18px]  font-dancing-script">Things about me</p> */}
          </div>
          <div className="flex-1 hidden lg:flex ml-10 items-center gap-x-3">
            {navs.map((nav, idx) => (
              <Link
                key={idx}
                prefetch={true}
                href={nav.href}
                className={`px-4 xl:text-[18px] font-mali font-medium dark:text-white hover:text-primary ${
                  (pathname === "/" && nav.href === "/") ||
                  (nav.href === pathname && pathname !== "/")
                    ? "  "
                    : ""
                }`}
              >
                {nav.text}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <AnimatePresence>
              <motion.button
                onClick={() => dispatch(setDarkTheme(!isDarkTheme))}
                key="theme-toggle"
              >
                <motion.div
                  key={isDarkTheme ? "dark" : "light"} // key based on theme state
                  className={`size-[46px] flex items-center justify-center ${isDarkTheme ? "bg-yellow-600" : "bg-blue-600"} rounded-md`}
                >
                  {isDarkTheme ? (
                    <motion.div
                      key="moon" // Ensure a stable key for this element
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <RiMoonFoggyFill className="text-white" size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun" // Ensure a stable key for this element
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <RiSunFoggyFill className="text-white" size={24} />
                    </motion.div>
                  )}
                </motion.div>
              </motion.button>
            </AnimatePresence>
          </div>
          {/* <div className="">
            {isShowSearchDrawer ? (
              <IconX
                className="size-[30px] stroke-black-primary"
                onClick={toggleDrawer}
              />
            ) : (
              <IconMenuDeep
                className="size-[30px] stroke-black-primary"
                onClick={toggleDrawer}
              />
            )}
          </div> */}
        </div>
        {/* {isShowSearchDrawer && (
          <ul className="flex flex-col items-center gap-y-[0.5rem]">
            <li className="">
              <Link
                onClick={toggleDrawer}
                href="/projects"
                className="block p-[0.75rem_1rem]"
              >
                Projects
              </Link>
            </li>
            <li className="">
              <Link
                onClick={toggleDrawer}
                href="/about"
                className="block p-[0.75rem_1rem]"
              >
                About
              </Link>
            </li>
            <li className="">
              <div className="flex py-[12px] gap-x-[38px] items-center justify-center">
                <button className="size-[40px] flex items-center justify-center">
                  {" "}
                  <IconSearch className="size-[26px]" />
                </button>
                <button className="size-[40px] flex items-center justify-center">
                  <IconMoon className="size-[26px]" />
                </button>
              </div>
            </li>
          </ul>
        )} */}
      </div>
    </nav>
  );
};

export default Header;
