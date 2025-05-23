"use client";
import GenericTable from "@/components/react-table";
import React from "react";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { journalTradeColumns, JournalTrade } from "./journal-trade-columns";
import { GetTradesEntry } from "../create/services/get-trades-entry";
import useFetchLevel2 from "@/hooks/useFetchLevel2";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
interface ApiResponse {
  data: {
    data: {
      data: JournalTrade[];
    };
  };
}

function JournalTradeTable() {
  const { data, error, isLoading } = GetTradesEntry() as {
    data: ApiResponse | undefined;
    error: any;
    isLoading: boolean;
  };
  const _data = React.useMemo(() => data?.data?.data.data, [data]);
  const { useMutationRequest2 } = useFetchLevel2();
  const queryClient = useQueryClient();
  const { mutate: resetJournal, isPending } = useMutationRequest2();

  const handleResetJournal = () => {
    resetJournal(
      {
        method: "POST",
        url: "/trader-profile/reset",
      },
      {
        onSuccess: () => {
          toast.success("Journal reset successfully");
          queryClient.invalidateQueries({
            queryKey: ["journal-trades", "users-info"],
          });
        },
        onError: () => {
          toast.error("Failed to reset journal");
          queryClient.invalidateQueries({
            queryKey: ["journal-trades", "users-info"],
          });
        },
      }
    );
  };

  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl font-normal">Journal Trades</h1>
        <div className="flex items-center gap-2">
          <Button
            disabled={isPending}
            isLoading={isPending}
            variant="destructive"
            onClick={handleResetJournal}
          >
            {isPending ? "Resetting..." : "Reset Journal"}
          </Button>
          <Link
            className={`${buttonVariants({ variant: "outline" })}`}
            href="/dashboard/courses/create"
          >
            Create Journal Trade
          </Link>
        </div>
      </div>
      {error && <div className="text-red-500">{error.message}</div>}
      {isLoading && <div className="text-gray-500">Loading...</div>}
      <GenericTable data={_data ?? []} columns={journalTradeColumns} />
    </div>
  );
}

export default JournalTradeTable;
