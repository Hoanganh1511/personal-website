"use client";
import { ICategory } from "@/types/apiTypes";
import Link from "next/link";

interface CategoryCardProps {
  category: ICategory;
}
const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link
      href="#"
      prefetch={false}
      className="px-[10px] outline outline-[1px] outline-black/30 rounded-[5px] shadow-[3px_3px_black] cursor-pointer hover:bg-black/5 hover:underline duration-200"
    >
      <span className="text-[12px] font-medium"> {category.title}</span>
    </Link>
  );
};

export default CategoryCard;
