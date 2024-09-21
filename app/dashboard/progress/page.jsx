import { CoursesCompleted } from "./components/completed-courses";
import { CoursesInProgress } from "../courses/components/course-in-progress";
// import { GiAlarmClock } from "react-icons/gi";
import LearningStat from "./components/learning-stat";
import React from "react";
import Badges from "./components/badges";

function ProgressPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-5  p-4">
      <div className="flex items-center flex-col space-x-5 lg:flex-row justify-center  rounded-xl w-full">
        <LearningStat />
        <div className="w-full lg:w-[calc(100%-264px)]  shadow-xl rounded-xl border-2 p-4  h-96">
          <h5 className="text-[20px]  font-[500] mb-3">Courses Completed</h5>

          <CoursesCompleted />
        </div>
      </div>
      <div className="shadow-xl rounded-xl p-4 border-2 w-full">
        <h5 className="text-[20px] font-[500] mb-3 ">Courses In-Progress</h5>

        <CoursesInProgress />
      </div>
      <div className=" w-full p-4 shadow-xl rounded-xl border-2">
        <Badges />
      </div>
    </div>
  );
}

export default ProgressPage;
