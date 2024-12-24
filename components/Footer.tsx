import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-[32px] max-w-[48rem] mx-auto  px-[1rem]">
      <div className="py-[1rem] border-t-[1px] border-primary">
        <div className="my-[.5rem] flex flex-col md:flex-row justify-between gap-y-3">
          <Link href="" className="text-[14px] md:text-[16px] text-center">
            Copyright © 2024 | All rights reserved.
          </Link>
          <p className="text-center text-[13px] md:text-[15px] text-primary">
            Powered by{" "}
            <a
              target="_blank"
              href="https://nextjs.org/"
              className="hover:underline hover:opacity-80"
            >
              Next.js
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
