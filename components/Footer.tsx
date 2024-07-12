import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-[32px] max-w-container-lg mx-auto ">
      <div className="py-8 border-t border-b border-black/20">
        <div className="flex justify-between">
          <Link href="" className="text-primary text-[24px] font-extrabold">
            Neil dumpling
          </Link>
          <p className="text-[15px]">
            Powered by <span className="underline">Next.js</span>
          </p>
        </div>
      </div>
      <div className="py-3 text-[14.5px] text-black/60 font-light text-center ">
        Copyright ©2024 by <b className="font-medium">Neil dumpling</b>
      </div>
    </div>
  );
};

export default Footer;
