import { useMutation } from "@tanstack/react-query";
import { request } from "@/utils/network";
import { SettingSchema } from "@/schemas/settings";

interface UpdateUserResponse {
  message: string;
  user: SettingSchema;
}

export const updateUserInfo = async (
  userDetails: SettingSchema
): Promise<UpdateUserResponse> => {
  const response = await request({
    url: `/update_name`,
    method: "POST",
    data: userDetails,
  });

  return response as UpdateUserResponse;
};

export const useUpdateUserInfo = () => {
  const mutation = useMutation<UpdateUserResponse, Error, SettingSchema>({
    mutationFn: updateUserInfo,
  });

  return mutation;
};
