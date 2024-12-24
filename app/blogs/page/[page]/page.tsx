import { getArticlesByCategory } from "@/actions/get-posts";
import Breadcrumbs from "@/components/Breadcrumbs";
import ListLayout from "@/components/layout/ListLayout";
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
    <div className="mt-[48px] max-w-[48rem] mx-auto  px-[1rem]">
      <Breadcrumbs />
      <ListLayout posts={posts} pagination={pagination} />
    </div>
  );
}
