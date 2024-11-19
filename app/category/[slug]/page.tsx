import CategoryView from "@/views/Category/CategoryView";
import { SearchParamsType } from "@/types";
async function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: SearchParamsType;
}) {
  return <CategoryView params={params} searchParams={searchParams} />;
}

export default CategoryPage;
