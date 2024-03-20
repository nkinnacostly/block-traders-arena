import React from "react";

function Button({onClick, btnText, className}) {
  return (
    <button className={`w-full py-4 rounded-[10px] text-white  mt-5 ${className}`}
    onClick={onClick}
    >
      {btnText}
    </button>
  );
}

export default Button;
