"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IconChevronsRight } from "@tabler/icons-react";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const lists = pathname.split("/"); // Remove empty strings, handle trailing slashes

  const renderCrumb = (route: string) => {
    switch (route) {
      case "blogs":
        return "Blogs";
      case "projects":
        return "Projects";
      default:
        return route.charAt(0).toUpperCase() + route.slice(1); // Capitalize the first letter
    }
  };
  const hasPage = lists.includes("page");
  const isSinglePage = lists.length === 2;

  return (
    <div>
      <div className="flex items-center">
        {/* <Link href="/" className="text-black-primary/80 hover:underline">
          Home
        </Link>
        <IconChevronsRight className="mt-[2px] mx-1 size-[16px] stroke-black-primary/70" /> */}

        {lists.length > 0 &&
          lists.map((item, id) => {
            const isLastItem = lists.length - 1 === id; // Check if it's the last breadcrumb item
            return (
              <React.Fragment key={id}>
                {
                  <>
                    {id <= 1 && (
                      <div
                        className={`text-black-primary/80 ${
                          isLastItem ? "pointer-events-none" : ""
                        }`}
                      >
                        {renderCrumb(item)}
                      </div>
                    )}
                    {!lists.includes("page") &&
                      lists.length === 2 &&
                      isLastItem && (
                        <div className="ml-1 text-black-primary/80">
                          (Page 1)
                        </div>
                      )}
                    {lists.includes("page") &&
                      lists.length > 2 &&
                      isLastItem && (
                        <div className="ml-1 text-black-primary/80">
                          (Page {Number(item)})
                        </div>
                      )}
                  </>
                }
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default Breadcrumbs;
