import React from "react";

function TextInput({ inputText, onChange, placeholder, name }) {
  return (
    <div className="flex flex-col items-start justify-center w-full mb-5">
      <p className="text-[16px] font-[400] text-[#1E1E1E] p-2">{inputText}</p>

      <input
        className="w-full h-[56px] rounded-[12px] border-2 pl-6 focus:outline-none"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}

export default TextInput;
