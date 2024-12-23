"use client";
import { PaginationProps } from "@/components/layout/ListLayout";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  const pathname = usePathname();
  const basePath = pathname.split("/")[1];
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <>
      <div className="flex items-center justify-center">
        <Link
          // disabled={page === 1}
          // prevUrl={`/blogs?page=${Number(page) > 0 ? Number(page) - 1 : 1}`}
          // nextUrl={`/blogs?page=${(Number(page) || 1) + 1}`}
          href={
            currentPage - 1 === 1
              ? `/${basePath}`
              : `/${basePath}/page/${currentPage - 1}`
          }
          rel="prev"
          className={`flex items-center disabled:opacity-40 ${
            !prevPage ? "pointer-events-none opacity-50" : ""
          } hover:text-primary`}
        >
          <IconArrowLeft className="mr-[12px] size-[20px]" />
          <span className="group-hover:text-primary">Prev</span>
        </Link>
        <div className="mx-4">
          {currentPage}
          {" of "}
          {totalPages}
        </div>
        <Link
          href={`/${basePath}/page/${currentPage + 1}`}
          rel="next"
          className={`flex items-center disabled:opacity-40 ${
            !nextPage ? "pointer-events-none opacity-50" : ""
          } hover:text-primary`}
        >
          <span className="group-hover:text-primary">Next</span>
          <IconArrowRight className="ml-[12px] size-[20px]" />
        </Link>
      </div>
    </>
  );
}
