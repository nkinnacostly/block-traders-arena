"use client";
import Image from "next/image";
import { GetCoursesInProgress } from "../../services/services";
import { Skeleton } from "@/components/ui/skeleton";
import BlockImg from "@/public/assets/1.jpeg";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function CoursesInProgress() {
  const { data, isLoading: inProgressLoading, error } = GetCoursesInProgress();
  if (inProgressLoading)
    return (
      <>
        <div className="grid grid-cols-2 gap-5 my-5">
          {Array(2)
            .fill(1)
            .map((_, index) => {
              return (
                <Skeleton className="h-96 w-full bg-gray-300" key={index} />
              );
            })}
        </div>
      </>
    );
  if (error)
    return (
      <>
        <h5>Oops!!! Something went wrong</h5>
      </>
    );
  return (
    <Card className="h-[90%]">
      {/* <Separator /> */}
      <CardContent className="h-full p-2">
        {data?.courses?.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            {" "}
            <h3>No Courses in Progress</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {data?.courses?.map((video, id) => (
              <div className="relative p-2 rounded-md  border " key={id}>
                <Image
                  src={BlockImg}
                  alt=""
                  className="w-full rounded-t-xl"
                  height={100}
                  width={100}
                />
                <div className="px-5">
                  <p className="capitalize text-2xl font-medium mt-[1rem]">
                    {video?.name}
                  </p>
                  <div className="mt-2">
                    <Progress value={20} className="w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* <div className=" bg-white shadow-lg rounded-xl">
          <Image
            src={"/assets/img/png/chart.png"}
            alt=""
            className="w-full rounded-t-xl"
            height={100}
            width={100}
          />
          <div className="flex flex-col items-center justify-center px-1 ">
            <p className=" text-black text-lg font-medium mt-[2rem] text-start">
              Trading for Beginners: Entry Level
            </p>
            <div className="flex items-end justify-end w-full px-4 pt-2">
              <IoCheckmarkDoneCircleSharp size={50} fill="green" />
            </div>
          </div>
        </div> */}
      </CardContent>
    </Card>
  );
}
