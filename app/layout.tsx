import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/provider";

import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="min-h-screen relative bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 bg-no-repeat">
          <Providers>
            {/* <TopBanner /> */}
            <Header />
            {children}
            {/* <Footer /> */}
          </Providers>
        </div>
      </body>
      <GoogleTagManager gtmId="GTM-MB7RCLFS" />
    </html>
  );
}
