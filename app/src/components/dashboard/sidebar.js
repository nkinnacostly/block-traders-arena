"use client";

import React from "react";
import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { GoBook } from "react-icons/go";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

function DashboardSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  // console.log(pathname, "This is pathname");
  const sideLinks = [
    {
      icon: <MdDashboard />,
      tittle: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <GoBook />,
      tittle: "Courses",
      link: "/dashboard/courses",
    },
    {
      icon: <GiProgression />,
      tittle: "Progress",
      link: "/dashboard/progress",
    },
    {
      icon: <TbTargetArrow />,
      tittle: "Challenges",
      link: "/dashboard/challenges",
    },
    {
      icon: <IoMdSettings />,
      tittle: "Settings",
      link: "/dashboard/settings",
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
          <div
            className={`flex items-center justify-start  rounded-lg px-3 cursor-pointer  ${
              pathname === links?.link ? "bg-[#1E1E1E99] text-white" : ""
            }`}
            key={index}
            onClick={() => router.push(`${links?.link}`)}
          >
            {/* <MdDashboard size={20} /> */}
            <p
              className={`flex items-start justify-start ${
                pathname === links?.link ? " text-black" : ""
              }`}
            >
              {links.icon}
            </p>

            <p className="text-[16px] font-[400]  p-2">{links.tittle}</p>
          </div>
        ))}
      </>
    </div>
  );
}

export default DashboardSidebar;
