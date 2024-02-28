import React from "react";
import Footer from "./ui/footer";

function HomeLayout({ children }) {
  return (
    <div className="container">
      {children}
      <div className="w-full bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default HomeLayout;
