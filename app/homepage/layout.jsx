import Footer from "./components/footer";
import React from "react";

function HomeLayout({ children }) {
  return (
    <div className=" container !p-0">
      {children}
      <div className="w-full bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default HomeLayout;
