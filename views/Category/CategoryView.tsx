import { getAllPosts } from "@/actions/get-posts";
import { SearchParamsType } from "@/types";
import HeroSection from "./HeroSection";
import HitsSection from "../Listing/HitsSection";

interface CategoryViewProps {
  params: { slug: string; page?: string };
  searchParams?: SearchParamsType;
}
const CategoryView = async ({
  params,
  searchParams = {},
}: CategoryViewProps) => {
  const articles = await getAllPosts({ category: params.slug });
  if (!articles) return;
  return (
    <>
      <HeroSection />
      <HitsSection />
    </>
  );
};

export default CategoryView;
{
  /* <div className="relative p-[20px] pt-[40px]">
<div className="max-w-container-lg mx-auto">
  <div className="w-full h-[200px]  mb-[40px] flex items-center justify-center">
    <div className="">
      <span className="text-[28px] font-lexend">...</span>
    </div>
  </div>
  </div>
  </div> */
}
