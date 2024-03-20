import React from "react";

const ProgressBar = ({ bgcolor, completed, className }) => {
  return (
    <div>
      <div
        className={`${className}`}
        style={{ width: `${completed}%`, backgroundColor: bgcolor }}
      >
        <span>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
