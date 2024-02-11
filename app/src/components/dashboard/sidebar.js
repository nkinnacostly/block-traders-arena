import React from "react";
import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { GoBook } from "react-icons/go";
function DashboardSidebar() {
  const sideLinks = [
    {
      icon: <MdDashboard />,
      tittle: "Dashboard",
    },
    {
      icon: <GoBook />,
      tittle: "Courses",
    },
    {
      icon: <GiProgression />,
      tittle: "Progress",
    },
    {
      icon: <TbTargetArrow />,
      tittle: "Challenges",
    },
    {
      icon: <IoMdSettings />,
      tittle: "Settings",
    },
  ];
  return (
    <div className="flex flex-col w-full h-full px-5 space-y-3 bg-white rounded-xl">
      <div className="flex items-center justify-center">
        <div className="items-center w-20 h-20 border-2 rounded-full ">
          <Image
            src={"/assets/img/png/chef.png"}
            width={100}
            height={100}
            className="w-full h-full rounded-full"
            alt="prof-img"
          />
        </div>
      </div>
      <>
        {sideLinks.map((links, index) => (
          <div className="flex items-center justify-start" key={index}>
            {/* <MdDashboard size={20} /> */}
            <p className="flex items-start justify-start border-2">
              {links.icon}
            </p>

            <p className="text-[16px] font-[400] text-[#1E1E1E] p-2">
              {links.tittle}
            </p>
          </div>
        ))}
      </>
    </div>
  );
}

export default DashboardSidebar;
