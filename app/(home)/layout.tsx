import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lexend, Lora, IBM_Plex_Sans, Xanh_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "@/redux/provider";
import LeftSidebar from "../../components/layout/LeftSidebar";
import RightSidebar from "../../components/layout/RightSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white">
      <div className="flex justify-between">
        <div className="w-[20%]">
          <LeftSidebar />
        </div>
        <div className="w-[80%]">{children}</div>
        {/* <div className="w-[20%]">
          <RightSidebar />
        </div> */}
      </div>
    </div>
  );
}
