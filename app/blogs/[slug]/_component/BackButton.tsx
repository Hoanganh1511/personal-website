"use client";
import React from "react";
import { IconChevronLeft } from "@tabler/icons-react";
import { useTransitionRouter } from "next-view-transitions";
const BackButton = () => {
  const router = useTransitionRouter();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        router.back();
      }}
      className="mt-[32px] mb-[8px] group flex items-center hover:opacity-80"
    >
      <IconChevronLeft className="mr-[8px]" />
      <p className="group-hover:translate-x-[2px] duration-200">Quay lại</p>
    </button>
  );
};

export default BackButton;
