import useFetchLevel2 from "@/hooks/useFetchLevel2";

export const useGetAllPendingCopyTrade = () => {
  const { useGet } = useFetchLevel2();
  const url = `/admin/get-all-pending-trades`;
  const reqKey = ["pending-copy-trade"];
  const { data, error, isLoading, refetch } = useGet(url, reqKey);

  return { data, error, isLoading, refetch };
};
