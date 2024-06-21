"use client";

import React, { Suspense } from "react";

import DashboardHeader from "@/components/dashboard/header";
import DashboardSidebar from "@/components/dashboard/sidebar";
import Loading from "./loading";
import NextTopLoader from "nextjs-toploader";

function DashboardLayout({ children }) {
  return (
    <>
      <div className=" h-[100vh] container  !p-0">
        <div className="h-[100px] p-3 hidden lg:block">
          <DashboardHeader />
          <hr className="w-full border" />
        </div>
        <div className="flex h-full lg:h-[calc(100%-100px)]">
          <div className="hidden lg:block w-[250px]  h-full p-3 ">
            <DashboardSidebar />
          </div>
          <div className="w-full lg:w-[calc(100%-250px)] h-full   p-3">
            <div className=" rounded-[20px] h-full overflow-y-scroll p-3 shadow-xl ">
              <NextTopLoader color="#fff" />
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </div>
          </div>
        </div>
        {/* <div className="lg:h-[200px] bg-black text-white overflow-y-scroll p-3 ">
        <DashboardFooter />
      </div> */}
      </div>
    </>
  );
}

export default DashboardLayout;
