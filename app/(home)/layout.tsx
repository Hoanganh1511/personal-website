import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lexend, Lora, IBM_Plex_Sans, Xanh_Mono } from "next/font/google";
import "../globals.css";
import { Providers } from "@/redux/provider";
import LeftSidebar from "../../components/layout/LeftSidebar";
import RightSidebar from "../../components/layout/RightSidebar";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white">
      <div className="flex px-[50px] pt-[40px]">
        <div className="w-[22%]">
          <LeftSidebar />
        </div>
        <div className="w-[78%]">{children}</div>
      </div>
    </div>
  );
}
