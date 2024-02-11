"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import TextInput from "@/app/src/components/dashboard/input/textInput";
import LoginHeader from "@/app/src/components/dashboard/loginHeader/loginHeader";
import PasswordInput from "@/app/src/components/dashboard/input/passwordInput";
import Button from "@/app/src/components/dashboard/button/button";
function SignUp() {
  const [isValid, setIsValid] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  return (
    <div className="h-full w-full  flex flex-col items-start px-10">
      <LoginHeader />
      <TextInput inputText={"Email"} />
      <TextInput inputText={"Username"} />
      <PasswordInput inputText={"Password"} setIsValid={setIsValid} />
      <div className="grid grid-cols-2 gap-5">
        <div
          className={`${
            isValid.length ? "text-[#05390aed]" : "text-[#1E1E1E99]"
          } flex items-center space-x-2  truncate sliding-text`}
        >
          <span>
            <FaCircle size={8} />
          </span>
          <span>Use 8 or more characters</span>
        </div>
        <div
          className={`${
            isValid.uppercase ? "text-[#05390aed]" : "text-[#1E1E1E99]"
          } flex items-center space-x-2 truncate sliding-text`}
        >
          <span>
            <FaCircle size={8} />
          </span>
          <span>One Uppercase character</span>
        </div>
        <div
          className={`${
            isValid.lowercase ? "text-[#05390aed]" : "text-[#1E1E1E99]"
          } flex items-center space-x-2  truncate sliding-text`}
        >
          <span>
            <FaCircle size={8} />
          </span>
          <span>One lowercase character</span>
        </div>
        <div
          className={`${
            isValid.specialChar ? "text-[#05390aed]" : "text-[#1E1E1E99]"
          } flex items-center space-x-2 `}
        >
          <span>
            <FaCircle size={8} />
          </span>
          <span>One special character</span>
        </div>
        <div
          className={`${
            isValid.number ? "text-[#05390aed]" : "text-[#1E1E1E99]"
          } flex items-center space-x-2 `}
        >
          <span>
            <FaCircle size={8} />
          </span>
          <span>One Number</span>
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-5">
        <input type="checkbox" className="w-10 h-10" />
        <p className="text-[16px] font-[400] text-[#1E1E1E]">
          I want to receive emails about the product, feature updates, events,
          and marketing promotions.
        </p>
      </div>
      <p className="text-[16px] font-[400] text-[#1E1E1E] p-2 mt-2">
        {" "}
        By creating an account, you agree to the{" "}
        <span className="underline cursor-pointer">Terms of use</span> and{" "}
        <span className="underline cursor-pointer">Privacy Policy</span>.
      </p>
      <Button />
      <div className="flex items-center justify-center w-full">
        <p className="text-[16px] font-[400] text-[#1E1E1E] p-2">
          Already have an account?{" "}
          <span className="underline cursor-pointer text-[#EE1D52]">Login</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default SignUp;
