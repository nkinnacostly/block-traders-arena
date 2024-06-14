import React from "react";

function UserFeedBack() {
  return (
    <>
      <div className="flex flex-col items-start justify-start w-full lg:w-[534px] p-5 space-y-5 shadow-xl rounded-xl border-2">
        <p className="  text-xl font-medium mt-[2rem] text-start">
          Feedback and Help
        </p>

        <div className="w-full p-4 border-b-2 ">
          <p>Contact Support</p>
          <p>snrdev@gmail.com</p>
        </div>
        <div className="w-full p-4 border-b-2 ">
          <p>Provide Feedback</p>
          {/* <p>snrdev@gmail.com</p> */}
        </div>
      </div>
    </>
  );
}

export default UserFeedBack;
