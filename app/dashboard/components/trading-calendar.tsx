import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useState } from "react";
import { useGetCalendars } from "../services/get-calendars";

interface Trade {
  id: number;
  trading_pair: string;
  result_amount: string;
  copy_trade: number;
  day_date: string;
}

interface UserTrades {
  user_id: number;
  username: string;
  trades: Trade[];
}

interface CalendarData {
  [date: string]: {
    daily_summary: {
      total_profit: number;
      total_loss: number;
      total_amount: number;
      total_trade_count: number;
      status: string;
    };
    user_trades: UserTrades[];
  };
}

interface ApiResponse {
  message: string;
  data: CalendarData;
  status: number;
}

function TradingCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { data } = useGetCalendars();

  const mockData = data?.data as ApiResponse;

  const getDayData = (day: Date) => {
    const dateString = format(day, "yyyy-MM-dd");
    const dayData = mockData?.data[dateString];
    console.log(dayData, "Day data");

    if (!dayData) {
      return {
        status: "no-trades",
        totalAmount: 0,
        tradeCount: 0,
      };
    }

    return {
      status: dayData.daily_summary.status,
      totalAmount: dayData.daily_summary.total_amount,
      tradeCount: dayData.daily_summary.total_trade_count,
    };
  };

  const handleDayClick = (day: Date) => {
    const dateString = format(day, "yyyy-MM-dd");
    const dayData = mockData.data[dateString];

    if (dayData) {
      console.log("Selected day data:", dayData);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Trading Calendar</CardTitle>
      </CardHeader>
      <CardContent className="w-full p-2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full"
          onDayClick={handleDayClick}
          classNames={{
            months:
              "w-full flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "w-full space-y-4",
            table: "w-full border-collapse space-y-1",
            head_row: "flex w-full gap-1",
            head_cell:
              "w-full text-muted-foreground rounded-md font-normal text-[0.8rem]",
            row: "flex w-full mt-2 gap-1",
            cell: "w-full text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: "w-full h-24 p-0 aria-selected:opacity-100",
            day_range_end: "day-range-end",
            day_selected:
              "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_today: "bg-accent text-accent-foreground",
            day_outside: "opacity-50",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle:
              "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
          }}
          components={{
            Day: ({ date, ...props }) => {
              const { status, totalAmount, tradeCount } = getDayData(date);
              const formattedAmount =
                totalAmount === 0
                  ? "$0.00"
                  : `${totalAmount < 0 ? "-" : ""}$${Math.abs(
                      totalAmount
                    ).toFixed(2)}`;

              return (
                <div
                  {...props}
                  className={cn(
                    "h-full w-full p-1 font-normal rounded-lg flex flex-col items-center justify-center gap-1",
                    status === "profit" && "bg-green-500 text-white",
                    status === "loss" && "bg-red-500 text-white",
                    status === "breakeven" && "bg-yellow-500 text-white",
                    status === "no-trades" &&
                      "bg-white dark:bg-gray-800 text-black dark:text-white"
                  )}
                >
                  <div className="text-sm font-semibold">{date.getDate()}</div>
                  <div className="text-xs font-medium">{formattedAmount}</div>
                  <div className="text-xs opacity-80">
                    {tradeCount} {tradeCount === 1 ? "trade" : "trades"}
                  </div>
                </div>
              );
            },
          }}
        />
      </CardContent>
    </Card>
  );
}

export default TradingCalendar;
