import Footer from "../../components/footer";
import React from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="container !p-0">
      {children}
      <div className="w-full bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
