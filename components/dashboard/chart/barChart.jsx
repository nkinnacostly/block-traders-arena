"use client";
import React from "react";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = () => {
  const optionscolumnchart = {
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

        // endingShape: "rounded",
        // columnWidth: "20%",
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
    yaxis: {
      // title: {
      //   text: "$ (thousands)",
      // },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter(val) {
          return `$ ${val} thousands`;
        },
      },
      theme: "dark",
    },
    grid: {
      show: false,
    },
    legend: {
      show: true,
      position: "bottom",
      width: "50px",
    },
  };
  const seriescolumnchart = [
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
  ];

  return (
    <>
      {/* breadcrumb */}

      {/* end breadcrumb */}

      <Chart
        options={optionscolumnchart}
        series={seriescolumnchart}
        type="bar"
        height="300px"
        width={"100%"}
      />
    </>
  );
};

export default BarChart;
