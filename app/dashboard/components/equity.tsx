import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

function EquityComponent() {
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
            <h5 className="text-[24px]  font-[500]">
              <span className="text-[#D4AF37]">$40,300.45</span>
            </h5>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">Gain(1week)</p>
            <h5 className="text-[24px]  font-[500]">
              <span className="text-[#008000]">50.22%</span>
            </h5>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">Equity</p>
            <h5 className="text-[24px]  font-[500]">
              <span className="text-[#008000]">2.1%</span>
            </h5>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default EquityComponent;
