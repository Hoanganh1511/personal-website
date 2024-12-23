import { getArticlesByCategory } from "@/actions/get-posts";
import React from "react";
import { MdCalendarMonth } from "react-icons/md";
import { formatDateTime } from "@/utils/helper";
import Pagination from "./_components/Pagination";
import { Link } from "next-view-transitions";

const BlogPage = async ({
  searchParams: { page = "1" },
}: {
  searchParams: { page?: string };
}) => {
  const resArticlesNext = await getArticlesByCategory({
    category: "next-js",
    offset: Number(page) > 0 ? (Number(page) - 1) * 3 : 0,
    limit: 3,
  });
  const articles = resArticlesNext.data;
  if (!articles) return;
  return (
    <section className="mt-[48px] max-w-[48rem] mx-auto">
      <h3 className="text-[24px] font-semibold">Featured Posts</h3>
      <div className="mt-[1.5rem] grid grid-cols-1 gap-x-[30px] gap-y-[40px]">
        {articles.map((article, idx) => (
          <div key={idx} className="group col-span-1 w-full mx-auto   ">
            <Link
              href={`/blogs/${article.slug.current}`}
              className=" block w-fit text-[18px] font-medium border-dashed border-b-[2px] border-transparent hover:border-primary text-primary"
              style={{
                viewTransitionName: `demo-title-${article.slug.current}`,
              }}
            >
              {article.title}
            </Link>
            <div className="mt-[4px]">
              <div className="flex items-center gap-x-[8px]">
                <p className="text-[14px] ">
                  {formatDateTime(article._createdAt)}
                </p>
              </div>
              <p className="mt-[2px] text-[15px]  line-clamp-3">
                {article.sapo}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-12">
        <Pagination
          currentPage={Number(page)}
          totalPage={resArticlesNext.total / 3}
        />
      </div>
    </section>
  );
};

export default BlogPage;
