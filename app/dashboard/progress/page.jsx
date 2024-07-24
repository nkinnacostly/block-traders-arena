import { CoursesCompleted } from "./components/completed-courses";
import { CoursesInProgress } from "../courses/components/course-in-progress";
// import { GiAlarmClock } from "react-icons/gi";
import Image from "next/image";
import LearningStat from "./components/learning-stat";
import React from "react";

function ProgressPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-5  p-4">
      <div className="flex items-center flex-col space-x-5 lg:flex-row justify-center  rounded-xl w-full">
        <LearningStat />
        <div className="w-full lg:w-[calc(100%-264px)]  shadow-xl rounded-xl border-2 p-4 ">
          <h5 className="text-[20px]  font-[500] mb-3">Courses Completed</h5>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            <CoursesCompleted />
            <CoursesCompleted />
          </div>
        </div>
      </div>
      <div className="shadow-xl rounded-xl p-4 border-2">
        <h5 className="text-[20px] font-[500] mb-3 ">Courses In-Progress</h5>

        <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-2  shadow-xl rounded-xl">
          <CoursesInProgress />
          <CoursesInProgress />
          <CoursesInProgress />
          {/* <CoursesInProgress />
        <CoursesInProgress /> */}
        </div>
      </div>
      <div className="grid w-full grid-cols-2 lg:grid-cols-5 gap-2 p-4 shadow-xl rounded-xl border-2">
        <div className="border-2 rounded-xl flex items-center justify-center">
          <Image
            src={"/assets/img/svg/Warranty.svg"}
            height={150}
            width={150}
            alt="award"
          />
        </div>
        <div className="border-2 rounded-xl flex items-center justify-center">
          <Image
            src={"/assets/img/svg/Warranty.svg"}
            height={150}
            width={150}
            alt="award"
          />
        </div>
        <div className="border-2 rounded-xl flex items-center justify-center">
          <Image
            src={"/assets/img/svg/Warranty.svg"}
            height={150}
            width={150}
            alt="award"
          />
        </div>
        <div className="border-2 rounded-xl flex items-center justify-center">
          <Image
            src={"/assets/img/svg/Warranty.svg"}
            height={150}
            width={150}
            alt="award"
          />
        </div>
        <div className="border-2 rounded-xl flex items-center justify-center">
          <Image
            src={"/assets/img/svg/Warranty.svg"}
            height={150}
            width={150}
            alt="award"
          />
        </div>
      </div>
    </div>
  );
}

export default ProgressPage;
