import Image from "next/image";
import React from "react";

function AllDashboardCourses() {
  return (
    <div>
      <>
        <div className="relative bg-white  shadow-xl rounded-xl">
          <Image
            src={"/assets/img/png/chart.png"}
            alt=""
            className="w-full rounded-t-xl"
            height={100}
            width={100}
          />
          <Image
            src={"/assets/img/svg/play.svg"}
            alt=""
            className="absolute right-4 top-[11rem] lg:top-[6rem] cursor-pointer xl:top-[9rem]"
            height={70}
            width={70}
          />
          <div className="px-1 ">
            <p className=" text-black text-xl font-medium mt-[2rem] text-start">
              Trading for Beginners: Entry Level
            </p>
            <p className="mt-3 text-base font-normal text-start text-stone-900">
              Introduction to Trading Basics for Beginners: Exploring the World
              of Financial Markets
            </p>
            <div className=" flex items-center justify-between mt-[1rem]">
              <div className="flex items-center justify-center">
                <Image
                  src={"/assets/img/svg/clock.svg"}
                  height={20}
                  width={20}
                  alt="clock"
                />
                <p className="text-sm font-medium text-center text-neutral-700">
                  10 - 12hours
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={"/assets/img/svg/cap.svg"}
                  height={20}
                  width={20}
                  alt="clock"
                />
                <p className="text-sm font-medium text-center text-neutral-700">
                  234 Learners
                </p>
              </div>
            </div>
            <div className="w-full p-5  xl:space-y-4">
              {/* <Progress
              progress={80}
              // textLabel="Flowbite"
              size="lg"
              // labelProgress
              // labelText
              color="yellow"
              className="w-full"
            /> */}

              <div className="px-5 py-2.5 rounded-lg border-2 border-amber-400 justify-center items-center gap-2.5 inline-flex cursor-pointer w-full mb-4 xl:mb-0">
                <div className="text-base font-medium text-center text-black capitalize">
                  More info
                </div>
              </div>
              <div className="px-5 py-2.5 bg-amber-400 rounded-lg justify-center items-center  cursor-pointer w-full">
                <div className="text-base font-medium text-center text-black capitalize">
                  start learning
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default AllDashboardCourses;
