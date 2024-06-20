"use client";

import { AnimatePage } from "@/components/animations/page";
import Button from "@/components/button/button";
import LoginHeader from "@/components/dashboard/loginHeader/loginHeader";
import PasswordInput from "@/components/input/passwordInput";
import React from "react";
import TextInput from "@/components/input/textInput";
import { profileSchema } from "@/schemas/login";
import { storage } from "@/utils/storage";
import { toast } from "sonner";
import useApiRequest from "@/hooks/useCustonApiQuery";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";

function Login() {
  const { useMutationRequest } = useApiRequest(); // Destructure the custom hook
  const { mutateAsync, isPending } = useMutationRequest();
  const router = useRouter();

  const { setLoggedInUserDetails } = useUserStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (userData) => {
    try {
      await mutateAsync(
        {
          method: "POST",
          url: "/login",
          data: userData,
        },
        {
          onSuccess: (data) => {
            // console.log(data);
            storage.cookieStorage.set("user", data.user);
            storage.cookieStorage.set("__session", data?.token);

            setLoggedInUserDetails(data);
            toast.success("Login Successful");
            router.push("/dashboard");
          },
          onError: (error) => {
            // toast.error(error.message);
            console.log(error, "This is error");
          },
        }
      );
      // {
      //   mutation.isSuccess(console.log("active"));
      // }
    } catch (error) {
      // console.error("Error adding data:", error.message);
      // console.log(error.error);
    }
  };
  // console.log(loggedInUserDetails, "loggedInUserDetails");
  return (
    <div className="h-full w-full  flex flex-col items-start px-10">
      <LoginHeader />
      <form action="post" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          inputText={"Username"}
          placeholder={"Enter Username"}
          // onChange={handleUserInputs}
          name={"username"}
          register={register}
          type="text"
          error={errors.username}
        />
        <PasswordInput
          inputText={"Password"}
          // onChange={handleUserInputs}
          name={"password"}
          register={register}
          error={errors.password}
          required
        />
        <p className="text-[16px] font-[400]  p-2 mt-2">
          {" "}
          By creating an account, you agree to the{" "}
          <span className="underline cursor-pointer">
            Terms of use
          </span> and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>.
        </p>
        <Button
          btnText={"Login"}
          className={"disabled:bg-gray-400 bg-yellow-400"}
          // onClick={handleSubmit}
          disabled={isPending || !isDirty}
          loading={isPending}
        />
      </form>
      <div className="flex items-center justify-center w-full">
        <p className="text-[16px] font-[400]  p-2">
          Do not have an account?{" "}
          <span
            className="underline cursor-pointer text-[#EE1D52]"
            onClick={() => router.push("/auth/sign-up")}
          >
            Sign up
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default AnimatePage(Login);
