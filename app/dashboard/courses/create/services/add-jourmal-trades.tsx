import { request } from "@/utils/network";
import { useMutation } from "@tanstack/react-query";
import { TradeEntryForm } from "../components/journal-trades";

export const addJournalTrades = async (userDetails: TradeEntryForm) => {
  const response = await request({
    url: `/journal-trade-add`,
    method: "POST",
    data: userDetails,
  });

  return response;
};

export const useAddJournalTrades = () => {
  const mutation = useMutation({
    mutationFn: addJournalTrades,
  });

  return mutation;
};
