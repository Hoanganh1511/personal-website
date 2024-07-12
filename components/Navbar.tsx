"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDebounceValue, useOnClickOutside } from "usehooks-ts";

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

const Navbar = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { setShowSearchDrawer } = appSlice.actions;
  const isShowSearchDrawer = useAppSelector(
    (state: RootState) => state.app.isShowSearchDrawer
  );
  const toggleDrawer = () => dispatch(setShowSearchDrawer(!isShowSearchDrawer));
  return (
    <nav className="z-10 w-full mx-auto  sticky top-0 bg-white shadow-md">
      <div className="h-[80px]  lg:max-w-none xl:max-w-container-lg mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-primary text-[24px] font-extrabold">
            Neil dumpling
          </Link>
          <ul className="ml-10 flex gap-8 items-center h-auto ">
            <li>
              <Link
                href="/about"
                className={`relative text-primary text-[15px] font-normal  header-link ${
                  pathname === "/about" ? "  active" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects?company=vtc"
                className={`relative text-primary text-[15px] font-normal   header-link ${
                  pathname === "/projects" ? "active" : ""
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/what-i-learned"
                className={`relative text-primary text-[15px] font-normal   header-link ${
                  pathname === "/what-i-learned" ? " active" : ""
                }`}
              >
                What I Learned
              </Link>
            </li>
            <li>
              <Link
                href="/uses"
                className={`relative  text-primary text-[15px] font-normal  header-link ${
                  pathname === "/blog" ? "active" : ""
                }`}
              >
                Uses
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <button className="group" onClick={toggleDrawer}>
            <SearchIcon className="hover:opacity-50" />
          </button>
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
      className={`fixed  ${isShowSearchDrawer ? "top-0" : "-top-[600px]"} left-0 w-full h-auto min-h-[500px] duration-[400ms] bg-white shadow-2xl`}
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
            <SearchIcon className="hover:opacity-50" />
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
          <ul className="flex flex-col gap-[8px]">
            <li>
              <Link target="_blank" href="https://www.facebook.com/jm.1511/">
                <FacebookIcon className="hover:fill-black/60" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.instagram.com/hoanganh.ui/"
                className="hover:fill-black/60"
              >
                <InstagramIcon />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/hoanganh1511/"
                className="hover:fill-black/60"
              >
                <LinkedInIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
