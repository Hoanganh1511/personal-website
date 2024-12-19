import { getArticlesByCategory } from "@/actions/get-posts";
import { formatDateTime } from "@/utils/helper";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import urlFor from "@/libs/urlFor";
import { FaAws, FaReact, FaSlack, FaVuejs } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { FiFramer } from "react-icons/fi";
import { SiDevdotto, SiExpress, SiMongoose } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
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
    limit: Number(6) || 3,
  });
  const resArticlesNext = await getArticlesByCategory({
    category: "next-js",
    limit: Number(6) || 3,
  });
  const articlesReact = resArticlesReact.data;
  const articlesNext = resArticlesNext.data;
  if (!articlesReact) return;
  return (
    <div className="pt-[40px] max-w-[1280px] mx-auto">
      <section>
        <div className="flex flex-wrap gap-x-[12px] gap-y-[10px]">
          {skillList.map((item, id) => {
            return (
              <a
                key={id}
                href=""
                className="p-[10px] text-white bg-black/90 w-fit flex items-center justify-center border-[1px] border-gray rounded-[5px] hover:scale-110 duration-200"
              >
                <item.icon className="mr-[8px] text-[20px]" />
                <p className="uppercase font-plex-mono">{item.name}</p>
              </a>
            );
          })}
        </div>
      </section>
      <section>
        <h3 className="title-separate my-[24px] flex items-center justify-center relative after:">
          <a
            href=""
            className="px-6 block bg-white text-[24px] text-[#08085e] font-bold uppercase"
          >
            React
          </a>
        </h3>
        <p className="text-center mb-8 text-gray-800">
          The science of using computer programs to sift through thousands of
          data points and then using computer programs to present that data in a
          visual format.
        </p>
        <div className="grid grid-cols-3 gap-x-[30px] gap-y-[40px]">
          {articlesReact.map((article, idx) => (
            <Link
              href=""
              key={idx}
              className="group col-span-1 w-full mx-auto border-[2px] border-black  "
            >
              <p className="h-[100px] block p-[10px] text-[20px] font-bold group-hover:underline text-[#3c3c3b]">
                {article.title}
              </p>
              <div className="relative w-full aspect-[93/50] overflow-hidden">
                <Image
                  src={urlFor(article.mainImage).url()}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-[1.05] duration-300"
                />
              </div>
              <div className="px-[20px] py-[12px]">
                <div className="flex items-center gap-x-[8px]">
                  <p className="mt-[6px] text-[14px] ">
                    {formatDateTime(article._createdAt)}
                  </p>
                </div>
                <div className="">
                  <p className="mt-[8px] text-[16px]  line-clamp-3">
                    {article.sapo}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <h3 className="title-separate my-[24px] flex items-center justify-center relative after:">
          <a
            href=""
            className="px-6 block bg-white text-[24px] text-[#08085e] font-bold uppercase"
          >
            Next.js
          </a>
        </h3>
        <p className="text-center mb-8 text-gray-800">
          The science of using computer programs to sift through thousands of
          data points and then using computer programs to present that data in a
          visual format.
        </p>
        <div className="grid grid-cols-3 gap-x-[30px] gap-y-[40px]">
          {articlesNext.map((article, idx) => (
            <Link
              href=""
              key={idx}
              className="group col-span-1  mx-auto border-[2px] border-black  "
            >
              <p className="h-[100px] block p-[10px] text-[20px] font-bold group-hover:underline text-[#3c3c3b]">
                {article.title}
              </p>
              <div className="relative w-full aspect-[93/50] overflow-hidden">
                {article.mainImage && (
                  <Image
                    src={urlFor(article.mainImage).url() || ""}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-[1.05] duration-300"
                  />
                )}
              </div>
              <div className="px-[20px] py-[12px]">
                <div className="flex items-center gap-x-[8px]">
                  <p className="mt-[6px] text-[14px] ">
                    {formatDateTime(article._createdAt)}
                  </p>
                </div>
                <div className="">
                  <p className="mt-[8px] text-[16px]  line-clamp-3">
                    {article.sapo}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
