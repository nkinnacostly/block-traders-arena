"use client";
import Buttonwithoutbg from "@/src/components/ui/button-without-bg";
import React, { useState } from "react";

function Settings() {
  return (
    <div className="flex gap-5 flex-col lg:flex-row  justify-evenly">
      <div className="flex flex-col items-center justify-center space-y-5 ">
        <div className="h-[355px] w-full rounded-xl shadow-xl flex items-center justify-center flex-col space-y-5">
          <div className="rounded-full h-[220px] w-[220px] flex items-center justify-center flex-col border-2">
            Hello Image
          </div>
          <Buttonwithoutbg Btntext={"Get Started"} className={"text-black"} />
        </div>
        <div className="flex flex-col items-start justify-start w-full p-5 space-y-5 shadow-xl rounded-xl">
          <p className=" text-black text-xl font-medium mt-[2rem] text-start">
            Notification Preferences
          </p>
          <div className="flex items-start justify-start w-full p-4 space-x-3 border-b-2">
            <p>Email Notification</p>
            <ToggleSwitch />
          </div>
          <div className="flex items-start justify-start w-full p-4 space-x-3 border-b-2">
            <p>Push Notification</p>
            <ToggleSwitch />
          </div>
          <div className="flex items-start justify-start w-full p-4 space-x-3 border-b-2">
            <p>SMS Notification</p>
            <ToggleSwitch />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full p-4 space-y-5 shadow-xl rounded-xl">
          <p className=" text-black text-xl font-medium mt-[2rem] text-start">
            Security and Privacy
          </p>
          <div className="flex flex-col items-start justify-start w-full p-4 border-b-2">
            <p>Password</p>
            <p>*************</p>
            {/* <ToggleSwitch /> */}
          </div>
          <div className="flex items-start justify-start w-full p-4 space-x-3 border-b-2">
            <p>2FA</p>
            <ToggleSwitch />
          </div>
          <div className="flex flex-col items-start justify-start w-full p-4 border-b-2">
            <p>Devices</p>
            <p>Linked Devices and Sessions</p>
            {/* <ToggleSwitch /> */}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full p-4 space-y-5 shadow-xl rounded-xl">
          <p className=" text-black text-xl font-medium mt-[2rem] text-start">
            Language and Region
          </p>
          <div className="flex flex-col items-start justify-start w-full p-4 border-b-2">
            <p>Language</p>
            <p>English</p>
            {/* <ToggleSwitch /> */}
          </div>
          <div className="flex flex-col items-start justify-start w-full p-4 border-b-2">
            <p>Time Zone</p>
            <p>UTC +1:00</p>
            {/* <ToggleSwitch /> */}
          </div>
          <div className="flex flex-col items-start justify-start w-full p-4 border-b-2">
            <p>Devices</p>
            <p>Linked Devices and Sessions</p>
            {/* <ToggleSwitch /> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-col items-start justify-start w-full lg:w-[534px] p-5 space-y-5 shadow-xl rounded-xl">
          <p className=" text-black text-xl font-medium mt-[2rem] text-start">
            Notification Preferences
          </p>
          <div className="flex items-start flex-col lg:flex-row justify-between w-full p-4 space-y-3 lg:space-y-0 lg:space-x-3 border-b-2">
            <div>
              <p>First Name</p>
              <p>Snr Dev</p>
            </div>
            <div>
              <p>Last Name</p>
              <p>Snr Dev</p>
            </div>
          </div>
          <div className="w-full p-4 border-b-2 ">
            <p>Email Address</p>
            <p>snrdev@gmail.com</p>
          </div>
          <div className="w-full p-4 border-b-2 ">
            <p>Phone Number</p>
            <p>snrdev@gmail.com</p>
          </div>
          <div className="w-full p-4 border-b-2 ">
            <p>Block Path</p>
            <p>snrdev@gmail.com</p>
          </div>
          <div className="w-full p-4 border-b-2 ">
            <p>Block Level</p>
            <p>snrdev@gmail.com</p>
          </div>
          <div className="flex items-center justify-center w-full p-4 border-b-2 ">
            <Buttonwithoutbg
              Btntext={"Edit Contact Information"}
              className={"text-black "}
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full p-5 space-y-5 shadow-xl rounded-xl">
          <p className=" text-black text-xl font-medium mt-[2rem] text-start">
            Accesibility
          </p>
          <div className="flex items-start justify-start w-full p-4 space-x-3 border-b-2">
            <p>High Contrast Mode</p>
            <ToggleSwitch />
          </div>
          <div className="flex items-start justify-start w-full p-4 space-x-3 border-b-2">
            <p>Screen Reader Compatibility </p>
            <ToggleSwitch />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full lg:w-[534px] p-5 space-y-5 shadow-xl rounded-xl">
          <p className=" text-black text-xl font-medium mt-[2rem] text-start">
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
        <div className="flex flex-col items-start justify-start w-full p-5 space-y-5 shadow-xl rounded-xl">
          <p className=" text-black text-xl font-medium mt-[2rem] text-start">
            Account
          </p>
          <div className="flex items-start justify-start w-full p-4 space-x-3 border-b-2">
            <p>Deactivate Account</p>
            <ToggleSwitch />
          </div>
          <div className="flex items-start justify-start w-full p-4 space-x-3 border-b-2">
            <p>Delete Account</p>
            <ToggleSwitch />
          </div>
          <div className="flex items-end justify-end w-full p-4 ">
            <p>Log Out</p>
            {/* <ToggleSwitch /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <button
      onClick={toggle}
      className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${
        isOn ? "bg-green-400 justify-end" : ""
      }`}
    >
      <span className="block w-5 h-5 duration-300 ease-in-out transform bg-white rounded-full shadow-md"></span>
    </button>
  );
}
