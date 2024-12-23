import { IArticle } from "@/types/apiTypes";
import { formatDateTime } from "@/utils/helper";
import React from "react";
import { Link } from "next-view-transitions";
import { IconArrowNarrowRight } from "@tabler/icons-react";
const SectionNext = ({ articles }: { articles: IArticle[] }) => {
  return (
    <section className="mt-[48px]">
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
      <div className="">
        <Link
          href="/blogs"
          className="group w-fit mx-auto mt-16 flex items-center hover:text-primary"
        >
          All Posts{" "}
          <IconArrowNarrowRight className="ml-[8px] group-hover:stroke-primary" />
        </Link>
      </div>
    </section>
  );
};

export default SectionNext;
