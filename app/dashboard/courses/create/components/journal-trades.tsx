"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Textarea } from "@/components/ui/text-area";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { format, parse } from "date-fns";

import useFetchLevel2 from "@/hooks/useFetchLevel2";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import useGetUserInfo from "@/hooks/useGetUserInfo";
import { handleApiError } from "@/utils/error-parser";

const traderSetupSchema = z.object({
  starting_equity: z
    .string()
    .min(1, "Starting equity is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Starting equity must be a valid positive number",
    }),
  broker: z.string().min(1, "Broker is required"),
  login: z.string().min(1, "Login is required"),
  investor_password: z.string().min(1, "Investor password is required"),
  server_name: z.string().min(1, "server_name is required"),
});

const tradeEntrySchema = z.object({
  trading_pair: z.string().min(1, "Trading pair is required"),
  trade_type: z.enum(["buy", "sell"]),
  price: z
    .string()
    .min(1, "Entry price is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Entry price must be a valid positive number",
    }),
  entry_time: z.string().min(1, "Entry time is required"),
  closing_price: z
    .string()
    .min(1, "Closing price is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Closing price must be a valid positive number",
    }),
  closing_time: z.string().min(1, "Closing time is required"),
  day_date: z.string().min(1, "Date is required"),
  result: z.string().min(1, "Result is required"),
  result_amount: z
    .string()
    .min(1, "Amount is required")
    .refine((val) => !isNaN(Number(val)), {
      message: "Amount must be a valid number",
    }),
  setup_name: z.string().min(1, "Setup name is required"),
  note: z.string().optional(),
});

export type TraderSetupForm = z.infer<typeof traderSetupSchema>;
export type TradeEntryForm = z.infer<typeof tradeEntrySchema>;

