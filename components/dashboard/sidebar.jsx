"use client";

import { GiProgression } from "react-icons/gi";
import { GoBook } from "react-icons/go";
import Image from "next/image";
import { IoMdSettings } from "react-icons/io";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { useUserStore } from "@/store/store";
import { useVideoStore } from "@/store/store";

function DashboardSidebar() {
  const { loggedInUserDetails } = useUserStore();
  const { watchedVideos } = useVideoStore();
  // const router = useRouter();
  const isLevel1 = loggedInUserDetails?.learners_level === "1";
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
      disabled: watchedVideos !== 3 || isLevel1,
    },
    {
      icon: <IoMdSettings />,
      tittle: "Settings",
      link: "/dashboard/settings",
    },
  ];
  return (
    <div className="flex flex-col w-full h-full px-5 space-y-3 border-2 py-5 rounded-xl">
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
          <Link
            className={`flex items-center justify-start rounded-lg px-3 cursor-pointer ${
              pathname === links?.link
                ? "bg-[#1E1E1E99] border border-green-300"
                : ""
            } ${links.disabled ? "pointer-events-none opacity-50" : ""}`} // Disable the link if it's not accessible
            key={index}
            href={links.disabled ? "#" : links.link} // Prevent navigation if disabled
          >
            <p className={`flex items-start justify-start`}>{links.icon}</p>

            <p className="text-[16px] font-[400]  p-2">{links.tittle}</p>
          </Link>
        ))}
      </>
    </div>
  );
}

export default DashboardSidebar;
