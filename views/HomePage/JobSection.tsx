"use client";
import RepositoryCard from "@/components/RepositoryCard";
import { IRepo } from "@/types/apiTypes";
import React, { useEffect, useState } from "react";

const JobSection = () => {
  return (
    <div>
      <h2 className="mb-[12px] text-[18px] font-semibold text-[#d1d5db]">
        Skills
      </h2>
      <div className="mb-[20px]">
        <p className="text-[16px] leading-[1.5em] text-[#d1d5db]">
          I started programming in JavaScript around 2022 and spent almost 3
          years working with JavaScript in different companies. Currently, I
          mainly specialize in building websites with good performance and
          beautiful user interfaces. I have been using React, Next.js since 2022
          and GraphQL since 2024 and developing various products.
        </p>
      </div>
      <div className="flex gap-x-[16px]">
        <div className="max-w-[50%] w-full p-[8px] rounded-[4px] bg-[#5c5208]">
          <h3 className="mb-[8px] text-[16px] font-bold">JavaScript</h3>
          <div className="flex gap-x-[12px]">
            <ul className="max-w-[50%] w-full pl-[6px] flex flex-col gap-y-[4px]">
              {[
                "React 👷",
                "Next.js 👷",
                "TypeScript 👷",
                "Redux 👷",
                "Zustand",
                "React Query",
                "SWR 👷",
                "Mui",
                "TailwindCSS 👷",
                "Vite",
              ].map((repo, idx) => (
                <li key={idx}>
                  <div className="flex items-center justify-between">
                    <p className="text-[16px] font-medium">{repo}</p>
                    <span>2022-</span>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="max-w-[50%] w-full pl-[6px] flex flex-col gap-y-[4px]">
              {[
                "Shadcn 👷",
                "Antd",
                "Node.js 👷",
                "Express.js",
                "Nestjs",
                "NextAuth",
              ].map((repo, idx) => (
                <li key={idx}>
                  <div className="flex items-center justify-between">
                    <p className="text-[16px] font-medium">{repo}</p>
                    <span>2022 -</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-[50%] w-full p-[8px] rounded-[4px] bg-[#0c2e45]">
          <h3 className="mb-[8px] text-[16px] font-bold">Others</h3>
          <ul className="pl-[6px] flex flex-col gap-y-[4px]">
            {["AWS (Storage, Deploy, Hosting, Authen...)", "PostgresQL"].map(
              (repo, idx) => (
                <li key={idx}>
                  <div className="flex items-center justify-between">
                    <p className="text-[16px] font-medium">{repo}</p>
                    <span>2024 -</span>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobSection;
