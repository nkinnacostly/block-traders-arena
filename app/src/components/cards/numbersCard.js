import React from "react";

function NumbersCard({ number, text }) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-[100px] h-[100px] rounded-full border-2 border-amber-400 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full border-2 border-amber-400 flex items-center justify-center">
          <p className="text-amber-400 text-[32px] font-medium ">{number}</p>
        </div>
      </div>
      <p className="w-[146px] text-center text-white text-xl font-medium mt-3">
        {text}
      </p>
    </div>
  );
}

export default NumbersCard;
