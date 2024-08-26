"use client";
import { LEFT_SIDE_BAR, LIST_CONCEPT } from "@/data/static";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrCertificate } from "react-icons/gr";
const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-[90px]  pr-[40px] ">
      <div className="my-4" />
      <div className="">
        <span className="block mb-[12px] text-[20px] font-semibold uppercase text-custom-blue">
          Chủ đề
        </span>
        <ul>
          {LIST_CONCEPT.map((item, id) => {
            const category = pathname.split("/")[2];
            return (
              <li key={id}>
                <a
                  href={`/category/${item.tag}`}
                  className={` relative flex items-center py-[10px] pl-[20px] rounded-tl-[18px] rounded-bl-[18px] hover:bg-black/10 hover:after:block duration-300 cursor-pointer
                         after:absolute after:top-0 after:right-0 after:w-[4px] after:h-full after:bg-black/70 after:hidden after:duration-300
                       
                         `}
                >
                  <span
                    className={` text-[17px] font-medium  ${category === item.tag ? "text-blue-500" : "text-gray-500"}`}
                  >
                    {item.title}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-4" />
      <div>
        <div className="block mb-[12px] ">
          <div className="flex items-center ">
            <span className="block mb-[12px] text-[20px] font-semibold uppercase text-custom-blue">
              Certificates
            </span>
          </div>
        </div>
        <div className="bg-black/80 p-[16px]">
          <svg
            width={180}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1893.7 206.3"
          >
            <path
              fill="#fff"
              d="M145.3 0H101c-1.7 0-3.1 1.4-3.1 3.1v72.5H50.5V3.1c0-1.7-1.4-3.1-3.1-3.1H3.1C1.4 0 0 1.4 0 3.1v196.6c0 1.7 1.4 3.1 3.1 3.1h44.2c1.7 0 3.1-1.4 3.1-3.1v-78.9h47.4v78.9c0 1.7 1.4 3.1 3.1 3.1h44.4c1.7 0 3.1-1.4 3.1-3.1V3.1c0-1.7-1.4-3.1-3.1-3.1zm107.2 43.4c-13.1 0-25.9 2-37.9 5.9-11.9 3.9-23.2 8.8-33.6 14.7-1.5.8-2 2.7-1.2 4.2l15.7 28.9c.8 1.5 2.7 2.1 4.2 1.3 8.2-4.1 16.1-7.5 23.3-9.9 7-2.4 14-3.6 20.8-3.6 9.5 0 16.6 1.7 21.2 5.1 3.6 2.7 5.9 6.1 7 10.5-16.3 1.1-30.5 2.9-42.2 5.4-12.7 2.8-23.3 6.5-31.5 11-8.4 4.7-14.6 10.5-18.5 17.3S174 149 174 157.9c0 6.8 1.3 13.2 3.7 19 2.5 5.8 6 10.9 10.5 15.3s10 7.9 16.5 10.3c6.4 2.4 13.6 3.7 21.6 3.7 10 0 19.9-2.1 29.3-6.1 8.1-3.5 15.7-7.8 22.7-12.8l2.5 12.8c.3 1.5 1.6 2.5 3.1 2.5h36.2c1.7 0 3.1-1.4 3.1-3.1v-85.6c0-23.7-6.4-41.6-19.1-53.3-12.7-11.4-30-17.2-51.6-17.2zm20.1 109.8c-4.7 3.5-9.6 6.4-14.8 8.8-5.4 2.5-11.2 3.8-17.4 3.8-5.8 0-10.4-1-13.6-3-2.8-1.7-4.1-4.3-4.1-8 0-2.6.7-5.1 2.1-7.4s4-4.4 7.6-6.2c4-2 9.5-3.7 16.4-5 6.4-1.2 14.3-2.2 23.7-2.8l.1 19.8zm210.5-1.6c-.5-.7-1.2-1.2-2.1-1.4-.8-.2-1.7 0-2.4.5-5 3.7-10.8 6.9-17.2 9.6-6.2 2.6-13.1 4-20.5 4-11.7 0-20.9-3.5-28.1-10.5-7.2-7.1-10.7-16.5-10.7-28.8s3.6-21.7 11.1-28.8c7.4-7 17.2-10.6 29.2-10.6 10.3 0 20.9 3.8 31.3 11.2 1.4 1 3.3.7 4.3-.7l20.5-27.4c1-1.3.8-3.1-.4-4.2-6.7-6-15.1-11.1-24.9-15.1-19.4-7.8-45.3-7.9-67.1-.5-10.8 3.6-20.4 8.9-28.6 15.8-8.2 6.9-14.9 15.5-19.8 25.6-4.9 10.1-7.4 21.8-7.4 34.7 0 12.8 2.2 24.5 6.6 34.6 4.4 10.1 10.6 18.8 18.4 25.7 7.8 6.9 17 12.2 27.4 15.8 10.3 3.6 21.7 5.5 33.9 5.5 10.5 0 21.5-1.8 32.8-5.4s21.7-9.5 31.1-17.3c1.2-1 1.5-2.8.6-4.1l-18-28.2zm142.3-39.7l55-59.6c.8-.9 1.1-2.2.6-3.4-.5-1.1-1.6-1.9-2.9-1.9h-48.5c-.9 0-1.7.4-2.3 1l-50.6 54.2V3c0-1.7-1.4-3.1-3.1-3.1h-44.3c-1.7 0-3.1 1.4-3.1 3.1v196.6c0 1.7 1.4 3.1 3.1 3.1h44.3c1.7 0 3.1-1.4 3.1-3.1v-35.8l18.6-18.1 36.8 55.6c.6.9 1.6 1.4 2.6 1.4h47.9c1.2 0 2.2-.7 2.8-1.7.5-1 .5-2.3-.2-3.2l-59.8-85.9zm198.1-47c-6.1-6.8-13.9-12.1-23.1-15.9-9.2-3.8-19.8-5.7-31.6-5.7-10.4 0-20.6 1.9-30.2 5.6-9.7 3.7-18.4 9.2-25.9 16.2s-13.6 15.6-18.1 25.6-6.8 21.5-6.8 34.1c0 12.9 2.3 24.4 6.8 34.4s10.7 18.6 18.4 25.6 16.9 12.4 27.3 16c10.3 3.6 21.6 5.5 33.6 5.5 10.3 0 21-1.6 31.6-4.8 10.7-3.2 20.5-7.6 29.1-13.2 1.4-.9 1.8-2.7 1.1-4.1l-14.4-26.4c-.8-1.5-2.7-2.1-4.2-1.3-6.4 3.3-12.7 5.8-18.6 7.5-5.8 1.6-12.1 2.4-18.6 2.4-10.4 0-19.3-2.4-26.6-7.2-6.3-4.1-10.5-10.4-12.9-19.1h96.8c1.5 0 2.7-1 3.1-2.5.4-1.9.8-4.5 1.3-8 .4-3.4.6-7.3.6-11.4 0-10.5-1.6-20.5-4.7-29.5-3.2-9-7.9-17.1-14-23.8zm-83.7 41.5c1.9-7.3 5.3-12.9 10.2-16.5 5.8-4.3 12.3-6.5 19.7-6.5 9.2 0 15.9 2.4 19.9 7 3.5 4.2 5.6 9.5 6.1 15.9h-55.9v.1zm271.4-56.7c-4.6-2.1-9.1-3.7-13.4-4.7-4.3-1.1-10-1.6-16.9-1.6-12.5 0-24.4 3.1-35.3 9.3-9 5.1-17 12.6-23.9 22.2l-2.8-25.1c-.2-1.6-1.5-2.8-3.1-2.8h-36.2c-1.7 0-3.1 1.4-3.1 3.1v149.5c0 1.7 1.4 3.1 3.1 3.1h44.3c1.7 0 3.1-1.4 3.1-3.1v-77.1c6.1-12.5 13.3-21.4 21.5-26.4 8.4-5.1 17-7.7 25.7-7.7 5.4 0 9.9.3 13.4 1 3.6.7 7.7 1.7 12.2 3.1.8.3 1.7.1 2.5-.3.7-.4 1.3-1.1 1.5-2l9-37.1c.5-1.3-.2-2.8-1.6-3.4zm140.7 72.7c9.5-4.8 17.4-11.7 23.5-20.6 6.8-9.8 10.2-22.4 10.2-37.5 0-12.1-2.1-22.4-6.4-30.7s-10.1-15-17.5-20c-7.2-4.9-15.7-8.5-25.2-10.6-9.3-2-19.4-3.1-30.1-3.1h-69.6c-1.7 0-3.1 1.4-3.1 3.1v196.6c0 1.7 1.4 3.1 3.1 3.1h44.3c1.7 0 3.1-1.4 3.1-3.1v-67.7h18.2l36.8 69.2c.5 1 1.6 1.7 2.8 1.7h49.7c1.1 0 2.1-.6 2.7-1.6s.6-2.2 0-3.1l-42.5-75.7zm-49-32h-18.6V41.5h18.6c11.2 0 19.7 1.8 25.1 5.2 5.1 3.2 7.6 9 7.6 17.5 0 17.9-10.4 26.2-32.7 26.2zm179.2-47c-13.1 0-25.9 2-37.9 5.9-11.9 3.9-23.2 8.8-33.6 14.7-1.5.8-2 2.7-1.2 4.2l15.7 28.9c.8 1.5 2.7 2.1 4.2 1.3 8.2-4.1 16.1-7.5 23.3-9.9 7-2.4 14-3.6 20.8-3.6 9.5 0 16.6 1.7 21.2 5.1 3.6 2.7 5.9 6.1 7 10.5-16.3 1.1-30.5 2.9-42.2 5.4-12.7 2.8-23.3 6.5-31.5 11-8.4 4.7-14.6 10.5-18.5 17.3s-5.8 14.8-5.8 23.7c0 6.8 1.3 13.2 3.7 19 2.5 5.8 6 10.9 10.5 15.3s10 7.9 16.5 10.3c6.4 2.4 13.6 3.7 21.6 3.7 10 0 19.9-2.1 29.3-6.1 8.1-3.5 15.7-7.8 22.7-12.8l2.5 12.8c.3 1.5 1.6 2.5 3.1 2.5h36.2c1.7 0 3.1-1.4 3.1-3.1v-85.6c0-23.7-6.4-41.6-19.1-53.3-12.6-11.4-29.9-17.2-51.6-17.2zm20.1 109.8c-4.7 3.5-9.6 6.4-14.8 8.8-5.4 2.5-11.2 3.8-17.4 3.8-5.8 0-10.4-1-13.6-3-2.8-1.7-4.1-4.3-4.1-8 0-2.6.7-5.1 2.1-7.4s4-4.4 7.6-6.2c4-2 9.5-3.7 16.4-5 6.4-1.2 14.3-2.2 23.7-2.8v19.8h.1zm178.5-109.8c-11.7 0-22.1 2.5-30.9 7.3-7.2 4-13.7 8.7-19.6 14l-2.5-15c-.3-1.5-1.6-2.6-3.1-2.6h-36.2c-1.7 0-3.1 1.4-3.1 3.1v149.5c0 1.7 1.4 3.1 3.1 3.1h44.3c1.7 0 3.1-1.4 3.1-3.1v-98.5c4.7-4.6 9-8 13.1-10.4 4-2.3 8.8-3.5 14.3-3.5 7.1 0 12 1.9 14.6 5.6 2.8 4.1 4.3 10.9 4.3 20.2v86.5c0 1.7 1.4 3.1 3.1 3.1h44.3c1.7 0 3.1-1.4 3.1-3.1v-92.2c0-19.5-4.2-35.1-12.4-46.5-8.2-11.6-21.6-17.5-39.5-17.5zm243.8 154.5l-59.8-86 55-59.6c.8-.9 1.1-2.2.6-3.4-.5-1.1-1.6-1.9-2.9-1.9h-48.5c-.9 0-1.7.4-2.3 1l-50.6 54.2V3c0-1.7-1.4-3.1-3.1-3.1h-44.3c-1.7 0-3.1 1.4-3.1 3.1v196.6c0 1.7 1.4 3.1 3.1 3.1h44.3c1.7 0 3.1-1.4 3.1-3.1v-35.8l18.6-18.1 36.7 55.7c.6.9 1.6 1.4 2.6 1.4h47.9c1.2 0 2.2-.7 2.8-1.7.6-1 .5-2.3-.1-3.2z"
            />
            <path
              fill="#2ec866"
              d="M1890.6 202.8c1.7 0 3.1-1.4 3.1-3.1V3.1c0-1.7-1.4-3.1-3.1-3.1h-142.3c-1.7 0-3.1 1.4-3.1 3.1v196.6c0 1.7 1.4 3.1 3.1 3.1h142.3z"
            />
          </svg>
        </div>
        <div className="mt-4 flex flex-col gap-y-4">
          <Link
            href="https://www.hackerrank.com/certificates/cc72fb8981f4"
            className="bg-gray-200/80 hover:underline px-[12px] py-[12px] rounded-[4px]"
          >
            Rest API (Intermediate) Certificate
          </Link>
          <Link
            href="https://www.hackerrank.com/certificates/90abdd897eea"
            className="bg-gray-200/80 hover:underline px-[12px] py-[12px] rounded-[4px]"
          >
            Frontend Developer (React) Certificate
          </Link>
        </div>
      </div>
      <div className="my-4" />
      <div>
        <div className="block mb-[12px] ">
          <div className="flex items-center ">
            <span className="block mb-[12px] text-[20px] font-semibold uppercase text-custom-blue">
              Tech Stack
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-4">
          <span className="inline-block px-[12px] py-[3px] bg-black/80 text-white border-[1px] border-black/80  rounded-[15px] cursor-pointer hover:bg-white hover:border-black hover:text-black duration-200">
            ReactJS
          </span>
          <span className="inline-block px-[12px] py-[3px] bg-black/80 text-white border-[1px] border-black/80  rounded-[15px] cursor-pointer hover:bg-white hover:border-black hover:text-black duration-200">
            NextJS
          </span>
          <span className="inline-block px-[12px] py-[3px] bg-black/80 text-white border-[1px] border-black/80  rounded-[15px] cursor-pointer hover:bg-white hover:border-black hover:text-black duration-200">
            JavaScript
          </span>
          <span className="inline-block px-[12px] py-[3px] bg-black/80 text-white border-[1px] border-black/80  rounded-[15px] cursor-pointer hover:bg-white hover:border-black hover:text-black duration-200">
            TypeScript
          </span>
          <span className="inline-block px-[12px] py-[3px] bg-black/80 text-white border-[1px] border-black/80  rounded-[15px] cursor-pointer hover:bg-white hover:border-black hover:text-black duration-200">
            RESTful
          </span>
          <span className="inline-block px-[12px] py-[3px] bg-black/80 text-white border-[1px] border-black/80  rounded-[15px] cursor-pointer hover:bg-white hover:border-black hover:text-black duration-200">
            GraphQL
          </span>
          <span className="inline-block px-[12px] py-[3px] bg-black/80 text-white border-[1px] border-black/80  rounded-[15px] cursor-pointer hover:bg-white hover:border-black hover:text-black duration-200">
            NodeJS
          </span>
          <span className="inline-block px-[12px] py-[3px] bg-black/80 text-white border-[1px] border-black/80  rounded-[15px] cursor-pointer hover:bg-white hover:border-black hover:text-black duration-200">
            ExpressJS
          </span>
          <span className="inline-block px-[12px] py-[3px] bg-black/80 text-white border-[1px] border-black/80  rounded-[15px] cursor-pointer hover:bg-white hover:border-black hover:text-black duration-200">
            AWS
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
