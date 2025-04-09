"use client";

import Down from "@/public/assets/img/svg/down.svg";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/img/png/logo.png";
import React, { memo } from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

// import { useRouter } from "next/navigation";

const NavLink = memo(({ href, children, className = "" }) => (
  <Link href={href} className={className}>
    {children}
  </Link>
));

NavLink.displayName = "NavLink";

const Navbar = () => {
  // const router = useRouter();

  return (
    <div className="items-center justify-center hidden w-full lg:flex">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
        <div>
          <Image src={Logo} height={100} width={100} alt="logo" priority />
        </div>
        <div className="flex items-center space-x-8">
          <NavLink
            href="/"
            className="text-white hover:text-gray-200 transition-colors"
          >
            Home
          </NavLink>
          <NavLink
            href="/about"
            className="text-white hover:text-gray-200 transition-colors"
          >
            About Us
          </NavLink>
          <NavLink
            href="/education"
            className="flex items-center text-white hover:text-gray-200 transition-colors"
          >
            <p>Education Arena</p>
            <span className="ml-1">
              <Image
                src={Down}
                alt="caret-down"
                height={35}
                width={35}
                className="transition-transform group-hover:rotate-180"
              />
            </span>
          </NavLink>
          <NavLink
            href="/trading"
            className="flex items-center text-white hover:text-gray-200 transition-colors"
          >
            <p>Trading Arena</p>
            <span className="ml-1">
              <Image
                src={Down}
                alt="caret-down"
                height={35}
                width={35}
                className="transition-transform group-hover:rotate-180"
              />
            </span>
          </NavLink>
        </div>
        <div className="flex items-center justify-center space-x-4">
          {/* <Buttonwithoutbg
            Btntext={"Sign in"}
            className={"text-white"}
            onClick={() => router.push("/login")}
          /> */}
          {/* <Buttonwithbg
            btnText={"Create account"}
            onClick={() => router.push("/sign-up")}
            path="/sign-up"
            /> */}
          <NavLink
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "hover:bg-white/10 transition-colors"
            )}
            href="/login"
          >
            Sign in
          </NavLink>
          <NavLink
            className={cn(
              buttonVariants({ size: "lg" }),
              "hover:opacity-90 transition-opacity"
            )}
            href="/sign-up"
          >
            Create Account
            {/* Create campaign <PlusCircledIcon /> */}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default memo(Navbar);
