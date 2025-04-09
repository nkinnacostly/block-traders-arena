import useFetchLevel2 from "@/hooks/useFetchLevel2";

export const useGetStreaks = () => {
  const { useGetRequest2 } = useFetchLevel2();
  const url = `/trade-streaks`;
  const reqKey = ["streaks"];
  const { data, error, isLoading } = useGetRequest2(url, reqKey);

  return { data, error, isLoading };
};
