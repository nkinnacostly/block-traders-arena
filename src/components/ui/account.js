import React from "react";

function Account() {
  return (
    <div className="w-full bg-black px-[4rem] py-[2rem] hidden lg:block">
      <p className="w-full  text-white text-[32px] font-medium  mt-5">
        How to open an account
      </p>
      <div className=" flex justify-center items-center gap-[19px] mt-8">
        <div className="flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="w-[100px] h-[100px] relative">
            <div className="w-[100px] h-[100px] left-0 top-0 absolute rounded-full border-2 border-amber-400" />
            <div className="w-20 h-20 left-[10px] top-[10px] absolute rounded-full border-2 border-amber-400" />
            <div className="left-[43px] top-[26px] absolute text-amber-400 text-[32px] font-medium ">
              1
            </div>
          </div>
          <div className="w-[146px] text-center text-white text-xl font-medium ">
            Create a Block account
          </div>
        </div>
        <div className="flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="w-[100px] h-[100px] relative">
            <div className="w-[100px] h-[100px] left-0 top-0 absolute rounded-full border-2 border-amber-400" />
            <div className="w-20 h-20 left-[10px] top-[10px] absolute rounded-full border-2 border-amber-400" />
            <div className="left-[43px] top-[26px] absolute text-amber-400 text-[32px] font-medium ">
              2
            </div>
          </div>
          <div className="w-[146px] text-center text-white text-xl font-medium ">
            Start Learning
          </div>
        </div>
        <div className="flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="w-[100px] h-[100px] relative">
            <div className="w-[100px] h-[100px] left-0 top-0 absolute rounded-full border-2 border-amber-400" />
            <div className="w-20 h-20 left-[10px] top-[10px] absolute rounded-full border-2 border-amber-400" />
            <div className="left-[43px] top-[26px] absolute text-amber-400 text-[32px] font-medium ">
              3
            </div>
          </div>
          <div className="w-[146px] text-center text-white text-xl font-medium ">
            Get Funded
          </div>
        </div>
        <div className="flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="w-[100px] h-[100px] relative">
            <div className="w-[100px] h-[100px] left-0 top-0 absolute rounded-full border-2 border-amber-400" />
            <div className="w-20 h-20 left-[10px] top-[10px] absolute rounded-full border-2 border-amber-400" />
            <div className="left-[43px] top-[26px] absolute text-amber-400 text-[32px] font-medium ">
              4
            </div>
          </div>
          <div className="w-[146px] text-center text-white text-xl font-medium ">
            Start Trading
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
