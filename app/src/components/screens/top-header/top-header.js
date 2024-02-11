"use client";
import Navbar from "@/app/homepage/ui/nav-bar";
import Image from "next/image";
import React from "react";
import Textwithcolor from "../../ui/text-with-color";
import Check from "@/public/assets/img/svg/check.svg";
import Buttonwithbg from "../../ui/button-with-bg";
import Buttonwithoutbg from "../../ui/button-without-bg";
import { useRouter } from "next/navigation";
import MobileNav from "@/app/homepage/ui/mobile-nav";

function Topheader({
  backgroundImage,
  check1,
  check2,
  check3,
  colouredText,
  otherText,
  className,
}) {
  const router = useRouter();
  return (
    <>
      <MobileNav />

      <div
        className={` px-[2rem] xl:px-[5rem]  lg:pt-[3rem] bg-cover bg-no-repeat h-[100vh] ${className}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />
        <div className="lg:mt-[5rem]  pt-8 lg:pt-0">
          <Textwithcolor colouredText={colouredText} otherText={otherText} />
          <div className="mt-[2rem]">
            <div className="flex items-center mt-5 space-x-3">
              <span className="">
                <Image src={Check} height={30} width={30} alt="check" />
              </span>
              <p className="text-xl font-normal text-white">{check1}</p>
            </div>
            <div className="flex items-center mt-5 space-x-3">
              <span className="">
                <Image src={Check} height={30} width={30} alt="check" />
              </span>
              <p className="text-xl font-normal text-white">{check2}</p>
            </div>
            <div className="flex items-center mt-5 space-x-3">
              <span className="">
                <Image src={Check} height={30} width={30} alt="check" />
              </span>
              <p className="text-xl font-normal text-white">{check3}</p>
            </div>
          </div>
          <div className="lg:flex items-center justify-center lg:justify-start lg:space-x-8 mt-[4rem]  w-full space-y-8 lg:space-y-0">
            <Buttonwithbg
              btnText={"Get Started"}
              className={"h-[70px] w-full lg:w-[226.67px]"}
              onClick={() => router.push("/auth/login")}
            />
            <Buttonwithoutbg
              Btntext={"Start Learning"}
              className={"h-[70px] w-full lg:w-[226.67px] text-white"}
              onClick={() => router.push("/auth/sign-up")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Topheader;
