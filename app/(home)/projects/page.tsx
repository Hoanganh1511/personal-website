import { getAllArticle } from "@/actions/get-posts";
import ProjectsSection from "@/views/HomePage/ProjectsSection";

export default async function Home() {
  return (
    <div className="space-y-12">
      <ProjectsSection />
    </div>
  );
}
