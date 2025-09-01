import useFetchLevel2 from "@/hooks/useFetchLevel2";

export const GetTradesEntry = (page: number) => {
  const { useGet } = useFetchLevel2();
  const url = `/all-trades?page=${page}`;
  const reqKey = ["journal-trades", page];
  const { data, error, isLoading } = useGet(url, reqKey, {
    enabled: true,
  });

  return { data, error, isLoading };
};
