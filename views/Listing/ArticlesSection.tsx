import ArticleCard from "@/components/ProductCard/ArticleCard";
import { IArticle } from "@/types/apiTypes";

interface ArticlesSectionProps {
  articles: IArticle[];
}
const ArticlesSection = ({ articles }: ArticlesSectionProps) => {
  if (!articles.length) {
    return <p className="text-center">No results for this query!</p>;
  }
  return (
    <ul className="flex flex-col gap-y-2">
      {articles.map((singleArticle, idx) => (
        <ArticleCard article={singleArticle} key={singleArticle._id} />
      ))}
    </ul>
  );
};

export default ArticlesSection;
