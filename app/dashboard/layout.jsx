"use client";

import React, { Suspense } from "react";

import DashboardHeader from "@/components/dashboard/header";
import DashboardSidebar from "@/components/dashboard/sidebar";
import Loading from "../../components/ui/loading";
import NextTopLoader from "nextjs-toploader";

function DashboardLayout({ children }) {
  return (
    <div className="h-[100vh] container p-0">
      <header className="hidden lg:block p-3 h-[100px]">
        <DashboardHeader />
        <hr className="w-full border" />
      </header>
      <div className="flex h-full lg:h-[calc(100%-100px)]">
        <aside className="hidden lg:block w-[250px] h-full p-3">
          <DashboardSidebar />
        </aside>
        <main className="w-full lg:w-[calc(100%-250px)] h-full p-3">
          <div className="rounded-[20px] h-full overflow-y-scroll p-3 shadow-xl">
            <NextTopLoader color="#fff" />
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
        </main>
      </div>
      {/* <footer className="hidden lg:block h-[200px] bg-black text-white p-3">
        <DashboardFooter />
      </footer> */}
    </div>
  );
}

export default DashboardLayout;
