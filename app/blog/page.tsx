import { getArticlesByCategory } from "@/actions/get-posts";
import Link from "next/link";
import React from "react";
import { MdCalendarMonth } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { formatDateTime } from "@/utils/helper";
import Pagination from "./_components/Pagination";
// getArticlesByCategory({
//   category: "next-js",
//   limit: 3,
// }),
// getArticlesByCategory({
//   category: "javascript",
//   limit: 3,
// }),
const BlogPage = async ({
  searchParams: { page },
}: {
  searchParams: { page?: string };
}) => {
  const resArticlesReact = await getArticlesByCategory({
    category: "react",
    limit: Number(page) || 3,
  });

  const articlesReact = resArticlesReact.data;
  if (!articlesReact) return;
  return (
    <div className="">
      <div className="flex flex-col gap-y-[16px]">
        {articlesReact.map((article, idx) => (
          <div
            key={idx}
            className="p-[16px] border-[1px] border-white/20 rounded-[8px]"
          >
            <Link
              href=""
              className="text-[#93c5fd] text-[16px] font-semibold hover:underline"
            >
              <p>{article.title}</p>
            </Link>
            <div className="flex items-center gap-x-[8px]">
              <MdCalendarMonth className="size-[18px]" />
              <p className="mt-[6px] text-[14px] italic text-white/70">
                {formatDateTime(article._createdAt)}
              </p>
            </div>
            <p className="mt-[8px] text-[16px] text-white/70 line-clamp-3">
              {article.sapo}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-6">
        <Pagination />
      </div>
    </div>
  );
};

export default BlogPage;
