import useApiRequest from "@/hooks/useCustonApiQuery";

export const useGetUserMeetings = () => {
  const { useGetRequest } = useApiRequest();
  const url = `/user-meetings`;
  const reqKey = ["user-meetings"];
  const { data, error, isLoading } = useGetRequest(url, reqKey);

  return { data, error, isLoading };
};
