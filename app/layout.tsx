import { ViewTransitions } from "next-view-transitions";
import { IBM_Plex_Sans, IBM_Plex_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
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
          className={`${plex_mono.className} ${plex_mono.variable} ${dancing_script.variable} ${plex_sans.variable}`}
        >
          <Providers>
            <div className="min-h-screen relative">
              <Header />
              {children}
              <Footer />
            </div>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
