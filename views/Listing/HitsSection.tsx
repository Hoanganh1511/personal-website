import ArticleCard from "@/components/ProductCard/ArticleCard";
import { IArticle } from "@/types/apiTypes";

interface HitsSectionProps {
  articles: IArticle[];
}
const HitsSection = ({ articles }: HitsSectionProps) => {
  if (!articles.length) {
    return <p className="text-center">No results for this query!</p>;
  }
  return (
    <div className="grid w-full grid-cols-[repeat(_auto-fill,minmax(140px,1fr)_)] items-start gap-[50px] gap-y-8 md:grid-cols-[repeat(_auto-fill,minmax(200px,2fr)_)] xl:grid-cols-[repeat(_auto-fill,minmax(280px,4fr)_)]">
      {articles.map((singleArticle, idx) => (
        <ArticleCard article={singleArticle} key={singleArticle._id} />
      ))}
    </div>
  );
};

export default HitsSection;
