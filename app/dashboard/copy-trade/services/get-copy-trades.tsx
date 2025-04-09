import useFetchLevel2 from "@/hooks/useFetchLevel2";

export const useGetCopyTrades = () => {
  const { useGetRequest2 } = useFetchLevel2();
  const url = `/top-traders`;
  const reqKey = ["copy-trades"];
  const { data, error, isLoading } = useGetRequest2(url, reqKey);

  return { data, error, isLoading };
};
