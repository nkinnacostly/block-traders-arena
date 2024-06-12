import { useMutation, useQuery } from "@tanstack/react-query";

import axios from "axios";
import { toast } from "sonner";
import { useCallback } from "react";
import { useUserStore } from "../store/store";

// Set the base URL from an environment variable or configure it directly here
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Define your API fetching function using Axios
// async function fetchApiData({ method, url, data }) {
//   const response = await axios({ method, url, data });
//   return response.data;
// }

// Custom hook for handling API requests
function useApiRequest() {
  // const queryClient = useQueryClient();
  const { loggedInUserDetails } = useUserStore();
  const { token } = loggedInUserDetails;
  // Function to fetch data from API
  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch data from ${url}: ${error.message}`);
    }
  };

  // Function to handle mutation (POST, PUT, DELETE, etc.)
  const mutateData = async ({ method, url, data, headers = {} }) => {
    try {
      const response = await axios({
        method,
        url,
        data,
        headers: {
          ...headers, // Include custom headers if provided
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      // Invalidate relevant queries after successful mutation
      // queryClient.invalidateQueries(url);
      return response.data;
    } catch (error) {
      toast.error(`${error.response.data.error}`);

      // throw new Error(`${error}`);
      // console.log(error.response.data);
    }
  };

  // Custom hook for GET requests using React Query
  const useGetRequest = (url) => {
    return useQuery({ queryKey: url, queryFn: () => fetchData(url) });
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
