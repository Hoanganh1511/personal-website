import NavSide from "@/components/NavSide";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavSide />
      {children}
    </>
  );
};

export default Layout;
