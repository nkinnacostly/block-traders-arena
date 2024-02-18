"use client";
import NumbersCard from "@/app/src/components/cards/numbersCard";
import Topheader from "@/app/src/components/screens/top-header/top-header";
import Image from "next/image";
import {
  VideoWithButtons,
  VideoWithButton,
} from "@/app/src/components/ui/video-with-button";
import React from "react";
import Footercontact from "@/app/src/components/ui/footer-contact";

function Education() {
  return (
    <div className="relative ">
      <Topheader
        backgroundImage={"/assets/img/png/ed-bg.png"}
        colouredText={"Knowledge Hub"}
        otherText={
          ": Learn trading easily with the best-in-class education to build or refresh your trading skills"
        }
        check1={"Get educated on better trading"}
        check2={"Take on the market with monitored funding "}
        check3={"Your rollover made easier"}
        className={"relative "}
      />
      <div
        className="w-full px-[2rem] xl:px-[5rem]  h-[100vh] 2xl:h-[50vh] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/img/png/ab-bg.png')` }}
      >
        <div className=" bg-black h-[1500px] lg:[2000px] lg:left-[6.5rem] overflow-scroll xl:overscroll-none p-6 rounded-[20px]  flex items-start left-0  justify-center flex-col absolute top-[45rem] 2xl:left-[13rem] lg:right-[6.5rem] lg:w-[80%] lg:px-[2rem] xl:right-[7.5rem] py-10">
          <div className="w-full h-full">
            <div className="mb-5">
              <p className=" h-[57px] text-white text-[40px] font-medium">
                Top Featured Videos
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2 mt-[6rem] lg:mt-0">
              <VideoWithButton />
              <VideoWithButton />
            </div>
            <div className="mt-[3.5rem] mb-8 w-full flex justify-between items-center">
              <p className="text-center text-white text-2xl lg:text-[40px] font-semibold ">
                Course Path
              </p>
              <button className="flex items-center space-x-4 px-6 py-[15px] rounded-[10px] border border-white">
                <Image
                  src={"/assets/img/svg/filter.svg"}
                  height={30}
                  width={30}
                  alt="filter"
                />
                <p className="w-[54px] text-center text-white text-xl font-medium ">
                  Filter
                </p>
              </button>
            </div>
            <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
              <VideoWithButtons />

              <VideoWithButtons />

              <VideoWithButtons />
              <VideoWithButtons />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[80vh] lg:h-[100vh] bg-no-repeat 2xl:h-[30vh]  bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/img/png/ab-bg.png')` }}
      ></div>
      <div
        className="w-full bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url('/assets/img/png/ab-bg.png')` }}
      ></div>
      <div
        className="w-full bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/assets/img/png/ab-bg.png')` }}
      >
        <div className="flex flex-col lg:flex-row justify-between px-[2rem] xl:px-[5rem]  pb-[4rem]  w-full">
          <div className="w-full space-x-2 text-center lg:flex lg:items-center lg:text-start">
            <span className="text-black text-2xl  lg:text-[40px] font-bold ">
              Copy
            </span>
            <span className="text-black text-2xl  lg:text-[40px] font-semibold ">
              {" "}
            </span>
            <span className="text-black text-2xl  lg:text-[40px] font-semibold ">
              Block
            </span>
            <span className="text-black text-2xl  lg:text-[40px] font-semibold ">
              {" "}
            </span>
            <span className="text-black text-2xl  lg:text-[40px] font-bold ">
              Traders
            </span>
          </div>

          <div className="flex flex-col items-center justify-center lg:items-start">
            <p className="text-xl font-medium text-center text-black lg:text-start">
              Get access to trades with grown equity and great spreads.
            </p>
            <div className=" h-16 px-[30px] py-5 bg-black rounded-lg  gap-2.5  mt-5 cursor-pointer">
              <p className="text-base font-medium text-white capitalize">
                Copy trades
              </p>
            </div>
          </div>
        </div>

        <div className=" w-full bg-black px-[2rem] xl:px-[5rem] py-[3rem]">
          <h5 className=" text-white text-xl lg:text-[32px] font-medium mb-5">
            How to open an account
          </h5>
          <div className="flex flex-col items-center space-y-10 lg:space-y-0 lg:flex-row justify-evenly">
            <NumbersCard number={"1"} text={"Create a Block Account"} />
            <NumbersCard number={"2"} text={"Start Learning"} />
            <NumbersCard number={"3"} text={"Get Funded"} />
            <NumbersCard number={"4"} text={"Start Trading"} />
          </div>
        </div>
        <div className="px-[2rem] flex flex-col justify-center lg:flex-row lg:justify-between xl:px-[5rem] py-[4rem] bg-amber-400 ">
          <div className="">
            <span className=" text-[40px] font-bold text-white italic">
              Join
            </span>
            <span className="text-black text-[40px]  "> </span>
            <span className="text-black text-[40px]  ">Block</span>
            <span className="text-black text-[40px]  "> </span>
            <span className="text-black text-[40px]  ">Traders</span>
            <span className="text-black text-[40px] font-bold "> </span>
            <span className="text-white italic text-[40px] font-bold ">
              Today
            </span>
          </div>

          <div className="">
            <p className="text-xl font-medium text-white ">
              Register for a Block trade account to get personalised course
              recommendations and offers
            </p>
            <div className=" h-16 px-[30px] py-5 bg-black rounded-lg justify-center items-center gap-2.5 inline-flex mt-5 cursor-pointer">
              <p className="text-base font-medium text-center text-white capitalize">
                Create Account
              </p>
            </div>
          </div>
        </div>
        <Footercontact />
      </div>
    </div>
  );
}

export default Education;
