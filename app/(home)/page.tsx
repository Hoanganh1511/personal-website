import { getAllArticle } from "@/actions/get-posts";
import HomeView from "@/views/HomePage/HomeView";

export default async function Home() {
  return <HomeView />;
}
