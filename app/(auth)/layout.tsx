import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="w-full h-[100vh] flex flex-col lg:flex-row container !p-0">
      <div className="w-full h-full">
        <div className="h-[10%]">
          <Image
            src={"/assets/img/svg/ellipse.svg"}
            alt=""
            height={100}
            width={100}
            className="h-full"
          />
        </div>
        <div className="h-screen flex flex-col items-center justify-center">
          {children}
        </div>
        <div className="h-[10%] flex items-end justify-end">
          <Image
            src={"/assets/img/svg/ellipse2.svg"}
            alt=""
            height={100}
            width={100}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
