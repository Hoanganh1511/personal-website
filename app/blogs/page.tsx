import { getArticlesByCategory } from "@/actions/get-posts";
import React from "react";
import { MdCalendarMonth } from "react-icons/md";
import { formatDateTime } from "@/utils/helper";
import Pagination from "./_components/Pagination";
import { Link } from "next-view-transitions";
import ListLayout from "@/components/layout/ListLayout";

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
  return <ListLayout posts={posts} pagination={pagination} />;
};

export default BlogPage;