"use client";

import React, { memo } from "react";

interface LoadingProps {
  className?: string;
}

const Loading: React.FC<LoadingProps> = memo(({ className = "" }) => {
  return (
    <div
      className={`w-full flex justify-center items-center h-full m-auto ${className}`}
    >
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-white animate-bounce" />
        <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.3s]" />
        <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.5s]" />
      </div>
    </div>
  );
});

Loading.displayName = "Loading";

export default Loading;
