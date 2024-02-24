import React from "react";
import DashboardHeader from "../src/components/dashboard/header";
import DashboardSidebar from "../src/components/dashboard/sidebar";
import DashboardFooter from "../src/components/dashboard/footer";

function DashboardLayout({ children }) {
  return (
    <div className="w-full h-[100vh] bg-black">
      <div className="h-[100px] p-3 ">
        <DashboardHeader />
        <hr className="w-full border" />
      </div>
      <div className="flex items-center h-[calc(100%-100px-200px)]  overflow-scroll">
        <div className="w-[250px]  h-full p-3">
          <DashboardSidebar />
        </div>
        <div className="w-[calc(100%-250px)] h-full  bg-black p-3">
          <div className="bg-white rounded-[20px] h-full overflow-scroll p-3 shadow-xl ">
            {children}
          </div>
        </div>
      </div>
      <div className="h-[200px] bg-black text-white overflow-scroll p-3">
        <DashboardFooter />
      </div>
    </div>
  );
}

export default DashboardLayout;
