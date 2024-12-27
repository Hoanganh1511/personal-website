"use client";
import { IconMenu2 } from "@tabler/icons-react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import React from "react";
const navs = [
  {
    text: "Trang chủ",
    href: "/",
  },
  {
    text: "Blogs",
    href: "/blogs",
  },
  {
    text: "Projects",
    href: "/projects",
  },

  {
    text: "About",
    href: "/about",
  },
];
const MobileNavigation = () => {
  const pathname = usePathname();
  return (
    <nav className="z-[10] fixed  bottom-[20px] w-full px-2">
      <div className="flex gap-x-2 items-center  px-[6px] py-[6px] bg-white border-primary/60 border-[1px] rounded-[12px]">
        <div className="w-full overflow-scroll  scrollbar-hide p-0 flex items-center gap-x-2 ">
          {navs.map((nav, idx) => {
            return (
              <Link
                key={idx}
                href={nav.href}
                className={` ${
                  nav.href === pathname ? " bg-primary/90 text-white" : ""
                } text-nowrap block px-[10px] py-[6px] text-[13.5px] h-full   rounded-[6px]`}
              >
                {nav.text}
              </Link>
            );
          })}
        </div>
        <button className="ml-3 px-[8px]">
          <IconMenu2 className="size-[23px]" />
        </button>
      </div>
    </nav>
  );
};

export default MobileNavigation;
