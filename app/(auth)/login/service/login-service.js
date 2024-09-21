import { request } from "@/utils/network";
import { useMutation } from "@tanstack/react-query";

export const logInUser = async (userDetails) => {
  const response = await request({
    url: `/login`,
    method: "POST",
    data: userDetails,
  });

  return response;
};

export const useCreateStore = () => {
  const mutation = useMutation({
    mutationFn: logInUser,
  });

  return mutation;
};
