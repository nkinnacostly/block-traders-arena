import useApiRequest from "./useCustonApiQuery";
import { useEffect } from "react";
import { UserDetails, useUserStore } from "../store/store";

interface UserData {
  user?: UserDetails;
}

function useGetUserInfo() {
  const { loggedInUserDetails, setLoggedInUserDetails } = useUserStore();
  const url = `/single-user?id=${loggedInUserDetails.id}`;
  const reqKey = ["dddd"];
  const { useGetRequest } = useApiRequest();
  const { data, error, isLoading, isSuccess, isFetching } =
    useGetRequest<UserData>(url, reqKey);

  useEffect(() => {
    if (isSuccess && data?.data.user) {
      setLoggedInUserDetails(data.data.user as UserDetails);
    }
  }, [isSuccess, data, setLoggedInUserDetails]);

  return { data, error, isLoading, isFetching };
}

export default useGetUserInfo;
