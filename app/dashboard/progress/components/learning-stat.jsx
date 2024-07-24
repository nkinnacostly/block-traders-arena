import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { GiAlarmClock } from "react-icons/gi";
import React from "react";
import { Separator } from "@/components/ui/separator";

function LearningStat() {
  return (
    <Card className="max-w-[264px]">
      <CardHeader>
        <CardTitle>
          <h5 className="text-[20px]  font-[500] mb-8">Learning Statistics</h5>
        </CardTitle>
        <Separator />
        <CardContent>
          <div className="shadow-md rounded-xl h-[289px] flex flex-col  justify-evenly">
            <div className="flex items-center justify-between">
              <div>
                {" "}
                <p className="text-2xl font-medium  ">O Mins</p>
                <p className="text-sm font-normal  ">
                  Your Total Learning Time
                </p>
              </div>
              <div>
                <GiAlarmClock size={50} fill="white" />
              </div>
            </div>
            <div className="flex items-center justify-between border-b-2">
              <p className="text-sm font-normal">Completed</p>
              <p className="text-sm font-normal">2</p>
            </div>
            <div className="flex items-center justify-between border-b-2">
              <p className="text-sm font-normal">Courses in Progress</p>
              <p className="text-sm font-normal">2</p>
            </div>
            <div className="flex items-center justify-between border-b-2">
              <p className="text-sm font-normal">Challenges Completed</p>
              <p className="text-sm font-normal">0</p>
            </div>
            <div className="flex items-center justify-between border-b-2">
              <p className="text-sm font-normal">Badges Earned</p>
              <p className="text-sm font-normal">0</p>
            </div>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}

export default LearningStat;
