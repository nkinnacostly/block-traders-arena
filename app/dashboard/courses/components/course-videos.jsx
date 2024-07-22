"use client";

import Image from "next/image";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { WatchVideo } from "./video-modal";
import { toast } from "sonner";
import useApiRequest from "@/hooks/useCustonApiQuery";
import { useUserStore } from "@/store/store";

export function CoursesVideos() {
  const { loggedInUserDetails } = useUserStore();
  console.log("loggedInUserDetails:", loggedInUserDetails);

  const url = `/all-videos`;
  const reqKey = ["users-videos"];
  const { useGetRequest } = useApiRequest();
  const { data, isLoading, isError } = useGetRequest(url, reqKey);

  const videos = React.useMemo(
    () => data?.data?.videos || [],
    [data?.data?.videos]
  );
  const updatedData = videos.map((item) => ({
    ...item,
    image: `/assets/${item.id}.jpeg`, // Adjust the path and extension as needed
  }));
  {
    isError ? toast.error("Opps Something Went Wrong") : "";
  }
  return (
    <>
      {isLoading && (
        <>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
              </div>
            </div>
          ))}
        </>
      )}
      {updatedData.map((video, index) => {
        const isAccessible = index === 0 || loggedInUserDetails.paid === 0;

        return (
          <div className="border-2 rounded-2xl relative" key={video.id}>
            <div
              className={`flex items-center justify-between shadow-md rounded-xl ${
                !isAccessible && "pointer-events-none"
              }`}
            >
              <div className="relative rounded-bl-3xl rounded-br-3xl">
                <Image
                  src={video.image}
                  alt=""
                  className="w-full rounded-t-xl"
                  height={100}
                  width={100}
                />
                <div className="px-5">
                  <p className="text-2xl font-medium mt-[2rem]">
                    {video?.name}
                  </p>

                  <div className="flex items-center justify-center w-full mt-8 mb-8">
                    {isAccessible ? (
                      <WatchVideo data={video}>
                        <button className="px-5 py-2.5 bg-amber-400 rounded-lg text-center text-base font-medium capitalize">
                          Watch video
                        </button>
                      </WatchVideo>
                    ) : (
                      <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 11V8a4 4 0 10-8 0v3m4 4v1a1 1 0 001 1h3m10 0a1 1 0 001-1v-1m0 0v-4a4 4 0 10-8 0v4m4 4v1a1 1 0 001 1h3m10 0a1 1 0 001-1v-1m0 0V9a4 4 0 10-8 0v4m4 4v1a1 1 0 001 1h3"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
