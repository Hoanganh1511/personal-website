"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { PROJECT_LIST } from "@/data/projects";
import { GiStrikingDiamonds } from "react-icons/gi";
import "swiper/css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const TechSection = () => {
  return (
    <div className="max-w-[calc(1240px+20px)] mx-auto  py-12">
      <div className="grid grid-cols-12 gap-[24px]">
        <div className="col-span-12">
          <div className="flex items-center">
            <GiStrikingDiamonds className="mr-2 text-blue-500 text-[24px]" />
            <h2 className="text-[20px] font-bold ">Current Projects</h2>
          </div>
        </div>
        <div className="col-span-12">
          <Swiper
            className="w-full !px-[10px]"
            slidesPerView={4}
            spaceBetween={20}
            // autoplay={{
            //   delay: 2500,
            //   // disableOnInteraction: false,
            // }}
            loop={true}
            pagination={{
              el: ".swiper-pagination",
              // dynamicBullets: true,
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  '<span class="' + className + '">' + (index + 1) + "</span>"
                );
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {PROJECT_LIST.map((project, idx) => {
              return (
                <SwiperSlide key={idx} className="py-[4px]">
                  <div className="rounded-[6px] shadow-[0_0_4px_0_grey] cursor-pointer overflow-hidden">
                    <div className="w-full aspect-[1200/628] relative">
                      <Image
                        src={project.thumbnail}
                        alt=""
                        fill
                        className="bg-contain"
                      />
                    </div>
                    <div className="px-[15px] py-[15px]">
                      <h3 className="text-[18px] font-bold line-clamp-1">
                        {project.projectName}
                      </h3>
                      <p className="mt-[8px]">{project.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="mt-[16px] px-[10px] w-full z-[3] flex items-center justify-end">
            <button className="group swiper-button-prev after:hidden !w-[28px] !h-[28px] flex items-center justify-center outline outline-[1px] rounded-[4px]  duration-200">
              <FaAngleLeft className="text-[20px] group-hover:text-black/80 group-hover:p-[1px] duration-200" />
            </button>
            <div className="mx-[28px]">
              <div className="text-[19px] font-bold text-black/80 hover:underline cursor-pointer">
                More
              </div>
            </div>
            <button className="group swiper-button-next after:hidden !w-[28px] !h-[28px] flex items-center justify-center  outline outline-[1px] rounded-[4px] duration-200">
              <FaAngleRight className="text-[20px] group-hover:text-black/80 group-hover:p-[1px] duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TechSection;
