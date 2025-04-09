"use client";

import React, { memo } from "react";
import Image from "next/image";

const LoginHeader: React.FC = memo(() => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Image
        src="/assets/img/png/logo.png"
        alt="logo"
        height={80}
        width={80}
        priority
      />
      <h3 className="text-[32px] font-[500] text-center pb-2">
        Welcome to Block Traders Academy{" "}
      </h3>
      <p className="text-[14px] font-[400] uppercase">
        (The online wall street)
      </p>
    </div>
  );
});

LoginHeader.displayName = "LoginHeader";

export default LoginHeader;
