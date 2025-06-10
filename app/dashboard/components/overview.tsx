"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useGetUserStatsOverview } from "../services/get-user-stats-overview";
import { FaUser, FaMoneyBill, FaCopy } from "react-icons/fa";
import { ArrowDown } from "lucide-react";
interface ApiResponse {
  data: {
    data: {
      learners_level: string;
      Available_profit: number;
      Cumulative_Loss: string;
      Cumulative_Profit: string;
      Total_hours: string;
      copy_trade: string;
    };
  };
  message: string;
  status: number;
}
const Overview = () => {
  const { data, error, isLoading } = useGetUserStatsOverview() as {
    data: ApiResponse | undefined;
    error: any;
    isLoading: boolean;
  };
  const _data = data?.data.data;

  const overview = [
    {
      title: "Trader Level",
      value: _data?.learners_level,
      icon: <FaUser size={20} className="text-black" />,
    },
    {
      title: "Available Profit",
      value: `$ ${_data?.Available_profit}`,
      icon: <FaMoneyBill size={20} className="text-black" />,
    },
    {
      title: "Cumulative Loss",
      value: `$ ${_data?.Cumulative_Loss}`,
      icon: <ArrowDown size={20} className="text-red-500" />,
    },
    {
      title: "Cumulative Profit",
      value: `$ ${_data?.Cumulative_Profit}`,
      icon: <FaMoneyBill size={20} className="text-black" />,
    },
    {
      title: "Copy Trade",
      value: _data?.copy_trade,
      icon: <FaCopy size={20} className="text-black" />,
    },
  ];
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="grid grid-cols-4 gap-4">
          {overview.map((item) => (
            <div
              key={item.title}
              className="border-2 rounded-lg p-4 bg-[#D4AF37] flex flex-col items-start justify-center"
            >
              <div className="flex items-center justify-between gap-2 w-full">
                <p className="text-lg font-bold text-black">{item.value}</p>
                {item.icon}
              </div>
              <h5 className="text-sm font-medium text-black">{item.title}</h5>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Overview;
