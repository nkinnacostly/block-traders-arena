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

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Trading Streaks</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Flame className="w-8 h-8 text-orange-500" />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm font-bold">
                {winningStreak?.streak_length || 0}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium">Winning Streak</p>
              <span className="text-xs text-gray-500">
                Consecutive profitable trades
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Flame className="w-8 h-8 text-gray-400" />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm font-bold">
                {losingStreak?.streak_length || 0}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium">Losing Streak</p>
              <span className="text-xs text-gray-500">
                Consecutive losing trades
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Streaks;
