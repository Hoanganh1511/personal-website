import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[48rem] mx-auto ">
      <div className="py-[1rem] border-t-[1px] border-primary">
        <div className="my-[.5rem] flex justify-between">
          <Link href="" className=" ">
            Copyright © 2024 | All rights reserved.
          </Link>
          <p className="text-[15px] text-primary">
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
