"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import qs from "query-string";
const Pagination = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [page, setPage] = useState<number>(Number(1));
  useEffect(() => {
    const currentPage = Number(searchParams.get("page") || 1);
    setPage(currentPage);
  }, [searchParams]);
  const onChangePage = (pageNum: number) => {
    const currentParams = qs.parse(searchParams.toString());

    const updatedQuery = {
      ...currentParams,
      page: pageNum,
    };
    const url = qs.stringifyUrl(
      {
        url: window.location.pathname,
        query: updatedQuery,
      },
      { skipNull: true }
    );
    setPage(pageNum);
    router.push(url, { scroll: false });
  };
  const totalPages = 3;
  return (
    <>
      <div className="flex items-center justify-center">
        <button
          disabled={page === 1}
          onClick={() => onChangePage(page - 1)}
          className="flex items-center disabled:opacity-40"
        >
          <GoArrowLeft className="mr-[12px] size-[20px]" />
          <span>Prev</span>
        </button>
        <div className="mx-4">
          {page}
          {" / "}
          {totalPages}
        </div>
        <button
          disabled={page === totalPages}
          onClick={() => onChangePage(page + 1)}
          className="flex items-center disabled:opacity-40"
        >
          <span>Next</span>
          <GoArrowRight className="ml-[12px] size-[20px]" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
