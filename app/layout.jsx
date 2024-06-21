import "./globals.css";

import { Inter, Manrope } from "next/font/google";

import NextTopLoader from "nextjs-toploader";
import Providers from "@/utils/provider";
import ThemeProviderWrapper from "@/theme-provider";
import { Toaster } from "react-hot-toast";

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
        <NextTopLoader color="#fff" />
        <ThemeProviderWrapper>
          <Providers>{children}</Providers>
          <Toaster />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
