/* eslint-disable no-useless-escape */
"use client";

import { AnimatePage } from "@/components/animations/page";
import Button from "@/components/button/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";
// import { FaCircle } from "react-icons/fa";
import LoginHeader from "@/components/dashboard/loginHeader/loginHeader";
import PasswordInput from "@/components/input/passwordInput";
import React from "react";
import { SignUpSchema } from "@/schemas/sign-in";
import TextInput from "@/components/input/textInput";
import { storeItemToSessionStorage } from "@/utils/storage";
import { toast } from "sonner";
import useApiRequest from "@/hooks/useCustonApiQuery";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
// import { useUserStore } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";

// console.log(toast, "This is toast");

function SignUp() {
  // const {
  //   email,
  //   username,
  //   password,
  //   setEmail,
  //   setUserName,
  //   setPassword,
  //   notification_status,
  //   setNotification,
  // } = useUserStore();
  const { useMutationRequest } = useApiRequest(); // Destructure the custom hook
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      notification_status: Number(0),
      paid: 0,
    },
  });

  const { mutateAsync, isPending } = useMutationRequest();

  const onSubmit = async (userData) => {
    try {
      await mutateAsync(
        {
          method: "POST",
          url: "/sign-up",
          data: userData,
        },
        {
          onSuccess: (data) => {
            toast.success(data.message);
            storeItemToSessionStorage("user", data.user);
            storeItemToSessionStorage("__session", data.data?.token);
            router.push("/login");
          },
          onError: (error) => {
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
  const handleCheckedChange = (name, value) => {
    if (name === "notification_status") {
      setValue(name, Number(value));
    }
  };
  return (
    <div className="h-full w-full  flex flex-col items-start px-10 ">
      <LoginHeader />
      <form action="post" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          inputText={"Email"}
          placeholder={"Enter your Email Address"}
          // onChange={handleUserInputs}
          type="text"
          name={"email"}
          register={register}
          error={errors.email}
        />
        <TextInput
          inputText={"Username"}
          placeholder={"Enter Username"}
          // onChange={handleUserInputs}
          error={errors.username}
          type="text"
          name={"username"}
          register={register}
        />
        <PasswordInput
          inputText={"Password"}
          // setIsValid={setIsValid}
          error={errors.password}
          name={"password"}
          register={register}
        />
        {/* <div className="grid grid-cols-2 gap-5">
          <div
            className={`${
              isValid.length && "text-green-500"
            } flex items-center space-x-2  truncate sliding-text`}
          >
            <span>
              <FaCircle size={8} />
            </span>
            <span>Use 8 or more characters</span>
          </div>
          <div
            className={`${
              isValid.uppercase && "text-green-500"
            } flex items-center space-x-2 truncate sliding-text`}
          >
            <span>
              <FaCircle size={8} />
            </span>
            <span>One Uppercase character</span>
          </div>
          <div
            className={`${
              isValid.lowercase && "text-green-500"
            } flex items-center space-x-2  truncate sliding-text`}
          >
            <span>
              <FaCircle size={8} />
            </span>
            <span>One lowercase character</span>
          </div>
          <div
            className={`${
              isValid.specialChar && "text-green-500"
            } flex items-center space-x-2 `}
          >
            <span>
              <FaCircle size={8} />
            </span>
            <span>One special character</span>
          </div>
          <div
            className={`${
              isValid.number && "text-green-500"
            } flex items-center space-x-2 `}
          >
            <span>
              <FaCircle size={8} />
            </span>
            <span>One Number</span>
          </div>
        </div> */}
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={watch("notification_status")}
            name="notification_status"
            onCheckedChange={
              (value) => handleCheckedChange("notification_status", value)
              // setValue("notification_status", Number(value)),
              // console.log(value, "This is value")
            }
          />
          <Label
            htmlFor="terms"
            className="text-[16px] font-[400]  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I want to receive emails about the product, feature updates, events,
            and marketing promotions.
          </Label>
        </div>
        <p className="text-[16px] font-[400]  p-2 mt-2">
          {" "}
          By creating an account, you agree to the{" "}
          <span className="underline cursor-pointer">
            Terms of use
          </span> and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>.
        </p>
        <Button
          btnText={"Sign Up"}
          className={"disabled:bg-gray-400 bg-yellow-400"}
          onClick={handleSubmit}
          disabled={!isDirty || isPending}
          loading={isPending}
        />
      </form>

      <div className="flex items-center justify-center w-full">
        <p className="text-[16px] font-[400]  p-2">
          Already have an account?{" "}
          <Link
            className="underline cursor-pointer text-[#EE1D52]"
            // onClick={() => router.push("/login")}
            href={"/login"}
          >
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default AnimatePage(SignUp);
// export const Component = AnimatePage(SignUp);
