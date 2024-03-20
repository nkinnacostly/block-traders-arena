"use client";
import React from "react";
import Image from "next/image";
import Buttonwithbg from "./button-with-bg";
import Buttonwithoutbg from "./button-without-bg";

export function VideoWithButton() {
  return (
    <div className="">
      <div className="flex items-center justify-between ">
        <div className="relative bg-white rounded-bl-3xl rounded-br-3xl">
          <Image
            src={"/assets/img/png/chart.png"}
            alt=""
            className="w-full"
            height={100}
            width={100}
          />
          <Image
            src={"/assets/img/svg/play.svg"}
            alt=""
            className="absolute right-4 top-[11rem] lg:top-[15rem] cursor-pointer"
            height={70}
            width={70}
          />
          <div className="px-5  ">
            <p className="  text-black text-2xl font-medium mt-[2rem]">
              Trading for Beginners: Entry Level
            </p>
            <p className="mt-3 text-base font-normal text-stone-900">
              Introduction to Trading Basics for Beginners: Exploring the World
              of Financial Markets
            </p>
            <div className="flex items-center justify-center w-full mt-8 mb-8">
              <button className=" px-5 py-2.5 bg-amber-400 rounded-lg  text-center text-black text-base font-medium  capitalize">
                Watch video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VideoWithButtons() {
  return (
    <>
      <div className="relative bg-white rounded-bl-3xl rounded-br-3xl">
        <Image
          src={"/assets/img/png/chart.png"}
          alt=""
          className="w-full"
          height={100}
          width={100}
        />
        <Image
          src={"/assets/img/svg/play.svg"}
          alt=""
          className="absolute right-4 top-[11rem] lg:top-[17rem] cursor-pointer"
          height={70}
          width={70}
        />
        <div className="px-5  ">
          <p className=" text-black text-2xl font-medium mt-[2rem] text-center">
            Trading for Beginners: Entry Level
          </p>
          <p className="mt-3 text-base font-normal text-center text-stone-900">
            Introduction to Trading Basics for Beginners: Exploring the World of
            Financial Markets
          </p>
          <div className="border-2 flex items-center justify-between mt-[1rem]">
            <div className="flex items-center justify-center space-x-2">
              <Image
                src={"/assets/img/svg/clock.svg"}
                height={30}
                width={30}
                alt="clock"
              />
              <p className="text-base font-medium text-center text-neutral-700">
                10 - 12hours
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Image
                src={"/assets/img/svg/cap.svg"}
                height={30}
                width={30}
                alt="clock"
              />
              <p className="text-base font-medium text-center text-neutral-700">
                234 Learners
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-8 mb-8 space-x-8">
            <div className="w-[165px] h-11 px-5 py-2.5 rounded-lg border-2 border-amber-400 justify-center items-center gap-2.5 inline-flex cursor-pointer">
              <div className="text-base font-medium text-center text-black capitalize">
                More info
              </div>
            </div>
            <div className="w-[165px] h-11 px-5 py-2.5 bg-amber-400 rounded-lg justify-center items-center gap-2.5 inline-flex cursor-pointer">
              <div className="text-base font-medium text-center text-black capitalize">
                start learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
