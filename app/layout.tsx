import { ViewTransitions } from "next-view-transitions";
import {
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  Dancing_Script,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNavigation from "@/components/MobileNavigation";
import NextBreadcrumb from "@/components/NextBreadcrumb";
import { IconChevronRight } from "@tabler/icons-react";
import Socials from "@/components/Socials";
const plex_sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const plex_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mali",
  weight: ["400", "700", "900"],
});
const dancing_script = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${montserrat.className} ${plex_mono.variable} ${dancing_script.variable} ${plex_sans.variable}`}
        >
          <Providers>
            <div className="min-h-dvh relative pb-[80px]">
              <Header />

              <MobileNavigation />
              {children}
              <Socials />
              {/* <Footer /> */}
            </div>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
