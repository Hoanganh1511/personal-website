import { getArticlesByCategory } from "@/actions/get-posts";
import Breadcrumbs from "@/components/Breadcrumbs";
import ListLayout from "@/components/layout/ListLayout";
import NextBreadcrumb from "@/components/NextBreadcrumb";
import { IconChevronRight } from "@tabler/icons-react";
import React from "react";
const POSTS_PER_PAGE = 3;
export const generateStaticParams = async () => {
  const resNextPosts = await getArticlesByCategory({
    category: "next-js",
    offset: 0,
    limit: 3,
  });
  const totalPages = resNextPosts.total;
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
  return paths;
};
export default async function Page(props: {
  params: Promise<{ page: string }>;
}) {
  const params = await props.params;
  const pageNumber = parseInt(params.page as string);
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
    <div className=" max-w-[48rem] mx-auto  px-[1rem]">
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
      <ListLayout posts={posts} pagination={pagination} />
    </div>
  );
}