interface ApiResponse {
  data: {
    message: string;
  };
}
function JournalTrades() {
  const [isSetupComplete, setIsSetupComplete] = React.useState(false);
  const { useMutationRequest } = useFetchLevel2();
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data, isLoading, isFetching } = useGetUserInfo();
  const { mutate: addJournalTrades, isPending: isJournalTradesPending } =
    useMutationRequest();

  const { mutate: addTraderProfile, isPending } = useMutationRequest<
    ApiResponse,
    TraderSetupForm
  >({
    onSuccess: () => {
      // toast.success(response.data.data.message);
      setIsSetupComplete(true);

      queryClient.invalidateQueries({ queryKey: ["users-info"] });
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred");
      console.error("Mutation Error:", error);
    },
  });
  const {
    register: registerSetup,
    handleSubmit: handleSetupSubmit,
    formState: { errors: setupErrors, isDirty: isSetupDirty },
  } = useForm<TraderSetupForm>({
    resolver: zodResolver(traderSetupSchema),
    mode: "onTouched",
  });

  const {
    register: registerTrade,
    handleSubmit: handleTradeSubmit,
    formState: { errors: tradeErrors },
    reset: resetTrade,

    setValue,
  } = useForm<TradeEntryForm>({
    resolver: zodResolver(tradeEntrySchema),
    mode: "onTouched",
  });

  const onSetupSubmit = async (data: TraderSetupForm) => {
    addTraderProfile({
      url: "/trader-profile-add",
      method: "POST",
      data,
    });
  };
  // console.log(data?.data, "data");
  const onTradeSubmit = (data: TradeEntryForm) => {
    const formattedData = {
      ...data,
      // entry_time and closing_time are already formatted by setValueAs
    };

    addJournalTrades(
      {
        url: "/Add-Trade",
        method: "POST",
        data: formattedData,
      },
      {
        onSuccess: () => {
          toast.success("Trade added successfully");
          queryClient.invalidateQueries({ queryKey: ["journal-trades"] });
          router.push("/dashboard/courses");
          resetTrade();
        },
        onError: (error) => {
          // console.log(error, "error");
          handleApiError(error);
        },
      }
    );
  };

  if (!isSetupComplete && data?.data?.user?.has_journal === 0) {
    return (
      <div className="w-full flex flex-col gap-4 items-start justify-center">
        <Link href={"/dashboard/courses"} className="flex items-center gap-2">
          <ArrowLeftIcon className="w-4 h-4 " />
          <p className="text-sm font-medium">Back</p>
        </Link>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="font-medium">Trader Account Setup</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="p-6">
            <form
              onSubmit={handleSetupSubmit(onSetupSubmit)}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="starting_equity">Starting Equity ($)</Label>
                <Input
                  id="starting_equity"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="0.00"
                  inputMode="decimal"
                  {...registerSetup("starting_equity")}
                />
                {setupErrors.starting_equity && (
                  <p className="text-sm text-red-500">
                    {setupErrors.starting_equity.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="broker">Broker</Label>
                <Input id="broker" {...registerSetup("broker")} />
                {setupErrors.broker && (
                  <p className="text-sm text-red-500">
                    {setupErrors.broker.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="login">Login</Label>
                <Input id="login" {...registerSetup("login")} />
                {setupErrors.login && (
                  <p className="text-sm text-red-500">
                    {setupErrors.login.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="investor_password">Investor Password</Label>
                <Input
                  id="investor_password"
                  type="password"
                  {...registerSetup("investor_password")}
                />
                {setupErrors.investor_password && (
                  <p className="text-sm text-red-500">
                    {setupErrors.investor_password.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="server_name">server_name</Label>
                <Input id="server_name" {...registerSetup("server_name")} />
                {setupErrors.server_name && (
                  <p className="text-sm text-red-500">
                    {setupErrors.server_name.message}
                  </p>
                )}
              </div>
              <p className="text-sm text-gray-500">
                * Only signal provider account is accepted
              </p>
              <Button
                type="submit"
                className="w-full"
                disabled={isPending || !isSetupDirty}
              >
                {isPending ? "Setting up account..." : "Submit Setup"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Journal Trade Entry</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="p-6">
        <form onSubmit={handleTradeSubmit(onTradeSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="trading_pair">Trading Pair/Asset</Label>
              <Input
                id="trading_pair"
                {...registerTrade("trading_pair")}
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.toUpperCase();
                }}
                style={{ textTransform: "uppercase" }}
              />
              {tradeErrors.trading_pair && (
                <p className="text-sm text-red-500">
                  {tradeErrors.trading_pair.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="tradeType">Buy/Sell</Label>
              <Select
                onValueChange={(value) =>
                  setValue("trade_type", value as "buy" | "sell")
                }
                // defaultValue="buy"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select trade type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buy">Buy</SelectItem>
                  <SelectItem value="sell">Sell</SelectItem>
                </SelectContent>
              </Select>
              {tradeErrors.trade_type && (
                <p className="text-sm text-red-500">
                  {tradeErrors.trade_type.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="entryPrice">Entry Price</Label>
              <Input
                id="entryPrice"
                type="number"
                step="0.00001"
                {...registerTrade("price")}
              />
              {tradeErrors.price && (
                <p className="text-sm text-red-500">
                  {tradeErrors.price.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="entryTime">Entry Date & Time</Label>
              <Input
                id="entry_time"
                type="datetime-local"
                {...registerTrade("entry_time", {
                  setValueAs: (value) => {
                    if (!value) return value;
                    // datetime-local returns "yyyy-MM-ddTHH:mm" format
                    // We need to convert it to "yyyy-MM-dd HH:mm:ss"
                    const [datePart, timePart] = value.split("T");
                    return `${datePart} ${timePart}:00`;
                  },
                })}
              />
              {tradeErrors.entry_time && (
                <p className="text-sm text-red-500">
                  {tradeErrors.entry_time.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="closingPrice">Closing Price</Label>
              <Input
                id="closingPrice"
                type="number"
                step="0.00001"
                {...registerTrade("closing_price")}
              />
              {tradeErrors.closing_price && (
                <p className="text-sm text-red-500">
                  {tradeErrors.closing_price.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="closingTime">Closing Date & Time</Label>
              <Input
                id="closing_time"
                type="datetime-local"
                {...registerTrade("closing_time", {
                  setValueAs: (value) => {
                    if (!value) return value;
                    // datetime-local returns "yyyy-MM-ddTHH:mm" format
                    // We need to convert it to "yyyy-MM-dd HH:mm:ss"
                    const [datePart, timePart] = value.split("T");
                    return `${datePart} ${timePart}:00`;
                  },
                })}
              />
              {tradeErrors.closing_time && (
                <p className="text-sm text-red-500">
                  {tradeErrors.closing_time.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="day_date">Date (dd-mm-yyyy)</Label>
              <Input
                id="day_date"
                type="date"
                placeholder="dd-mm-yyyy"
                {...registerTrade("day_date", {
                  validate: (value) => {
                    if (!value) return "Date is required";

                    // Check if the date format is dd-mm-yyyy
                    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
                    if (!dateRegex.test(value)) {
                      return "Date must be in dd-mm-yyyy format";
                    }

                    // Validate the date
                    try {
                      const parsedDate = parse(value, "dd-MM-yyyy", new Date());
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);

                      if (parsedDate < today) {
                        return "Date cannot be in the past";
                      }

                      return true;
                    } catch (error) {
                      return "Invalid date";
                    }
                  },
                  setValueAs: (value) => {
                    if (!value) return value;

                    try {
                      // Convert dd-mm-yyyy to yyyy-mm-dd for form submission
                      const parsedDate = parse(value, "dd-MM-yyyy", new Date());
                      return format(parsedDate, "yyyy-MM-dd");
                    } catch (error) {
                      return value;
                    }
                  },
                })}
              />
              {tradeErrors.day_date && (
                <p className="text-sm text-red-500">
                  {tradeErrors.day_date.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="result_amount">Amount ($)</Label>
              <Input
                id="result_amount"
                type="number"
                step="0.01"
                {...registerTrade("result_amount")}
              />
              {tradeErrors.result_amount && (
                <p className="text-sm text-red-500">
                  {tradeErrors.result_amount.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="result">Result</Label>
              <Select
                onValueChange={(value) => setValue("result", value)}
                // defaultValue="breakeven"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select result" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Profit">Profit</SelectItem>
                  <SelectItem value="Loss">Loss</SelectItem>
                  <SelectItem value="Breakeven">Breakeven</SelectItem>
                </SelectContent>
              </Select>
              {tradeErrors.result && (
                <p className="text-sm text-red-500">
                  {tradeErrors.result.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="setup_name">Setup Name</Label>
              <Input
                id="setup_name"
                {...registerTrade("setup_name")}
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.toUpperCase();
                }}
                style={{ textTransform: "uppercase" }}
              />
              {tradeErrors.setup_name && (
                <p className="text-sm text-red-500">
                  {tradeErrors.setup_name.message}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="note">Notes</Label>
            <Textarea
              id="note"
              placeholder="Add your notes here..."
              className="min-h-[100px]"
              {...registerTrade("note")}
            />
            {tradeErrors.note && (
              <p className="text-sm text-red-500">{tradeErrors.note.message}</p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={isJournalTradesPending}
            isLoading={isJournalTradesPending}
          >
            Submit Trade
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default JournalTrades;
