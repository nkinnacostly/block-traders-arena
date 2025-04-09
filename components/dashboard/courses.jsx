"use client";

import Image from "next/image";
import React, { memo } from "react";

const CourseCard = memo(
  ({
    title,
    description,
    duration,
    learners,
    imageUrl,
    onMoreInfo,
    onStartLearning,
  }) => (
    <div className="relative bg-white shadow-xl rounded-xl overflow-hidden">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full rounded-t-xl"
          width={400}
          height={200}
          priority
        />
        <Image
          src="/assets/img/svg/play.svg"
          alt="Play video"
          className="absolute right-4 top-[11rem] lg:top-[6rem] cursor-pointer xl:top-[9rem] hover:scale-110 transition-transform"
          width={70}
          height={70}
        />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-medium text-black mb-3">{title}</h2>
        <p className="text-base font-normal text-stone-900 mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/img/svg/clock.svg"
              height={20}
              width={20}
              alt="Duration"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-neutral-700">
              {duration}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/img/svg/cap.svg"
              height={20}
              width={20}
              alt="Learners"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-neutral-700">
              {learners} Learners
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={onMoreInfo}
            className="w-full px-5 py-2.5 rounded-lg border-2 border-amber-400 hover:bg-amber-50 transition-colors"
          >
            <span className="text-base font-medium text-black capitalize">
              More info
            </span>
          </button>
          <button
            onClick={onStartLearning}
            className="w-full px-5 py-2.5 bg-amber-400 rounded-lg hover:bg-amber-500 transition-colors"
          >
            <span className="text-base font-medium text-black capitalize">
              Start learning
            </span>
          </button>
        </div>
      </div>
    </div>
  )
);

CourseCard.displayName = "CourseCard";

const AllDashboardCourses = () => {
  const handleMoreInfo = () => {
    // Handle more info click
  };

  const handleStartLearning = () => {
    // Handle start learning click
  };

  return (
    <div className="max-w-4xl mx-auto">
      <CourseCard
        title="Trading for Beginners: Entry Level"
        description="Introduction to Trading Basics for Beginners: Exploring the World of Financial Markets"
        duration="10 - 12 hours"
        learners={234}
        imageUrl="/assets/img/png/chart.png"
        onMoreInfo={handleMoreInfo}
        onStartLearning={handleStartLearning}
      />
    </div>
  );
};

export default memo(AllDashboardCourses);
