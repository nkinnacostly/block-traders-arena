import "./globals.css";

import { Inter, Manrope } from "next/font/google";

import NextTopLoader from "nextjs-toploader";
import Providers from "@/utils/provider";
import ThemeProviderWrapper from "@/theme-provider";
import { Toaster } from "@/components/ui/toaster";

// import Navbar from "./homepage/ui/layout/nav-bar";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-ibm-plex-serif",
});

export const metadata = {
  title: "Block Traders Academy",
  description: "Best Trading Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <ThemeProviderWrapper>
          <NextTopLoader
            color="#D4AF37"
            height={6}
            shadow="0 0 10px #D4AF37,0 0 5px #D4AF37"
          />
          <Providers>{children}</Providers>
          <Toaster />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
