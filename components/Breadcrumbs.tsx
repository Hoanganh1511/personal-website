"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Breadcrumbs = () => {
  const pathname = usePathname();
  const BreadcrumbsArray = pathname.split("/");
  return (
    <div>
      <ul className="flex items-center">
        {BreadcrumbsArray.map((item, idx) => {
          const href = "/" + BreadcrumbsArray.slice(0, idx + 1).join("/");
          return (
            <>
              <li key={idx}>
                {BreadcrumbsArray.length - 1 === idx ? (
                  <p className={`text-white/65  capitalize`}>{item}</p>
                ) : (
                  <Link
                    href={href}
                    className={`text-white/65 hover:text-white/85 hover:underline capitalize`}
                  >
                    {" "}
                    {item === "" ? "Home" : item}
                  </Link>
                )}
              </li>
              <li key={idx} className="">
                {idx < BreadcrumbsArray.length - 1 && (
                  <MdKeyboardDoubleArrowRight className="mx-1" />
                )}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
