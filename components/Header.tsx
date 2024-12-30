"use client";
import { usePathname } from "next/navigation";
import { useDebounceValue, useOnClickOutside } from "usehooks-ts";
import { TbHomeFilled } from "react-icons/tb";
import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "./icons/SearchIcon";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import appSlice from "@/app/appSlice";
import { RootState } from "@/redux/configure-store";
import CloseIcon from "./icons/CloseIcon";
import { categoryData } from "@/data";

import { FiSearch } from "react-icons/fi";
import { MdArticle } from "react-icons/md";
import { Link } from "next-view-transitions";
import { IconMenuDeep, IconMoon, IconSearch, IconX } from "@tabler/icons-react";
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
  const { setShowSearchDrawer } = appSlice.actions;
  const isShowSearchDrawer = useAppSelector(
    (state: RootState) => state.app.isShowSearchDrawer
  );
  const toggleDrawer = () => dispatch(setShowSearchDrawer(!isShowSearchDrawer));
  return (
    <nav className="z-10 w-full backdrop-blur-2xl max-w-[48rem] xl:max-w-[1400px] mx-auto px-[1rem] ">
      <div className="border-b-[1px] border-black-primary/30 md:border-transparent">
        <div className="py-[16px] flex items-center justify-between">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <Link
              href="/ "
              className="text-[32px] font-bold font-dancing-script"
            >
              Tuấn Anh&apos;s Corner
            </Link>
            <p className="text-[16px] -font-dancing-script">Things about me</p>
          </div>
          <div className="hidden lg:flex ml-10 items-center gap-x-3">
            {navs.map((nav, idx) => (
              <Link
                key={idx}
                prefetch={true}
                href={nav.href}
                className={`px-4 xl:text-[18px] font-plex-mono font-medium hover:text-primary ${
                  (pathname === "/" && nav.href === "/") ||
                  (nav.href === pathname && pathname !== "/")
                    ? "text-primary  "
                    : ""
                }`}
              >
                {nav.text}
              </Link>
            ))}
          </div>
          <div className="hidden">
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
          </div>
        </div>
        {isShowSearchDrawer && (
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
        )}
      </div>
    </nav>
  );
};

export default Header;
