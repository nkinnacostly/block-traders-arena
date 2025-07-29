"use client";

import Down from "@/public/assets/img/svg/down.svg";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/img/png/logo.png";
import React from "react";

function DashboardHeader() {
  return (
    <div className="items-center justify-center hidden w-full h-full p-4 mb-2 lg:flex">
      <div className="flex items-center w-full justify-evenly ">
        <div>
          <Image src={Logo} height={100} width={100} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
