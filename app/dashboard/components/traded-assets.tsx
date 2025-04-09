import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

const tradedAssetsData = [
  {
    symbol: "EUR/USD",
    trades: "300 trades(40%)",
    avgProfit: "0.46%",
    avgLoss: "0.42%",
    profitable: "46.00%",
    isProfitable: true,
  },
  {
    symbol: "GBP/USD",
    trades: "250 trades(35%)",
    avgProfit: "0.52%",
    avgLoss: "0.48%",
    profitable: "52.00%",
    isProfitable: true,
  },
  {
    symbol: "USD/JPY",
    trades: "200 trades(25%)",
    avgProfit: "0.42%",
    avgLoss: "0.45%",
    profitable: "42.00%",
    isProfitable: false,
  },
  {
    symbol: "AUD/USD",
    trades: "150 trades(20%)",
    avgProfit: "0.38%",
    avgLoss: "0.42%",
    profitable: "38.00%",
    isProfitable: false,
  },
];

function FrequentlyTradedAssets() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Frequently Traded Assets </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="p-6 flex flex-col gap-4">
        {tradedAssetsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-row justify-between gap-4 w-full"
          >
            <div className="flex-1 text-start p-2">
              <p className="text-sm font-medium">{item.symbol}</p>
              <span className="text-xs text-gray-500">{item.trades}</span>
            </div>
            <div className="flex-1 text-start p-2">
              <div className="flex gap-2 justify-center items-center text-green-500">
                <p className="text-sm font-medium">{item.avgProfit}</p>
                <span className="text-xs text-gray-500">Avg. Profit</span>
              </div>
              <div className="flex gap-2 justify-center items-center text-red-500">
                <p className="text-sm font-medium">{item.avgLoss}</p>
                <span className="text-xs text-gray-500">Avg. Loss</span>
              </div>
            </div>
            <div className="flex-1 text-start p-2">
              <p className="text-sm font-medium">Profitable</p>
              <span
                className={`text-xs ${
                  item.isProfitable ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.profitable}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default FrequentlyTradedAssets;
