"use client";
import React from "react";
import { useGetBadges } from "../services/get-badges";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  FaTrophy,
  FaMedal,
  FaStar,
  FaCertificate,
  FaAward,
  FaChartLine,
} from "react-icons/fa";
import Loading from "../loading";

interface Badge {
  id: number;
  name: string;
  learners_level: string;
  badges_earned: string[];
}

interface BadgeResponse {
  data: {
    user: Badge;
  };
}

const badgeIcons: Record<string, { icon: React.ReactNode; color: string }> = {
  "Newbie Trader": { icon: <FaTrophy />, color: "text-yellow-500" },
  "Wannabe Profitable Trader": { icon: <FaMedal />, color: "text-blue-500" },
  "Profitable Trader": { icon: <FaStar />, color: "text-purple-500" },
  "Risk Manager": { icon: <FaCertificate />, color: "text-green-500" },
  "Signal Provider": { icon: <FaChartLine />, color: "text-red-500" },
  "Money Monger": { icon: <FaAward />, color: "text-orange-500" },
  "Block Trader": { icon: <FaTrophy />, color: "text-[#FFD700]" },
};

const Badges: React.FC = () => {
  const { data, isLoading } = useGetBadges();
  const badgeData = React.useMemo(
    () => data as unknown as BadgeResponse,
    [data]
  );

  if (isLoading) return <Loading />;
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Badges</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="mt-3 px-4 pb-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {badgeData?.data?.user?.badges_earned.map((badge) => (
            <div
              key={badge}
              className="flex flex-col items-center p-4 border-2 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div
                className={`text-4xl mb-2 ${
                  badgeIcons[badge]?.color || "text-gray-500"
                }`}
              >
                {badgeIcons[badge]?.icon || <FaTrophy />}
              </div>
              <span className="text-sm font-medium text-center">{badge}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Badges;
