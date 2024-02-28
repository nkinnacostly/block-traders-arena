"use client";
import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoRefreshCircleSharp } from "react-icons/io5";
import { GiHourglass } from "react-icons/gi";
import { GiProgression } from "react-icons/gi";
import { RiAwardFill } from "react-icons/ri";
import BarChart from "../src/components/dashboard/chart/barChart";
import Link from "next/link";
import Image from "next/image";
import DatePicker from "react-datepicker";
import Modal from "react-modal";
import { eachDayOfInterval, startOfMonth, endOfMonth, format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import Buttonwithbg from "../src/components/ui/button-with-bg";
import DashboardChallenges from "../src/components/dashboard/challenges";
const courseContent = [
  {
    number: "4",
    icon: <FaCircleCheck size={20} />,
    tittle: "Completed Courses",
    bgColor: "#D4AF37",
  },
  {
    number: "12",
    icon: <IoRefreshCircleSharp size={30} />,
    tittle: "Courses-in-Progress",
    bgColor: "#000000",
  },
  {
    number: "4d11h",
    icon: <GiHourglass size={20} />,
    tittle: "Activity Hours",
    bgColor: "#D4AF37",
  },
  {
    number: "4",
    icon: <GiProgression size={20} />,
    tittle: "Learners Level",
    bgColor: "#D4AF37",
  },
  {
    number: "4",
    icon: <RiAwardFill size={20} />,
    tittle: "Badges Earned",
    bgColor: "#D4AF37",
  },
];
function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [meetings, setMeetings] = useState([]);
  const now = new Date();
  const dates = eachDayOfInterval({
    start: startOfMonth(now),
    end: endOfMonth(now),
  });
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setModalIsOpen(true);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddMeeting = () => {
    setMeetings([...meetings, { date: selectedDate, description }]);
    setDescription("");
    setModalIsOpen(false);
  };
  return (
    <>
      <div>
        <h5 className="text-[24px]  font-[500]">Overview</h5>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {courseContent.map((courseContent, index) => (
          <div
            className={`rounded-[20px]  bg-[${courseContent.bgColor}] p-4 ${
              courseContent.bgColor === "#000000" ? "text-white" : ""
            }`}
            key={index}
          >
            <div
              className={`flex items-center justify-between mb-4 ${
                courseContent.bgColor === "#000000" ? "text-white" : ""
              }`}
            >
              <h5 className="text-[24px] font-[500]  ">
                {courseContent.number}
              </h5>
              {courseContent.icon}
            </div>
            <div>
              {" "}
              <h5 className="text-[14px] font-[500] ">
                {courseContent.tittle}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-4 lg:flex-row">
        <div className=" w-full lg:w-[337px] border-2 rounded-xl shadow-md p-4 h-[405px]">
          <h5 className="text-[24px]  font-[500]">Overview</h5>

          <BarChart />
        </div>
        <div className="border-2 w-full lg:w-[calc(100%-337px)] overflow-y-scroll h-[405px] xl:flex rounded-xl shadow-md p-4 lg:overflow-y-scroll items-center justify-center space-x-5">
          <div>

          <h5 className="text-[24px]  font-[500] m-4">Schedule</h5>

          <div className="flex items-start justify-center w-full">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              // className=""
              inline
            />
          </div>
            {/* {dates.map((date, index) => (
              <div key={index}>{format(date, "dd/MM/yyyy")}</div>
            ))} */}

            <Modal isOpen={modalIsOpen} className={""}>
              <div className="flex flex-col items-center justify-center h-full">
                <h5 className="text-[24px]  font-[500] mb-4">New Meeting</h5>
                <input
                  type="text"
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder="Meeting Tittle"
                  className="w-[80%] p-4 focus:outline-none pl-4 border border-[#D4AF37] rounded-lg mb-4"
                />
                <input
                  type="text"
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder="Meeting description"
                  className="w-[80%] p-4 focus:outline-none pl-4 border border-[#D4AF37] rounded-lg"
                />
                {/* <button>Add Meeting</button> */}
                <Buttonwithbg
                  btnText={"Add Meeting"}
                  className={"w-[167px] mt-4"}
                  onClick={handleAddMeeting}
                />
              </div>
            </Modal>
          </div>
          <div className="mt-5 overflow-y-scroll">
            {meetings.map((meeting, index) => (
              <div
                key={index}
                className="border-2 border-t-0 border-b-0 p-4 bg-[#1E1E1E99] rounded-tr-lg rounded-br-lg text-white border-l-[#D4AF37] mb-4 "
              >
                <h3>{meeting.date.toString()}</h3>
                <p>{meeting.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full p-4 mt-8 bg-white shadow-lg rounded-xl">
        <h5 className="text-[24px]  font-[500] mb-8">Live Classes</h5>

        <div className="bg-[#1E1E1E99] flex w-full h-[97px] rounded-tr-lg rounded-br-lg text-white mb-5">
          <div className="bg-[#D4AF37] w-8"></div>
          <div className="w-[calc(100%-32px)] flex flex-col justify-center mb-5">
            <div className="flex  justify-start space-x-5 w-[80%] mt-2   border-b-2 ml-3">
              <p>Zoom Meeting</p>
              <p>Traders Onboarding</p>
              <p> 10min</p>
            </div>
            <div className="flex justify-start ml-3 space-x-5">
              <p>Meeting Link</p>
              <Link className="text-[#A0A0FF]" href={"https://zoom.com"}>
                https://zoom.com
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#1E1E1E99] flex w-full h-[97px] rounded-tr-lg rounded-br-lg text-white mb-5">
          <div className="bg-[#D4AF37] w-8"></div>
          <div className="w-[calc(100%-32px)] flex flex-col justify-center mb-5">
            <div className="flex  justify-start space-x-5 w-[80%] mt-2   border-b-2 ml-3">
              <p>Zoom Meeting</p>
              <p>Traders Onboarding</p>
              <p> 10min</p>
            </div>
            <div className="flex justify-start ml-3 space-x-5">
              <p>Meeting Link</p>
              <Link className="text-[#A0A0FF]" href={"https://zoom.com"}>
                https://zoom.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <DashboardChallenges />
    </>
  );
}

export default Dashboard;

// box-shadow: 0px 8px 4px 0px #00000040;
//
