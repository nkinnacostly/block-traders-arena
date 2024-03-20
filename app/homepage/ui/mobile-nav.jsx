"use client";
import React, { useState } from "react";
import Logo from "@/public/assets/img/png/logo.png";
import Image from "next/image";
import { PiSquaresFourFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { FaSortDown } from "react-icons/fa";
import Link from "next/link";
import Buttonwithoutbg from "@/src/components/ui/button-without-bg";
import Buttonwithbg from "@/src/components/ui/button-with-bg";
import Down from "@/public/assets/img/svg/down.svg";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="border-2  bg-[#f9eeb2] px-[2rem] py-3 flex items-center justify-between lg:hidden">
        <div>
          <Image src={Logo} height={50} width={50} alt="logo" />
        </div>
        <div>
          <PiSquaresFourFill size={45} onClick={toggleMenu} />
        </div>
      </div>
      <div className={`modal-nav ${isOpen ? "open" : ""}`}>
        <div className="overlay" onClick={() => setIsOpen(!isOpen)}></div>
        <nav className="menu">
          <div className="flex items-center flex-col space-y-5">
            <Link href={"/"} className="text-white">
              Home
            </Link>
            <Link href={"/homepage/about"} className="text-white">
              About Us
            </Link>
            <Link
              href={"/homepage/education"}
              className="flex items-center text-white  justify-center space-x-3"
            >
              <p>Education Arena</p>

              <FaSortDown size={30} className="mb-3" />
            </Link>
            <Link
              href={"/homepage/trading"}
              className="flex items-center text-white justify-center space-x-3"
            >
              <p>Trading Arena</p>
              <FaSortDown size={30} className="mb-3" />
            </Link>
          </div>
          <div className="flex items-center justify-center flex-col space-y-5 mt-3">
            <Buttonwithoutbg
              Btntext={"Sign in"}
              className={"text-black"}
              onClick={() => router.push("/auth/login")}
            />
            <Buttonwithbg
              btnText={"Create account"}
              onClick={() => router.push("/auth/sign-up")}
            />
          </div>
        </nav>
      </div>
      {/* <motion.div
        className={`menu ${isOpen ? "block" : "hidden"} `}
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        Your menu items go here
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        Add more menu items as needed
      </motion.div> */}
    </>
  );
}

export default MobileNav;
