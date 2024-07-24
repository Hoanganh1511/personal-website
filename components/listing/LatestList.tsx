import React from "react";
import LatestCard from "./LatestCard";
import { Post } from "@/types";
interface P {
  posts: Post[];
}
const LatestList = ({ posts }: P) => {
  return (
    <>
      {posts.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-x-[16px] gap-y-[32px]">
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
