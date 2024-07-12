import { Post } from "@/types";
import React from "react";
import LatestCard from "./LatestCard";
interface P {
  posts: Post[];
}
const LatestList = ({ posts }: P) => {
  return (
    <>
      {posts.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-[42px] gap-y-[63px]">
          {posts.map((post, idx) => (
            <LatestCard post={post} id={idx} key={idx} />
          ))}
        </div>
      )}
      {posts.length === 0 && (
        <div className="w-full text-center pt-8">
          <p>Không có nội dung trùng khớp!</p>
        </div>
      )}
    </>
  );
};

export default LatestList;
