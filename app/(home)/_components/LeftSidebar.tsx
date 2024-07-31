"use client";
import { getAllCategory } from "@/actions/get-category";
import { LEFT_SIDE_BAR, LIST_CONCEPT } from "@/data/static";
import { ICategory } from "@/types/apiTypes";
import React, { useEffect, useState } from "react";
const LeftSidebar = () => {
  const [list, setList] = useState<ICategory[]>([]);
  useEffect(() => {
    getAllCategory().then((res) => {
      setList(res);
      console.log(res);
    });
  }, []);

  return (
    <div className="sticky top-[90px] p-[20px]">
      <div>
        <div className="block pl-[20px] mb-[12px] text-[20px] font-semibold uppercase text-custom-blue">
          Danh sách chủ đề
        </div>
        <ul className="">
          {LEFT_SIDE_BAR.map((e, i) => {
            return (
              <li key={i}>
                <a
                  href={e.href}
                  className=" relative flex items-center py-[10px] pl-[20px] rounded-tl-[18px] rounded-bl-[18px] hover:bg-black/10 hover:after:block duration-300 cursor-pointer
                         after:absolute after:top-0 after:right-0 after:w-[4px] after:h-full after:bg-black/70 after:hidden after:duration-300
                  "
                >
                  <e.icon className="inline-block mr-[8px] text-gray-500 text-[18px] " />
                  <span className="text-gray-500 uppercase font-medium">
                    {e.text}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <span className="block my-4" />
        <div className="block pl-[20px] mb-[12px] text-[20px] font-semibold uppercase text-custom-blue">
          Software Series
        </div>
        <ul className="">
          {SERIES.map((e, i) => {
            return (
              <li key={i}>
                <a
                  href={e.href}
                  className=" relative flex items-center py-[10px] pl-[20px] rounded-tl-[18px] rounded-bl-[18px] hover:bg-black/10 hover:after:block duration-300 cursor-pointer
                         after:absolute after:top-0 after:right-0 after:w-[4px] after:h-full after:bg-black/70 after:hidden after:duration-300
                  "
                >
                  <e.icon className="inline-block mr-[8px] text-gray-500 text-[18px] " />
                  <span className="text-gray-500 uppercase font-medium">
                    {e.text}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-4" />
      <div className="">
        <span className="block pl-[20px] mb-[12px] text-[20px] font-semibold uppercase text-custom-blue">
          Chủ đề
        </span>
        <ul>
          {LIST_CONCEPT.map((item, id) => {
            return (
              <li key={id}>
                <a
                  href={`/category/${item.tag}`}
                  className=" relative flex items-center py-[10px] pl-[20px] rounded-tl-[18px] rounded-bl-[18px] hover:bg-black/10 hover:after:block duration-300 cursor-pointer
                         after:absolute after:top-0 after:right-0 after:w-[4px] after:h-full after:bg-black/70 after:hidden after:duration-300
                  "
                >
                  {/* <item.icon className="inline-block mr-[8px] text-gray-500 text-[18px] " /> */}
                  <span className="text-gray-500 text-[17px] font-medium">
                    {item.title}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
