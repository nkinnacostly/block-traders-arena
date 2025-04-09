import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

function ChartistComponent() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Auto Chartist </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="flex flex-row justify-between gap-4 w-full">
          <div className="flex-1 text-start  p-2">
            <p className="text-sm font-medium">Symbol</p>
          </div>
          <div className="flex-1 text-start  p-2">
            <p className="text-sm font-medium">Lowest price</p>
          </div>
          <div className="flex-1 text-start  p-2">
            <p className="text-sm font-medium">% Daily change</p>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-4 w-full">
          <div className="flex-1 text-start  p-2">
            <p className="text-sm font-medium">EUR/USD</p>
          </div>
          <div className="flex-1 text-start  p-2">
            <p className="text-sm font-medium">1.1919</p>
          </div>
          <div className="flex-1 text-start  p-2">
            <p className="text-sm font-medium text-green-500 text-center">
              0.46%
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-4 w-full">
          <div className="flex-1 text-start  p-2">
            <p className="text-sm font-medium">EUR/USD</p>
          </div>
          <div className="flex-1 text-start  p-2">
            <p className="text-sm font-medium">1.1919</p>
          </div>
          <div className="flex-1 text-start  p-2">
            <p className="text-sm font-medium text-green-500 text-center">
              0.46%
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-4 w-full">
          <div className="flex-1 text-start  p-2">
            <p className="text-sm font-medium">EUR/USD</p>
          </div>
          <div className="flex-1 text-start  p-2">
            <p className="text-sm font-medium">1.1919</p>
          </div>
          <div className="flex-1 text-start  p-2">
            <p className="text-sm font-medium text-green-500 text-center">
              0.46%
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-4 w-full">
          <div className="flex-1 text-start  p-2">
            <p className="text-sm font-medium">EUR/USD</p>
          </div>
          <div className="flex-1 text-start  p-2">
            <p className="text-sm font-medium">1.1919</p>
          </div>
          <div className="flex-1 text-start  p-2">
            <p className="text-sm font-medium text-green-500 text-center">
              0.46%
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ChartistComponent;
