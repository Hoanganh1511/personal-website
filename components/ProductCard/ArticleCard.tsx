import React from "react";
import Image from "next/image";
import urlFor from "@/libs/urlFor";
import { IArticle } from "@/types/apiTypes";
import { formatDateTime, subtractDate } from "@/utils/helper";
interface ArticleCardProps {
  article: IArticle;
}
const ArticleCard = ({ article }: ArticleCardProps) => {
  const now = new Date();
  return (
    <a
      href={`/blog/${article._id}`}
      className={`group cursor-pointer relative duration-300 
         after:absolute after:top-0 after:right-[-20px] after:w-[2px] after:h-full after:border-r
          before:absolute before:bottom-0 before:left-[-20px] before:w-[calc(100%+40px)] before:h-[1px] before:border-b
        `}
    >
      <div className="relative w-full h-[180px] rounded-[6px] overflow-hidden">
        <Image
          src={urlFor(article.mainImage).url()}
          alt=""
          fill
          className="object-cover group-hover:brightness-[80%]  duration-300 "
        />
      </div>
      <div className="p-[20px] pl-0">
        <div className=" mb-2">
          <span className="text-blue-500 tracking-[0.75px]">
            WEB DEVELOPMENT
          </span>
        </div>
        <h2 className="mb-5 leading-normal text-[22px] font-ibm-plex-sans font-medium group-hover:underline line-clamp-2">
          {article.title}
        </h2>
        <div className="flex">
          <div className="w-[38px] h-[38px] rounded-full flex justify-center items-center bg-red-400">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
              alt="avatar"
              width={28}
              height={28}
              className="rounded-full"
            />
          </div>
          <div className="ml-3">
            <div className="font-bold leading-[1rem] text-[15px]">Tuấn Anh</div>
            <div className="text-[12px] text-[#0000008c]">
              {subtractDate(article._updatedAt, now.toString())}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
