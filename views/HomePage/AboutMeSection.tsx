import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdChevronRight } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGlobeAsia } from "react-icons/fa";
const AboutMeSection = () => {
  return (
    <div className="max-w-container-md mx-auto w-full py-8 grid grid-cols-12 gap-x-[60px]">
      <div className="col-span-3">
        <Image
          src="/images/avatar-profile.jpg"
          width={160}
          height={160}
          className="block mx-auto size-[160px] rounded-full border-[1px] border-white/40"
          alt=""
        />
        <div className="my-4 flex items-center justify-center">
          <FaGlobeAsia className="mr-[8px] text-[#fecc55]" />
          Asia/Vietnam
        </div>
        <ul className="flex items-center justify-center gap-x-3 ">
          <li className="border-[1px] border-white/30 rounded-[8px] px-[8px] py-[4px] text-[14px]">
            <p>Vietnamese</p>
          </li>
          <li className="border-[1px] border-white/30 rounded-[8px] px-[8px] py-[4px] text-[14px]">
            <p>English</p>
          </li>
        </ul>
      </div>
      <div className="col-span-9 pl-[30px]">
        <h1 className="text-white text-[55px] font-extrabold leading-[55px]">
          Hoàng Tuấn Anh
        </h1>
        <p className="text-[28px] text-white/85 font-light leading-[28px] mt-5">
          Front End Developer
        </p>
        <ul className="flex items-center gap-x-3 mt-8">
          <li>
            <Link
              href="#"
              className="px-[8px] py-[8px] flex items-center rounded-[8px] border-[1px] border-primary hover:bg-[rgba(149,149,149,0.08)] hover:border-white/70  duration-200"
            >
              <FaGithub className="mr-[6px]" />
              <span className="leading-[16px] font-semibold text-[14px]">
                Github
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="px-[8px] py-[8px] flex items-center rounded-[8px] border-[1px] border-primary hover:bg-[rgba(149,149,149,0.08)] hover:border-white/70  duration-200"
            >
              <FaLinkedin className="mr-[6px]" />
              <span className="leading-[16px] font-semibold text-[14px]">
                LinkedIn
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="px-[8px] py-[8px] flex items-center rounded-[8px] border-[1px] border-primary hover:bg-[rgba(149,149,149,0.08)] hover:border-white/70  duration-200"
            >
              <MdEmail className="mr-[6px]" />
              <span className="leading-[16px] font-semibold text-[14px]">
                Email
              </span>
            </Link>
          </li>
        </ul>
        <div className="mt-6">
          <p className="text-[14px]">
            <strong>Tech Stack:</strong>
          </p>
        </div>
        <ul className="pt-4 flex items-center flex-wrap gap-x-2 gap-y-2">
          {[
            { title: "Javascript" },
            { title: "React/Next" },
            { title: "TypeScript" },
            { title: "ECMAScript" },
            { title: "AWS" },
            { title: "Node" },
          ].map((item, idx) => (
            <li key={idx} className="">
              <div className="text-[13px] py-[4px] px-[10px] border-[1px] border-white/25 rounded-[4px] bg-white/5 hover:bg-white/10 cursor-pointer duration-150">
                {item.title}
              </div>
            </li>
          ))}
          <li className="">
            <Link
              href="#"
              className="text-[13px] text-[#00c8ff] hover:underline"
            >
              View detail technologies I use...
            </Link>
          </li>
        </ul>
        <div className="mt-6">
          <p className="text-[14px]">
            <strong>Incoming Technologies:</strong>
          </p>
        </div>
        <ul className="pt-4 flex items-center flex-wrap gap-x-2 gap-y-2">
          {[
            { title: "Mobile: React Native" },
            { title: "Web: Vue" },
            { title: "Nest.js" },
            { title: "GraphQL" },
            { title: "Storybook" },
            { title: "Supabase" },
            { title: "PostgreQL" },
            { title: "Docker" },
            { title: "Machine Learning" },
            { title: "Foundation" },
          ].map((item, idx) => (
            <li key={idx} className="">
              <div className="text-[13px] py-[4px] px-[10px] border-[1px] border-white/25 rounded-[4px] bg-white/5 hover:bg-white/10 cursor-pointer duration-150">
                {item.title}
              </div>
            </li>
          ))}
        </ul>
        {/* <hr className="my-10 border-[rgba(255,255,255,0.06)]" /> */}
        <section className="pt-6">
          {/* <h2 className="text-2xl font-bold underline text-white/80">Work</h2> */}
          <p className="mt-3 font-light text-white/85 indent-[16px] leading-[25px] duration-300">
            Tuấn Anh is a Frontend Developer with 3 years of experience in
            outsourcing and product environments. He has a knack for all things
            launching products, from planning to solving real-life problems with
            code. When not online, he loves hanging out with girl friend or play
            badminton. Currently, he is working at{" "}
            <strong className="font-bold italic text-white">VTC Intecom</strong>{" "}
            as a FrontEnd Developer. Here, he specializes in web work for the
            company&apos;s own products such as: events, newsrooms, etc.
            Currently, I am aiming for a Software Engineer role to expand my
            skills and contribute to building scalable software solutions.
          </p>
          <Link
            href="/projects"
            className="mt-8 mx-auto flex items-center w-fit py-2 px-5 border-primary text-black/90 font-semibold bg-[#D6C0B3] border-[1px] hover:underline rounded-[4px] hover: duration-100"
          >
            My Portfolio <MdChevronRight className="mt-[4px] text-[20px]" />
          </Link>
        </section>
        {/* <hr className="my-10 border-[rgba(255,255,255,0.06)]" /> */}
        <section className="pt-6">
          {/* <h2 className="text-2xl font-bold underline text-white/80">Bio</h2> */}
          <div className="py-4">
            <div className="text-white/90 font-light">
              <strong className="text-white/90 font-normal mr-2">2022</strong>
              Completed undergraduate program at University of Transport
              Technology
            </div>
            <div className="text-white/90 font-light">
              <strong className="text-white/90 font-normal mr-2">2022</strong>
              Worked at Bytesoft Viet Nam
            </div>
            <div className="text-white/90 font-light">
              <strong className="text-white/90 font-normal mr-2">
                2023 to present
              </strong>
              Worked at VTC Intecom
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMeSection;
