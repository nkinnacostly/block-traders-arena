"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Flame } from "lucide-react";
import { useGetStreaks } from "../services/get-streaks";

interface StreakItem {
  result: "Profit" | "Loss";
  streak_length: number;
}
interface StreaksResponse {
  streaks: StreakItem[];
}

const Streaks: React.FC = () => {
  const { data: streaks } = useGetStreaks();
  const streaksData = streaks?.data as StreaksResponse;

  const winningStreak = streaksData?.streaks?.find(
    (item) => item.result === "Profit"
  );

  const losingStreak = streaksData?.streaks?.find(
    (item) => item.result === "Loss"
  );

  const winningLength = winningStreak?.streak_length || 0;
  const losingLength = losingStreak?.streak_length || 0;

  const showBoth = winningLength === losingLength;
  const showWinning = winningLength > losingLength;
  const showLosing = losingLength > winningLength;

  const FlameIcon = ({
    color,
    streakLength,
  }: {
    color: string;
    streakLength: number;
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
    </div>
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Trading Streaks</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          {(showBoth || showWinning) && (
            <div className="flex items-center gap-2">
              <FlameIcon color="text-orange-500" streakLength={winningLength} />
              <div>
                <p className="text-sm font-medium">Winning Streak</p>
                <span className="text-xs text-gray-500">
                  Consecutive profitable trades
                </span>
              </div>
            </div>
          )}

          {(showBoth || showLosing) && (
            <div className="flex items-center gap-2">
              <FlameIcon color="text-gray-400" streakLength={losingLength} />
              <div>
                <p className="text-sm font-medium">Losing Streak</p>
                <span className="text-xs text-gray-500">
                  Consecutive losing trades
                </span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Streaks;
