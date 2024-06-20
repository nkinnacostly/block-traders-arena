import { Controller, useForm } from "react-hook-form";
import React, { useEffect } from "react";

import Buttonwithoutbg from "@/components/ui/button-without-bg";
import Image from "next/image";
import { ImageSchema } from "@/schemas/settings";
import ImageUploading from "react-images-uploading";
import { toast } from "sonner";
import useApiRequest from "@/hooks/useCustonApiQuery";
import { useQueryClient } from "@tanstack/react-query";
import { useUserStore } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";

export default function UserProfilePic() {
  const { loggedInUserDetails } = useUserStore();

  const maxNumber = 1;
  const { useMutationRequest } = useApiRequest();
  const { mutateAsync, isPending } = useMutationRequest();
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    reset,
    register,
    // formState: { errors },
  } = useForm({
    resolver: zodResolver(ImageSchema),
    defaultValues: {
      image: "",
      id: loggedInUserDetails?.id,
    },
  });

  useEffect(() => {
    if (loggedInUserDetails) {
      reset({
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
          url: "/upload_image",
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
  // console.log("errors:", errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="h-[355px] w-full rounded-xl shadow-xl flex items-center justify-center flex-col space-y-5 border-2">
        <Controller
          name="image"
          control={control}
          render={({ field: { onChange, value, ...others } }) => (
            <>
              <div>
                <ImageUploading
                  value={value}
                  onChange={(e) => onChange(e ? e[0]["data_url"] : "")}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                  {...others}
                >
                  {({
                    // imageList,
                    onImageUpload,
                    // onImageRemoveAll,
                    // onImageUpdate,
                    // onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    <>
                      <div className="rounded-full h-[220px] w-[220px] flex items-center justify-center flex-col border-2 overflow-hidden">
                        {value ? (
                          <div className="w-full h-full relative">
                            <Image
                              src={value}
                              alt="profile-image"
                              //   width={100}
                              // objectFit=""
                              //   height={100}
                              fill
                              objectFit="cover"
                              className="w-full h-full rounded-full"
                            />
                          </div>
                        ) : (
                          <div
                            style={isDragging ? { color: "red" } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                            className="w-full h-full flex items-center justify-center cursor-pointer"
                          >
                            <p>Upload Image</p>
                          </div>
                        )}
                      </div>
                      &nbsp;
                      {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                    </>
                  )}
                </ImageUploading>
              </div>
            </>
          )}
        />
        <input
          type="hidden"
          name="id"
          id="id"
          {...register("id")}
          value={loggedInUserDetails?.id}
        />
        <Buttonwithoutbg
          Btntext={"Upload"}
          className={""}
          loading={isPending}
          disabled={isPending}
        />
      </div>
    </form>
  );
}
