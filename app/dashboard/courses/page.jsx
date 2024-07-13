// import { CoursePathVideos } from "./components/course-path-video";
// import { CoursesInProgress } from "./components/course-in-progress";
import { CoursesVideos } from "./components/course-videos";
import React from "react";
import SearchCourses from "./components/search-courses";

// import { VideoWithButton } from "@/app/src/components/ui/video-with-button";
function Courses() {
  return (
    <div className="w-full">
      <SearchCourses />
      <div className="w-full p-4 mt-4  border-2 shadow-lg rounded-xl">
        <h5 className="text-[24px]  font-[500] mb-8">All Courses</h5>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <CoursesVideos />
        </div>
      </div>
      {/* <div className="w-full p-4 mt-4 border-2 shadow-lg rounded-xl">
        <h5 className="text-[24px]  font-[500] mb-8">Live Classes</h5>
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-3">

          <CoursePathVideos />
          <CoursePathVideos />
          <CoursePathVideos />
        </div>
      </div> */}
      {/* <div className="w-full p-4 mt-4  border-2 shadow-lg rounded-xl">
        <div className="flex items-center justify-between">
          <h5 className="text-[24px]  font-[500] mb-8">Courses In Progress</h5>
          <h5 className="text-base  font-[500] mb-8">View Progress </h5>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <CoursesInProgress />
          <CoursesInProgress />
          <CoursesInProgress />
        </div>
      </div> */}
    </div>
  );
}
export default Courses;
