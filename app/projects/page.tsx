"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
const ProjectsPage = () => {
  return (
    <div className="relative p-[20px] pt-[40px]">
      <div className="max-w-container-md mx-auto">
        <div className="flex relative">
          <div className="min-w-[200px] border-r border-black/10">
            <div className="sticky top-[120px]  block w-fit h-[200px] font-bold text-[24px] mt-4">
              VTC Intecom
            </div>
          </div>
          <div className="pl-[20px] pb-[40px] flex-1 grid grid-cols-2 gap-x-5 gap-y-10">
            {PROJECTS_VTC.map((item, idx) => {
              return (
                <Link
                  href={item?.isPrivate ? "" : "/projects/${item.id}"}
                  scroll={item?.isPrivate ? true : false}
                  key={idx}
                  className={`relative p-0 group flex flex-col items-center gap-[15px]  overflow-hidden duration-150 
                  ${item?.isPrivate ? "cursor-not-allowed" : "cursor-pointer"}
                  `}
                >
                  {item?.isPrivate && (
                    <div className="pointer-events-none flex absolute z-[2] top-0 left-0 w-full h-full bg-black/50  justify-center items-center">
                      <p className="text-[30px] uppercase text-white">
                        Private
                      </p>
                    </div>
                  )}
                  <div className="relative w-full">
                    <Image
                      src={item.thumbnail}
                      alt=""
                      width={500}
                      height={300}
                      className={`w-full h-[180px] object-cover object-center duration-500`}
                    />
                  </div>
                  <div className="flex-1 px-6 pb-6">
                    <div className=" text-center text-[20px] font-semibold mt-0 group-hover:text-black/60 uppercase">
                      {item.projectName}
                    </div>

                    <p className="text-[13.5px] text-black/70 mt-2 line-clamp-3 italic">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
const PROJECTS_VTC = [
  {
    id: 0,
    projectName: "Phi Đội - Sinh nhật 18th",
    description:
      "VTC Game chính thức trình làng Au 2 PC: Game Âm nhạc - Thời trang - Hẹn hò mới nhất trên máy tính. Đây được đánh giá là một trong những sự kiện hấp dẫn nhất ...",

    thumbnail: "/images/vtc-academy.png",
    url: "https://vtcgame.edu.vn/",
  },
  {
    id: 1,
    projectName: "Game Academy",
    description:
      "VTC Game chính thức trình làng Au 2 PC: Game Âm nhạc - Thời trang - Hẹn hò mới nhất trên máy tính. Đây được đánh giá là một trong những sự kiện hấp dẫn nhất ...",

    thumbnail: "/images/vtc-academy.png",
    url: "https://vtcgame.edu.vn/",
  },
  {
    id: 2,
    projectName: "Sát hạch số",
    description:
      "VTC Game chính thức trình làng Au 2 PC: Game Âm nhạc - Thời trang - Hẹn hò mới nhất trên máy tính. Đây được đánh giá là một trong những sự kiện hấp dẫn nhất ...",
    thumbnail: "/images/project-au.jpg",
  },
  {
    id: 3,
    projectName: "Tòa soạn hội tụ",
    description:
      "VTC Game chính thức trình làng Au 2 PC: Game Âm nhạc - Thời trang - Hẹn hò mới nhất trên máy tính. Đây được đánh giá là một trong những sự kiện hấp dẫn nhất ...",
    thumbnail: "/images/project-au.jpg",
  },
  {
    id: 4,
    projectName: "AuPC",
    description:
      "VTC Game chính thức trình làng Au 2 PC: Game Âm nhạc - Thời trang - Hẹn hò mới nhất trên máy tính. Đây được đánh giá là một trong những sự kiện hấp dẫn nhất ...",
    thumbnail: "/images/project-au.jpg",
  },
  {
    id: 5,
    projectName: "AuLeague",
    description:
      "VTC Game chính thức trình làng Au 2 PC: Game Âm nhạc - Thời trang - Hẹn hò mới nhất trên máy tính. Đây được đánh giá là một trong những sự kiện hấp dẫn nhất ...",
    thumbnail: "/images/project-au.jpg",
  },

  {
    id: 6,
    projectName: "Au2Mobile",
    description:
      "VTC Game chính thức trình làng Au 2 PC: Game Âm nhạc - Thời trang - Hẹn hò mới nhất trên máy tính. Đây được đánh giá là một trong những sự kiện hấp dẫn nhất ...",
    thumbnail: "/images/project-au2.jpg",
  },
  {
    id: 7,
    projectName: "Au2Mobile - VIP",
    description:
      "VTC Game chính thức trình làng Au 2 PC: Game Âm nhạc - Thời trang - Hẹn hò mới nhất trên máy tính. Đây được đánh giá là một trong những sự kiện hấp dẫn nhất ...",
    thumbnail: "/images/project-au.jpg",
  },
  {
    id: 8,
    projectName: "AuPC - Local Spin",
    description:
      "VTC Game chính thức trình làng Au 2 PC: Game Âm nhạc - Thời trang - Hẹn hò mới nhất trên máy tính. Đây được đánh giá là một trong những sự kiện hấp dẫn nhất ...",
    thumbnail: "/images/project-au.jpg",
  },
  {
    id: 9,
    projectName: "Blockchain Game - Marketplace",
    description:
      "VTC Game chính thức trình làng Au 2 PC: Game Âm nhạc - Thời trang - Hẹn hò mới nhất trên máy tính. Đây được đánh giá là một trong những sự kiện hấp dẫn nhất ...",
    thumbnail: "/images/project-au.jpg",
    isPrivate: true,
  },
  {
    id: 10,
    projectName: "Bvote - Cổng bình chọn Hoa Hậu Hoàn Vũ",
    description:
      "VTC Game chính thức trình làng Au 2 PC: Game Âm nhạc - Thời trang - Hẹn hò mới nhất trên máy tính. Đây được đánh giá là một trong những sự kiện hấp dẫn nhất ...",
    thumbnail: "/images/project-au.jpg",
  },
  {
    id: 11,
    projectName: "Bvote - Giải pháp họp đại hội đồng cổ đông trực tuyến",
    description:
      "VTC Game chính thức trình làng Au 2 PC: Game Âm nhạc - Thời trang - Hẹn hò mới nhất trên máy tính. Đây được đánh giá là một trong những sự kiện hấp dẫn nhất ...",
    thumbnail: "/images/project-au.jpg",
  },
  {
    id: 12,
    projectName: "BOffice",
    description:
      "VTC Game chính thức trình làng Au 2 PC: Game Âm nhạc - Thời trang - Hẹn hò mới nhất trên máy tính. Đây được đánh giá là một trong những sự kiện hấp dẫn nhất ...",
    techs: ["React", "Redux", "Styled-components"],
    thumbnail: "/images/project-au.jpg",
  },
  {
    id: 12,
    projectName: "Avatar Art - NFT Market place",
    description:
      "VTC Game chính thức trình làng Au 2 PC: Game Âm nhạc - Thời trang - Hẹn hò mới nhất trên máy tính. Đây được đánh giá là một trong những sự kiện hấp dẫn nhất ...",
    thumbnail: "/images/project-au.jpg",
  },
];
const PROJECTS_BYTESOFT = [
  {
    id: 1,
    projectName: "Blockchain Game - Marketplace",
    description:
      "VTC Game chính thức trình làng Au 2 PC: Game Âm nhạc - Thời trang - Hẹn hò mới nhất trên máy tính. Đây được đánh giá là một trong những sự kiện hấp dẫn nhất ...",
    thumbnail: "/images/project-au.jpg",
  },
  {
    id: 1,
    projectName: "Bvote - Cổng bình chọn Hoa Hậu Hoàn Vũ",
    description:
      "VTC Game chính thức trình làng Au 2 PC: Game Âm nhạc - Thời trang - Hẹn hò mới nhất trên máy tính. Đây được đánh giá là một trong những sự kiện hấp dẫn nhất ...",
    thumbnail: "/images/project-au.jpg",
  },
  {
    id: 1,
    projectName: "BOffice",
    description:
      "VTC Game chính thức trình làng Au 2 PC: Game Âm nhạc - Thời trang - Hẹn hò mới nhất trên máy tính. Đây được đánh giá là một trong những sự kiện hấp dẫn nhất ...",
    techs: ["React", "Redux", "Styled-components"],
    thumbnail: "/images/project-au.jpg",
  },
  {
    id: 1,
    projectName: "Avatar Art - NFT Market place",
    description:
      "VTC Game chính thức trình làng Au 2 PC: Game Âm nhạc - Thời trang - Hẹn hò mới nhất trên máy tính. Đây được đánh giá là một trong những sự kiện hấp dẫn nhất ...",
    thumbnail: "/images/project-au.jpg",
  },
];
