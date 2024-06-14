// import React from 'react'

import useApiRequest from "./useCustonApiQuery";
import { useEffect } from "react";
import { useUserStore } from "../store/store";

function useGetUserInfo() {
  const { loggedInUserDetails, setLoggedInUserDetails } = useUserStore();

  const url = `/single-user?id=${loggedInUserDetails?.id}`;
  const reqKey = ["users-info"];
  const { useGetRequest } = useApiRequest();
  const { data, error, isLoading, isSuccess } = useGetRequest(url, reqKey);

  useEffect(() => {
    if (isSuccess && data?.data?.user) {
      setLoggedInUserDetails(data.data?.user);
    }
  }, [isSuccess, data, setLoggedInUserDetails, loggedInUserDetails]);

  return { data, error, isLoading };
}

export default useGetUserInfo;
