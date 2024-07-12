import React from "react";
import PostCard from "./PostCard";
import { Post } from "@/types";
import Image from "next/image";
import urlFor from "@/libs/urlFor";
const PostList = ({ posts }: { posts: Post[] }) => {
  const leftFeaturedPosts = posts.slice(0, 2);
  const rightFeaturedPosts = posts.slice(2, 4);
  return (
    <div className="mt-[40px] max-w-container-lg mx-auto">
      <div className="grid grid-cols-12 xl:grid-cols-16 gap-[40px]">
        <div className="header-left col-span-4 flex flex-col gap-[20px] order-2 xl:order-1">
          {leftFeaturedPosts &&
            leftFeaturedPosts.length > 0 &&
            leftFeaturedPosts.map((post: Post, idx: number) => (
              <PostCard post={post} key={idx} />
            ))}
        </div>
        <div className="col-span-8 order-1 xl:order-2 ">
          <div className="featured-post group h-full">
            <div className="relative w-full h-auto aspect-video">
              <Image
                src={urlFor(posts[0].mainImage).url()}
                alt=""
                fill
                className="w-full min-h-[168px] object-cover"
              />
            </div>
            <h2 className="mt-4 text-[36px] font-bold group-hover:text-black/70 cursor-pointer">
              {posts[0].title}
            </h2>
            <div className="mt-2 text-[12.5px] text-[#0000008c]">
              By {posts[0].author.name} -
            </div>
          </div>
        </div>
        <div className="header-right col-span-12 xl:col-span-4 flex flex-row xl:flex-col gap-[20px] order-3">
          {rightFeaturedPosts &&
            rightFeaturedPosts.length > 0 &&
            rightFeaturedPosts.map((post: Post, idx: number) => (
              <PostCard post={post} key={idx} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;
