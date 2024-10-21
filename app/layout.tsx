import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";
import { Providers } from "@/redux/provider";
import Footer from "@/components/Footer";
import TopBanner from "@/components/layout/TopBanner";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
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
