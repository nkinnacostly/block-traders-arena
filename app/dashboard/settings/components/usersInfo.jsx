"use client";

import React, { useEffect } from "react";

import Buttonwithoutbg from "@/src/components/ui/button-without-bg";
import TextInput from "@/src/components/ui/input/textInput";
import { settingSchema } from "@/src/schemas/settings";
import { toast } from "sonner";
import useApiRequest from "@/src/hooks/useCustonApiQuery";
import { useForm } from "react-hook-form";
import useGetUserInfo from "@/src/hooks/useGetUserInfo";
import { useQueryClient } from "@tanstack/react-query";
import { useUserStore } from "@/src/store/store";
import { zodResolver } from "@hookform/resolvers/zod";

export default function UsersInfo() {
  const { loggedInUserDetails } = useUserStore();
  const { useMutationRequest } = useApiRequest();
  const { mutateAsync, isPending } = useMutationRequest();
  const { error } = useGetUserInfo();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm({
    resolver: zodResolver(settingSchema),
    defaultValues: {
      id: loggedInUserDetails?.id,
      email: loggedInUserDetails?.email,
    },
  });

  useEffect(() => {
    if (loggedInUserDetails) {
      reset({
        first_name: loggedInUserDetails.first_name,
        last_name: loggedInUserDetails.last_name,
        phone: loggedInUserDetails.phone,
        block_path: loggedInUserDetails.block_path,
        email: loggedInUserDetails?.email,
        id: loggedInUserDetails?.id,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUserDetails]);

  const onSubmit = async (userData) => {
    try {
      await mutateAsync(
        {
          method: "POST",
          url: "/update_name",
          data: userData,
        },
        {
          onSuccess: () => {
            queryClient.refetchQueries({
              queryKey: ["users-info"],
            });
            toast.success("Profile Updates Successfully");
          },
          onError: (error) => {
            console.log(error, "This is error");
          },
        }
      );
    } catch (error) {
      // console.error("Error adding data:", error.message);
      toast.error(error);
    }
  };
  {
    error ? toast.error(error) : "";
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              type="text" // value=""
              defaultValue={loggedInUserDetails?.first_name}
              placeholder="First Name"
            />
          </div>
          <div>
            <p>Last Name</p>
            <TextInput
              name="last_name"
              register={register}
              error={errors.last_name}
              type="text" // value=""
              placeholder="Last Name"
              defaultValue={loggedInUserDetails?.last_name}
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
            value={loggedInUserDetails?.email}
            disabled // placeholder="email"
          />
        </div>
        <input
          type="hidden"
          name="id"
          id="id"
          {...register("id")}
          value={loggedInUserDetails?.id}
        />
        <div className="w-full p-4 border-b-2 ">
          <p>Phone Number</p>
          <TextInput
            name="phone"
            register={register}
            error={errors.phone}
            type="number" // value=""
            placeholder="Phone Number" // valueAsNumber
            defaultValue={loggedInUserDetails?.phone}
          />
        </div>
        <div className="w-full p-4 border-b-2 ">
          <p>Block Path</p>
          <TextInput
            name="block_path"
            register={register}
            error={errors.block_path}
            type="text" // value=""
            placeholder="Block Path"
            defaultValue={loggedInUserDetails?.block_path}
          />
        </div>
        <div className="w-full p-4 border-b-2 ">
          <p>Block Level</p>
          <p>{loggedInUserDetails?.learners_level}</p>
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
    </form>
  );
}

// function ToggleSwitch() {
//   const [isOn, setIsOn] = useState(false);

//   const toggle = () => {
//     setIsOn(!isOn);
//   };

//   return (
//     <button
//       onClick={toggle}
//       className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${
//         isOn ? "bg-green-400 justify-end" : ""
//       }`}
//     >
//       <span className="block w-5 h-5 duration-300 ease-in-out transform bg-white rounded-full shadow-md"></span>
//     </button>
//   );
// }
