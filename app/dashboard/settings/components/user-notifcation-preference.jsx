import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { notificationSchema } from "@/schemas/settings";
import { toast } from "sonner";
import useApiRequest from "@/hooks/useCustonApiQuery";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { useUserStore } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";

function UserNotificationPreference() {
  const { useMutationRequest } = useApiRequest(); // Destructure the custom hook
  const { loggedInUserDetails } = useUserStore();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutationRequest();
  const { getValues, watch, setValue } = useForm({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      notification_email: Boolean(0),
      notification_sms: Boolean(0),
      notification_push: Boolean(0),
      id: loggedInUserDetails?.id,
    },
  });
  const values = getValues();

  const onSubmit = async (userData) => {
    try {
      await mutateAsync(
        {
          method: "POST",
          url: "/select_notification_preference",
          data: userData,
        },
        {
          onSuccess: (data) => {
            console.log(data);
            toast.error(data.message);
            queryClient.refetchQueries({
              queryKey: ["users-info"],
            });
          },
          onError: (error) => {
            toast.error(error.message);
            console.log(error, "This is error");
          },
        }
      );
    } catch (error) {
      // console.error("Error adding data:", error.message);
    }
  };
  useEffect(() => {
    setValue(
      "notification_email",
      Boolean(Number(loggedInUserDetails.notification_email))
    );
    setValue(
      "notification_push",
      Boolean(Number(loggedInUserDetails.notification_push))
    );
    setValue(
      "notification_sms",
      Boolean(Number(loggedInUserDetails.notification_sms))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheckedChange = (name, value) => {
    setValue(name, value);
    if (name === "notification_email") {
      onSubmit({
        notification_email: Number(value),
        notification_push: Number(values.notification_push),
        notification_sms: Number(values.notification_sms),
        id: loggedInUserDetails?.id,
      });
    }
    if (name === "notification_push") {
      onSubmit({
        notification_email: Number(values.notification_email),
        notification_push: Number(value),
        notification_sms: Number(values.notification_sms),
        id: loggedInUserDetails?.id,
      });
    }
    if (name === "notification_sms") {
      onSubmit({
        notification_email: Number(values.notification_email),
        notification_push: Number(values.notification_push),
        notification_sms: Number(value),
        id: loggedInUserDetails?.id,
      });
    }
  };
  return (
    <div className="flex flex-col items-start justify-start w-full p-5 space-y-5 shadow-xl rounded-xl border-2">
      <p className="  text-xl font-medium mt-[2rem] text-start">
        Notification Preferences
      </p>
      <div className="flex items-center justify-between w-full p-4 space-x-3 border-b-2">
        <Label htmlFor="email">Email Notification</Label>
        <Switch
          name="notification_email"
          checked={watch("notification_email")}
          onCheckedChange={(value) =>
            handleCheckedChange("notification_email", value)
          }
        />
      </div>
      <div className="flex items-center justify-between w-full p-4 space-x-3 border-b-2">
        <Label htmlFor="push">Push Notification</Label>
        <Switch
          name="notification_push"
          checked={watch("notification_push")}
          onCheckedChange={(value) =>
            handleCheckedChange("notification_push", value)
          }
        />
      </div>
      <div className="flex items-center justify-between w-full p-4 space-x-3 border-b-2">
        <Label htmlFor="sms">SMS Notification</Label>
        <Switch
          name="notification_sms"
          checked={watch("notification_sms")}
          onCheckedChange={(value) =>
            handleCheckedChange("notification_sms", value)
          }
        />
      </div>
    </div>
  );
}
export default UserNotificationPreference;
