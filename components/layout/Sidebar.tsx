"use client";
import { LEFT_SIDE_BAR, LIST_CONCEPT } from "@/data/static";
import { ICategory } from "@/types/apiTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrCertificate } from "react-icons/gr";
// { categories }: { categories: ICategory[] }
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <ul className="sticky top-[56px] w-full bg-gray-800 rounded-[8px] overflow-hidden">
      <li className="">
        <Link href="/" className="">
          <div
            className={`${pathname === "/" ? "bg-white/10" : ""} hover:bg-white/10 duration-200 flex items-center gap-4 p-[16px]`}
          >
            <span className="text-[24px]">😵‍💫</span>{" "}
            <span className="font-bold text-white/85">About</span>
          </div>
        </Link>
      </li>
      <li className="">
        <Link href="/blog" className="">
          <div
            className={`${pathname === "/blog" ? "bg-white/10" : ""} hover:bg-white/10  duration-200 flex items-center gap-4 p-[16px]`}
          >
            <span className="text-[24px]">🗒</span>{" "}
            <span className="font-bold text-white/85">Blog</span>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
