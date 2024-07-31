import { getArticlesByCategory } from "@/actions/get-posts";
import { SearchParamsType } from "@/types";
import HeroSection from "./HeroSection";
import HitsSection from "../Listing/HitsSection";
import { notFound } from "next/navigation";

interface CategoryViewProps {
  params: { slug: string; page?: string };
  searchParams?: SearchParamsType;
}
const CategoryView = async ({
  params,
  searchParams = {},
}: CategoryViewProps) => {
  const categoryData = await getArticlesByCategory({
    category: params.slug,
  });
  if (!categoryData) return notFound();
  return (
    <div className="py-12">
      <HeroSection
        title={categoryData.title}
        description={categoryData.description}
      />
      <HitsSection articles={categoryData.articles} />
    </div>
  );
};

export default CategoryView;
