import React from "react";
import Image from "next/image";
function TestimonialsCard({ testimonial }) {
  return (
    <div>
      <div
        className={`w-80 p-8 rounded-[18px] shadow h-[392px]   relative`}
        style={{ backgroundColor: testimonial?.color }}
      >
        <div className="absolute w-20 h-20 rounded-full -left-8 -top-10">
          <Image
            src={testimonial?.pic}
            alt="pp"
            height={30}
            width={30}
            className="w-20 h-20 rounded-full"
          />
        </div>
        <p className=" text-stone-900 text-base font-normal  leading-[30px] italic">
          {testimonial?.comment}
        </p>
        <p className="text-base font-semibold leading-normal text-stone-900">
          - {testimonial?.name}
        </p>
        <div className="flex items-center justify-between">
          <Image
            src={"/assets/img/svg/rating.svg"}
            height={60}
            width={60}
            alt="iii"
          />
          <Image
            src={"/assets/img/svg/quote.svg"}
            height={50}
            width={50}
            alt="iii"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
