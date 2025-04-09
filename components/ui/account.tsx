"use client";

import React, { memo } from "react";

interface StepProps {
  number: number;
  title: string;
}

const Step: React.FC<StepProps> = memo(({ number, title }) => (
  <div className="flex-col justify-center items-center gap-2.5 inline-flex">
    <div className="w-[100px] h-[100px] relative">
      <div className="w-[100px] h-[100px] left-0 top-0 absolute rounded-full border-2 border-amber-400" />
      <div className="w-20 h-20 left-[10px] top-[10px] absolute rounded-full border-2 border-amber-400" />
      <div className="left-[43px] top-[26px] absolute text-amber-400 text-[32px] font-medium">
        {number}
      </div>
    </div>
    <div className="w-[146px] text-center text-white text-xl font-medium">
      {title}
    </div>
  </div>
));

Step.displayName = "Step";

const Account: React.FC = memo(() => {
  const steps = [
    { number: 1, title: "Create a Block account" },
    { number: 2, title: "Start Learning" },
    { number: 3, title: "Get Funded" },
    { number: 4, title: "Start Trading" },
  ];

  return (
    <div className="w-full bg-black px-[4rem] py-[2rem] hidden lg:block">
      <p className="w-full text-white text-[32px] font-medium mt-5">
        How to open an account
      </p>
      <div className="flex justify-center items-center gap-[19px] mt-8">
        {steps.map((step) => (
          <Step key={step.number} number={step.number} title={step.title} />
        ))}
      </div>
    </div>
  );
});

Account.displayName = "Account";

export default Account;
