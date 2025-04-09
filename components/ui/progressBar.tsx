"use client";

import React, { memo } from "react";

interface ProgressBarProps {
  bgcolor: string;
  completed: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = memo(
  ({ bgcolor, completed, className = "" }) => {
    return (
      <div className="w-full">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${className}`}
          style={{
            width: `${completed}%`,
            backgroundColor: bgcolor,
          }}
        >
          <span className="sr-only">{`${completed}%`}</span>
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";

export default ProgressBar;
