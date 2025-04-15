import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { useGetFreqAssets } from "../services/freq-assets";

interface Asset {
  trading_pair: string;
  trade_count: number;
  total_profit: number;
  total_loss: number;
  net_result: number;
  win_count: string;
  loss_count: string;
  breakeven_count: string;
  win_rate: number;
  loss_rate: number;
  profitability_percentage: number;
}

interface ApiResponse {
  message: string;
  assets: Asset[];
  status: number;
}

function FrequentlyTradedAssets() {
  const { data } = useGetFreqAssets();
  const responseData = data?.data as ApiResponse;

  if (!responseData?.assets) {
    return null;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Frequently Traded Assets</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="p-6 flex flex-col gap-4">
        {responseData.assets.map((item: Asset, index: number) => (
          <div
            key={index}
            className="flex flex-row justify-between gap-4 w-full"
          >
            <div className="flex-1 text-start p-2">
              <p className="text-sm font-medium">{item.trading_pair}</p>
              <span className="text-xs text-gray-500">
                {item.trade_count} trades
              </span>
            </div>
            <div className="flex-1 text-start p-2">
              <div className="flex gap-2 justify-center items-center text-green-500">
                <p className="text-sm font-medium">
                  ${item.total_profit.toLocaleString()}
                </p>
                <span className="text-xs text-gray-500">Total Profit</span>
              </div>
              <div className="flex gap-2 justify-center items-center text-red-500">
                <p className="text-sm font-medium">
                  ${item.total_loss.toLocaleString()}
                </p>
                <span className="text-xs text-gray-500">Total Loss</span>
              </div>
            </div>
            <div className="flex-1 text-start p-2">
              <p className="text-sm font-medium">Win Rate</p>
              <span
                className={`text-xs ${
                  item.win_rate >= 50 ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.win_rate}%
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default FrequentlyTradedAssets;
