import useFetchLevel2 from "@/hooks/useFetchLevel2";

export const useGetCalendars = () => {
  const { useGet } = useFetchLevel2();
  const url = `/grouped-trades`;
  const reqKey = ["calendars"];
  const { data, error, isLoading } = useGet(url, reqKey);

  return { data, error, isLoading };
};
