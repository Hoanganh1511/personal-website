import { Post } from "@/types";
import React from "react";
import PostCard from "../../components/listing/PostCard";
interface P {
  posts: Post[];
}
const LatestList = ({ posts }: P) => {
  return (
    <>
      {posts.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-2 gap-x-[16px] gap-y-[24px]">
          {posts.map((post, idx) => (
            <PostCard post={post} key={idx} />
          ))}
        </div>
      )}
    </>
  );
};

export default LatestList;
