import useFetchLevel2 from "@/hooks/useFetchLevel2";

export const useGetUserStatsOverview = () => {
  const { useGet } = useFetchLevel2();
  const url = `/overview-stats`;
  const reqKey = ["overview-stats"];
  const { data, error, isLoading } = useGet(url, reqKey);

  return { data, error, isLoading };
};
