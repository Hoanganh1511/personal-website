import React from "react";
import Image from "next/image";
import urlFor from "@/libs/urlFor";
import Link from "next/link";
import { IArticle } from "@/types/apiTypes";
import { formatDateTime } from "@/utils/helper";

const LatestCard = ({ post, id }: { post: IArticle; id: number }) => {
  return (
    <a
      href={`/blog/${post._id}`}
      className={`group cursor-pointer relative bg-white shadow-[0_16px_32px_0_rgba(41,41,41,.1)] rounded-[12px] overflow-hidden`}
    >
      <Image
        src={urlFor(post.mainImage).url()}
        alt=""
        width={300}
        height={150}
        quality={100}
        className="w-full h-[180px] object-cover border-b border-black/5"
      />
      <div className="p-[20px]">
        <h2 className="leading-[28px] text-[23px] font-poppins font-bold line-clamp-2">
          {post.title}
        </h2>
        <div className="mt-8 flex">
          <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-red-400">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
              alt="avatar"
              width={32}
              height={32}
              className="rounded-full "
            />
          </div>
          <div className="ml-3">
            <div className="font-bold leading-[1rem] text-[16px]">Tuấn Anh</div>
            <div className="text-[13px] text-[#0000008c]">
              Cập nhật gần nhất: {formatDateTime(post._updatedAt)}
            </div>
          </div>
        </div>
        {/* <p className="pt-4 text-[14px] text-black/70">
          By {post.author.name} - Cập nhật {convertFormatDate(post._updatedAt)}
        </p> */}
      </div>
    </a>
  );
};

export default LatestCard;
