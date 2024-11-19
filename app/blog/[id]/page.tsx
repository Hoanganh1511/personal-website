import { getDetailPost } from "@/actions/get-posts";
import RichTextComponent from "@/components/ui/RichTextComponent";
import { PortableText } from "next-sanity";
import React from "react";
import Image from "next/image";
import urlFor from "@/libs/urlFor";
import { formatDateTime2 } from "@/utils/helper";
const BlogDetail = async ({ params }: { params: { id: string } }) => {
  const post = await getDetailPost(params.id);
  return (
    <div className="relative px-[20px] ">
      <div className="max-w-full mx-auto">
        <div className=" text-[32px] text-[#E3E3E3] leading-normal font-poppins font-bold text-left mb-4 ">
          {post.title}
        </div>
        <div className="text-[14px] text-[#E3E3E3] mb-5">
          September 6, 2022 · 5 min read
        </div>
        <div className="flex items-start">
          <Image
            src="/images/avatar.jpg"
            width={48}
            height={48}
            alt="avatar"
            className="rounded-full size-[54px] object-cover"
          />
          <div className="ml-[12px] flex flex-col">
            <span className="text-[14px] uppercase text-[#0080a3] font-bold">
              Tuấn Anh
            </span>
            <span className="uppercase text-[14px] text-[#6E7976]">
              {formatDateTime2(post._createdAt)}
            </span>
          </div>
        </div>
        {/* <div className="relative w-full h-[200px] my-8">
          <Image
            src={urlFor(post.mainImage).url()}
            alt=""
            fill
            className="object-contain object-center rounded-md"
          />
        </div> */}
        <PortableText value={post.body} components={RichTextComponent} />
      </div>
    </div>
  );
};

export default BlogDetail;
