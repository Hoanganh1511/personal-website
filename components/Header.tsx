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
const Header = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { setShowSearchDrawer } = appSlice.actions;
  const isShowSearchDrawer = useAppSelector(
    (state: RootState) => state.app.isShowSearchDrawer
  );
  const toggleDrawer = () => dispatch(setShowSearchDrawer(!isShowSearchDrawer));
  // backdrop-blur-[20px]
  return (
    <nav className="z-10 w-full mx-auto  sticky top-0 backdrop-blur-2xl ">
      <div className="max-w-container-md py-6 mx-auto flex justify-center items-center">
        {/* <div className="w-[20%]">
          <Link href="/" className="text-white/80 text-[24px] font-extrabold">
            Tuấn Anh
          </Link>
        </div> */}
        <ul className="w-fit flex gap-4 items-center justify-center  border-[1px] border-white/30 rounded-[8px] py-[6px] px-[6px]">
          <li>
            <Link
              href="/"
              className={`${pathname === "/" ? "bg-[rgba(149,149,149,0.3)]" : "hover:bg-[#d6c0b31a]"} flex items-center justify-center  size-[40px] rounded-[4px]  duration-200 relative text-white/80 text-[15px] font-normal  `}
            >
              <TbHomeFilled
                className={`text-[20px] ${pathname === "/" ? " text-white" : ""}`}
              />
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`${pathname === "/projects" ? "bg-[#D6C0B3]" : "hover:bg-[#d6c0b31a]"} flex items-center justify-center  size-[40px] rounded-[4px]  duration-200 relative text-white/80 text-[15px] font-normal `}
            >
              <IoCodeWorkingSharp
                className={`text-[20px] ${pathname === "/projects" ? " text-black/65" : ""}`}
              />
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`${pathname === "/blog" ? "bg-[#D6C0B3]" : "hover:bg-[#d6c0b31a]"} flex items-center justify-center  size-[40px] rounded-[4px]  duration-200 relative text-white/80 text-[15px] font-normal `}
            >
              <MdArticle
                className={`text-[20px] ${pathname === "/blog" ? " text-black/65" : ""}`}
              />
            </Link>
          </li>
          <li>
            <button
              onClick={() =>
                sendGTMEvent({ event: "buttonClicked", value: "xyz" })
              }
            >
              Test Click
            </button>
          </li>
        </ul>
      </div>
      <SearchDrawer />
    </nav>
  );
};

export default Header;

const SearchDrawer = () => {
  const dispatch = useAppDispatch();
  const { setShowSearchDrawer } = appSlice.actions;
  const isShowSearchDrawer = useAppSelector(
    (state: RootState) => state.app.isShowSearchDrawer
  );
  const [query, setQuery] = useState("");
  const [debouncedValue] = useDebounceValue(query, 1000);
  const refDivSearch = useRef(null);
  useEffect(() => {}, [debouncedValue]);

  const handleClickOutside = () => {
    dispatch(setShowSearchDrawer(false));
  };
  useOnClickOutside(refDivSearch, handleClickOutside);
  const toggleSearchDrawer = () =>
    dispatch(setShowSearchDrawer(!isShowSearchDrawer));
  const clearQuery = () => setQuery("");
  return (
    <div
      ref={refDivSearch}
      className={`fixed  ${isShowSearchDrawer ? "top-0" : "-top-[600px]"} left-0 w-full h-auto min-h-[500px] duration-[400ms] bg-white`}
    >
      <button onClick={toggleSearchDrawer} className="absolute top-8 right-20">
        <CloseIcon />
      </button>
      <div className="max-w-[740px] mx-auto my-20">
        <div className="pb-3 border-b border-black/40 flex items-center">
          <div className="relative flex-1">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search blogs..."
              className="text-[36px] font-semibold pr-20 outline-none border-none"
            />
            {query && query.length > 0 && (
              <button
                onClick={clearQuery}
                className="text-[13px] uppercase absolute top-1/2 right-4 -translate-y-1/2 hover:text-black/40"
              >
                Clear
              </button>
            )}
          </div>
          <button
            onClick={() => {}}
            className="px-4 py-2 border-l border-black/40"
          >
            <FiSearch className="hover:opacity-50 text-white" />
          </button>
        </div>
        <div className="mt-12 flex justify-between">
          <div className="flex gap-12">
            {categoryData.map((item, idx) => (
              <div key={idx}>
                <h2 className="font-bold">{item.categoryTitle}</h2>
                <ul className="flex flex-col gap-[4px] mt-4">
                  {item.categoryChilds.map((childItem, childIdx) => (
                    <li key={childIdx}>
                      <Link
                        href={childItem.url}
                        className="text-[13.5px] hover:text-black/60"
                      >
                        {childItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
