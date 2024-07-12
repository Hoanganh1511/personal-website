import React from "react";
import Image from "next/image";
import { Post } from "@/types";
import urlFor from "@/libs/urlFor";
import Link from "next/link";
const PostCard = ({ post }: { post: Post }) => {
  const convertFormatDate = (dateInput: string) => {
    const date = new Date(dateInput);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <Link href={`/blog/${post._id}`} className="group cursor-pointer relative">
      <Image
        src={urlFor(post.mainImage).url()}
        alt=""
        width={800}
        height={400}
        className="w-full min-h-[168px] object-cover"
      />
      <h2 className="mt-4 text-[16px] font-bold group-hover:text-black/70">
        {post.title}
      </h2>
      <div className="text-[13.5px] my-2 italic text-black/70">
        {post.hashtag}
      </div>
      <div className="mt-2 text-[12.5px] text-[#0000008c]">
        By {post.author.name} - {convertFormatDate(post._createdAt)}
      </div>
      <div className="mt-2 text-[12.5px] text-[#0000008c]">
        Cập nhật gần nhất: {convertFormatDate(post._updatedAt)}
      </div>
    </Link>
  );
};

export default PostCard;
