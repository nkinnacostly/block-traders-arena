"use client";

import React, { useState } from "react";

import Buttonwithoutbg from "@/src/components/ui/button-without-bg";
import TextInput from "@/src/components/ui/input/textInput";
import { settingSchema } from "@/src/schemas/settings";
import { toast } from "sonner";
import useApiRequest from "@/src/hooks/useCustonApiQuery";
import { useForm } from "react-hook-form";
import { useUserStore } from "@/src/store/store";
import { zodResolver } from "@hookform/resolvers/zod";

function Settings() {
  const { loggedInUserDetails } = useUserStore();
  const { user } = loggedInUserDetails;
  const { useMutationRequest } = useApiRequest(); // Destructure the custom hook
  const { mutateAsync, isPending } = useMutationRequest();
  console.log(user, "loggedInUserDetails");
  const {
    register,
    handleSubmit,

    formState: { errors, isDirty },
    // errors,
    // setError,
  } = useForm({
    resolver: zodResolver(settingSchema),
    defaultValues: {
      id: user?.id,
      first_name: "",
      last_name: "",
      email: user?.email,
      phone: "",
      block_path: "",
    },
  });
  console.log(errors, "This is errors");
  const onSubmit = async (userData) => {
    try {
      await mutateAsync(
        {
          method: "POST",
          url: "/update_name",
          data: userData,
        },
        {
          onSuccess: (data) => {
            console.log(data);
            // storage.cookieStorage.set("user", data.user);
            // storage.cookieStorage.set("__session", data?.token);

            // setLoggedInUserDetails(data);
            toast.success("Profile Updates Successfully");
            // router.push("/dashboard");
          },
          onError: (error) => {
            // toast.error(error.message);
            console.log(error, "This is error");
          },
        }
      );
      // {
      //   mutation.isSuccess(console.log("active"));
      // }
    } catch (error) {
      // console.error("Error adding data:", error.message);
      // console.log(error.error);
    }
  };
  return (
    <div className="flex gap-5 flex-col lg:flex-row  justify-evenly  p-4">
      <div className="flex flex-col items-center  space-y-5 ">
        <div className="h-[355px] w-full rounded-xl shadow-xl flex items-center justify-center flex-col space-y-5 border-2">
          <div className="rounded-full h-[220px] w-[220px] flex items-center justify-center flex-col border-2">
            Hello Image
          </div>
          <Buttonwithoutbg Btntext={"Get Started"} className={""} />
        </div>
        <div className="flex flex-col items-start justify-start w-full p-5 space-y-5 shadow-xl rounded-xl border-2">
          <p className="  text-xl font-medium mt-[2rem] text-start">
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
        <div className="flex flex-col items-start justify-start w-full p-4 space-y-5 shadow-xl rounded-xl border-2">
          <p className="  text-xl font-medium mt-[2rem] text-start">
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
        <div className="flex flex-col items-start justify-start w-full p-4 space-y-5 shadow-xl rounded-xl border-2">
          <p className="  text-xl font-medium mt-[2rem] text-start">
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-start justify-start space-y-5">
          <div className="flex flex-col items-start justify-start w-full lg:w-[534px] p-5 space-y-5 shadow-xl rounded-xl border-2">
            <p className="  text-xl font-medium mt-[2rem] text-start">
              Notification Preferences
            </p>
            <div className="flex items-start flex-col lg:flex-row justify-between w-full p-4 space-y-3 lg:space-y-0 lg:space-x-3 border-b-2">
              <div>
                <p>First Name</p>
                <TextInput
                  name="first_name"
                  register={register}
                  error={errors.first_name}
                  type="text"
                  // value=""
                  placeholder="First Name"
                />
              </div>
              <div>
                <p>Last Name</p>
                <TextInput
                  name="last_name"
                  register={register}
                  error={errors.last_name}
                  type="text"
                  // value=""
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="w-full p-4 border-b-2 ">
              <p>Email Address</p>
              <TextInput
                name="email"
                register={register}
                error={errors.email}
                type="email"
                value={user?.email}
                disabled
                // placeholder="email"
              />
            </div>
            <input
              type="hidden"
              name="id"
              id="id"
              {...register("id")}
              value={user?.id}
            />
            <div className="w-full p-4 border-b-2 ">
              <p>Phone Number</p>
              <TextInput
                name="phone"
                register={register}
                error={errors.phone}
                type="number"
                // value=""
                placeholder="Phone Number"
                // valueAsNumber
              />
            </div>
            <div className="w-full p-4 border-b-2 ">
              <p>Block Path</p>
              <TextInput
                name="block_path"
                register={register}
                error={errors.block_path}
                type="text"
                // value=""
                placeholder="Block Path"
              />
            </div>
            <div className="w-full p-4 border-b-2 ">
              <p>Block Level</p>
              <p>{user?.learners_level}</p>
            </div>
            <div className="flex items-center justify-center w-full p-4 border-b-2 ">
              <Buttonwithoutbg
                Btntext={"Edit Contact Information"}
                className={" "}
                disabled={!isDirty || isPending}
                loading={isPending}
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full p-5 space-y-5 shadow-xl rounded-xl border-2">
            <p className="  text-xl font-medium mt-[2rem] text-start">
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
          <div className="flex flex-col items-start justify-start w-full p-5 space-y-5 shadow-xl rounded-xl border-2">
            <p className="  text-xl font-medium mt-[2rem] text-start">
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
      </form>
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
