"use client";

import React, { memo } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Logo from "@/public/assets/img/png/logo.png";

interface FooterSectionProps {
  title: string;
  items: string[];
}

const FooterSection: React.FC<FooterSectionProps> = memo(({ title, items }) => (
  <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
    <h5 className="text-[24px] font-[600] text-white">{title}</h5>
    {items.map((item, index) => (
      <p key={index} className="mt-2 text-sm text-white">
        {item}
      </p>
    ))}
  </div>
));

FooterSection.displayName = "FooterSection";

const HomepageFooter: React.FC = memo(() => {
  const footerSections = [
    {
      title: "Company",
      items: ["About Us", "Contacts"],
    },
    {
      title: "Services",
      items: ["Trading", "Education"],
    },
    {
      title: "Legal",
      items: [
        "Privacy Policy",
        "Terms and Services",
        "Terms of Use",
        "Refund Policy",
      ],
    },
    {
      title: "Contact",
      items: [
        "blocktraders",
        "+234-000-000-000",
        "22 Obayan close, Lagos,Nigeria",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-around space-x-4 lg:p-5 lg:flex-row">
        <div className="w-full lg:w-[40%] mt-4 mb-4">
          <div className="bg-[#1E1E1E99] p-4 rounded-lg">
            <h5 className="text-[24px] font-[500] text-[#D4AF37] mb-5">
              Join Our Newsletter
            </h5>
            <div className="flex">
              <input
                placeholder="Enter Email"
                className="bg-[#1E1E1E99] border-none focus:outline-none p-4"
              />
              <button className="bg-[#D4AF37] text-white px-5">
                Subscribe
              </button>
            </div>
            <p className="text-[#D4AF37] text-sm mt-2">
              * Will send you weekly updates for your better tool management.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[60%] grid grid-cols-1 lg:grid-cols-4 gap-3">
          {footerSections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
      </div>
      <hr className="hidden border lg:block" />
      <div className="flex flex-col items-center justify-between p-5 space-y-8 lg:flex-row lg:space-y-0">
        <Image src={Logo} height={100} width={100} alt="logo" />
        <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="lg">
            Get Educated
          </Button>
          <Button size="lg">Start Trading</Button>
        </div>
      </div>
    </>
  );
});

HomepageFooter.displayName = "HomepageFooter";

export default HomepageFooter;
