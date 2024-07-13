import { IoIosSearch } from "react-icons/io";
import React from "react";
import { VscBellDot } from "react-icons/vsc";

function SearchCourses() {
  return (
    <div>
      <div className="flex w-full border-2 rounded-xl">
        <div className="w-[90%] flex  items-center justify-center relative">
          <input
            className="w-full h-[60px] pl-10 rounded-xl bg-[#1E1E1E0D]  focus:outline-none"
            placeholder="Search"
          />
          <IoIosSearch
            size={20}
            className="absolute  w-50  left-[0.8em] top-[1.30rem] "
          />
        </div>
        <div className="flex items-center justify-center w-[10%]">
          <VscBellDot size={30} />
        </div>
      </div>
    </div>
  );
}

export default SearchCourses;
