// /components/NextBreadcrumb.tsx
"use client";

import React, { ReactNode } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
  titleBlog?: string;
};

const NextBreadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
  titleBlog,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const renderTitle = (path: string) => {
    switch (path) {
      case "":
        return "Trang chủ";
      case "blogs":
        return "Tất cả bài viết";
      case "about":
        return "Về tôi";
      case "projects":
        return "Các dự án tôi làm";
    }
  };
  return (
    <div>
      <ul className={"flex items-center justify-center bg-white"}>
        <li className={"mx-2 italic text-[14px]"}>
          <Link href={"/"} className="underline ">
            {homeElement}
          </Link>
        </li>
        {pathNames.length > 0 && separator}

        {pathNames.slice(0, 1).map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href
              ? `${"mx-2 italic text-[14px]"} ${activeClasses}`
              : "mx-2 italic text-[14px]";
          let itemLink = renderTitle(link);
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>

              {pathNames.length !== index + 1 && separator}
              {
                <li className={itemClasses}>
                  <Link href="">{titleBlog}</Link>
                </li>
              }
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default NextBreadcrumb;
