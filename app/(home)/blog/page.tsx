import { getArticlesByCategory } from "@/actions/get-posts";
import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
const BlogPage = async () => {
  const [resArticlesReact, resArticlesNext, resArticlesJavascript] =
    await Promise.all([
      getArticlesByCategory({
        category: "react",
        limit: 10,
      }),
      getArticlesByCategory({
        category: "next-js",
        limit: 10,
      }),
      getArticlesByCategory({
        category: "javascript",
        limit: 10,
      }),
    ]);
  const articlesReact = resArticlesReact.data;
  const articlesNext = resArticlesNext.data;
  const articlesJavascript = resArticlesJavascript.data;
  if (!articlesReact && !articlesNext) return;
  return (
    <>
      <h1 className="text-white text-3xl font-bold ">Blog.</h1>
      <p className="text-white/70 mt-3">Musings on React, Next, and more</p>
      <hr className="my-10 border-[rgba(255,255,255,0.08)]" />
      <div className="mb-10">
        <h2 className="text-[17px] font-semibold text-[#00c8ff] mb-3">
          <span className="text-[18px] ">⚛️</span> React in 2024
        </h2>
        <ul className="pl-6">
          {articlesReact &&
            articlesReact.map((article, id) => (
              <li key={id} className="mb-3">
                <p className="text-white/75">
                  📜{" "}
                  <a
                    href={`/blog/${article._id}`}
                    className="text-[#00c8ff] font-normal hover:underline"
                  >
                    {article.title}
                  </a>
                  :&nbsp; {article.sapo}
                </p>
              </li>
            ))}
        </ul>
      </div>
      <hr className="my-10 border-[rgba(255,255,255,0.08)]" />
      <div className="mb-10">
        <h2 className="text-[17px] font-semibold text-[#00c8ff] mb-3">
          <SiNextdotjs className="inline-block text-[18px] text-white mr-[2px] mb-[1px]" />{" "}
          Next in 2024
        </h2>
        <ul className="pl-6">
          {articlesNext &&
            articlesNext.map((article, id) => (
              <li key={id} className="mb-3">
                <p className="text-white/75">
                  <a
                    href=""
                    className="text-[#00c8ff] font-normal hover:underline"
                  >
                    {article.title}
                  </a>
                  : &nbsp;{article.sapo}
                </p>
              </li>
            ))}
        </ul>
      </div>
      <hr className="my-10 border-[rgba(255,255,255,0.08)]" />
      <div className="">
        <h2 className="text-[17px] font-semibold text-[#00c8ff] mb-3">
          <IoLogoJavascript className="inline-block text-[18px] text-[#F0DB4F] mr-[2px] mb-[1px]" />{" "}
          Javascript in 2024
        </h2>
        <ul className="pl-6">
          {articlesJavascript &&
            articlesJavascript.map((article, id) => (
              <li key={id} className="mb-3">
                <p className="text-white/75">
                  <a
                    href=""
                    className="text-[#00c8ff] font-normal hover:underline"
                  >
                    {article.title}
                  </a>
                  : &nbsp;{article.sapo}
                </p>
              </li>
            ))}
        </ul>
      </div>
      {/* <hr className="my-10 border-[rgba(255,255,255,0.08)]" /> */}
    </>
  );
};

export default BlogPage;
