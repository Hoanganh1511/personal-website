import { getArticlesByCategory } from "@/actions/get-posts";
import { SearchParamsType } from "@/types";
import HeroSection from "./HeroSection";
import ArticlesSection from "../Listing/ArticlesSection";
import { notFound } from "next/navigation";

interface CategoryViewProps {
  params: { slug: string };
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
    <div className="pb-12">
      <HeroSection
        title={categoryData.title}
        description={categoryData.description}
      />
      <ArticlesSection articles={categoryData.data} />
    </div>
  );
};

export default CategoryView;
