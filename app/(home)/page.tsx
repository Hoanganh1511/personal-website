import { getAllArticle } from "@/actions/get-posts";
import ExpandableSection from "@/views/HomePage/ExpandableSection";
import JSSection from "@/views/HomePage/JSSection";
import NextJSSection from "@/views/HomePage/NextJSSection";
import ReactJSSection from "@/views/HomePage/ReactJSSection";

export default async function Home() {
  return (
    <>
      {/* <ExpandableSection /> */}
      <ReactJSSection />
      <NextJSSection />
      <JSSection />
    </>
  );
}
