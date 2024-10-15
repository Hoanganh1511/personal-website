import {
  BLOCKCHAIN_PROJECTS,
  DASHBOARD_PROJECTS,
  FEATURED_PROJECTS,
  PROJECT_LIST,
} from "@/data/projects";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import React from "react";
import Image from "next/image";
const ProjectsSection = () => {
  return (
    <div className="max-w-container-lg mx-auto w-full py-12">
      <h1 className="text-white text-3xl font-bold ">Projects</h1>
      <p className="text-primary mt-3">
        Some of the projects are from work and some are on my own time
      </p>
      <hr className="my-14 border-[rgba(255,255,255,0.08)]" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
        <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
          <a href={FEATURED_PROJECTS[0].url} target="_blank">
            <article className=" cursor-pointer group p-[32px] h-full">
              <div className="text-sm text-primary">Jul 1,2023</div>
              <h2 className="mt-2 text-3xl font-bold text-white/85">
                {FEATURED_PROJECTS[0].projectName}
              </h2>
              <p className="mt-3  text-white/70 group-hover:text-white/80 duration-300">
                {FEATURED_PROJECTS[0].description}
              </p>
              <div className="absolute bottom-4 md:bottom-8">
                <div className="text-white/80">Read more →</div>
              </div>
            </article>
          </a>
        </div>
        <div className="flex flex-col gap-y-8 w-full">
          {FEATURED_PROJECTS.map((project, idx) => {
            if (idx === 0) return;
            return (
              <div
                key={idx}
                className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 "
              >
                <a href={project.url}>
                  <article className="cursor-pointer group p-[32px] h-full">
                    <div className="text-sm text-primary">Jul 1,2023</div>
                    <h2 className="mt-2 text-3xl font-bold text-white/85">
                      {project.projectName}
                    </h2>
                    <p className="mt-3  text-white/70 group-hover:text-white/80 duration-300 line-clamp-4">
                      {project.description}
                    </p>
                  </article>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="mt-14 border-[rgba(255,255,255,0.08)]" />
      <div className="pt-12 grid grid-cols-3 gap-x-4">
        <div className="flex flex-col gap-y-4 w-full">
          <h3 className="text-xl text-white/75 font-bold">VTC</h3>
          {PROJECT_LIST.map((project, idx) => {
            return (
              <div
                key={idx}
                className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 "
              >
                <a>
                  <article className="cursor-pointer group p-[32px] h-full">
                    <div className="flex justify-between">
                      <div className="text-sm text-primary/80">Jul 1,2023</div>
                      <div className="flex items-center">
                        <MdOutlineRemoveRedEye className="text-primary/80 text-[16px] mr-[4px]" />
                        <span className="text-primary/80 text-xs">1.5K</span>
                      </div>
                    </div>
                    <h2 className="text-2xl text-white/80 font-bold leading-[36px]">
                      {project.projectName}
                    </h2>
                    <p className="mt-4 text-[14px] text-primary group-hover:text-white/80 duration-300 line-clamp-5">
                      {project.description}
                    </p>
                  </article>
                </a>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-y-4 w-full">
          <h3 className="text-xl text-white/75 font-bold">Marketplace</h3>
          {BLOCKCHAIN_PROJECTS.map((project, idx) => {
            return (
              <div
                key={idx}
                className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 "
              >
                <a>
                  <article className="cursor-pointer group p-[32px] h-full">
                    <div className="flex justify-between">
                      <div className="text-sm text-primary/80">Jul 1,2023</div>
                      <div className="flex items-center">
                        <MdOutlineRemoveRedEye className=" text-primary/80 text-[16px] mr-[4px]" />
                        <span className="text-primary/80 text-xs">1.5K</span>
                      </div>
                    </div>
                    <h2 className="text-white/80 text-2xl font-bold">
                      {project.projectName}
                    </h2>
                    <p className="mt-4  text-primary group-hover:text-white/80 duration-300 line-clamp-5">
                      {project.description}
                    </p>
                  </article>
                </a>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-y-4 w-full">
          <h3 className="text-xl text-white/75 font-bold">CMS / Dashboard</h3>
          {DASHBOARD_PROJECTS.map((project, idx) => {
            return (
              <div
                key={idx}
                className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 "
              >
                <a>
                  <article className="cursor-pointer group p-[32px] h-full">
                    <div className="flex justify-between">
                      <div className="text-sm text-primary/80">Jul 1,2023</div>
                      <div className="flex items-center">
                        <MdOutlineRemoveRedEye className="text-primary/80 text-[16px] mr-[4px]" />
                        <span className="text-primary/80 text-xs">1.5K</span>
                      </div>
                    </div>
                    <h2 className="text-white/80 text-2xl font-bold">
                      {project.projectName}
                    </h2>
                    <p className="mt-4  text-primary group-hover:text-white/80 duration-300 line-clamp-5">
                      {project.description}
                    </p>
                  </article>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
