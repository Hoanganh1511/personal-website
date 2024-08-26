import { getAllCategories } from "@/actions/get-categories";
import { getArticlesByCategory } from "@/actions/get-posts";
import Expandable from "@/components/animate/Expandable";
import ArticlesGrid from "@/components/Grid";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
const JSSection = async () => {
  const data = await getArticlesByCategory({
    category: "javascript",
    limit: 4,
  });
  const articles = data.articles;
  if (!articles) {
    return <p>No results for this category</p>;
  }
  return (
    <div className="mb-[40px]">
      <div>
        <div className="w-fit  rounded-md">
          <span className="font-medium text-[32px] text-black">JavaScript</span>
        </div>
        <ArticlesGrid articles={articles} />
      </div>
    </div>
  );
};
export default JSSection;
