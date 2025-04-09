"use client";

import React, { useState, useCallback, memo } from "react";
import { FaSortDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/img/png/logo.png";
import { PiSquaresFourFill } from "react-icons/pi";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = memo(
  ({ href, children, className = "" }) => (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
);

NavLink.displayName = "NavLink";

const MobileNav: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/homepage/about", label: "About Us" },
    {
      href: "/homepage/education",
      label: "Education Arena",
      hasDropdown: true,
    },
    { href: "/homepage/trading", label: "Trading Arena", hasDropdown: true },
  ];

  return (
    <div className="lg:hidden xl:hidden 2xl:hidden">
      <div className="bg-[#f9eeb2] px-[2rem] py-3 flex items-center justify-between">
        <div>
          <Image src={Logo} height={50} width={50} alt="logo" priority />
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
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-center space-x-3",
                    item.hasDropdown && "mb-3"
                  )}
                >
                  <p>{item.label}</p>
                  {item.hasDropdown && (
                    <FaSortDown size={30} className="mb-3" />
                  )}
                </NavLink>
              ))}
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
    </div>
  );
});

MobileNav.displayName = "MobileNav";

export default MobileNav;
