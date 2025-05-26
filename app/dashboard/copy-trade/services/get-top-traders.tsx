import useFetchLevel2 from "@/hooks/useFetchLevel2";

export const useGetTopTraders = () => {
  const { useGet } = useFetchLevel2();
  const url = `/get-all-shared-trades`;
  const reqKey = ["get-all-shared-trades"];
  const { data, error, isLoading } = useGet(url, reqKey);

  return { data, error, isLoading };
};
