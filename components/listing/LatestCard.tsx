import { Post } from "@/types";
import React from "react";
import Image from "next/image";
import urlFor from "@/libs/urlFor";
import Link from "next/link";
import { motion } from "framer-motion";
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
    <motion.a
      href={`/blog/${post._id}`}
      className={`group cursor-pointer relative shadow-[0_16px_32px_0_rgba(41,41,41,.1)] rounded-[12px] overflow-hidden`}
      initial="initial"
      whileHover="hover"
    >
      {/* <motion.div variants={glowVariants} className="glow" /> */}
      <Image
        src={urlFor(post.mainImage).url()}
        alt=""
        width={300}
        height={150}
        quality={100}
        className="w-full object-fill"
      />
      <div className="p-[20px]">
        <h2 className="mt-[16px] min-h-[96px] text-[24px] font-bold  line-clamp-3">
          {post.title}
        </h2>
        {/* <p className="pt-2 text-[14.5px] font-light line-clamp-2">
          {post.sapo}
        </p> */}
        <p className="pt-4 text-[12.5px] text-black/70">
          By {post.author.name} - Cập nhật {convertFormatDate(post._updatedAt)}
        </p>
      </div>
    </motion.a>
  );
};

export default LatestCard;
