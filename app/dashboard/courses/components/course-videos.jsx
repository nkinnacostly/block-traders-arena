"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { WatchVideo } from "./video-modal";

import useApiRequest from "@/hooks/useCustonApiQuery";
import { useUserStore } from "@/store/store";
import { Button } from "@/components/ui/button";
import { useInitiatePayment } from "../services/initialize-payment";
import useToggle from "@/hooks/use-toggle";
import PaymentDialog from "./payment-dialog";

export function CoursesVideos() {
  const { loggedInUserDetails } = useUserStore();
  const [isVisible, toggleVisibility] = useToggle(false);
  const [paymentData, setPaymentData] = useState({});
  const [inProgress, setInProgress] = React.useState({
    user_id: loggedInUserDetails?.id,
    course_id: "",
  });
  console.log(loggedInUserDetails);
  // const url = `/all-videos`;
  const url = `/api/get-level-2/`;
  const reqKey = ["users-videos"];
  const { useGetRequest } = useApiRequest();
  const { data, isLoading, isError } = useGetRequest(url, reqKey);
  const { mutateAsync, isPending } = useInitiatePayment(
    loggedInUserDetails?.uuid
  );

  const onSubmit = async () => {
    try {
      const response = await mutateAsync();
      if (response?.status === 200) {
        console.log(response);
        toggleVisibility();
        setPaymentData(response?.data);
      }
    } catch (error) {
      console?.error("Login failed:", error?.error);
      //  toast.error(`${error.error}`);
    }
  };
  const videos = React.useMemo(
    () => data?.data?.videos || [],
    [data?.data?.videos]
  );
  const updatedData = videos.map((item) => ({
    ...item,
    image: `/assets/${item.id}.jpeg`,
  }));
  if (isError)
    return (
      <p className="text-red-500 font-bold">
        Oooops Something went Wrong, We`&apos;`re working on it!!
      </p>
    );
  return (
    <div className=" flex flex-col  gap-4">
      <div className=" w-full flex items-center justify-between p-2 ">
        <h5 className="text-[24px]  font-[500] ">
          Pay to Unlock other Lessons
        </h5>
        <Button isLoading={isPending} onClick={() => onSubmit()}>
          Proceed to Payment
        </Button>
      </div>

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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
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
                        <WatchVideo
                          data={video}
                          setInProgress={setInProgress}
                          inProgress={inProgress}
                        >
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
      </div>
      <PaymentDialog
        openChange={isVisible}
        handleOpenChange={toggleVisibility}
        data={paymentData}
      />
    </div>
  );
}
