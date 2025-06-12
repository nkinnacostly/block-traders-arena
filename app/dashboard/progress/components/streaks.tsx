"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Flame } from "lucide-react";
import { useGetStreaks } from "../services/get-streaks";

interface StreakResponse {
  message: string;
  current_streak: {
    result: "Profit" | "Loss" | "Breakeven";
    streak_length: number;
  };
  longest_streaks: {
    profit: number;
    loss: number;
    breakeven: number;
  };
}

const Streaks: React.FC = () => {
  const { data: streaks } = useGetStreaks();
  const streaksData = streaks?.data as StreakResponse;
  const currentStreak = streaksData?.current_streak;

  const FlameIcon = ({
    color,
    streakLength,
    label,
    description,
  }: {
    color: string;
    streakLength: number;
    label: string;
    description: string;
  }) => (
    <div className="relative group">
      <div className="relative transform transition-transform duration-300 group-hover:scale-110">
        <Flame
          className={`w-12 h-12 ${color} drop-shadow-[0_0_8px_rgba(255,165,0,0.5)]`}
          style={{
            filter: "drop-shadow(0 0 8px rgba(255,165,0,0.5))",
            transform: "perspective(1000px) rotateX(10deg) rotateY(10deg)",
          }}
        />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base font-bold">
          {streakLength}
        </span>
      </div>
      <div>
        <p className="text-sm font-medium">{label}</p>
        <span className="text-xs text-gray-500">{description}</span>
      </div>
    </div>
  );

  const getStreakInfo = (streak: typeof currentStreak) => {
    if (!streak) return null;

    const isProfit = streak.result === "Profit";
    const isLoss = streak.result === "Loss";

    if (!isProfit && !isLoss) return null;

    return {
      color: isProfit ? "text-orange-500" : "text-gray-400",
      label: isProfit ? "Winning Streak" : "Losing Streak",
      description: `${streak.streak_length} consecutive ${
        isProfit ? "profitable" : "losing"
      } trades`,
    };
  };

  const streakInfo = getStreakInfo(currentStreak);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Trading Streaks</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="p-6 flex flex-col gap-4">
        {streakInfo ? (
          <div className="flex items-center gap-2">
            <FlameIcon
              color={streakInfo.color}
              streakLength={currentStreak!.streak_length}
              label={streakInfo.label}
              description={streakInfo.description}
            />
          </div>
        ) : (
          <p className="text-sm text-gray-500">No active streak</p>
        )}
      </CardContent>
    </Card>
  );
};

export default Streaks;
