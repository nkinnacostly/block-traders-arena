"use client";
import Image from "next/image";
import Logo from "@/public/assets/img/png/logo.png";
import React, { useEffect, useState } from "react";
import LogoDark from "@/public/assets/img/png/logo-dark.png";

import { useTheme } from "next-themes";

function DashboardHeader() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="items-center justify-center hidden w-full h-full p-4 mb-2 lg:flex">
      <div className="flex items-center w-full justify-evenly ">
        <div>
          <Image
            src={mounted && resolvedTheme === "dark" ? Logo : LogoDark}
            height={100}
            width={100}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
