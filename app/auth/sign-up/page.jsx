"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import TextInput from "@/src/components/dashboard/input/textInput";
import LoginHeader from "@/src/components/dashboard/loginHeader/loginHeader";
import PasswordInput from "@/src/components/dashboard/input/passwordInput";
import Button from "@/src/components/dashboard/button/button";
import { useUserStore } from "@/src/store/user-store";
import useApiRequest from "@/src/hooks/useCustonApiQuery";

function SignUp() {
  const {
    email,
    username,
    password,
    setEmail,
    setUserName,
    setPassword,
    notification_status,
    setNotification,
  } = useUserStore();
  const { useGetRequest, useMutationRequest } = useApiRequest(); // Destructure the custom hook
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
  const [isValid, setIsValid] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });
  // const [signUpData, setSignUpData] = useState({
  //   email:'',
  //   userName:'',
  //   password:'',
  // })

  const handleUserInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      setEmail(value);
    } else if (name === "username") {
      setUserName(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "notification") {
      setNotification(1);
    }
    // setSignUpData({
    //   ...loginDetails,
    //   [name]: value,
    // });
    setIsValid({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /\d/.test(value),
      specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value),
    });
  };
  const mutation = useMutationRequest();
// console.log(mutation,"This is mutation")
  const handleSubmit = async () => {
    try {
      // Perform the mutation (POST request in this case)
      // alert("Hello")
      await mutation.mutateAsync({
        method: "POST",
        url: "/sign-up",
        headers: {
          'X-CSRF-TOKEN': csrfToken,
      },
        data: {email,password,username,notification_status},
      });
    } catch (error) {
      // console.error("Error adding data:", error.message);
      console.log(error)
    }
  };
  // const handleClick = () => {
  //   mutation.mutate({ 'email': email, 'password':password, 'userName':userName, 'password':password });
  // };
  // console.log(email,userName,password, notification,"This are values from zustand")
  // if (mutation.isLoading) return 'Loading...';
  //   if (mutation.isError) return 'An error has occurred: ' + mutation.error.message;
  return (
    <div className="h-full w-full  flex flex-col items-start px-10 ">
      <LoginHeader />
      <TextInput
        inputText={"Email"}
        placeholder={"Enter your Email Address"}
        onChange={handleUserInputs}
        name={"email"}
      />
      <TextInput
        inputText={"Username"}
        placeholder={"Enter Username"}
        onChange={handleUserInputs}
        name={"username"}
      />
      <PasswordInput
        inputText={"Password"}
        setIsValid={setIsValid}
        onChange={handleUserInputs}
        name={"password"}
      />
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
        <input
          type="checkbox"
          className="w-5 h-5 rounded-sm"
          name="notification"
          onChange={handleUserInputs}
        />
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
      <Button
        btnText={"Sign Up"}
        className={`${isValid ? "bg-yellow-300" : "bg-white "} `}
        onClick={handleSubmit}
      />
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
