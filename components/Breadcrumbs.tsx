"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Breadcrumbs = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex items-center"></div>
    </div>
  );
};

export default Breadcrumbs;
