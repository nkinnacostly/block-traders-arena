"use client";

import React, { memo, useMemo } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] w-full bg-gray-100 animate-pulse rounded-lg" />
  ),
});

interface ChartData {
  name: string;
  data: number[];
}

const BarChart: React.FC = () => {
  const options = useMemo<ApexOptions>(
    () => ({
      chart: {
        id: "column-chart",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        foreColor: "#adb0bb",
        toolbar: {
          show: false,
        },
      },
      colors: ["#FF0000", "#00FF00", "#0000FF"],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (value: number) => `$ ${value} thousands`,
        },
        theme: "dark",
      },
      grid: {
        show: false,
      },
      legend: {
        show: true,
        position: "bottom" as const,
        width: "50px",
      },
    }),
    []
  );

  const series = useMemo<ChartData[]>(
    () => [
      {
        name: "M",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "T",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "W",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    []
  );

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-4">
      <Chart
        options={options}
        series={series}
        type="bar"
        height={300}
        width="100%"
      />
    </div>
  );
};

export default memo(BarChart);
