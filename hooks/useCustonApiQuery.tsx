import { getSessionStorageItem } from "@/utils/storage";
import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

import { useCallback } from "react";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

interface MutationData {
  method: string;
  url: string;
  data?: any;
  headers?: Record<string, string>;
}

// Custom hook for handling API requests
function useApiRequest() {
  const token = getSessionStorageItem({ key: "__session" });

  // Function to fetch data from API
  const fetchData = async <T,>(url: string): Promise<AxiosResponse<T>> => {
    try {
      const response = await axiosInstance.get<T>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.log("Request Error:", error);
      throw error;
    }
  };

  // Function to handle mutation (POST, PUT, DELETE, etc.)
  const mutateData = async ({
    method,
    url,
    data,
    headers = {},
  }: MutationData) => {
    try {
      const response = await axiosInstance({
        method,
        url,
        data,
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error: any) {
      return error?.response?.data;
    }
  };

  // Custom hook for GET requests using React Query
  const useGetRequest = <T,>(
    url: string,
    reqKey: string[]
  ): UseQueryResult<AxiosResponse<T>> => {
    return useQuery({
      queryKey: reqKey,
      queryFn: () => fetchData<T>(url),
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      enabled: true,
      // staleTime: 1000 * 60 * 5,
    });
  };

  // Custom hook for mutation requests using React Query
  const useMutationRequest = () => {
    const mutationFn = useCallback(mutateData, []); // Memoize the mutation function

    return useMutation({ mutationFn });
  };

  return {
    useGetRequest,
    useMutationRequest,
  };
}

export default useApiRequest;
