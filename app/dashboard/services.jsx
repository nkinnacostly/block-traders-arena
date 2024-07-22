// hooks/useStatistics.js

import useApiRequest from "@/hooks/useCustonApiQuery";
import { useUserStore } from "@/store/store";

export const GetCoursesInProgress = () => {
  const { loggedInUserDetails } = useUserStore();
  const { useGetRequest } = useApiRequest();
  const url = `/courses/in-progres?user_id=${loggedInUserDetails?.id}`;
  const reqKey = ["courses-in-progress"];
  const { data, error, isLoading } = useGetRequest(url, reqKey);

  return { data: data?.data, error, isLoading };
};
export const GetCoursesCompleted = () => {
  const { loggedInUserDetails } = useUserStore();
  const { useGetRequest } = useApiRequest();
  const url = `/courses/completed?user_id=${loggedInUserDetails?.id}`;
  const reqKey = ["courses-completed"];
  const { data, error, isLoading } = useGetRequest(url, reqKey);

  return { completed: data?.data, error, isLoading };
};
export const GetCoursesDuration = () => {
  const { loggedInUserDetails } = useUserStore();
  const { useGetRequest } = useApiRequest();
  const url = `/courses/study-duration?user_id=${loggedInUserDetails?.id}`;
  const reqKey = ["courses-duration"];
  const { data, error, isLoading } = useGetRequest(url, reqKey);

  return { duration: data?.data, error, isLoading };
};
export const GetBadges = () => {
  const { loggedInUserDetails } = useUserStore();
  const { useGetRequest } = useApiRequest();
  const url = `/courses/badges?user_id=${loggedInUserDetails?.id}`;
  const reqKey = ["courses-badges"];
  const { data, error, isLoading } = useGetRequest(url, reqKey);

  return { badges: data?.data, error, isLoading };
};
