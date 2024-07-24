import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";

export function CoursesCompleted() {
  return (
    <Card>
      <Separator />
      <CardContent>
        <div className=" bg-white shadow-lg rounded-xl">
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
        </div>
      </CardContent>
    </Card>
  );
}
