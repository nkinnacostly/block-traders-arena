"use client";
import { useGetTradeStatistics } from "../services/get-trade-statistics";
import React from "react";
import Loading from "../loading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface TradeStatItem {
  setup_name: string;
  total_trades: number;
  total_profit: string;
  total_loss: string;
  profitable_trades: number;
  losing_trades: number;
  win_rate: string;
  average_profit: number;
  average_loss: number;
}

interface TradeStatsResponse {
  data: TradeStatItem[];
}

const TradeStats: React.FC = () => {
  const { data, isLoading } = useGetTradeStatistics();
  const tradeStats = data?.data as TradeStatsResponse;

  if (isLoading) return <Loading />;

  // const tradeStatsData = React.useMemo(() => data as unknown as TradeStatisticsResponse, [data]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Frequently Traded Setups </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="p-6 flex flex-col gap-4">
        {tradeStats?.data.map((item, index) => (
          <div
            key={index}
            className="flex flex-row justify-between gap-4 w-full"
          >
            <div className="flex-1 text-start p-2">
              <p className="text-sm font-medium">{item.setup_name}</p>
              <span className="text-xs text-gray-500">
                {item.total_trades} trades
              </span>
            </div>
            <div className="flex-1 text-start p-2">
              <div className="flex gap-2 justify-center items-center text-green-500">
                <p className="text-sm font-medium">{item.average_profit}</p>
                <span className="text-xs text-gray-500">Avg. Profit</span>
              </div>
              <div className="flex gap-2 justify-center items-center text-red-500">
                <p className="text-sm font-medium">{item.average_loss}</p>
                <span className="text-xs text-gray-500">Avg. Loss</span>
              </div>
            </div>
            <div className="flex-1 text-start p-2">
              <p className="text-sm font-medium">Win Rate</p>
              <span className="text-xs text-green-500">{item.win_rate}%</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TradeStats;
