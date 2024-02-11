import React from "react";
import Image from "next/image";

function AuthLayout({ children }) {
  return (
    <div className="w-full h-[100vh]  bg-white flex">
      <div className="bg-white w-[50%] h-full  ">
        <div className="h-[10%]">
          <Image
            src={"/assets/img/svg/ellipse.svg"}
            alt=""
            height={100}
            width={100}
            className="h-full"
          />
        </div>
        <div className="h-[80%] overflow-scroll">{children}</div>
        <div className="h-[10%]  flex items-end justify-end">
          <Image
            src={"/assets/img/svg/ellipse2.svg"}
            alt=""
            height={100}
            width={100}
            className="h-full"
          />
        </div>
      </div>
      <div className="w-[50%] xl:h-full 2xl:h-full hidden lg:flex  items-center justify-center ">
        <Image
          src={"/assets/img/png/Image.png"}
          alt="login-image"
          height={800}
          width={500}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}

export default AuthLayout;
// 6RBJE48N19Y
