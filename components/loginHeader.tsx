"use client";

import React, { memo } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const LoginHeader: React.FC = memo(() => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Image
        src={
          resolvedTheme === "dark"
            ? "/assets/img/png/logo.png"
            : "/assets/img/png/logo-dark.png"
        }
        alt="logo"
        height={80}
        width={80}
        priority
      />
      <h3 className="text-[32px] font-[500] text-center pb-2">
        Welcome to Block Traders Academy{" "}
      </h3>
      <p className="text-[14px] font-[400] uppercase">
        (Where Traders Are Built)
      </p>
    </div>
  );
});

LoginHeader.displayName = "LoginHeader";

export default LoginHeader;
