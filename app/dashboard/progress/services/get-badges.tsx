import useFetchLevel2 from "@/hooks/useFetchLevel2";

export const useGetBadges = () => {
  const { useGetRequest2 } = useFetchLevel2();
  const url = `/show-badges`;
  const reqKey = ["badges"];
  const { data, error, isLoading } = useGetRequest2(url, reqKey);

  return { data, error, isLoading };
};
