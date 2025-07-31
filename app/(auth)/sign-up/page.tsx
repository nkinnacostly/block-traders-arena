"use client";

import { AnimatePage } from "@/components/animations/page";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import LoginHeader from "@/components/loginHeader";

import React from "react";
import { SignUpSchema } from "@/schemas/sign-in";
import { storeItemToSessionStorage } from "@/utils/storage";
import { toast } from "sonner";
import useApiRequest from "@/hooks/useCustonApiQuery";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SignUpFormData {
  email: string;
  username: string;
  password: string;
  notification_status: number;
  paid: number;
}

interface ApiResponse {
  message: string;
  user: any;
  data?: {
    token: string;
  };
}

const SignUp: React.FC = () => {
  const { useMutationRequest } = useApiRequest();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors, isDirty },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      notification_status: 0,
      paid: 0,
    },
  });

  const { mutateAsync, isPending } = useMutationRequest();

  const onSubmit = async (userData: SignUpFormData) => {
    try {
      await mutateAsync(
        {
          method: "POST",
          url: "/sign-up",
          data: userData,
        },
        {
          onSuccess: (data: ApiResponse) => {
            toast.success(data.message);
            storeItemToSessionStorage({ key: "user", value: data.user });
            storeItemToSessionStorage({
              key: "__session",
              value: data.data?.token,
            });
            router.push("/login");
          },
          onError: (error: { message: string }) => {
            toast.error(error.message);
            console.log(error, "This is my data error");
          },
        }
      );
    } catch (error) {
      // console.error("Error adding data:", error.message);
      // console.log(error.error);
    }
  };

  const values = getValues();
  console.log(values);

  const handleCheckedChange = (name: string, value: boolean) => {
    if (name === "notification_status") {
      setValue(name, Number(value));
    }
  };

  return (
    <div className="h-full w-full  flex flex-col items-start px-10 ">
      <LoginHeader />
      <form
        action="post"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-4"
      >
        <div className="space-y-2">
          <Input
            placeholder="Enter your Email Address"
            type="text"
            {...register("email")}
            className={`${
              errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm font-medium">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Input
            placeholder="Enter Username"
            {...register("username")}
            type="text"
            className={`${
              errors.username ? "border-red-500 focus-visible:ring-red-500" : ""
            }`}
          />
          {errors.username && (
            <p className="text-red-500 text-sm font-medium">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Input
            placeholder="Enter Password"
            type="password"
            {...register("password")}
            className={`${
              errors.password ? "border-red-500 focus-visible:ring-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm font-medium">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="notification"
            checked={Boolean(watch("notification_status"))}
            onCheckedChange={(value) =>
              handleCheckedChange("notification_status", Boolean(value))
            }
          />
          <Label
            htmlFor="notification"
            className="text-[16px] font-[400] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I want to receive emails about the product, feature updates, events,
            and marketing promotions.
          </Label>
        </div>
        {/* <p className="text-[16px] font-[400]  p-2 mt-2">
          By creating an account, you agree to the{" "}
          <span className="underline cursor-pointer">Terms of use</span> and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>.
        </p> */}
        <Button
          className={"disabled:bg-gray-400 bg-yellow-400"}
          disabled={!isDirty || isPending}
          isLoading={isPending}
        >
          Sign Up
        </Button>
      </form>

      <div className="flex items-center justify-center w-full">
        <p className="text-[16px] font-[400]  p-2">
          Already have an account?{" "}
          <Link
            className="underline cursor-pointer text-[#EE1D52]"
            href={"/login"}
          >
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default AnimatePage(SignUp);
