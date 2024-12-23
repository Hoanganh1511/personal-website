"use client";
// import { useRouter, useSearchParams, usePathname } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { GoArrowLeft, GoArrowRight } from "react-icons/go";
// import qs from "query-string";
// import { Link } from "next-view-transitions";
// const Pagination = ({
//   currentPage,
//   totalPages,
// }: {
//   currentPage: number;
//   totalPages: number;
// }) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [page, setPage] = useState<number>(Number(1));
//   useEffect(() => {
//     const currentPage = Number(searchParams.get("page") || 1);
//     setPage(currentPage);
//   }, [searchParams]);
//   const onChangePage = (pageNum: number) => {
//     const currentParams = qs.parse(searchParams.toString());

import { PaginationProps } from "@/components/layout/ListLayout";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

//     const updatedQuery = {
//       ...currentParams,
//       page: pageNum,
//     };
//     const url = qs.stringifyUrl(
//       {
//         url: window.location.pathname,
//         query: updatedQuery,
//       },
//       { skipNull: true }
//     );
//     setPage(pageNum);
//     router.push(url, { scroll: false });
//   };

//   return (
//     <>
//       <div className="flex items-center justify-center">
//         <Link
//           // disabled={page === 1}
//           // prevUrl={`/blogs?page=${Number(page) > 0 ? Number(page) - 1 : 1}`}
//           // nextUrl={`/blogs?page=${(Number(page) || 1) + 1}`}
//           href={`/blogs?page=${Number(page) > 0 ? Number(page) - 1 : 1}`}
//           // onClick={() => onChangePage(page - 1)}
//           className={`flex items-center disabled:opacity-40 ${
//             currentPage === 1 ? "pointer-events-none opacity-50" : ""
//           } hover:text-primary`}
//         >
//           <GoArrowLeft className="mr-[12px] size-[20px]" />
//           <span>Prev</span>
//         </Link>
//         <div className="mx-4">
//           {page}
//           {" / "}
//           {totalPages}
//         </div>
//         <Link
//           href={`/blogs?page=${(Number(page) || 1) + 1}`}
//           // onClick={() => onChangePage(page + 1)}
//           className={`flex items-center disabled:opacity-40 ${
//             currentPage === totalPages ? "pointer-events-none opacity-50" : ""
//           } hover:text-primary`}
//         >
//           <span>Next</span>
//           <GoArrowRight className="ml-[12px] size-[20px]" />
//         </Link>
//       </div>
//     </>
//   );
// };

// export default Pagination;
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
          <span>Prev</span>
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
          <span>Next</span>
          <IconArrowRight className="ml-[12px] size-[20px]" />
        </Link>
      </div>
    </>
  );
}
