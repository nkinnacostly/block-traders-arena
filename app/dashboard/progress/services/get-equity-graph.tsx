import useFetchLevel2 from "@/hooks/useFetchLevel2";

export const useGetEquityGraph = () => {
  const { useGetRequest2 } = useFetchLevel2();
  const url = `/equityGrowth`;
  const reqKey = ["equity-graph"];
  const { data, error, isLoading } = useGetRequest2(url, reqKey);

  return { data, error, isLoading };
};
