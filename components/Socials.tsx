import { Link } from "next-view-transitions";
import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Socials = () => {
  return (
    <div className="fixed bottom-[30px] right-[20px] mb-1 inline-flex items-center gap-x-[12px]">
      <Link
        href="https://github.com/Hoanganh1511"
        target={"_blank"}
        className="hover:scale-[1.15] duration-200"
      >
        <FiGithub className="text-[26px] text-black-primary opacity-90" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/hoanganh1511/"
        target={"_blank"}
        className="hover:scale-[1.15] duration-200"
      >
        <AiOutlineLinkedin className="text-[30px] text-black-primary opacity-90" />
      </Link>
      <Link
        href="https://www.facebook.com/jm.1511/"
        target={"_blank"}
        className="hover:scale-[1.15] duration-200"
      >
        <FaFacebookSquare className="text-[28px] text-black-primary opacity-90" />
      </Link>
    </div>
  );
};

export default Socials;
