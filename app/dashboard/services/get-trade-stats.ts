import useFetchLevel2 from "@/hooks/useFetchLevel2";

export const useGetTradeStats = () => {
  const { useGet } = useFetchLevel2();
  const url = `/user-trade-stats`;
  const reqKey = ["user-trade-stats"];
  const { data, error, isLoading, refetch } = useGet(url, reqKey);

  return { data, error, isLoading, refetch };
};
