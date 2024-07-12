import { getDetailPost } from "@/actions/get-posts";
import RichTextComponent from "@/components/ui/RichTextComponent";
import { PortableText } from "next-sanity";
import React from "react";
import Image from "next/image";
import urlFor from "@/libs/urlFor";
const BlogDetail = async ({ params }: { params: { id: string } }) => {
  const post = await getDetailPost(params.id);
  console.log("post =>", post);
  return (
    <div className="relative p-[20px] pt-[20px]">
      <div className="max-w-container-sm mx-auto">
        <div className="relative w-full h-[380px] mb-5">
          <Image
            src={urlFor(post.mainImage).url()}
            alt=""
            fill
            className="object-cover object-center rounded-md"
          />
        </div>
        <div className="text-[34px] font-bold mb-4">{post.title}</div>
        <div className="italic text-[18px] text-left font-light">
          - {post.hashtag} -
        </div>
        <PortableText value={post.body} components={RichTextComponent} />
      </div>
    </div>
  );
};

export default BlogDetail;
