import { useStatsStore, useUserStore } from "@/store/store";
import React from "react";
import useApiRequest from "@/hooks/useCustonApiQuery";

interface BaseResponse {
  error: any;
  isLoading: boolean;
}

interface CourseData extends BaseResponse {
  data: any;
}

interface CourseCompletedData extends BaseResponse {
  completed: any;
}

interface CourseDurationData extends BaseResponse {
  duration: any;
}

interface BadgeData extends BaseResponse {
  badges: any;
}

export const GetCoursesInProgress = (): CourseData => {
  const { loggedInUserDetails } = useUserStore();
  const { useGetRequest } = useApiRequest();
  const url = `/courses/in-progres?user_id=${loggedInUserDetails?.id}`;
  const reqKey = ["courses-in-progress"];
  const { data, error, isLoading } = useGetRequest(url, reqKey);

  return { data: data?.data, error, isLoading };
};

export const GetCoursesCompleted = (): CourseCompletedData => {
  const { loggedInUserDetails } = useUserStore();
  const { setStatistics } = useStatsStore();
  const { useGetRequest } = useApiRequest();
  const url = `/courses/completed?user_id=${loggedInUserDetails?.id}`;
  const reqKey = ["courses-completed"];
  const { data, error, isLoading, isSuccess } = useGetRequest(url, reqKey);

  React.useEffect(() => {
    if (isSuccess && data?.data) {
      setStatistics(data.data);
    }
  }, [data?.data, isSuccess, setStatistics]);
  // console.log("statistics", statistics);
  return { completed: data?.data, error, isLoading };
};

export const GetCoursesDuration = (): CourseDurationData => {
  const { loggedInUserDetails } = useUserStore();
  const { useGetRequest } = useApiRequest();
  const url = `/courses/study-duration?user_id=${loggedInUserDetails?.id}`;
  const reqKey = ["courses-duration"];
  const { data, error, isLoading } = useGetRequest(url, reqKey);

  return { duration: data?.data, error, isLoading };
};

export const GetBadges = (): BadgeData => {
  const { loggedInUserDetails } = useUserStore();
  const { useGetRequest } = useApiRequest();
  const url = `/courses/badges?user_id=${loggedInUserDetails?.id}`;
  const reqKey = ["courses-badges"];
  const { data, error, isLoading } = useGetRequest(url, reqKey);

  return { badges: data?.data, error, isLoading };
};
