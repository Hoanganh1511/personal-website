import { getAllPosts } from "@/actions/get-posts";
import LatestSection from "@/views/HomePage/LatestSection";
import QuoteSection from "@/views/HomePage/QuoteSection";
import TechSection from "@/views/HomePage/TechSection";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="min-h-screen">
      <LatestSection />
    </div>
  );
}
