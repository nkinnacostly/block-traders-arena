"use client";
import React from "react";
import Image from "next/image";
import TextInput from "@/app/src/components/dashboard/input/textInput";
import LoginHeader from "@/app/src/components/dashboard/loginHeader/loginHeader";
import PasswordInput from "@/app/src/components/dashboard/input/passwordInput";
import Button from "@/app/src/components/dashboard/button/button";
function Login() {
  return (
    <div className="h-full w-full  flex flex-col items-start px-10">
      <LoginHeader />
      <TextInput inputText={"Email"} />
      <PasswordInput inputText={"Password"} />
      <p className="text-[16px] font-[400] text-[#1E1E1E] p-2 mt-2">
        {" "}
        By creating an account, you agree to the{" "}
        <span className="underline cursor-pointer">Terms of use</span> and{" "}
        <span className="underline cursor-pointer">Privacy Policy</span>.
      </p>
      <Button />
      <div className="flex items-center justify-center w-full">
        <p className="text-[16px] font-[400] text-[#1E1E1E] p-2">
          Do not have an account?{" "}
          <span className="underline cursor-pointer text-[#EE1D52]">
            Sign up
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Login;
