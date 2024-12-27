import { getArticlesByCategory } from "@/actions/get-posts";
import { Link } from "next-view-transitions";
import React from "react";
import { PiBrainThin } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import SectionNext from "@/components/sections/SectionNext";
import SkillList from "@/components/sections/SkillList";
import { Metadata } from "next";
import NextBreadcrumb from "@/components/NextBreadcrumb";
import { IconChevronRight } from "@tabler/icons-react";
export const metadata: Metadata = {
  title: "My corner - Hoàng Tuấn Anh",
  description: "My corner - Become Fullstack Developer",
  authors: {
    name: "Hoàng Tuấn Anh",
  },
  openGraph: {
    title: "My corner - Hoàng Tuấn Anh",
    description: "My corner - Become Fullstack Developer",
  },
};
const HomePage = async () => {
  const resArticlesNext = await getArticlesByCategory({
    category: "next-js",
    limit: 3,
    offset: 0,
  });
  const articlesNext = resArticlesNext.data;
  return (
    <>
      {" "}
      <div className="max-w-[48rem] mx-auto px-[1rem]">
        {/* <SkillList /> */}
        <SectionNext articles={articlesNext} />

        {/* <SectionReact articles={articlesReact} /> */}
      </div>
    </>
  );
};

export default HomePage;
