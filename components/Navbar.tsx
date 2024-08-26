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
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
const Navbar = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { setShowSearchDrawer } = appSlice.actions;
  const isShowSearchDrawer = useAppSelector(
    (state: RootState) => state.app.isShowSearchDrawer
  );
  const toggleDrawer = () => dispatch(setShowSearchDrawer(!isShowSearchDrawer));
  // backdrop-blur-[20px]
  return (
    <nav className="z-10 w-full mx-auto  sticky top-0 bg-white border-b-[2px] border-black/40">
      <div className="h-[60px] max-w-full px-[20px] mx-auto flex justify-between items-center">
        <div className="w-[20%]">
          <Link href="/" className="text-primary text-[24px] font-extrabold">
            Tuấn Anh
          </Link>
        </div>
        <ul className="w-[400px] flex gap-8 items-center justify-between h-auto ">
          <li>
            <Link
              href="/"
              className={`relative text-primary text-[15px] font-normal  `}
            >
              <TbHomeFilled
                className={`text-[22px] ${
                  pathname === "/" ? "text-custom-blue" : "text-black"
                }`}
              />
            </Link>
          </li>
          <li>
            <Link
              href="github.com/hoanganh1511"
              target="_blank"
              className={`relative text-primary text-[15px] font-normal `}
            >
              <FiGithub className={`text-[20px]`} />
            </Link>
          </li>
          <li>
            <Link
              href="github.com/hoanganh1511"
              target="_blank"
              className={`relative text-primary text-[15px] font-normal `}
            >
              <FaLinkedinIn className={`text-[20px]`} />
            </Link>
          </li>
        </ul>
        <div className="w-[20%]">
          <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="group mx-auto w-[36px] h-[36px] bg-black/80 rounded-[4px] flex items-center justify-center"
            onClick={toggleDrawer}
          >
            <FiSearch className="text-white text-[22px]" />
          </motion.button>
        </div>
      </div>
      <SearchDrawer />
    </nav>
  );
};

export default Navbar;

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
