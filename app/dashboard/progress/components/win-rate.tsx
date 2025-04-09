"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useGetEquityGraph } from "../services/get-equity-graph";
import { AxiosResponse } from "axios";

interface WinRateResponse {
  message: string;
  equity_growth: {
    starting_equity: string;
    final_equity: number;
    total_profits: string;
  };
  win_rate: number;
  chart_data: {
    labels: string[];
    growth: number[];
    equity: number[];
  };
}

const WinRate: React.FC = () => {
  const { data } = useGetEquityGraph();
  const response = data as AxiosResponse<WinRateResponse> | undefined;
  const winRateData = response?.data;
  const pieData = [
    { name: "Win Rate", value: winRateData?.win_rate },
    { name: "Loss Rate", value: 100 - (winRateData?.win_rate || 0) },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Win Rate</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="p-6">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span className="text-sm">Win Rate: {winRateData?.win_rate}%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <span className="text-sm">
              Loss Rate: {100 - (winRateData?.win_rate || 0)}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WinRate;
