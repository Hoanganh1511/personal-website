import React from "react";
import Image from "next/image";
import { PiBrainThin } from "react-icons/pi";
import { Link } from "next-view-transitions";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import NextBreadcrumb from "@/components/NextBreadcrumb";
import { IconChevronRight } from "@tabler/icons-react";
const page = () => {
  return (
    <div className="relative px-[1rem] ">
      <div className="max-w-[48rem] mx-auto ">
        <section className="py-5">
          <p className="text-center mb-2 font-bold">Bạn đang xem</p>
          <NextBreadcrumb
            homeElement={"Trang chủ"}
            separator={
              <span>
                <IconChevronRight className="mt-[2px] size-[16px]" />
              </span>
            }
            activeClasses=""
            containerClasses="flex items-center justify-center bg-white"
            listClasses=" mx-2 italic text-[14px] "
            capitalizeLinks
          />
        </section>
        <section>
          <div className="relative mb-8 mt-9 mx-auto w-[100px]  h-[100px] border-[2px] border-black-primary  rounded-full overflow-hidden">
            <Image
              src="/images/avatar.jpg"
              alt=""
              fill
              className="rounded-full object-cover object-top"
            />
          </div>
          <h1 className="mt-[20px] mb-[20px] lg:my-[32px] text-[22px] lg:text-[48px] text-center text-primary font-bold">
            Tôi là ai ?
          </h1>

          <ul className="px-[1rem]">
            <li className="list-disc">
              <p className="block mb-4 text-[14px] leading-[1.8rem]  font-plex-mono text-black-primary">
                Hiện tôi đang là một{" "}
                <div className="inline px-[5px] pt-[2px] pb-[3px] rounded-[4px] leading-[1.8rem] font-medium bg-gradient-to-r from-indigo-300">
                  Front End Developer
                </div>{" "}
                tại công ty VTC Intecom và đang xây dựng kiến thức nền tảng phía
                Back End để có thể tự viết dự án cho bản thân và cho các ý tưởng
                của doanh nghiệp.
              </p>
            </li>
            <li className="list-disc">
              <p className="block mb-4 text-[14px] leading-[1.8rem]  font-plex-mono text-black-primary">
                Ở thời điểm hiện tại, tôi thấy bản thân mình mạnh về Front End
                và hướng tới trở thành một chuyên gia về Front End trong tương
                lai, tuy nhiên vì bản thân làm trong ngành web thì cần phải hiểu
                biết về quá trình, kiến thức để xây dựng lên một trang web hoàn
                chỉnh như thế nào, từ những web nhỏ cho đến những web lớn phục
                vụ cho từng nhóm khách hàng cụ thể. Vậy nên, cùng với việc trở
                thành một chuyên gia Front End, tôi cũng song song bổ trợ kiến
                thức Back End, DevOps.
              </p>
            </li>
            <li className="list-disc">
              <p className="block mb-4 text-[14px] leading-[1.8rem]  font-plex-mono text-black-primary">
                Là một UTTer (sinh viên tại đại học CNGTVT) chuyên ngành IT, vào
                đầu năm 4, tôi đã tìm được một công ty thực tập để va chạm, thử
                sức và trau dồi với chuyên môn của mình là mảng web. Tại đây,
                tôi đã được tham gia vào xây dựng và phát triển các dự án:
                <ul className="">
                  <li className="">
                    <p>
                      - Cổng bình chọn Hoa hậu hoàn vũ, các cuộc thi sắc đẹp, MC
                    </p>
                  </li>
                  <li className="">
                    <p>- ERP, Hệ thống quản lý giải pháp họp cổ đông</p>
                  </li>
                  <li className="">
                    <p>- NFT Marketplace (web3)</p>
                  </li>
                </ul>
              </p>
            </li>
            <li className="list-disc">
              <p className="block mb-4 text-[14px] leading-[1.8rem]  font-plex-mono text-black-primary">
                Tôi luôn trân trọng và biết ơn công ty, đồng nghiệp đã xây dựng
                cho tôi những nền tảng kiến thức, kinh nghiệm, đó là những bước
                đẩy đầu tiên trên con đường giúp tôi trở thành một{" "}
                <div className="inline px-[5px] pt-[2px] pb-[3px] rounded-[4px] leading-[1.8rem] font-medium bg-gradient-to-r from-indigo-300">
                  Web Developer
                </div>{" "}
              </p>
            </li>
            {/* <li className="list-disc">
              <p className="block mb-4 text-[14px] leading-[1.8rem]  font-plex-mono text-black-primary"></p>
            </li> */}
          </ul>
        </section>
        {/* <div className="mt-4 flex">
          <div className="flex-1 flex flex-col"></div>
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
        </div> */}
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
// English version
// Welcome to my website! Here, I will be sharing my thoughts and
// experiences about web development. These days, I mostly work with{" "}
// <b>React</b> and <b>Next.js</b>, hope you expect content related to
// those technologies

// Welcome to my website! Here, I will be sharing my thoughts and
// experiences about web development. These days, I mostly work with{" "}
// <b>React</b> and <b>Next.js</b>, hope you expect content related to
// those technologies
