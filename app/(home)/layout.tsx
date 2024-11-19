"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const renderPageTitle = () => {
    switch (pathname) {
      case "/":
        return "About";
      case "/blog":
        return "Posts";
      default:
        return null;
    }
  };
  return (
    <div>
      <div className="bg-gray-800 p-[20px] rounded-[8px] ">
        <h1 className="mb-4 text-[26px] font-semibold text-[#d1d5db]">
          {renderPageTitle()}
        </h1>
        <>{children}</>
      </div>
    </div>
  );
};

export default Layout;
