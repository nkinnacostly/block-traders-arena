import React from "react";
import Footer from "./ui/footer";

function HomeLayout({ children }) {
  return (
    <>
      {children}
      <div className="w-full bg-black">
        <Footer />
      </div>
    </>
  );
}

export default HomeLayout;
