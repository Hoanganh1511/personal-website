"use client";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { usePathname } from "next/navigation";
// const categories: ICategory[] = await sanityFetch({
//   query: groq`*[_type=="category"] {
//       ...,

//     } | order(_createdAt desc)`,
//   revalidate: 60,
// });
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
    <div className="bg-gray-800 p-[20px] rounded-[8px] ">
      <Breadcrumbs />
      <h1 className="mt-2 mb-3 text-[26px] font-semibold text-[#d1d5db]">
        {renderPageTitle()}
      </h1>
      <p className="mb-5 italic text-white/70 text-[16px]">
        All the articles I&apos;ve posted.
      </p>
      {children}
    </div>
  );
};

export default Layout;
