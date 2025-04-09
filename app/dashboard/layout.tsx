"use client";

import React, { Suspense, ReactNode } from "react";

import DashboardHeader from "@/components/dashboard/header";
import DashboardSidebar from "@/components/dashboard/sidebar";
import Loading from "../../components/ui/loading";
import NextTopLoader from "nextjs-toploader";

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className=" container p-0 mx-auto flex flex-col h-full gap-5">
      <header className="hidden lg:block p-3 h-[100px]">
        <DashboardHeader />
        <hr className="w-full border" />
      </header>
      <div className="flex h-full lg:h-[calc(100%-100px)] border-2">
        <div className="hidden lg:block w-[250px] h-screen p-3">
          <DashboardSidebar />
        </div>
        <div className="w-full lg:w-[calc(100%-250px)] h-screen p-3">
          <div className="rounded-[20px] h-full overflow-y-scroll p-3 shadow-xl">
            <NextTopLoader color="#fff" />
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
        </div>
      </div>
      {/* <footer className="hidden lg:block h-[200px] bg-black text-white p-3">
        <DashboardFooter />
      </footer> */}
    </div>
  );
}

export default DashboardLayout;
