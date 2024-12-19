import { GoogleTagManager } from "@next/third-parties/google";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/provider";
import Header from "@/components/Header";
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
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plex_sans.className} ${plex_mono.variable}`}>
        <Providers>
          <div className="min-h-screen relative">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
      <GoogleTagManager gtmId="GTM-MB7RCLFS" />
    </html>
  );
}
