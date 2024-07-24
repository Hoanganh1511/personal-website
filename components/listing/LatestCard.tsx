import { Post } from "@/types";
import React from "react";
import Image from "next/image";
import urlFor from "@/libs/urlFor";
import Link from "next/link";
import { motion } from "framer-motion";
const convertFormatDate = (dateInput: string) => {
  const date = new Date(dateInput);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
const LatestCard = ({ post, id }: { post: Post; id: number }) => {
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
        className="w-full h-[290px] object-cover"
      />
      <div className="p-[20px]">
        <h2 className="mt-[16px] min-h-[96px] text-[24px] font-bold  line-clamp-3">
          {post.title}
        </h2>
        <div className="flex">
          <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-red-400">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
              alt="avatar"
              width={36}
              height={36}
              className="rounded-full "
            />
          </div>
          <div className="ml-3">
            <div className="font-bold text-[16.75px]">Tuấn Anh</div>
            <div className="text-[13.5px] text-[#0000008c]">
              Cập nhật gần nhất: {convertFormatDate(post._updatedAt)}
            </div>
          </div>
        </div>
        {/* <p className="pt-4 text-[14px] text-black/70">
          By {post.author.name} - Cập nhật {convertFormatDate(post._updatedAt)}
        </p> */}
      </div>
    </motion.a>
  );
};

export default LatestCard;
