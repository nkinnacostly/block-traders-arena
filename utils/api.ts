import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      // refetchOnMount: false,
      staleTime: Infinity,
      gcTime: Infinity,
    },
  },
});
