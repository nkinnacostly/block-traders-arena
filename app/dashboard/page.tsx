"use client";

import "react-datepicker/dist/react-datepicker.css";

// import {
//   GetBadges,
//   GetCoursesCompleted,
//   GetCoursesInProgress,
// } from "./services/services";
import React, { useEffect } from "react";

import { AnimatePage } from "@/components/animations/page";
import DashboardChallenges from "@/components/dashboard/challenges";
// import { FaCircleCheck } from "react-icons/fa6";
// import { GiProgression } from "react-icons/gi";
// import { IoRefreshCircleSharp } from "react-icons/io5";
// import { RiAwardFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/store";
// import { LineChartComponent } from "./components/line-chat";
import EquityComponent from "./components/equity";
import Overview from "./components/overview";
import FrequentlyTradedAssets from "./components/traded-assets";
import { motion } from "framer-motion";
import TradingCalendar from "./components/trading-calendar";
import LiveClasses from "./components/live-clasess";

function Dashboard() {
  const router = useRouter();
  const { loggedInUserDetails } = useUserStore();

  useEffect(() => {
    if (loggedInUserDetails?.first_name === null) {
      router.push("/dashboard/settings");
    }
  }, [loggedInUserDetails?.first_name, router]);

  // if (inProgressLoading || completedLoading) {
  //   return <div>Loading...</div>;
  // }

  // const courseContent: CourseContent[] = [
  //   {
  //     number: completedData?.count || 0,
  //     icon: <FaCircleCheck size={20} />,
  //     tittle: "Completed Courses",
  //     bgColor: "#D4AF37",
  //   },
  //   // {
  //   //   number: data?.count || 0,
  //   //   icon: <IoRefreshCircleSharp size={30} />,
  //   //   tittle: "Courses-in-Progress",
  //   // },
  //   // {
  //   //   number: "4",
  //   //   icon: <GiProgression size={20} />,
  //   //   tittle: "Learners Level",
  //   //   bgColor: "#D4AF37",
  //   // },
  //   {
  //     number: courseBadges?.count || 0,
  //     icon: <RiAwardFill size={20} />,
  //     tittle: "Badges Earned",
  //     bgColor: "#D4AF37",
  //   },
  // ];

  const appsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 5,
        staggerChildren: 5,
      },
    },
  };

  return (
    <motion.div variants={appsContainer} initial="show" animate="show">
      <div>
        <h5 className="text-[24px] font-[500]">Overview</h5>
      </div>
      {/* <div
        // variants={appsContainer}
        // initial="show"
        // animate="show"
        className="grid grid-cols-2 gap-4 lg:grid-cols-4"
      >
        {courseContent.map((courseContent, index) => (
          <div
            className={`rounded-[20px] bg-[${courseContent.bgColor}] p-4`}
            key={index}
          >
            <div
              className={`flex items-center justify-between mb-4 ${
                courseContent.bgColor === "#000000" ? "text-white" : ""
              }`}
            >
              <h5 className="text-[24px] font-[500]">{courseContent.number}</h5>
              {courseContent.icon}
            </div>
            <div>
              <h5 className="text-[14px] font-[500]">{courseContent.tittle}</h5>
            </div>
          </div>
        ))}
      </div> */}
      <div className="flex flex-col items-center justify-center gap-3 my-4">
        <Overview />
        {/* <LineChartComponent /> */}
        <TradingCalendar />
        <div className="w-full grid grid-cols-2 gap-4">
          <EquityComponent />
          {/* <ChartistComponent /> */}
          <FrequentlyTradedAssets />
        </div>
      </div>
      <div className="my-4 w-full p-4 mt-8 border-2 shadow-lg rounded-xl">
        <h5 className="text-[24px]  font-[500] mb-8">Live Sessions</h5>
        <LiveClasses />
      </div>
      <DashboardChallenges />
    </motion.div>
  );
}

export default AnimatePage(Dashboard);
