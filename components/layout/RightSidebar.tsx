import Link from "next/link";
import React from "react";

const RightSidebar = () => {
  return (
    <div className="sticky top-[80px] p-[20px] min-h-screen  border-l-[1px] border-black/20">
      <Link href="/" className="text-primary text-[24px] font-extrabold">
        Neil dumpling
      </Link>
    </div>
  );
};

export default RightSidebar;
