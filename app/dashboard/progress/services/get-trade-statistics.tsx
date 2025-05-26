import useFetchLevel2 from "@/hooks/useFetchLevel2";

export const useGetTradeStatistics = () => {
  const { useGet } = useFetchLevel2();
  const url = `/trade-statistics`;
  const reqKey = ["trade-statistics"];
  const { data, error, isLoading } = useGet(url, reqKey);

  return { data, error, isLoading };
};
