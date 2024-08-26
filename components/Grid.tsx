import { getAllArticle } from "@/actions/get-posts";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import urlFor from "@/libs/urlFor";
import CategoryCard from "@/components/ui/CategoryCard";
import { formatDateTime } from "@/utils/helper";
import { IArticle } from "@/types/apiTypes";
interface IParams {
  articles: IArticle[];
}
const ArticlesGrid = async ({ articles }: IParams) => {
  return (
    <div>
      <div className="mt-6 grid grid-cols-12 gap-x-[18px] gap-y-[24px]">
        {articles &&
          articles.length > 0 &&
          articles.map((article, idx) => (
            <ArticleCard key={article._id} article={article} />
          ))}
      </div>
    </div>
  );
};

export default ArticlesGrid;
function ArticleCard({ article }: { article: IArticle }) {
  return (
    <div
      key={article._id}
      className="group relative col-span-3 flex flex-col  bg-white rounded-[8px] border-[2px] border-transparent"
    >
      <Link
        href={`/blog/${article._id}`}
        className="relative w-full md:h-[178px] xl:h-[200px] mr-[24px] rounded-[16px] overflow-hidden"
      >
        <Image
          src={urlFor(article.mainImage).url()}
          alt=""
          fill
          className="group-hover:scale-[1.05] duration-500"
        />
      </Link>
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col gap-y-[12px]">
          <a
            href={`/blog/${article._id}`}
            className="mt-5 text-[20px] leading-[24px] font-poppins-medium text-[#292929] hover:underline"
          >
            {article.title}
          </a>
          <p className=" line-clamp-2 text-black/80 text-[16px] leading-[22px] font-poppins">
            {article.sapo}
          </p>
        </div>
        <div className="mt-4 flex-1 flex flex-col justify-end">
          <div className="flex gap-2 flex-wrap">
            {article.categories?.map((category, idx) => {
              return <CategoryCard key={category._id} category={category} />;
            })}
          </div>
          <div className="flex items-center mt-[24px]">
            <Link
              href={`/blog/${article._id}`}
              className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-red-400"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                alt="avatar"
                width={28}
                height={28}
                className="rounded-full"
              />
            </Link>
            <div className="ml-3">
              <a
                href={`/blog/${article._id}`}
                className="block text-[14.5px] leading-[1rem] text-black"
              >
                Tuấn Anh
              </a>
              <div className="mt-[2px] text-[12.5px] text-black">
                Cập nhật gần nhất: {formatDateTime(article._updatedAt)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
