import Link from "next/link";
import React from "react";
import { PiCoffeeFill } from "react-icons/pi";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { FaPersonRays } from "react-icons/fa6";
import { FaBellConcierge } from "react-icons/fa6";
import { LIST_CONCEPT } from "@/data/static";
const LeftSidebar = () => {
  return (
    <div className="sticky top-[80px] min-h-screen p-[20px]  border-r-[1px] border-black/20">
      <div className="">
        <div></div>
        <ul className="flex flex-col gap-y-[18px]">
          <li>
            <Link href="/chuyen-muc/cuoc-song">
              <>
                <PiCoffeeFill className="inline-block text-[20px] mr-[8px]" />
                <span className="text-[14px] uppercase font-semibold">
                  Cuộc sống
                </span>
              </>
            </Link>
          </li>
          <li>
            <Link href="/chuyen-muc/cuoc-song">
              <>
                <BsFillSuitcaseLgFill className="inline-block text-[20px] mr-[8px]" />
                <span className="text-[14px] uppercase font-semibold">
                  Công việc
                </span>
              </>
            </Link>
          </li>
          <li>
            <Link href="/chuyen-muc/cuoc-song">
              <>
                <FaPersonRays className="inline-block text-[20px] mr-[8px]" />
                <span className="text-[14px] uppercase font-semibold">
                  Kĩ năng mềm
                </span>
              </>
            </Link>
          </li>
          <li>
            <Link href="/chuyen-muc/cuoc-song">
              <>
                <FaBellConcierge className="inline-block text-[20px] mr-[8px]" />
                <span className="text-[14px] uppercase font-semibold">
                  Thưởng thức
                </span>
              </>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
