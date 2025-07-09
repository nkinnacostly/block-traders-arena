import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { useGetTradeStats } from "../services/get-trade-stats";
import { useShareTrade } from "../services/share-trade";
import { Button } from "@/components/ui/button";
import { Loader2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

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
  const {
    data,
    error,
    isLoading,
    refetch: refetchTradeStats,
  } = useGetTradeStats();

  const {
    isLoading: isShareLoading,
    refetch,
    isError: isShareError,
    error: shareError,
    isSuccess: isShareSuccess,
  } = useShareTrade();
  const responseData = data?.data as TopTradersResponse;
  const trader = responseData?.data;

  const handleShareTrade = () => {
    refetch();
  };

  React.useEffect(() => {
    if (isShareSuccess) {
      toast.success("Trade shared successfully");
    }
  }, [isShareSuccess]);

  if (error) {
    return (
      <Card className="w-full border-red-200">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <CardTitle className="text-red-500">
              Error Loading Equity Data
            </CardTitle>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="p-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-red-600">{error.message}</p>
            <Button
              variant="outline"
              className="mt-2 w-fit"
              onClick={() => refetchTradeStats()}
            >
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isShareError) {
    return (
      <Card className="w-full border-red-200">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <CardTitle className="text-red-500">Error Sharing Trade</CardTitle>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="p-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-red-600">{shareError?.message}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Equity</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="p-6">
        {isLoading ? (
          <div className="flex items-center justify-center h-full w-full">
            <Loader2 className="w-4 h-4 animate-spin" />
          </div>
        ) : (
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
              <p className="text-sm font-medium">5-Day Rolling Return</p>
              <h5 className="text-[24px] font-[500]">
                <span className="text-[#008000]">
                  {trader?.one_week_gain?.toLocaleString() || "0.00"}
                </span>
              </h5>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">Return on Equity</p>
              <h5 className="text-[24px] font-[500]">
                <span className="text-[#008000]">
                  {trader?.equity_growth?.toLocaleString() || "0.00"}
                </span>
              </h5>
            </div>

            {trader?.equity_growth && parseInt(trader.equity_growth) >= 15 && (
              <div>
                <Button onClick={handleShareTrade} disabled={isShareLoading}>
                  {isShareLoading ? "Sharing..." : "Share Trade"}
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default EquityComponent;
