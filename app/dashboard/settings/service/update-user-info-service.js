import { request } from "@/utils/network";
import { useMutation } from "@tanstack/react-query";

export const updateUserInfoe = async (userDetails) => {
  const response = await request({
    url: `/update_name`,
    method: "POST",
    data: userDetails,
  });

  return response;
};

export const useUpdateUserInfo = () => {
  const mutation = useMutation({
    mutationFn: updateUserInfoe,
  });

  return mutation;
};
