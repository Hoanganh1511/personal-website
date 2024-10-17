"use client";
import { LEFT_SIDE_BAR, LIST_CONCEPT } from "@/data/static";
import { ICategory } from "@/types/apiTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrCertificate } from "react-icons/gr";
const Sidebar = ({ categories }: { categories: ICategory[] }) => {
  const pathname = usePathname();

  return (
    <ul className="sticky top-[110px] duration-500">
      {categories &&
        categories.length > 0 &&
        categories.map((category, idx) => (
          <li key={idx} className="mb-2">
            <Link
              href={`/category/${category.tag.current}`}
              className={`${pathname.split("/")[2] === category.tag.current ? "text-[#00c8ff]" : "text-primary hover:text-[#0080a3]"}  duration-300`}
            >
              📨 {category.description}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Sidebar;
