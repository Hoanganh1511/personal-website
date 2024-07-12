import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sticky top-0 h-screen w-[270px] border-r border-black">
      {/* <div className="mt-[80px]">
        <h1 className="text-xl font-bold uppercase">What I Learned</h1>
        <ul className="mt-8 flex flex-col gap-5">
          <li className="">
            <Link
              href="#react"
              className="font-semibold text-[15px] hover:text-blue-500 duration-150"
            >
              React
            </Link>
          </li>
          <li>
            <Link
              href="#next"
              className="font-semibold text-[15px] hover:text-blue-500 duration-150"
            >
              Next
            </Link>
          </li>
          <li>
            <Link
              href="#next"
              className="font-semibold text-[15px] hover:text-blue-500 duration-150"
            >
              State Management
            </Link>
          </li>
          <li>
            <Link
              href="#cwv"
              className="font-semibold text-[15px] hover:text-blue-500 duration-150"
            >
              Core Web Vitals
            </Link>
          </li>
          <li>
            <Link
              href="#seo"
              className="font-semibold text-[15px] hover:text-blue-500 duration-150"
            >
              SEO
            </Link>
          </li>
          <li>
            <Link
              href="#pattern"
              className="font-semibold text-[15px] hover:text-blue-500 duration-150"
            >
              Patterns
            </Link>
          </li>
          <li>
            <Link
              href="#pattern"
              className="font-semibold text-[15px] hover:text-blue-500 duration-150"
            >
              Testing
            </Link>
          </li>
          <li>
            <Link
              href="#styles"
              className="font-semibold text-[15px] hover:text-blue-500 duration-150"
            >
              Styles
            </Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Sidebar;
