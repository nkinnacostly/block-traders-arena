"use client";

import { Controller, useForm } from "react-hook-form";
import React, { useEffect } from "react";
import Image from "next/image";
import ImageUploading from "react-images-uploading";
import { toast } from "sonner";
import useApiRequest from "@/hooks/useCustonApiQuery";
import { useQueryClient } from "@tanstack/react-query";
import { useUserStore } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { ImageSchema } from "@/schemas/settings";

type ImageFormData = z.infer<typeof ImageSchema>;

export default function UserProfilePic() {
  const { loggedInUserDetails } = useUserStore();
  const maxNumber = 1;
  const { useMutationRequest } = useApiRequest();
  const { mutateAsync, isPending } = useMutationRequest();
  const queryClient = useQueryClient();

  const { control, handleSubmit, setValue, register } = useForm<ImageFormData>({
    resolver: zodResolver(ImageSchema),
    defaultValues: {
      image: "",
      id: Number(loggedInUserDetails?.id) || 0,
    },
  });

  useEffect(() => {
    if (loggedInUserDetails) {
      setValue("id", Number(loggedInUserDetails?.id) || 0);
      setValue("image", (loggedInUserDetails as any).image_url || "");
    }
  }, [loggedInUserDetails, setValue]);

  const onSubmit = async (userData: ImageFormData) => {
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
    } catch (error: any) {
      toast.error(error);
    }
  };

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
                  value={value ? [{ data_url: value }] : []}
                  onChange={(e) => onChange(e ? e[0]["data_url"] : "")}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                  {...others}
                >
                  {({ isDragging, dragProps, onImageUpload }) => (
                    <>
                      <div className="rounded-full h-[220px] w-[220px] flex items-center justify-center flex-col border-2 overflow-hidden">
                        {value ? (
                          <div className="w-full h-full relative">
                            <Image
                              src={"/"}
                              alt="profile-image"
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
                    </>
                  )}
                </ImageUploading>
              </div>
            </>
          )}
        />
        <input
          type="hidden"
          {...register("id")}
          value={Number(loggedInUserDetails?.id) || 0}
        />
        <Button disabled={isPending}>Upload</Button>
      </div>
    </form>
  );
}
