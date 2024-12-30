import { getArticlesByCategory } from "@/actions/get-posts";
import { Link } from "next-view-transitions";
import Image from "next/image";
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
      <div className="max-w-[48rem] xl:max-w-[1400px] mx-auto px-[1rem]">
        {/* <SkillList /> */}
        {/* <SectionNext articles={articlesNext} /> */}
        {/* <SectionReact articles={articlesReact} /> */}
        <section className="overflow-hidden">
          <div className="relative w-full h-auto flex justify-center items-center">
            <Image
              alt=""
              width={500}
              height={500}
              className="scale-[1.1]"
              src="https://images.squarespace-cdn.com/content/v1/5366c52ee4b0c7352c8a8139/1591923664361-W8TH3U1WXJ8T2NGHI9OG/Longbeach+House_Dunedin.jpg?format=1000w"
            />
          </div>
          <div className="w-fit relative mt-[125px] ml-[20%] flex items-end">
            <Image
              src="/images/avatar-pencil.jpg"
              alt=""
              width={70}
              height={70}
              className=""
            />
            <div className="flex items-center justify-center !max-w-[350px] absolute bottom-full left-[0px] w-[200px]  aspect-[351/171]">
              <p className="text-center text-[12px] w-[80%] pb-2">
                Hi, tôi là Tuấn Anh <br />
                Front End Developer
              </p>
              <Image src="/images/frame-chat-2.webp" alt="" fill className="" />
            </div>
            <div className="ml-4 flex items-center justify-center">
              <div className="mb-1 inline-flex items-center gap-x-[12px]">
                <Link href="https://github.com/Hoanganh1511" target={"_blank"}>
                  <FiGithub className="text-[22px] text-black-primary opacity-90" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/hoanganh1511/"
                  target={"_blank"}
                >
                  <AiOutlineLinkedin className="text-[26px] text-black-primary opacity-90" />
                </Link>
                <Link
                  href="https://www.facebook.com/jm.1511/"
                  target={"_blank"}
                >
                  <FaFacebookSquare className="text-[23px] text-black-primary opacity-90" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
