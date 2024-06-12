import { BarsLoadingIcon } from "@/public/assets/icons";
import React from "react";

function Buttonwithoutbg({ Btntext, className, onClick, disabled, loading }) {
  return (
    <>
      <button
        className={` h-11 px-[25px] py-2.5 rounded-lg border-2 border-amber-400 justify-center items-center gap-2.5 flex ${className} cursor-pointer `}
        onClick={onClick}
        disabled={disabled}
      >
        {loading ? (
          <div
            // style={{
            //   background: bgColor ? bgColor : "#0066FF",
            // }}
            className="flex items-center justify-center"
          >
            <BarsLoadingIcon className="text-inherit text-[2.5em]" />
          </div>
        ) : (
          <>{Btntext}</>
        )}
      </button>
    </>
  );
}

export default Buttonwithoutbg;
