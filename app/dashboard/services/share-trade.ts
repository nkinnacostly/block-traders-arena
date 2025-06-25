import useFetchLevel2 from "@/hooks/useFetchLevel2";

export const useShareTrade = () => {
  const { useGet } = useFetchLevel2();
  const url = `/share-trade`;
  const reqKey = ["share-trade"];
  const { data, error, isLoading, refetch, isError, isSuccess } = useGet(
    url,
    reqKey,
    {
      enabled: false, // This prevents the request from running automatically
    }
  );

  return { data, error, isLoading, refetch, isError, isSuccess };
};
