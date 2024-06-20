import React from "react";
// import Education from "@/public/assets/img/svg/education.svg";
import Image from "next/image";
function Card({ cardData }) {
  return (
    <div className="relative flex-col lg:flex-row flex items-center justify-between w-full gap-4 p-5 mt-8 ">
      {cardData.map((info, index) => (
        <>
          <div
            className="flex flex-col items-center justify-start space-y-3"
            key={index}
          >
            <Image src={info?.icon} alt="" height={70} width={70} />
            <p className="text-2xl font-semibold text-black underline ">
              {info?.head}
            </p>

            <p className="text-black text-base font-normal   capitalize text-center">
              {info?.info}
            </p>
          </div>
        </>
      ))}
    </div>
  );
}

export default Card;
