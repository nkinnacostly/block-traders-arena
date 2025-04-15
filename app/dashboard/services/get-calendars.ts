import useFetchLevel2 from "@/hooks/useFetchLevel2";

export const useGetCalendars = () => {
  const { useGetRequest2 } = useFetchLevel2();
  const url = `/grouped-trades`;
  const reqKey = ["calendars"];
  const { data, error, isLoading } = useGetRequest2(url, reqKey);

  return { data, error, isLoading };
};
