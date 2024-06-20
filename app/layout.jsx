import "./globals.css";

import { Poppins } from "next/font/google";
import Providers from "../utils/provider";
import ThemeProviderWrapper from "@/theme-provider";
// import Navbar from "./homepage/ui/layout/nav-bar";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Block Traders Academy",
  description: "Best Trading Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProviderWrapper>
          <Providers>{children}</Providers>
          <Toaster />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
