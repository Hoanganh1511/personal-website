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
import { BsStars } from "react-icons/bs";
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
        <section className="h-[1000px]">
          <div className="flex h-full">
            <div className="relative w-fit h-full bg-transparent rounded-[20px]">
              <Image
                alt=""
                width={3260}
                height={4898}
                priority
                className="sticky top-[100px] xl:w-[500px] xl:h-auto aspect-[3260/4898] rounded-[20px]  shadow-2xl"
                src="/images/peach-tree-blossom-tokyo.jpg"
              />
            </div>
            {/* <BsStars /> */}

            <div className="flex-1 pl-12">
              <div className="">
                <h1 className="text-[36px] font-bold dark:text-white">
                  Hoàng Tuấn Anh
                </h1>
                <p className="dark:text-white">Web Developer</p>
                <hr className="mt-3 border-black dark:border-white" />
              </div>
              <div className="mt-8">
                <h2 className="flex items-center text-[20px] font-semibold font-plex-mono dark:text-white">
                  Work <BsStars className="ml-2" />
                </h2>
                <p className="indent-4 mt-2 font-plex-mono dark:text-white">
                  Welcome to my blog! Here, I will be sharing my thoughts and
                  experiences about web development. My plan is to write a post
                  whenever I solve a problem that I want to remember or learn
                  something new. I hope you find something useful here. These
                  days, I mostly work with React and Next.js, so expect content
                  related to those technologies.
                </p>
                <div className="mt-6 flex items-center">
                  <p className="dark:text-white/80">Social Links:</p>
                  <div className=" ml-3 inline-flex items-center gap-x-[12px]">
                    <Link
                      href="https://github.com/Hoanganh1511"
                      target={"_blank"}
                      className="hover:scale-[1.15] duration-200"
                    >
                      <FiGithub className="text-[22px] text-black-primary dark:text-white opacity-90" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/hoanganh1511/"
                      target={"_blank"}
                      className="hover:scale-[1.15] duration-200"
                    >
                      <AiOutlineLinkedin className="text-[26px] text-black-primary dark:text-white opacity-90" />
                    </Link>
                    <Link
                      href="https://www.facebook.com/jm.1511/"
                      target={"_blank"}
                      className="hover:scale-[1.15] duration-200"
                    >
                      <FaFacebookSquare className="text-[24px] text-black-primary dark:text-white opacity-90" />
                    </Link>
                  </div>
                </div>
                <hr className="mt-3 border-black dark:border-white" />
              </div>
              {/*  */}
              <div className="mt-8">
                <h2 className="flex items-center text-[20px] font-semibold font-plex-mono dark:text-white">
                  Bio <BsStars className="ml-2" />
                </h2>
                <p className="indent-4 mt-2 font-plex-mono dark:text-white">
                  Takuya is a freelance and a full-stack developer based in
                  Osaka with a passion for building digital services/stuff he
                  wants. He has a knack for all things launching products, from
                  planning and designing all the way to solving real-life
                  problems with code. When not online, he loves hanging out with
                  his camera. Currently, he is living off of his own product
                  called Inkdrop. He publishes content for marketing his
                  products and his YouTube channel called &quot;Dev as
                  Life&quot; has more than 100k subscribers.
                </p>
                <hr className="mt-3 border-black  dark:border-white" />
              </div>
              {/*  */}
              <div className="mt-8">
                <h2 className="flex items-center text-[20px] font-semibold font-plex-mono dark:text-white">
                  I ♥ <BsStars className="ml-2" />
                </h2>
                <p className="indent-4 mt-2 font-plex-mono dark:text-white">
                  Takuya is a freelance and a full-stack developer based in
                  Osaka with a passion for building digital services/stuff he
                  wants. He has a knack for all things launching products, from
                  planning and designing all the way to solving real-life
                  problems with code. When not online, he loves hanging out with
                  his camera. Currently, he is living off of his own product
                  called Inkdrop. He publishes content for marketing his
                  products and his YouTube channel called &quot;Dev as
                  Life&quot; has more than 100k subscribers.
                </p>
                <hr className="mt-3 border-black  dark:border-white" />
              </div>
            </div>
          </div>
          {/* <div className="w-fit relative mt-[125px] ml-[20%] flex items-end">
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
            <div className="ml-4 flex items-center justify-center"></div>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default HomePage;
