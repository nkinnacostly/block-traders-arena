import React from "react";
import Image from "next/image";

function Checkwithtext({ Check, check1, info }) {
  return (
    <div className="mt-5 flex flex-col justify-center items-center lg:justify-start lg:items-start w-full">
      <div className="flex items-center mt-5 mb-2 space-x-3">
        <span className="">
          <Image src={Check} height={40} width={40} alt="check" />
        </span>
        <p className="text-[32px] font-normal text-white">{check1}</p>
      </div>

      <p className="text-base font-normal text-white capitalize text-center lg:text-start px-5 lg:px-0">
        {info}
      </p>
    </div>
  );
}

export default Checkwithtext;
