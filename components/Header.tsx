"use client";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
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
    text: "Blog",
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
      <div className="max-w-[1280px] mx-auto h-[100px] flex items-center justify-start border-b-[1px] border-black/20">
        <Link href="/" className="text-2xl font-bold">
          fullstack.dev
        </Link>
        <div className="ml-10 flex items-center gap-x-3">
          {navs.map((nav, idx) => (
            <Link
              key={idx}
              href={nav.href}
              className="px-4 font-semibold hover:underline"
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
