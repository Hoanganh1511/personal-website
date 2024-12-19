import React from "react";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-x-[20px]">
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default MainLayout;
