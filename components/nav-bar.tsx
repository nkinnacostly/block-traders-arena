"use client";

import Down from "@/public/assets/img/svg/down.svg";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/img/png/logo.png";
import React, { memo } from "react";
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

const Navbar: React.FC = memo(() => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/education", label: "Education Arena", hasDropdown: true },
    { href: "/trading", label: "Trading Arena", hasDropdown: true },
  ];

  return (
    <div className="items-center justify-center hidden w-full lg:flex">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
        <div>
          <Image src={Logo} height={100} width={100} alt="logo" priority />
        </div>
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="flex items-center text-white hover:text-gray-200 transition-colors"
            >
              <p>{item.label}</p>
              {item.hasDropdown && (
                <span className="ml-1">
                  <Image
                    src={Down}
                    alt="caret-down"
                    height={35}
                    width={35}
                    className="transition-transform group-hover:rotate-180"
                  />
                </span>
              )}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center justify-center space-x-4">
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
          </NavLink>
        </div>
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
