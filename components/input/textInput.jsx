import React from "react";

function TextInput({
  inputText,
  onChange,
  placeholder,
  name,
  type,
  register,
  valueAsNumber,
  error,
  // value,
  disabled,
  defaultValue,
}) {
  return (
    <div className="flex flex-col items-start justify-center w-full mb-5">
      <p className="text-[16px] font-[400]  p-2">{inputText}</p>

      <input
        className="w-full h-[56px] rounded-[12px] border-2 pl-6 focus:outline-none"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        type={type}
        {...register(name, { valueAsNumber })}
        disabled={disabled}
        defaultValue={defaultValue}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
}

export default TextInput;
