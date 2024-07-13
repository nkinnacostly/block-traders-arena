import Image from "next/image";
import { Progress } from "flowbite-react";

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
