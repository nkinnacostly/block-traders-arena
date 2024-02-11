import Buttonwithbg from "@/app/src/components/ui/button-with-bg";
import Buttonwithoutbg from "@/app/src/components/ui/button-without-bg";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/img/png/logo.png";
import Down from "@/public/assets/img/svg/down.svg";

function DashboardHeader() {
  return (
    <>
      <div className="items-center justify-center hidden w-full h-full p-4 mb-2 lg:flex">
        <div className="flex items-center w-full justify-evenly ">
          <div>
            <Image src={Logo} height={100} width={100} alt="logo" />
          </div>
          <div className="flex items-center space-x-5">
            <Link href={"/"} className="text-white">
              Home
            </Link>
            <Link href={"/about"} className="text-white">
              About Us
            </Link>
            <Link href={"/education"} className="flex items-center text-white">
              <p>Education Arena</p>
              <span>
                <Image src={Down} alt="carret-down" height={35} width={35} />
              </span>
            </Link>
            <Link href={"/trading"} className="flex items-center text-white">
              <p>Trading Arena</p>
              <span>
                <Image src={Down} alt="carret-down" height={35} width={35} />
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-5">
            {/* <Buttonwithoutbg Btntext={"Sign in"} /> */}
            <Buttonwithbg btnText={"Create account"} />
            <div className="w-20 h-20 border-2 rounded-full">
              <Image
                src={"/assets/img/png/chef.png"}
                width={100}
                height={100}
                className="w-full h-full rounded-full"
                alt="prof-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
