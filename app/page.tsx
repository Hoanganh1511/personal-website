import { getArticlesByCategory } from "@/actions/get-posts";
import { formatDateTime } from "@/utils/helper";
import { Link, useTransitionRouter } from "next-view-transitions";
import React from "react";

import { FaAws, FaReact, FaSlack, FaVuejs } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { FiFramer } from "react-icons/fi";
import { SiDevdotto, SiExpress, SiMongoose } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { PiBrainThin } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import SectionReact from "@/components/sections/SectionReact";
import SectionNext from "@/components/sections/SectionNext";
const skillList = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Next.js",
    icon: RiNextjsLine,
  },
  {
    name: "Vue.js",
    icon: FaVuejs,
  },
  {
    name: "TypeScript",
    icon: FaReact,
  },
  {
    name: "RESTful",
    icon: TbApi,
  },
  {
    name: "GraphQL",
    icon: GrGraphQl,
  },
  {
    name: "Framer Motion",
    icon: FiFramer,
  },
  {
    name: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    name: "Styled-components",
    icon: FaReact,
  },
  {
    name: "Bootstrap",
    icon: FaReact,
  },
  {
    name: "Git / GitLab",
    icon: FaReact,
  },
  {
    name: "Jira",
    icon: FaReact,
  },
  {
    name: "Slack",
    icon: FaSlack,
  },
  {
    name: "Postman",
    icon: FaReact,
  },
  {
    name: "Vercel",
    icon: IoLogoVercel,
  },
  {
    name: "AWS",
    icon: FaAws,
  },
  {
    name: "Express.js",
    icon: SiExpress,
  },
  {
    name: "Mongoose",
    icon: SiMongoose,
  },
  {
    name: "Core Web Vital",
    icon: SiDevdotto,
  },
];
const HomePage = async () => {
  const resArticlesReact = await getArticlesByCategory({
    category: "react",
    limit: Number(10) || 3,
  });
  const resArticlesNext = await getArticlesByCategory({
    category: "next-js",
    limit: Number(10) || 3,
  });
  const articlesReact = resArticlesReact.data;
  const articlesNext = resArticlesNext.data;
  if (!articlesReact) return;
  console.log(articlesNext[0]);
  return (
    <div className="max-w-[48rem] mx-auto">
      <section>
        <h1 className="my-[32px] text-[48px] text-black-primary font-bold">
          Web Developer{" "}
          <PiBrainThin className="inline-block text-[26px] text-primary " />
        </h1>
        <p className="block mb-8 font-plex-mono text-black-primary">
          Welcome to my website! Here, I will be sharing my thoughts and
          experiences about web development. These days, I mostly work with
          React and Next.js, o expect content related to those technologies
        </p>
        <div className="mb-8 flex items-center">
          Social Links:{" "}
          <div className="ml-2 inline-flex items-center gap-x-[8px]">
            <Link href="">
              <FiGithub className="text-[22px] text-black-primary opacity-90" />
            </Link>
            <Link href="">
              <AiOutlineLinkedin className="text-[26px] text-black-primary opacity-90" />
            </Link>
            <Link href="">
              <FaFacebookSquare className="text-[23px] text-black-primary opacity-90" />
            </Link>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="flex flex-wrap gap-x-[12px] gap-y-[10px]">
          {skillList.map((item, id) => {
            return (
              <a
                key={id}
                href=""
                className="p-[8px] text-white bg-black/90 w-fit flex items-center justify-center border-[1px] border-gray rounded-[5px] hover:scale-110 duration-200"
              >
                <item.icon className="mr-[8px] text-[16px] text-white" />
                <p className="text-[13px] uppercase font-plex-mono text-white">
                  {item.name}
                </p>
              </a>
            );
          })}
        </div>
      </section> */}
      <SectionNext articles={articlesNext} />
      <SectionReact articles={articlesReact} />
    </div>
  );
};

export default HomePage;
