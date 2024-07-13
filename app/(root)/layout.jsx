import Footer from "../../components/footer";
import React from "react";

function RootLayout({ children }) {
  return (
    <div className=" container !p-0">
      {children}
      <div className="w-full bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
