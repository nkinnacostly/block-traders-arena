import { request } from "@/utils/network";
import { useMutation } from "@tanstack/react-query";
import { TraderSetupForm } from "../components/journal-trades";

export const addTraderProfile = async (userDetails: TraderSetupForm) => {
  const response = await request({
    url: `/trader-profile-add`,
    method: "POST",
    data: userDetails,
  });

  return response;
};

export const useAddTraderProfile = () => {
  const mutation = useMutation({
    mutationFn: addTraderProfile,
  });

  return mutation;
};
