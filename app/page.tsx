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
import SkillList from "@/components/sections/SkillList";

const HomePage = async () => {
  const resArticlesNext = await getArticlesByCategory({
    category: "next-js",
    limit: 3,
    offset: 0,
  });
  const articlesNext = resArticlesNext.data;
  return (
    <div className="max-w-[48rem] mx-auto px-[1rem]">
      <section>
        <h1 className="mt-[32px] mb-[20px] lg:my-[32px] text-[30px] lg:text-[48px] text-black-primary font-bold">
          Web Developer{" "}
          <PiBrainThin className="inline-block text-[26px] text-primary " />
        </h1>
        <p className="block mb-8 font-plex-mono text-black-primary">
          Welcome to my website! Here, I will be sharing my thoughts and
          experiences about web development. These days, I mostly work with{" "}
          <b>React</b> and <b>Next.js</b>, hope you expect content related to
          those technologies
        </p>
        <div className="mb-8 flex items-center">
          Social Links:{" "}
          <div className="ml-2 inline-flex items-center gap-x-[8px]">
            <Link href="https://github.com/Hoanganh1511" target={"_blank"}>
              <FiGithub className="text-[22px] text-black-primary opacity-90" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hoanganh1511/"
              target={"_blank"}
            >
              <AiOutlineLinkedin className="text-[26px] text-black-primary opacity-90" />
            </Link>
            <Link href="https://www.facebook.com/jm.1511/" target={"_blank"}>
              <FaFacebookSquare className="text-[23px] text-black-primary opacity-90" />
            </Link>
          </div>
        </div>
      </section>
      <SkillList />
      <SectionNext articles={articlesNext} />

      {/* <SectionReact articles={articlesReact} /> */}
    </div>
  );
};

export default HomePage;
