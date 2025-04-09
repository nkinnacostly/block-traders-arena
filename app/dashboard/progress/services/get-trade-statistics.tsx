import useFetchLevel2 from "@/hooks/useFetchLevel2";

export const useGetTradeStatistics = () => {
  const { useGetRequest2 } = useFetchLevel2();
  const url = `/trade-statistics`;
  const reqKey = ["trade-statistics"];
  const { data, error, isLoading } = useGetRequest2(url, reqKey);

  return { data, error, isLoading };
};
