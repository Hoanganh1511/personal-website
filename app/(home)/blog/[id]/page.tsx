import { getDetailPost } from "@/actions/get-posts";
import RichTextComponent from "@/components/ui/RichTextComponent";
import { PortableText } from "next-sanity";
import React from "react";
import Image from "next/image";
import urlFor from "@/libs/urlFor";
const BlogDetail = async ({ params }: { params: { id: string } }) => {
  const post = await getDetailPost(params.id);
  return (
    <div className="relative p-[20px] pt-[20px]">
      <div className="max-w-container-sm mx-auto">
        <div className="text-[30px] leading-[1.5em] font-bold mb-4">
          {post.title}
        </div>
        <div className="italic text-[18.5px] text-left">{post.hashtag}</div>
        <div className="relative w-full h-[200px] my-5">
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
