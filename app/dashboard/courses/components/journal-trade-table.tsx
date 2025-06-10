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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/text-area";

interface ApiResponse {
  data: {
    data: {
      data: JournalTrade[];
    };
    message: string;
  };
}

function JournalTradeTable() {
  const { data, error, isLoading } = GetTradesEntry() as {
    data: ApiResponse | undefined;
    error: any;
    isLoading: boolean;
  };
  const _data = React.useMemo(() => data?.data?.data.data, [data]);
  const { useMutationRequest } = useFetchLevel2();
  const queryClient = useQueryClient();
  const { mutate: resetJournal, isPending } = useMutationRequest();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [resetReason, setResetReason] = React.useState("");

  const handleResetJournal = () => {
    if (!resetReason.trim()) {
      toast.error("Please provide a reason for resetting the journal");
      return;
    }

    resetJournal(
      {
        method: "PATCH",
        url: "/trader-profile/reset",
        data: {
          reason: resetReason.trim(),
        },
      },
      {
        onSuccess: (response: any) => {
          const data = response as ApiResponse;
          toast.success(`${data?.data?.message}`);
          queryClient.invalidateQueries({
            queryKey: ["journal-trades"],
            refetchType: "all",
          });
          setIsDialogOpen(false);
          setResetReason("");
        },
        onError: (error) => {
          toast.error(`${error}`);
          queryClient.invalidateQueries({
            queryKey: ["journal-trades"],
            refetchType: "all",
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
            variant="destructive"
            onClick={() => setIsDialogOpen(true)}
          >
            Reset Journal
          </Button>
          <Link
            className={`${buttonVariants({ variant: "outline" })}`}
            href="/dashboard/courses/create"
          >
            Journal Trades
          </Link>
        </div>
      </div>
      {error && <div className="text-red-500">{error.message}</div>}
      {isLoading ? (
        <div className="text-gray-500">Loading...</div>
      ) : (
        <GenericTable data={_data ?? []} columns={journalTradeColumns} />
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reset Journal</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Textarea
              placeholder="Please provide a reason for resetting your journal..."
              value={resetReason}
              onChange={(e) => setResetReason(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setIsDialogOpen(false);
                setResetReason("");
              }}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleResetJournal}
              disabled={isPending}
              isLoading={isPending}
            >
              {isPending ? "Resetting..." : "Confirm Reset"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default JournalTradeTable;
