"use client";
import Link from "next/link";
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
import { IoCodeWorkingSharp } from "react-icons/io5";
const navs = [
  {
    text: "Projects",
    href: "/projects",
  },
  {
    text: "Tech",
    href: "/tech",
  },
  {
    text: "About",
    href: "/blog",
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
    <nav className="z-10 w-full backdrop-blur-2xl">
      <div className="max-w-[48rem] mx-auto h-[100px] flex items-center justify-between border-b-[1px] border-black/20">
        <Link href="/" className="text-[34px] font-bold font-dancing-script">
          Hoang Tuan Anh
        </Link>
        <div className="ml-10 flex items-center gap-x-3">
          {navs.map((nav, idx) => (
            <Link
              key={idx}
              href={nav.href}
              className={`px-4 font-plex-mono font-semibold hover:text-primary decoration-wavy hover:underline`}
            >
              {nav.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
