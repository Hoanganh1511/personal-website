import React from "react";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-1536 mx-auto px-[15px] py-14 flex gap-x-[20px]">
      <div className="w-[256px]">
        <Sidebar />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default MainLayout;
