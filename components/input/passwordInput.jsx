"use client";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import React, { useState } from "react";

// import { useTheme } from "next-themes";
import { useUserStore } from "@/store/store";

function PasswordInput({
  inputText,
  name,
  onChange,
  register,
  required,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const { password } = useUserStore();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`flex flex-col items-start justify-center w-full mb-5`}>
      <div className="flex w-full justify-between items-center ">
        <p className="text-[16px] font-[400]  p-2">{inputText}</p>
        <div
          className={`flex items-center justify-center cursor-pointer`}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <AiFillEyeInvisible size={20} />
          ) : (
            <AiFillEye size={20} />
          )}
          <p className="text-[16px] font-[400]  p-2">
            {showPassword ? "Hide" : "Show"}
          </p>
        </div>
      </div>

      <input
        className={`w-full h-[56px] rounded-[12px] border-2 pl-6 focus:outline-none `}
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={onChange}
        name={name}
        {...register(name, { required })}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
}

export default PasswordInput;
