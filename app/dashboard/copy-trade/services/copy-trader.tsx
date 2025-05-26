import useFetchLevel2 from "@/hooks/useFetchLevel2";

export const useCopyTrader = () => {
  const { useMutationRequest } = useFetchLevel2();

  return useMutationRequest<{ message: string }>();
};
