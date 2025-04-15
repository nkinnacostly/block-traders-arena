import useFetchLevel2 from "@/hooks/useFetchLevel2";

export const useGetFreqAssets = () => {
  const { useGetRequest2 } = useFetchLevel2();
  const url = `/frequently-traded-assets`;
  const reqKey = ["freq-assets"];
  const { data, error, isLoading } = useGetRequest2(url, reqKey);

  return { data, error, isLoading };
};
