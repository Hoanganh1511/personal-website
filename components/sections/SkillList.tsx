import React from "react";
import { FaAws, FaReact, FaSlack, FaVuejs } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { FiFramer } from "react-icons/fi";
import { SiDevdotto, SiExpress, SiMongoose } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
const SkillList = () => {
  return (
    <section className="pb-[32px] border-b-[1px] border-primary/30">
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
    </section>
  );
};

export default SkillList;
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
