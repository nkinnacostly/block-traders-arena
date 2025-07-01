"use client";

import Check from "@/public/assets/img/svg/check.svg";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/mobile-nav";
import Navbar from "@/components/nav-bar";
import React from "react";
import Textwithcolor from "../../ui/text-with-color";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Topheader({
  backgroundImage,
  check1,
  check2,
  check3,
  colouredText,
  otherText,
  className,
}) {
  return (
    <>
      <MobileNav />

      <div
        className={` px-[2rem] xl:px-[5rem]  lg:pt-[2rem] bg-cover bg-no-repeat h-[95vh] ${className}`}
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
            <Link
              className={cn(buttonVariants({ size: "xl", variant: "outline" }))}
              href={"/login"}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topheader;
