import React from "react";

function Textwithcolor({ colouredText, otherText }) {
  return (
    <>
      <div className="text-center lg:text-start">
        <span className="text-amber-400 text-2xl  font-semibold pr-2">
          {colouredText}
        </span>
        <span className="text-white text-2xl  font-semibold">{otherText}</span>
      </div>
    </>
  );
}

export default Textwithcolor;
