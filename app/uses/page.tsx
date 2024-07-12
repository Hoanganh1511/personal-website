"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Masthead from "@/components/Masthead";
const UsesPage = () => {
  return (
    <>
      <Masthead />
      <section className="max-w-container-sm mx-auto">
        <p className="my-8 font-ibm-plex-sans">
          Là một nhà phát triển độc lập, tôi đã dành hàng giờ liền ở bàn làm
          việc của mình mỗi ngày. Vì vậy, tôi đã liên tục cải thiện không gian
          làm việc của mình để tăng năng suất. Bất cứ khi nào tôi tải lên nội
          dung mới, mọi người đều hỏi tôi sử dụng công cụ nào. Vì vậy, đây là
          một bức ảnh chụp nhanh sống động và là nơi để hướng dẫn các nhà phát
          triển tò mò khi tôi được hỏi. Hầu hết các liên kết đều là liên kết
          liên kết của amazon, vì vậy tôi sẽ trở nên giàu có nếu bạn nhấp vào
          chúng và mua thứ gì đó.{" "}
          <Link href="/" className="pl-[2px] font-medium text-[#f97316]">
            Tìm hiểu thêm
          </Link>
        </p>
      </section>
      <section className="max-w-container-sm mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="text-center mb-4">
            <div>
              <Image
                src="/images/uses1.jpg"
                alt="Thumbnail"
                width={720}
                height={720 / 1.777}
                className="border border-slate-300 rounded-xl"
              />
              <div className="mt-3 text-center font-bold text-black/70">
                Bàn làm việc IKEA KARLBY
              </div>
              <div className="opacity-70">Mặt bàn</div>
            </div>
          </li>
          <li className="text-center mb-4">
            <div>
              <Image
                src="/images/uses2.jpg"
                alt="Thumbnail"
                width={720}
                height={720 / 1.777}
                className="border border-slate-300 rounded-xl"
              />
              <div className="mt-3 text-center font-bold text-black/70">
                Bàn làm việc IKEA KARLBY
              </div>
              <div className="opacity-70">Mặt bàn</div>
            </div>
          </li>
          <li className="text-center mb-4">
            <div>
              <Image
                src="/images/uses3.jpg"
                alt="Thumbnail"
                width={720}
                height={720 / 1.777}
                className="border border-slate-300 rounded-xl"
              />
              <div className="mt-3 text-center font-bold text-black/70">
                Bàn làm việc IKEA KARLBY
              </div>
              <div className="opacity-70">Mặt bàn</div>
            </div>
          </li>
          <li className="text-center mb-4">
            <div>
              <Image
                src="/images/uses4.jpg"
                alt="Thumbnail"
                width={720}
                height={720 / 1.777}
                className="border border-slate-300 rounded-xl"
              />
              <div className="mt-3 text-center font-bold text-black/70">
                Bàn làm việc IKEA KARLBY
              </div>
              <div className="opacity-70">Mặt bàn</div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default UsesPage;
interface CardProps {
  imgUrl: string;
  title: string;
  para: string;
  src: string;
}
const CardTopic = ({ imgUrl, title, para, src }: CardProps) => {
  return (
    <Link
      href={src}
      className="max-w-[33%] p-8 hover:bg-white duration-150 rounded-md"
    >
      <Image src={imgUrl} alt="" width={225} height={225} />
      <div className="w-fit px-[24px]  mx-auto relative mt-8 my-4 text-[34px] text-center font-lora font-medium">
        {title}
      </div>
      <p className="text-[14px] text-center font-light">{para}</p>
      <div className="block w-fit mt-[15px] mx-auto">
        <div className="flex items-center text-[12px]">
          Read More <RightArrowIcon className="ml-[8px] w-[16px]" />
        </div>
      </div>
    </Link>
  );
};

const RightArrowIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="21"
    height="8"
    viewBox="0 0 21 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.354 4.354a.5.5 0 000-.708L17.172.464a.5.5 0 10-.707.708L19.293 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM0 4.5h20v-1H0v1z"
      fill="#000"
    ></path>
  </svg>
);
