"use client";
import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
function PasswordInput({ inputText, setIsValid }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (event) => {
    const { value } = event.target;
    setPassword(value);

    setIsValid({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /\d/.test(value),
      specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value),
    });
  };

  return (
    <div className="flex flex-col items-start justify-center w-full mb-5">
      <div className="flex w-full justify-between items-center ">
        <p className="text-[16px] font-[400] text-[#1E1E1E] p-2">{inputText}</p>
        <div
          className={`flex items-center justify-center cursor-pointer`}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <AiFillEyeInvisible size={20} />
          ) : (
            <AiFillEye size={20} />
          )}
          <p className="text-[16px] font-[400] text-[#1E1E1E] p-2">
            {showPassword ? "Hide" : "Show"}
          </p>
        </div>
      </div>

      <input
        className="w-full h-[56px] rounded-[12px] border-2 pl-6 focus:outline-none"
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handleChange}
      />
    </div>
  );
}

export default PasswordInput;
