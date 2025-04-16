import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { useGetTopTraders } from "../services/get-top-traders";
interface Trade {
  id: number;
  day_date: string;
  result_amount: string;
  copy_trade: number;
  trading_pair: string;
}

interface WinRate {
  wins: number;
  total: number;
  win_rate: number;
}

interface Trader {
  id: number;
  name: string;
  learners_level: string;
  equity: number;
  one_week_gain: number;
  percentage_increase: number;
  average_profit: number;
  average_loss: number;
  frequently_traded_assets: {
    [key: string]: number;
  };
  win_rate_by_asset: {
    [key: string]: WinRate;
  };
  trades: Trade[];
}

interface TopTradersResponse {
  message: string;
  traders: Trader[];
  status: number;
}
function EquityComponent() {
  const { data } = useGetTopTraders();
  const responseData = data?.data as TopTradersResponse;
  const trader = responseData?.traders[0];
  console.log(responseData, "responseData");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Equity</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">Equity</p>
            <h5 className="text-[24px] font-[500]">
              <span className="text-[#D4AF37]">
                ${trader?.equity?.toLocaleString() || "0.00"}
              </span>
            </h5>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">Gain(1week)</p>
            <h5 className="text-[24px] font-[500]">
              <span className="text-[#008000]">
                ${trader?.one_week_gain?.toLocaleString() || "0.00"}
              </span>
            </h5>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">Average Profit</p>
            <h5 className="text-[24px] font-[500]">
              <span className="text-[#008000]">
                ${trader?.average_profit?.toLocaleString() || "0.00"}
              </span>
            </h5>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default EquityComponent;
