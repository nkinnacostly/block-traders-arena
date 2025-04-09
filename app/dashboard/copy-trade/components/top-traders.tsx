"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGetTopTraders } from "../services/get-top-traders";
import { AxiosResponse } from "axios";

interface Trader {
  id: number;
  name: string;
  learners_level: string;
  equity: number;
  one_week_gain: number;
  percentage_increase: number;
}

interface TopTradersResponse {
  message: string;
  traders: Trader[];
}

export default function TopTraders() {
  const { data, error, isLoading } = useGetTopTraders();
  const response = data as AxiosResponse<TopTradersResponse> | undefined;
  const traders = response?.data?.traders;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  if (!traders?.length) return <div>No traders found</div>;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Top Traders</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="mt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {traders.map((trader) => (
            <Card key={trader.id} className="p-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{trader.name}</h3>
                  <span className="text-sm text-muted-foreground">
                    Level {trader.learners_level}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Equity</p>
                    <p className="text-lg font-medium">
                      ${trader.equity.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">1 Week Gain</p>
                    <p className="text-lg font-medium text-green-500">
                      +${trader.one_week_gain.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-muted-foreground">Performance</p>
                  <p className="text-lg font-medium text-green-500">
                    +{trader.percentage_increase}%
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
