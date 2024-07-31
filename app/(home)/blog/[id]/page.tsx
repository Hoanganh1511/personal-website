import { getDetailPost } from "@/actions/get-posts";
import RichTextComponent from "@/components/ui/RichTextComponent";
import { PortableText } from "next-sanity";
import React from "react";
import Image from "next/image";
import urlFor from "@/libs/urlFor";
import { formatDateTime, formatDateTime2 } from "@/utils/helper";
const BlogDetail = async ({ params }: { params: { id: string } }) => {
  const post = await getDetailPost(params.id);
  return (
    <div className="relative p-[20px] pt-[20px]">
      <div className="max-w-container-sm mx-auto">
        <div className="my-6 ">
          <span className="text-center text-[13px] block uppercase tracking-[1.75px] text-blue-600">
            Web Development
          </span>
        </div>
        <div className=" text-[48px] text-[rgba(0,0,0,.87)] leading-normal font-poppins font-semibold text-center mb-4 ">
          {post.title}
        </div>
        <div className="w-fit mx-auto ">
          <span className="inline-block uppercase text-[14px] text-center text-[#6E7976]">
            {formatDateTime2(post._createdAt)}
          </span>
          <span className="inline-block mx-3 text-[#6E7976]">|</span>
          <span className="text-[14px] uppercase text-[#6E7976]">
            Written by Tuấn Anh
          </span>
        </div>
        <div className="relative w-full h-[200px] my-8">
          <Image
            src={urlFor(post.mainImage).url()}
            alt=""
            fill
            className="object-contain object-center rounded-md"
          />
        </div>
        <PortableText value={post.body} components={RichTextComponent} />
      </div>
    </div>
  );
};

export default BlogDetail;
