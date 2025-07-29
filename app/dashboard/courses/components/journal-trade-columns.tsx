"use client";

import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMobile } from "@/hooks/use-mobile";
// import { Button } from "@/components/ui/button";
// import { Edit2Icon } from "lucide-react";
// import Link from "next/link";

export interface JournalTrade {
  id: string;
  trading_pair: string;
  trade_type: "buy" | "sell";
  price: number;
  entry_time: string;
  closing_price: number;
  closing_time: string;
  duration: string;
  day_date: string;
  result: "Profit" | "Loss" | "Breakeven";
  result_amount: number;
  setup_name: string;
  note?: string;
}

// Note Modal Component
const NoteModal = ({ note }: { note?: string }) => {
  const [open, setOpen] = useState(false);
  const isMobile = useMobile();

  if (!note) return null;

  if (!isMobile) {
    return (
      <div
        className="font-medium truncate max-w-[200px] cursor-default"
        title={note}
      >
        {note}
      </div>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="font-medium truncate max-w-[200px] cursor-pointer hover:bg-gray-100 p-1 rounded transition-colors">
          {note}
        </div>
      </DialogTrigger>
      <DialogContent
        className="max-w-md"
        onInteractOutside={() => {
          // Allow closing when clicking outside
          setOpen(false);
        }}
        onEscapeKeyDown={() => {
          // Allow closing with escape key
          setOpen(false);
        }}
        onPointerDownOutside={() => {
          // Allow closing when clicking outside
          setOpen(false);
        }}
      >
        <DialogHeader>
          <DialogTitle>Note</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-sm text-gray-700 whitespace-pre-wrap">{note}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const journalTradeColumns: ColumnDef<JournalTrade>[] = [
  {
    accessorKey: "trading_pair",
    header: "Trading Pair/Asset",
  },
  {
    accessorKey: "trade_type",
    header: "Buy/Sell",
    cell: ({ row }) => (
      <div
        className={`font-medium ${
          row.original.trade_type === "buy" ? "text-green-600" : "text-red-600"
        }`}
      >
        {row.original.trade_type.toUpperCase()}
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: "Entry Price",
    cell: ({ row }) => <div className="font-medium">{row.original.price}</div>,
  },
  {
    accessorKey: "entryTime",
    header: "Entry Time",
    cell: ({ row }) => (
      <div className="font-medium">
        {/* {new Date(row.original.entry_time).toLocaleString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })} */}
        {row.original.entry_time}
      </div>
    ),
  },
  {
    accessorKey: "closingPrice",
    header: "Closing Price",
    cell: ({ row }) => (
      <div className="font-medium">{row.original.closing_price}</div>
    ),
  },
  {
    accessorKey: "closingTime",
    header: "Closing Time",
    cell: ({ row }) => (
      <div className="font-medium">
        {/* {new Date(row.original.closing_time).toLocaleString()} */}
        {row.original.closing_time}
      </div>
    ),
  },

  {
    accessorKey: "day_date",
    header: "Date",
    cell: ({ row }) => (
      <div className="font-medium">{row.original.day_date}</div>
    ),
  },
  {
    accessorKey: "result",
    header: "Result",
    cell: ({ row }) => (
      <div
        className={`font-medium ${
          row.original.result === "Profit"
            ? "text-green-600"
            : row.original.result === "Loss"
            ? "text-red-600"
            : "text-yellow-600"
        }`}
      >
        {row.original.result.toUpperCase()}
      </div>
    ),
  },
  {
    accessorKey: "result_amount",
    header: "Result Amount",
    cell: ({ row }) => (
      <div className="font-medium">${row.original.result_amount}</div>
    ),
  },
  {
    accessorKey: "setup_name",
    header: "Setup Name",
  },
  {
    accessorKey: "note",
    header: "Note",
    cell: ({ row }) => <NoteModal note={row.original.note} />,
  },
];
