import { Post } from "@/types";
import React from "react";
import Image from "next/image";
import urlFor from "@/libs/urlFor";
import Link from "next/link";
const LatestCard = ({ post, id }: { post: Post; id: number }) => {
  const indexCard = id + 1;
  const convertFormatDate = (dateInput: string) => {
    const date = new Date(dateInput);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <Link
      href={`/blog/${post._id}`}
      className={`group cursor-pointer relative ${indexCard % 4 === 0 ? "after:hidden" : "after:block"} after:absolute after:-top-0 after:-right-[21px] after:w-[1px] after:h-full after:bg-black/10
      
      before:absolute before:-top-[20px] before:left-0 before:w-full before:h-[1px] before:bg-black/10
      `}
    >
      <Image
        src={urlFor(post.mainImage).url()}
        alt=""
        width={300}
        height={150}
        className="w-full h-[150px] object-cover"
      />
      <div>
        <h2 className="pt-4 text-[19px] font-bold group-hover:text-black/60 line-clamp-3">
          {post.title}
        </h2>
        <p className="pt-2 text-[14.5px] font-light line-clamp-2">
          {post.sapo}
        </p>
        <p className="pt-4 text-[12.5px] text-black/70">
          By {post.author.name} - Cập nhật {convertFormatDate(post._updatedAt)}
        </p>
      </div>
    </Link>
  );
};

export default LatestCard;
