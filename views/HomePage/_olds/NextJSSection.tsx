import { getAllCategories } from "@/actions/get-categories";
import { getArticlesByCategory } from "@/actions/get-posts";
import Expandable from "@/components/animate/Expandable";
import ArticlesGrid from "@/components/Grid";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
const NextJSSection = async () => {
  const data = await getArticlesByCategory({ category: "next-js", limit: 4 });
  const articles = data.articles;
  if (!articles) {
    return <p>No results for this category</p>;
  }
  return (
    <div className="">
      <div className="w-fit   rounded-md">
        <span className="font-medium text-[32px] text-black">NextJS</span>
      </div>
      <ArticlesGrid articles={articles} />
    </div>
  );
};
export default NextJSSection;
