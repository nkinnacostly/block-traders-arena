"use client";

import React, { Suspense, useState, ReactNode } from "react";

import DashboardHeader from "@/components/dashboard/header";
import DashboardSidebar from "@/components/dashboard/sidebar";
import Loading from "../../components/ui/loading";
import NextTopLoader from "nextjs-toploader";
import { PiSquaresFourFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Logo from "@/public/assets/img/png/logo.png";

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="h-[100vh] container p-0">
      {/* Desktop Header */}
      <header className="hidden lg:block p-3 h-[100px]">
        <DashboardHeader />
        <hr className="w-full border" />
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden p-3 h-[70px] ">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-black rounded-lg transition-colors"
              aria-label="Toggle sidebar"
            >
              <PiSquaresFourFill size={24} />
            </button>
            <Image src={Logo} height={35} width={35} alt="logo" />
          </div>
          <div className="text-lg font-semibold">Dashboard</div>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>
      </header>

      <div className="flex h-full lg:h-[calc(100%-100px)]">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-[250px] h-full p-3">
          <DashboardSidebar onLinkClick={closeSidebar} />
        </aside>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-opacity-50 z-40 lg:hidden"
            onClick={closeSidebar}
          />
        )}

        {/* Mobile Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full w-[280px] z-50 transform transition-transform duration-300 ease-in-out lg:hidden shadow-xl ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b ">
            <Image src={Logo} height={35} width={35} alt="logo" />
            <button
              onClick={closeSidebar}
              className="p-2 hover:bg-black rounded-lg transition-colors"
              aria-label="Close sidebar"
            >
              <IoClose size={24} />
            </button>
          </div>
          <div className="p-2">
            <DashboardSidebar onLinkClick={closeSidebar} />
          </div>
        </aside>

        <main className="w-full lg:w-[calc(100%-250px)] h-full p-2 lg:p-3">
          <div className="rounded-[20px] h-full overflow-y-scroll p-2 lg:p-3 shadow-xl ">
            <NextTopLoader color="#D4AF37" />
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
