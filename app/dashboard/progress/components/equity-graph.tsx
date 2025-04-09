"use client";
import React from "react";
import { useGetEquityGraph } from "../services/get-equity-graph";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Separator } from "@/components/ui/separator";
import { AxiosResponse } from "axios";

interface ChartData {
  labels: string[];
  growth: number[];
  equity: number[];
}

export interface EquityResponse {
  message: string;
  equity_growth: {
    starting_equity: string;
    final_equity: number;
    total_profits: string;
  };
  win_rate: number;
  chart_data: ChartData;
}

export default function EquityGraph() {
  const { data, error, isLoading } = useGetEquityGraph();
  const response = data as AxiosResponse<EquityResponse> | undefined;
  const equityData = response?.data;

  const formattedData = equityData?.chart_data?.labels.map(
    (label: string, index: number) => ({
      date: label,
      growth: equityData?.chart_data?.growth[index],
      equity: equityData?.chart_data?.equity[index],
    })
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Equity Graph</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="mt-3">
        <div className="grid grid-cols-3 gap-4 mb-6 px-2">
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="text-sm font-medium text-muted-foreground">
              Starting Equity
            </h3>
            <p className="text-2xl font-bold">
              ${equityData?.equity_growth.starting_equity}
            </p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="text-sm font-medium text-muted-foreground">
              Final Equity
            </h3>
            <p className="text-2xl font-bold">
              ${equityData?.equity_growth.final_equity}
            </p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="text-sm font-medium text-muted-foreground">
              Win Rate
            </h3>
            <p className="text-2xl font-bold">{equityData?.win_rate}%</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={formattedData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="growth"
              stroke="#22c55e"
              name="Growth"
            />
            <Line
              type="monotone"
              dataKey="equity"
              stroke="#3b82f6"
              name="Equity"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
