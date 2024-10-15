import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-[32px] max-w-container-lg mx-auto ">
      <div className="py-8  ">
        <div className="flex justify-between">
          <Link href="" className="text-primary text-[24px] font-extrabold">
            Hoàng Tuấn Anh
          </Link>
          <p className="text-[15px] text-primary">
            Powered by <span className="underline">Next.js</span>
          </p>
        </div>
      </div>
      <div className="py-3 text-[14.5px] text-primary font-light text-center ">
        Copyright ©2024 by <b className="font-medium">Neil dumpling</b>
      </div>
    </div>
  );
};

export default Footer;
