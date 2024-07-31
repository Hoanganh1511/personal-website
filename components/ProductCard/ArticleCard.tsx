import React from "react";
import Image from "next/image";
import urlFor from "@/libs/urlFor";
import { IArticle } from "@/types/apiTypes";
import { formatDateTime } from "@/utils/helper";
interface ArticleCardProps {
  article: IArticle;
}
const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <a
      href={`/blog/${article._id}`}
      className={`group cursor-pointer relative shadow-[0_0_4px_0_grey] hover:shadow-[0_0_16px_0_grey] duration-300 rounded-[12px] overflow-hidden`}
    >
      <Image
        src={urlFor(article.mainImage).url()}
        alt=""
        width={300}
        height={150}
        quality={100}
        className="w-full h-[180px] object-cover group-hover:brightness-75 duration-300"
      />
      <div className="p-[20px]">
        <h2 className="h-[90px] leading-[28px] text-[20px] font-bold line-clamp-3">
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
              Cập nhật gần nhất: {formatDateTime(article._updatedAt)}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
