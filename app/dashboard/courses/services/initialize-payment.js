import { request } from "@/utils/network";
import { useMutation } from "@tanstack/react-query";

export const initiatePayment = async (id) => {
  const response = await request({
    url: `payment/initializeTransaction`,
    method: "POST",
    data: { uuid: id },
  });

  return response;
};

export const useInitiatePayment = (articleId) => {
  const mutation = useMutation({
    mutationFn: () => initiatePayment(articleId),
  });

  return mutation;
};
