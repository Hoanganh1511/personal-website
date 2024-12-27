import { getArticlesByCategory } from "@/actions/get-posts";
import React from "react";
import { MdCalendarMonth } from "react-icons/md";
import { formatDateTime } from "@/utils/helper";
import Pagination from "./_components/Pagination";
import { Link } from "next-view-transitions";
import ListLayout from "@/components/layout/ListLayout";
import { SITE } from "@/config";
import TitlePage from "./_components/TitlePage";
import Breadcrumbs from "@/components/Breadcrumbs";
import NextBreadcrumb from "@/components/NextBreadcrumb";
import { IconChevronRight } from "@tabler/icons-react";

const POSTS_PER_PAGE = 3;
const BlogPage = async () => {
  const pageNumber = 1;
  const resArticlesNext = await getArticlesByCategory({
    category: "next-js",
    offset: (Number(pageNumber) - 1) * POSTS_PER_PAGE,
    limit: 3,
  });

  const posts = resArticlesNext.data;
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(resArticlesNext.total / POSTS_PER_PAGE),
  };

  if (!posts) return;
  return (
    <div className="max-w-[48rem] mx-auto px-[1rem]">
      <section className="py-5">
        <p className="text-center mb-2 font-bold">Bạn đang xem</p>
        <NextBreadcrumb
          homeElement={"Trang chủ"}
          separator={
            <span>
              <IconChevronRight className="mt-[2px] size-[16px]" />
            </span>
          }
          activeClasses=""
          containerClasses="flex items-center justify-center bg-white"
          listClasses=" mx-2 italic text-[14px] "
          capitalizeLinks
        />
      </section>
      <Breadcrumbs />
      <TitlePage title="Posts" description={"All the articles I've posted"} />
      <ListLayout title="" posts={posts} pagination={pagination} />
    </div>
  );
};

export default BlogPage;
