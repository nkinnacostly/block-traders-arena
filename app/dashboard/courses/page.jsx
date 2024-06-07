// import { AnimatePage } from "@/src/components/animations/page";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { Progress } from "flowbite-react";
import React from "react";
import { VscBellDot } from "react-icons/vsc";

// import { VideoWithButton } from "@/app/src/components/ui/video-with-button";
function Courses() {
  return (
    <div className="w-full">
      <div className="flex w-full ">
        <div className="w-[90%] flex  items-center justify-center relative">
          <input
            className="w-full h-[60px] pl-10 rounded-xl bg-[#1E1E1E0D] border-2 focus:outline-none"
            placeholder="Search"
          />
          <IoIosSearch
            size={20}
            className="absolute  w-50  left-[0.8em] top-[1.30rem] "
          />
        </div>
        <div className="flex items-center justify-center w-[10%]">
          <VscBellDot size={30} fill="#00000" />
        </div>
      </div>
      <div className="w-full p-4 mt-4  border-2 shadow-lg rounded-xl">
        <h5 className="text-[24px]  font-[500] mb-8">Live Classes</h5>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* <VideoWithButton /> */}
          <CoursesVideos />
          <CoursesVideos />
          <CoursesVideos />
        </div>
      </div>
      <div className="w-full p-4 mt-4 border-2 shadow-lg rounded-xl">
        <h5 className="text-[24px]  font-[500] mb-8">Live Classes</h5>
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-3">
          {/* <VideoWithButton /> */}
          <CoursePathVideos />
          <CoursePathVideos />
          <CoursePathVideos />
        </div>
      </div>
      <div className="w-full p-4 mt-4  border-2 shadow-lg rounded-xl">
        <div className="flex items-center justify-between">
          <h5 className="text-[24px]  font-[500] mb-8">Live Classes</h5>
          <h5 className="text-base  font-[500] mb-8">View Progress </h5>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* <VideoWithButton /> */}
          <CoursesInProgress />
          <CoursesInProgress />
          <CoursesInProgress />
        </div>
      </div>
    </div>
  );
}
export default Courses;

export function CoursesVideos() {
  return (
    <div className="">
      <div className="flex items-center justify-between shadow-md rounded-xl">
        <div className="relative  rounded-bl-3xl rounded-br-3xl">
          <Image
            src={"/assets/img/png/chart.png"}
            alt=""
            className="w-full rounded-t-xl "
            height={100}
            width={100}
          />
          <Image
            src={"/assets/img/svg/play.svg"}
            alt=""
            className="absolute right-4 top-[10rem] lg:top-[12rem] cursor-pointer"
            height={70}
            width={70}
          />
          <div className="px-5 ">
            <p className="   text-2xl font-medium mt-[2rem]">
              Trading for Beginners: Entry Level
            </p>
            <p className="mt-3 text-base font-normal ">
              Introduction to Trading Basics for Beginners: Exploring the World
              of Financial Markets
            </p>
            <div className="flex items-center justify-center w-full mt-8 mb-8">
              <button className=" px-5 py-2.5 bg-amber-400 rounded-lg  text-center  text-base font-medium  capitalize">
                Watch video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CoursePathVideos() {
  return (
    <>
      <div className="relative  border-2  shadow-lg rounded-xl">
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
          className="absolute right-4 top-[9rem] lg:top-[12rem] cursor-pointer"
          height={70}
          width={70}
        />
        <div className="px-5 ">
          <p className="  text-2xl font-medium mt-[2rem] text-start">
            Trading for Beginners: Entry Level
          </p>
          <p className="mt-3 text-base font-normal text-start ">
            Introduction to Trading Basics for Beginners: Exploring the World of
            Financial Markets
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
          <div className="w-full space-y-4 my-4">
            <div className="px-5 py-2.5 rounded-lg border-2 border-amber-400 justify-center items-center gap-2.5 inline-flex cursor-pointer w-full mb-4 xl:mb-0">
              <div className="text-base font-medium text-center  capitalize">
                More info
              </div>
            </div>
            <div className="px-5 py-2.5 bg-amber-400 rounded-lg justify-center items-center  cursor-pointer w-full">
              <div className="text-base font-medium text-center  capitalize">
                start learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function CoursesInProgress() {
  return (
    <>
      <div className="relative border-2 shadow-lg rounded-xl">
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
          className="absolute right-4 top-[9rem] lg:top-[6rem] cursor-pointer xl:top-[12rem]"
          height={70}
          width={70}
        />
        <div className="px-5">
          <p className="  text-xl font-medium mt-[2rem] text-start">
            Trading for Beginners: Entry Level
          </p>
          <p className="mt-3 text-base font-normal text-start ">
            Introduction to Trading Basics for Beginners: Exploring the World of
            Financial Markets
          </p>

          <div className="w-full p-5 ">
            <Progress
              progress={80}
              // textLabel="Flowbite"
              size="lg"
              // labelProgress
              // labelText
              color="yellow"
              className="w-full"
            />

            {/* <div className="px-5 py-2.5 rounded-lg border-2 border-amber-400 justify-center items-center gap-2.5 inline-flex cursor-pointer w-full mb-4 xl:mb-0">
              <div className="text-base font-medium text-center  capitalize">
                More info
              </div>
            </div>
            <div className="px-5 py-2.5 bg-amber-400 rounded-lg justify-center items-center  cursor-pointer w-full">
              <div className="text-base font-medium text-center  capitalize">
                start learning
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
