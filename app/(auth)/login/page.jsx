"use client";

import { AnimatePage } from "@/components/animations/page";
import Button from "@/components/button/button";
import Link from "next/link";
import LoginHeader from "@/components/dashboard/loginHeader/loginHeader";
import PasswordInput from "@/components/input/passwordInput";
import React from "react";
import TextInput from "@/components/input/textInput";
import { profileSchema } from "@/schemas/login";
import { redirect } from "next/navigation";
import { storage } from "@/utils/storage";
import { toast } from "sonner";
import useApiRequest from "@/hooks/useCustonApiQuery";
import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";

function Login() {
  const { useMutationRequest } = useApiRequest(); // Destructure the custom hook
  const { mutateAsync, isPending } = useMutationRequest();
  // const router = useRouter();

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
            storage.cookieStorage.set("user", data.user);
            storage.cookieStorage.set("__session", data?.token);
            setLoggedInUserDetails(data?.user);
            toast.success("Login Successful");
            redirect("/dashboard");
          },
          onError: (error) => {
            toast.error(error.message);
            // console.log(error, "This is error");
          },
        }
      );
    } catch (error) {
      // console.error("Error adding data:", error.message);
      // console.log(error.error);
    }
  };

  return (
    <div className="h-full w-full  flex flex-col items-start px-10">
      <LoginHeader />
      <form action="post" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          inputText={"Username"}
          placeholder={"Enter Username"}
          name={"username"}
          register={register}
          type="text"
          error={errors.username}
        />
        <PasswordInput
          inputText={"Password"}
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
          <Link
            className="underline cursor-pointer text-[#EE1D52]"
            // onClick={() => router.push("/login")}
            href={"/sign-up"}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AnimatePage(Login);
