import { getAllArticle } from "@/actions/get-posts";
import AboutMeSection from "@/views/HomePage/AboutMeSection";

export default async function Home() {
  return (
    <div className="space-y-12">
      <AboutMeSection />
    </div>
  );
}
