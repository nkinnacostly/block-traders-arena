"use client";

import { AnimatePage } from "@/src/components/animations/page";
import Button from "@/src/components/dashboard/button/button";
import LoginHeader from "@/src/components/dashboard/loginHeader/loginHeader";
import PasswordInput from "@/src/components/dashboard/input/passwordInput";
import React from "react";
import TextInput from "@/src/components/dashboard/input/textInput";
import { storage } from "@/src/utils/storage";
import { toast } from "sonner";
import useApiRequest from "@/src/hooks/useCustonApiQuery";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/src/store/user-store";

function Login() {
  const { useMutationRequest } = useApiRequest(); // Destructure the custom hook
  const { mutateAsync, isPending } = useMutationRequest();
  const router = useRouter();

  const {
    // loginEmail,
    username,
    password,
    loggedInUserDetails,
    setLoggedInUserDetails,
    setUserName,

    setPassword,
  } = useUserStore();
  const isAnyInputEmpty = () => {
    return !username || !password;
  };
  const handleUserInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "username") {
      setUserName(value);
    } else if (name === "password") {
      setPassword(value);
      //  setIsValid({
      //    length: value.length >= 8,
      //    uppercase: /[A-Z]/.test(value),
      //    lowercase: /[a-z]/.test(value),
      //    number: /\d/.test(value),
      //    specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value),
      //  });
    }
  };
  const handleSubmit = async () => {
    // const errorMap = {
    //   "string.email": "Invalid email address",
    //   "string.min": "Must be at least {{min}} characters",
    // };
    try {
      // SignUpSchema.parse({ email, password, username }, { errorMap });
      await mutateAsync(
        {
          method: "POST",
          url: "/login",
          data: { username, password },
        },
        {
          onSuccess: (data) => {
            // console.log(data);
            toast.success("Login Successful");
            storage.localStorage.set("user", data.user);
            storage.localStorage.set("__session", data?.token);
            setLoggedInUserDetails(data);
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
  console.log(loggedInUserDetails, "loggedInUserDetails");
  return (
    <div className="h-full w-full  flex flex-col items-start px-10">
      <LoginHeader />
      <TextInput
        inputText={"Username"}
        placeholder={"Enter Username"}
        onChange={handleUserInputs}
        name={"username"}
      />
      <PasswordInput
        inputText={"Password"}
        onChange={handleUserInputs}
        name={"password"}
      />
      <p className="text-[16px] font-[400] text-[#1E1E1E] p-2 mt-2">
        {" "}
        By creating an account, you agree to the{" "}
        <span className="underline cursor-pointer">Terms of use</span> and{" "}
        <span className="underline cursor-pointer">Privacy Policy</span>.
      </p>
      <Button
        btnText={"Login"}
        className={"disabled:bg-gray-400 bg-yellow-400"}
        onClick={handleSubmit}
        disabled={isAnyInputEmpty() || isPending}
        loading={isPending}
      />
      <div className="flex items-center justify-center w-full">
        <p className="text-[16px] font-[400] text-[#1E1E1E] p-2">
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
