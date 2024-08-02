import React from "react";
import Image from "next/image";
import urlFor from "@/libs/urlFor";
import Link from "next/link";
import { IArticle } from "@/types/apiTypes";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { formatDateTime, subtractDate } from "@/utils/helper";
import { FaRegBookmark } from "react-icons/fa6";

const LatestCard = ({ article, id }: { article: IArticle; id: number }) => {
  const now = new Date();
  return (
    <div
      className={`group relative flex flex-col bg-white shadow-[0_16px_32px_0_rgba(41,41,41,.1)] rounded-[12px]`}
    >
      <span className="absolute outline outline-[1px] outline-black/10 top-[4px] right-[4px] px-[12px] py-[4px] bg-white rounded-tr-[8px]">
        New
      </span>
      <Link href={`/blog/${article._id}`}>
        <Image
          src={urlFor(article.mainImage).url()}
          alt=""
          width={300}
          height={150}
          quality={100}
          className="w-full h-[200px] object-cover object-center rounded-t-[12px] border-b border-black/5"
        />
      </Link>
      <div className="flex-1 p-[20px] flex flex-col justify-between">
        <Link
          href={`/blog/${article._id}`}
          className="leading-normal text-[23px] font-poppins font-bold line-clamp-2 hover:underline"
        >
          {article.title}
        </Link>
        <div className="mt-8 flex justify-between">
          <Link href={`/blog/${article._id}`} className="flex">
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
              <div className="font-bold leading-[1rem] text-[16px]">
                Tuấn Anh
              </div>
              <div className="mt-[2px] text-[13px] text-[#0000008c]">
                {subtractDate(article._updatedAt, now.toString())}
              </div>
            </div>
          </Link>
          <div className="flex">
            <div className="block w-[40px] h-[40px] cursor-pointer hover:bg-[rgb(229,231,235)] rounded-full flex items-center justify-center">
              <FaRegHeart className="text-[22px] text-[rgb(122,122,122)]" />
            </div>
            <div className="block w-[40px] h-[40px] cursor-pointer hover:bg-[rgb(229,231,235)] rounded-full flex items-center justify-center">
              <FaRegBookmark className="text-[20px] text-[rgb(122,122,122)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
