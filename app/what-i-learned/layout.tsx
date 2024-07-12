import React, { Suspense } from "react";
import Sidebar from "./_component/Sidebar";
// import Container from "./_component/Container";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row max-w-[1350px] mx-auto">
      {/* <Sidebar /> */}
      <>{children}</>
    </div>
  );
};

export default layout;
