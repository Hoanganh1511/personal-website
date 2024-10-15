import { getAllCategories } from "@/actions/get-categories";
import { getArticlesByCategory } from "@/actions/get-posts";
import Expandable from "@/components/animate/Expandable";
import ArticlesGrid from "@/components/Grid";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
const ReactJSSection = async () => {
  const data = await getArticlesByCategory({ category: "react", limit: 4 });
  const articles = data.articles;
  if (!articles) {
    return <p>No results for this category</p>;
  }
  // const handleViewAll =( ) => {
  //   router.push
  // }
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <span className="font-medium text-[32px] text-black">ReactJS</span>
        <Link
          href="/category/react"
          className="group text-xl font-semibold  flex items-center space-x-2 px-4 py-3 hover:text-black/80"
        >
          <div className="">
            <span>View all</span>
          </div>
          <FaAngleDoubleRight />
        </Link>
      </div>
      <ArticlesGrid articles={articles} />
    </div>
  );
};
export default ReactJSSection;
