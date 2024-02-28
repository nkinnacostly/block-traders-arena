import { Inter, Poppins } from "next/font/google";
import "./globals.css";
// import Navbar from "./homepage/ui/layout/nav-bar";
import Footer from "./homepage/ui/footer";
import Topheader from "@/app/src/components/screens/top-header/top-header";

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
        {/* <Topheader /> */}
        {/* <Navbar /> */}
        {children}

        {/* <Footer /> */}
      </body>
    </html>
  );
}
