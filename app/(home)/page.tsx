import { getAllArticle } from "@/actions/get-posts";
import AwsSection from "@/views/HomePage/AwsSection";
import ExpandableSection from "@/views/HomePage/ExpandableSection";
import JSSection from "@/views/HomePage/JSSection";
import NextJSSection from "@/views/HomePage/NextJSSection";
import ReactJSSection from "@/views/HomePage/ReactJSSection";
import ResearchSection from "@/views/HomePage/ResearchSection";

export default async function Home() {
  return (
    <div className="space-y-12">
      {/* <ExpandableSection /> */}
      <ResearchSection />
      <ReactJSSection />
      <NextJSSection />
      <JSSection />
      <AwsSection />
    </div>
  );
}
