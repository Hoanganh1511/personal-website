import React from "react";
import Image from "next/image";

import urlFor from "@/libs/urlFor";
import Link from "next/link";
import { formatDateTime } from "@/utils/helper";
import { IArticle } from "@/types/apiTypes";
const PostCard = ({ post }: { post: IArticle }) => {
  return (
    <Link
      key={post._id}
      href={`/blogs/${post._id}`}
      className="group cursor-pointer relative bg-white shadow-[0_16px_32px_0_rgba(41,41,41,.1)] rounded-[12px] overflow-hidden"
    >
      <Image
        src={urlFor(post.mainImage).url()}
        alt=""
        width={800}
        height={200}
        className="w-full h-[200px] object-fill border-b"
      />
      <div className="p-[20px]">
        <h2 className="text-[20px] h-[84px] leading-[30px] mt-[16px] font-semibold group-hover:text-black/70">
          {post.title}
        </h2>

        <div className="mt-2 text-[12.5px] text-[#0000008c]">
          By {post.author.name} - {formatDateTime(post._createdAt)}
        </div>
        <div>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="font-bold text-[18px]">Tuấn Anh</div>
          <div className="mt-2 text-[12.5px] text-[#0000008c]">
            Cập nhật gần nhất: {formatDateTime(post._updatedAt)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
