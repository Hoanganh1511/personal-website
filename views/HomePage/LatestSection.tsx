"use client";
import { getAllCategory } from "@/actions/get-category";
import { getAllPosts } from "@/actions/get-posts";
import LatestList from "@/components/listing/LatestList";
import { Skeleton } from "@/components/Skeleton";
import { cn } from "@/libs/utils";
import { Post } from "@/types";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Select from "react-select";
import { useDebounceCallback } from "usehooks-ts";
interface IOption {
  label: string;
  value: string;
}
const sorts = [
  {
    label: "Cập nhật gần đây",
    value: "desc",
  },
  {
    label: "Cũ nhất",
    value: "asc",
  },
];
const LatestSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<IOption[]>([]);
  // useEffect(() => {
  //   getAllPosts({}).then((res) => {
  //     if (res) {
  //       setPosts(res);
  //     }
  //   });
  // }, []);
  useEffect(() => {
    getAllCategory().then((res) => {
      if (res) {
        const convertToOptions = res.map((item: any) => ({
          label: item.title,
          value: item.tag.current,
        }));
        convertToOptions.unshift({
          label: "Tất cả",
          value: "",
        });
        setCategories(convertToOptions);
      }
    });
  }, []);
  return <LatestList posts={posts} />;
};
export default LatestSection;
// const ListSkeleton = () => {
//   return (
//     <>
//       <header className="grid grid-cols-2 gap-[20px]">
//         <Skeleton className=" h-[36px] md:h-[200px]" />
//         <Skeleton className=" h-[36px] md:h-[200px]" />
//         <Skeleton className=" h-[36px] md:h-[200px]" />
//         <Skeleton className=" h-[36px] md:h-[200px]" />
//       </header>
//     </>
//   );
// };
{
  /* <div className="flex">
<div className="w-[240px]">
  {categories && categories.length > 0 && (
    <Select
      placeholder="Category"
      options={categories}
      defaultValue={categories[0]}
      onChange={(selectValue) => {
        selectValue !== null &&
          setFilter((prev) => ({
            ...prev,
            category: selectValue.value,
          }));
      }}
    />
  )}
</div>
<div className="w-[240px] ml-[20px]">
  {sorts && sorts.length > 0 && (
    <Select
      placeholder="Sort"
      options={sorts}
      defaultValue={sorts[0]}
      onChange={(selectValue) => {
        selectValue !== null &&
          setFilter((prev) => ({
            ...prev,
            sort: selectValue.value,
          }));
      }}
    />
  )}
</div>
</div> */
}
{
  /* <div className="relative w-full h-full">
              <input
                placeholder="Tìm bài viết"
                defaultValue={keyword}
                onChange={(e) => debounced(e.target.value)}
                className="w-full h-full outline outline-[1px] outline-black/20 pl-[12px] pr-[30px] py-[6px] rounded-[3px] focus:outline focus:outline-[2px] focus:outline-[#2684ff] "
              />
              {searchLoading ? (
                <span className="absolute top-1/2 right-[12px] -translate-y-1/2">
                  <SearchingLoading className="" />
                </span>
              ) : (
                <FiSearch className="text-[19px] absolute top-1/2 right-[12px] -translate-y-1/2" />
              )}
            </div> */
}
