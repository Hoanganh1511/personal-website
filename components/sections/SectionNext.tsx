import { IArticle } from "@/types/apiTypes";
import { formatDateTime } from "@/utils/helper";
import React from "react";
import { Link } from "next-view-transitions";
const SectionNext = ({ articles }: { articles: IArticle[] }) => {
  return (
    <section>
      <h3 className="title-separate my-[24px] flex items-center justify-center relative after:">
        <div className="px-6 block bg-white text-[24px] text-black-primary font-bold uppercase">
          Next
        </div>
      </h3>
      <div className="grid grid-cols-1 gap-x-[30px] gap-y-[40px]">
        {articles.map((article, idx) => (
          <div key={idx} className="group col-span-1 w-full mx-auto   ">
            <Link
              href={`/blog/${article.slug.current}`}
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
    </section>
  );
};

export default SectionNext;
