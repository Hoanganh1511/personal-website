import { GoogleTagManager } from "@next/third-parties/google";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/provider";
import MainLayout from "@/components/layout/MainLayout";
const plex_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plex_mono.className}`}>
        <Providers>
          <div className="min-h-screen relative">
            <MainLayout>{children}</MainLayout>
          </div>
        </Providers>
      </body>
      <GoogleTagManager gtmId="GTM-MB7RCLFS" />
    </html>
  );
}
