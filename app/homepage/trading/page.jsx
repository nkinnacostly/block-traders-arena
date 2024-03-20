"use client";
import NumbersCard from "@/src/components/cards/numbersCard";
import Topheader from "@/src/components/screens/top-header/top-header";
import Image from "next/image";
import {
  VideoWithButtons,
  VideoWithButton,
} from "@/src/components/ui/video-with-button";
import React from "react";
import Footercontact from "@/src/components/ui/footer-contact";
import Buttonwithbg from "@/src/components/ui/button-with-bg";

function Trading() {
  return (
    <div className="relative ">
      <Topheader
        backgroundImage={"/assets/img/png/trading-bg.png"}
        colouredText={"Knowledge Hub"}
        otherText={
          ": Learn trading easily with the best-in-class education to build or refresh your trading skills"
        }
        check1={"Get educated on better trading"}
        check2={"Take on the market with monitored funding "}
        check3={"Your rollover made easier"}
        className={"relative z-10"}
      />
      <div
        className="w-full px-[2rem] xl:px-[5rem]  h-[100vh] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/img/png/ab-bg.png')` }}
      >
        <div className=" bg-black rounded-[20px]  p-5 lg:p-0 lg:[2000px] left-0 overflow-y-scroll xl:overscroll-none flex items-start z-10 justify-center flex-col absolute top-[46rem] 2xl:right-[13rem] lg:right-[6.5rem]  lg:px-[2rem] xl:left-[7.5rem] py-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 place-content-center">
            <div className="">
              <Image
                src={"/assets/img/png/beginner.png"}
                height={500}
                width={500}
                alt="beginner"
                // layout="fill"
                // objectFit="contain"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className=" text-amber-400 text-[40px] font-semibold">
                Beginner
              </p>
              <p className="mt-3 text-xl font-semibold text-white text-opacity-90">
                Trade markets while learning
              </p>
              <p className="mt-3 text-base font-normal text-white text-opacity-90">
                Trade Markets while sharpening your skills <br />
                Start small,dream big. Master trading basics with minimal risk,
                and skill up before enjoying the benefits of our intermediate
                account{" "}
              </p>
              <Buttonwithbg btnText={"Start here"} className={"mt-3"} />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-content-center mt-[4rem] relative">
            <Image
              src={"/assets/img/png/popular.png"}
              height={150}
              width={150}
              alt="beginner"
              className="absolute -left-10"
            />
            <div className="flex flex-col items-end justify-center">
              <p className=" text-amber-400 text-[40px] font-semibold">
                Beginner
              </p>
              <p className="mt-3 text-xl font-semibold text-white text-opacity-90">
                Trade markets while learning
              </p>
              <p className="mt-3 text-base font-normal text-white text-opacity-90 text-end">
                Given that our intermediate account is for more experienced
                traders. Improve your trading skills through free educational
                challenges and keep on top of the latest trends with
                professional analysis and updates. <br />
                <br /> Intermediate provides more.
              </p>
              <Buttonwithbg btnText={"Start here"} className={"mt-3"} />
            </div>
            <div>
              <Image
                src={"/assets/img/png/intermediate.png"}
                height={500}
                width={500}
                alt="beginner"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-content-center mt-[4rem]">
            <div>
              <Image
                src={"/assets/img/png/expert.png"}
                height={500}
                width={500}
                alt="beginner"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col items-end justify-center">
              <p className=" text-amber-400 text-[40px] font-semibold">
                Expert
              </p>
              <p className="mt-3 text-xl font-semibold text-white text-opacity-90">
                Trade markets while learning
              </p>
              <p className="mt-3 text-base font-normal text-white text-opacity-90 text-end">
                With our Expert account, you get all the features that makes
                intermediate accounts so popular plus it has the highest
                funding. Getting to half a million dollars is very possible with
                the expert account
              </p>
              <Buttonwithbg btnText={"Start here"} className={"mt-3"} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[100vh]  lg:h-[60vh]  2xl:h-[30vh] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/img/png/ab-bg.png')` }}
      ></div>
      <div
        className="w-full h-[40vh]  lg:h-[60vh]  2xl:h-[30vh] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/img/png/ab-bg.png')` }}
      ></div>
      {/* <div
        className="w-full  lg:h-[60vh]  2xl:h-[50vh] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/img/png/ab-bg.png')` }}
      ></div> */}
      <div
        className="w-full 2xl:h-[50vh]  xl:h-[60vh] bg-center bg-no-repeat bg-cover px-[2rem]"
        style={{ backgroundImage: `url('/assets/img/png/ab-bg.png')` }}
      >
        <div className="flex flex-col items-center justify-center w-full ">
          <div className="flex flex-col w-full space-y-10 lg:flex-row lg:space-y-0 justify-evenly lg:gap-2">
            <div className=" bg-black bg-opacity-80  h-[532px] rounded-tl-xl rounded-bl-xl p-5 flex flex-col justify-evenly ">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={"/assets/img/svg/beg.svg"}
                  height={30}
                  width={30}
                  alt="beginner"
                  className=""
                />
                <p className="= text-center text-amber-400 text-[32px] font-semibold">
                  Beginner
                </p>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400">
                <p className="text-xl font-semibold text-center text-white ">
                  Funding
                </p>
                <p className="text-base font-normal text-center text-white ">
                  $3k
                </p>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400 mt-5">
                <p className="text-xl font-semibold text-center text-white ">
                  Currency
                </p>
                <p className="text-base font-normal text-center text-white ">
                  US cents/ EU <br /> cents/ GBP pence
                </p>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400 mt-5">
                <p className="text-xl font-semibold text-center text-white ">
                  Requirements
                </p>
                <div className="w-[122px] text-center">
                  <span className="text-base font-normal text-white ">
                    Must complete challenges{" "}
                  </span>
                  <span className="text-base font-semibold text-amber-400 ">
                    Level 1-10
                  </span>
                </div>
              </div>
            </div>
            <div className=" bg-black bg-opacity-80  h-[532px]  p-5 flex flex-col justify-evenly ">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={"/assets/img/svg/inter.svg"}
                  height={30}
                  width={30}
                  alt="beginner"
                  className=""
                />
                <p className="= text-center text-amber-400 text-[32px] font-semibold">
                  Intermediate
                </p>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400">
                <p className="text-xl font-semibold text-center text-white ">
                  Funding
                </p>
                <p className="text-base font-normal text-center text-white ">
                  $10k-$30k
                </p>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400 mt-5">
                <p className="text-xl font-semibold text-center text-white ">
                  Currency
                </p>
                <p className="text-base font-normal text-center text-white ">
                  USD/ EUR/ GBP
                </p>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400 mt-5">
                <p className="text-xl font-semibold text-center text-white ">
                  Requirements
                </p>
                <div className="w-[122px] text-center">
                  <span className="text-base font-normal text-white ">
                    Must have completed{" "}
                  </span>
                  <span className="text-base font-semibold text-amber-400 ">
                    Level 10 challenge
                  </span>
                </div>
              </div>
            </div>
            <div className=" bg-black bg-opacity-80  h-[532px] rounded-tr-xl rounded-br-xl p-5 flex flex-col justify-evenly ">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={"/assets/img/svg/exp.svg"}
                  height={30}
                  width={30}
                  alt="beginner"
                  className=""
                />
                <p className="= text-center text-amber-400 text-[32px] font-semibold">
                  Expert
                </p>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400">
                <p className="text-xl font-semibold text-center text-white ">
                  Funding
                </p>
                <p className="text-base font-normal text-center text-white ">
                  $90k+
                </p>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400 mt-5">
                <p className="text-xl font-semibold text-center text-white ">
                  Currency
                </p>
                <p className="text-base font-normal text-center text-white ">
                  USD/ EUR/ GBP
                </p>
              </div>
              <div className="flex justify-between items-center p-2.5 border-b-2 border-amber-400 mt-5">
                <p className="text-xl font-semibold text-center text-white ">
                  Requirements
                </p>
                <div className="w-[122px] text-center">
                  <span className="text-base font-normal text-white ">
                    Must have completed{" "}
                  </span>
                  <span className="text-base font-semibold text-amber-400 ">
                    Level 20 challenge
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-center bg-no-repeat bg-cover pt-5 lg:pt-[8rem]"
        style={{ backgroundImage: `url('/assets/img/png/ab-bg.png')` }}
      >
        <div className="flex lg:justify-between justify-center px-[2rem] flex-col lg:flex-row lg:px-[5rem]  pb-[4rem] ">
          <div className="">
            <span className="text-black text-[40px] font-bold ">Copy</span>
            <span className="text-black text-[40px] font-semibold "> </span>
            <span className="text-black text-[40px] font-semibold ">Block</span>
            <span className="text-black text-[40px] font-semibold "> </span>
            <span className="text-black text-[40px] font-bold ">Traders</span>
          </div>

          <div className="mt-5">
            <p className="text-xl font-medium text-black ">
              Get access to trades with grown equity and great spreads.
            </p>
            <div className=" h-16 px-[30px] py-5 bg-black rounded-lg justify-center items-center gap-2.5 inline-flex mt-5 cursor-pointer">
              <p className="text-base font-medium text-center text-white capitalize">
                Copy trades
              </p>
            </div>
          </div>
        </div>

        <div className=" w-full bg-black px-[2rem] lg:px-[5rem] py-[3rem]">
          <h5 className=" text-white text-xl lg:text-[32px] font-medium mb-5">
            How to open an account
          </h5>
          <div className="flex flex-col items-center space-y-10 lg:flex-row justify-evenly">
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

export default Trading;
