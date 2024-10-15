import Link from "next/link";
import React from "react";

const AboutMeSection = () => {
  return (
    <div className="max-w-container-md mx-auto w-full py-12">
      <h1 className="text-white text-3xl font-bold ">Hoàng Tuấn Anh</h1>
      <p className="text-primary mt-3">Front End Developer</p>
      <hr className="my-12 border-[rgba(255,255,255,0.06)]" />
      <section>
        <h2 className="text-2xl font-bold underline text-white/80">Work</h2>
        <p className="mt-3  text-white/85 indent-[16px] leading-[25px] duration-300">
          Tuấn Anh is a Frontend Developer with 3 years of experience in
          outsourcing and product environments. He has a knack for all things
          launching products, from planning to solving real-life problems with
          code. When not online, he loves hanging out with girl friend or play
          badminton. Currently, he is working at VTC Intecom as a FrontEnd
          Developer. Here, he specializes in web work for the company&apos;s own
          products such as: events, newsrooms, etc. Currently, I am aiming for a
          Software Engineer role to expand my skills and contribute to building
          scalable software solutions.
        </p>
        <Link
          href="/projects"
          className="mt-6 mx-auto block w-fit py-3 px-5 border-primary border-[1px] hover:underline rounded-[4px] hover: duration-100"
        >
          My Portfolio
        </Link>
      </section>
      <hr className="my-12 border-[rgba(255,255,255,0.06)]" />
      <section>
        <h2 className="text-2xl font-bold underline text-white/80">Bio</h2>
        <div className="py-4">
          <div className="text-white/65">
            <strong className="text-white/80 font-bold mr-2">2022</strong>
            Completed undergraduate program at University of Transport
            Technology
          </div>
          <div className="text-white/65">
            <strong className="text-white/80 font-bold mr-2">2022</strong>
            Worked at Bytesoft Viet Nam
          </div>
          <div className="text-white/65">
            <strong className="text-white/80 font-bold mr-2">
              2023 to present
            </strong>
            Worked at VTC Intecom
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMeSection;
