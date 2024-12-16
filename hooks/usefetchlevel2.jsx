import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { getSessionStorageItem } from "../utils/storage";
// import { useUserStore } from "@/store/store";
// import { toast } from "sonner";

const axiosInstanceLevel2 = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL_2,
  headers: {
    "Content-Type": "application/json",
  },
});

// Custom hook for handling API requests
function useFetchLevel2() {
  // const { loggedInUserDetails } = useUserStore();
  // axios.defaults.baseURL =
  //   loggedInUserDetails?.block_level === "1"
  //     ? process.env.NEXT_PUBLIC_API_BASE_URL
  //     : process.env.NEXT_PUBLIC_API_BASE_URL_2;

  const token = getSessionStorageItem({ key: "__session" });

  // Function to fetch data from API
  const fetchData = async (url) => {
    try {
      const response = await axiosInstanceLevel2.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      // throw new Error(`Failed to fetch data from ${url}: ${error.message}`);
      console.log("Request Error:", error);
    }
  };

  // Custom hook for GET requests using React Query
  const useGetRequest2 = (url, reqKey, { enabled = true } = {}) => {
    return useQuery({
      queryKey: reqKey,
      queryFn: () => fetchData(url),
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      enabled,
    });
  };

  // Custom hook for mutation requests using React Query

  return {
    useGetRequest2,
  };
}

export default useFetchLevel2;
