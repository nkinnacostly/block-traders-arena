import Footer from "./ui/footer";
import React from "react";

function HomeLayout({ children }) {
  return (
    <div className="m-auto w-[80%]">
      {children}
      <div className="w-full bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default HomeLayout;
