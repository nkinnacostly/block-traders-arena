import React from "react";
import Badges from "./components/badges";
import EquityGraph from "./components/equity-graph";
import TradeStats from "./components/trade-stats";
import Streaks from "./components/streaks";
import WinRate from "./components/win-rate";
const ProgressPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full space-y-5  p-4">
      <EquityGraph />
      <TradeStats />
      <Badges />
      <Streaks />
      <WinRate />
    </div>
  );
};

export default ProgressPage;
