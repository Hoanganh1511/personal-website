import React from "react";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <div className="relative p-[20px] pt-[40px]">
      <div className="max-w-[48rem] mx-auto ">
        <div className="mt-4 flex">
          <div className="flex-1 flex flex-col">
            <h4 className="text-[30px] font-bold font-plex-mono">About me</h4>
            <div className="">
              <div className="text-[18px]">Web Developer</div>
              <div className="mt-2 font-light text-[15px] flex gap-[20px]">
                <span className="relative after:absolute after:left-[calc(100%+10px)] after:w-[1px] after:h-full after:bg-black/50">
                  3 years exp
                </span>
                <span> 10+ projects</span>
              </div>
            </div>
          </div>
          <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden">
            <Image
              src="/images/avatar.jpg"
              alt=""
              fill
              className="rounded-full object-cover object-top"
            />
          </div>
        </div>
        <p className="mt-6 px-8 py-4 bg-gray-300/50 rounded-[12px] font-medium text-center">
          Hello, I am an web developer!
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <Section title="Work">
            <div>
              <p className="indent-4 font-light">
                I&apos;m a strength front-end developer based in Ha Noi, Viet
                Nam with passion for creating beautiful, functional, and
                user-centered experiences. I&apos;ve 3 years of experiences in
                the field. Currently, my work focuses on developing VTC Game
                landing websites for VTC Intecom must have high performance,
                meets SEO standard with SEO Quake, good stats about Core Web
                Vitals on LightHouse. I also collaborating and developing
                newsroom dashboard products for stations in the northern
                provinces such as Quang Ninh, Bac Giang, etc.
              </p>
              <br />
              <p className="indent-4 font-light">
                The goal in the next year is to continue upgrading front-end
                skills to become better. In addition, look for development
                opportunities in the back-end and the system. Desire for
                long-term development and have opportunities to advance to team
                or project management positions.
              </p>
              <br />
              <p className="indent-4 font-light">
                Recently, I’ve been focusing on web development and staying
                updated on everything happening in the field. Currently, I’m
                working on projects using React Server Components and the
                Next.js App Router.
              </p>
            </div>
          </Section>
          {/* <Section title="Bio">
            <div className="">
              <div className="flex gap-4 mb-1">
                <div className="font-bold">2000</div>
                <div className="font-light">Born in Lao Cai, Viet Nam</div>
              </div>
              <div className="flex gap-4 mb-1">
                <div className="font-bold">2018</div>
                <div className="font-light">
                  Completed the University&apos;s Program in the University of
                  Transport Technology
                </div>
              </div>
              <div className="flex gap-4 mb-1">
                <div className="font-bold">2021</div>
                <div className="font-light">
                  Start and Completed Internship Program at Bytesoft VietNam !
                </div>
              </div>
              <div className="flex gap-4 mb-1">
                <div className="font-bold">2023 - present</div>
                <div className="font-light">Start work at VTC Intecom</div>
              </div>
            </div>
          </Section>
          <Section title="I ♥">
            <div className="">
              <div className="indent-3 font-light">
                Art, Music, Vlog, Information Technology
              </div>
            </div>
          </Section> */}
        </div>
      </div>
    </div>
  );
};

export default page;
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="">
      <div
        className="relative text-[18.5px] font-bold mb-3 w-fit
        after:absolute after:-bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black/80
      "
      >
        {title}
      </div>
      {children}
    </div>
  );
};
