import React from "react";
import Image from "next/image";
import Link from "next/link";
const TopicsSection = () => {
  return (
    <section className="w-full py-12 ">
      <div className="max-w-container-sm mx-auto">
        <p className="inline-block uppercase text-[20px] relative after:absolute after:block after:top-full after:left-0 after:w-full after:h-[1px] after:bg-black">
          Topics
        </p>
        <h1 className="font-lora mt-[30px] text-[50px] font-semibold">
          Software Development: Front End, Database, or Backend
        </h1>
        <div className="flex gap-8 mt-8">
          <CardTopic
            src="/blog/life"
            imgUrl="/images/topic_life.webp"
            title="Life"
            para={"Choose for yourself before someone else chooses for you"}
          />
          <CardTopic
            src="/blog/work"
            imgUrl="/images/topic_work.webp"
            title="Work"
            para={"Choose for yourself before someone else chooses for you"}
          />
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
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
