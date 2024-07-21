"use client";
import { getAllCategory } from "@/actions/get-category";
import { getAllPosts } from "@/actions/get-posts";
import LatestList from "@/views/HomePage/2Latest";
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
  // const [keyword, setKeyword] = useState("");
  // const [filter, setFilter] = useState({
  //   category: "",
  //   sort: "desc",
  // });

  // const debounced = useDebounceCallback(setKeyword, 1000);
  // const [searchLoading, setSearchLoading] = useState(true);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    // if (keyword.length > 0) {
    //   setSearchLoading(true);
    // }
    // setLoading(true);
    getAllPosts({}).then((res) => {
      if (res) {
        setPosts(res);
      }
    });
  }, []);
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
// const SearchingLoading = ({ className }: { className?: string }) => {
//   return (
//     <div role="status">
//       <svg
//         aria-hidden="true"
//         className={cn(
//           `w-[19px] h-[19px] text-gray-200 animate-spin  dark:text-gray-600 fill-blue-600`,
//           className
//         )}
//         viewBox="0 0 100 101"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//           fill="currentColor"
//         />
//         <path
//           d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//           fill="currentFill"
//         />
//       </svg>
//       <span className="sr-only">Loading...</span>
//     </div>
//   );
// };
const ListSkeleton = () => {
  return (
    <>
      <header className="grid grid-cols-4 gap-[42px]">
        <Skeleton className=" h-[36px] md:h-[200px]" />
        <Skeleton className=" h-[36px] md:h-[200px]" />
        <Skeleton className=" h-[36px] md:h-[200px]" />
        <Skeleton className=" h-[36px] md:h-[200px]" />
        <Skeleton className=" h-[36px] md:h-[200px]" />
        <Skeleton className=" h-[36px] md:h-[200px]" />
        <Skeleton className=" h-[36px] md:h-[200px]" />
        <Skeleton className=" h-[36px] md:h-[200px]" />
      </header>
    </>
  );
};
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
