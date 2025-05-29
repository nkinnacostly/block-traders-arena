import useFetchLevel2 from "@/hooks/useFetchLevel2";

export const GetTradesEntry = () => {
  const { useGet } = useFetchLevel2();
  const url = `/all-trades`;
  const reqKey = ["journal-trades"];
  const { data, error, isLoading } = useGet(url, reqKey, {
    enabled: true,
  });

  return { data, error, isLoading };
};
