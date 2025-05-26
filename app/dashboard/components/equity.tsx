import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { useGetTradeStats } from "../services/get-trade-stats";
import { useShareTrade } from "../services/share-trade";
import { Button } from "@/components/ui/button";

interface Trader {
  equity: number;
  one_week_gain: string;
  equity_growth: string;
}

interface TopTradersResponse {
  message: string;
  data: Trader;
  status: number;
}
function EquityComponent() {
  const { data } = useGetTradeStats();

  const { isLoading, refetch } = useShareTrade();
  const responseData = data?.data as TopTradersResponse;
  const trader = responseData?.data;

  const handleShareTrade = () => {
    refetch();
  };

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
                ${trader?.equity_growth?.toLocaleString() || "0.00"}
              </span>
            </h5>
          </div>

          {trader?.equity_growth && parseInt(trader.equity_growth) > 50 && (
            <div>
              <Button onClick={handleShareTrade} disabled={isLoading}>
                {isLoading ? "Sharing..." : "Share Trade"}
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default EquityComponent;
