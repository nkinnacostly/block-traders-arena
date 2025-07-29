"use client";

import React, { useState, useCallback, memo, useEffect } from "react";

// import Down from "@/public/assets/img/svg/down.svg";
import { FaSortDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/img/png/logo.png";
import LogoDark from "@/public/assets/img/png/logo-dark.png";
import { PiSquaresFourFill } from "react-icons/pi";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

// import { motion } from "framer-motion";

const NavLink = memo(({ href, children, className = "" }) => (
  <Link href={href} className={className}>
    {children}
  </Link>
));

NavLink.displayName = "NavLink";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="lg:hidden xl:hidden 2xl:hidden">
      <div className="bg-[#f9eeb2] px-[2rem] py-3 flex items-center justify-between">
        <div>
          <Image
            src={mounted && resolvedTheme === "dark" ? Logo : LogoDark}
            height={50}
            width={50}
            alt="logo"
            priority
          />
        </div>
        <button
          onClick={toggleMenu}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          <PiSquaresFourFill size={45} />
        </button>
      </div>

      {isOpen && (
        <div className="border-2 py-4 my-4">
          <div className="fixed inset-0 bg-black/20 z-40" onClick={closeMenu} />
          <nav className="relative z-50 bg-white rounded-lg shadow-lg">
            <div className="flex items-center flex-col space-y-5 p-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/homepage/about">About Us</NavLink>
              <NavLink
                href="/homepage/education"
                className="flex items-center justify-center space-x-3"
              >
                <p>Education Arena</p>
                <FaSortDown size={30} className="mb-3" />
              </NavLink>
              <NavLink
                href="/homepage/trading"
                className="flex items-center justify-center space-x-3"
              >
                <p>Trading Arena</p>
                <FaSortDown size={30} className="mb-3" />
              </NavLink>
            </div>
            <div className="flex items-center justify-center flex-col space-y-5 mt-3 p-4">
              <NavLink
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" })
                )}
                href="/login"
              >
                Sign in
              </NavLink>
              <NavLink
                className={cn(buttonVariants({ size: "lg" }))}
                href="/sign-up"
              >
                Create Account
              </NavLink>
            </div>
          </nav>
        </div>
      )}
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
    </div>
  );
};

export default memo(MobileNav);
