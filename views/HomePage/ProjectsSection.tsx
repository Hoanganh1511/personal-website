import React from "react";

const ProjectsSection = () => {
  return (
    <div className="max-w-container-lg mx-auto w-full py-12">
      <h1 className="text-white text-3xl font-bold ">Projects</h1>
      <p className="text-primary mt-3">
        Some of the projects are from work and some are on my own time
      </p>
      <hr className="my-12 border-[rgba(255,255,255,0.06)]" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
        <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
          <a>
            <article className="cursor-pointer group p-[20px] h-full">
              <div className="text-sm text-primary">Jul 1,2023</div>
              <h2 className="mt-2 text-2xl font-bold">Unkey.dev</h2>
              <p className="mt-3  text-primary group-hover:text-white/80 duration-300">
                Unkey is an open source API Key management solution. It allows
                you to create, manage and validate API Keys for your users. It’s
                built with security and speed in mind.
              </p>
              <div className="absolute bottom-4 md:bottom-8">
                <a href="#" className="text-white/80">
                  Read more →
                </a>
              </div>
            </article>
          </a>
        </div>
        <div className="flex flex-col gap-y-8 w-full">
          <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
            <a>
              <article className="cursor-pointer group p-[20px] h-full">
                <div className="text-sm text-primary">Jul 1,2023</div>
                <h2 className="mt-2 text-2xl font-bold">Unkey.dev</h2>
                <p className="mt-3  text-primary group-hover:text-white/80 duration-300">
                  Unkey is an open source API Key management solution. It allows
                  you to create, manage and validate API Keys for your users.
                  It’s built with security and speed in mind.
                </p>
              </article>
            </a>
          </div>
          <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
            <a>
              <article className="cursor-pointer group p-[20px] h-full">
                <div className="text-sm text-primary">Jul 1,2023</div>
                <h2 className="mt-2 text-2xl font-bold">Unkey.dev</h2>
                <p className="mt-3  text-primary group-hover:text-white/80 duration-300">
                  Unkey is an open source API Key management solution. It allows
                  you to create, manage and validate API Keys for your users.
                  It’s built with security and speed in mind.
                </p>
              </article>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
