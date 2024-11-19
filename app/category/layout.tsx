import { sanityFetch } from "@/actions/sanity-fetch";
import React from "react";
import { unstable_cache } from "next/cache";
import Link from "next/link";
import { ICategory } from "@/types/apiTypes";
import { groq } from "next-sanity";
import Sidebar from "@/components/layout/Sidebar";
const layout = async ({ children }: { children: React.ReactNode }) => {
  const categories: ICategory[] = await sanityFetch({
    query: groq`*[_type=="category"] {
        ...,
       
      } | order(_createdAt desc)`,
    revalidate: 60,
  });
  if (!categories) return;
  return (
    <div className="max-w-container-xl mx-auto py-12 grid grid-cols-12 gap-x-2">
      <div className="col-span-3">
        <Sidebar categories={categories} />
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default layout;
