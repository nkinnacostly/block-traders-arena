import React from "react";

function Buttonwithoutbg({ Btntext, className, textClassName, onClick }) {
  return (
    <>
      <div
        className={` h-11 px-[25px] py-2.5 rounded-lg border-2 border-amber-400 justify-center items-center gap-2.5 flex ${className} cursor-pointer `}
        onClick={onClick}
      >
        <p className={`text-base font-medium text-center  capitalize`}>
          {Btntext}
        </p>
      </div>
    </>
  );
}

export default Buttonwithoutbg;
