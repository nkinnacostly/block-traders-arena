import React from "react";

function Buttonwithbg({ btnText, className, onClick }) {
  return (
    <div
      className={` h-11 px-5 py-2.5 bg-amber-400 rounded-lg justify-center items-center gap-2.5 flex ${className} cursor-pointer`}
      onClick={onClick}
    >
      <p className="text-base font-medium text-center text-black capitalize">
        {btnText}
      </p>
    </div>
  );
}

export default Buttonwithbg;
