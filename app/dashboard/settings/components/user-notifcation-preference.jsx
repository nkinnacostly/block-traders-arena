import { Controller, useForm } from "react-hook-form";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { notificationSchema } from "@/src/schemas/settings";
import { zodResolver } from "@hookform/resolvers/zod";

function UserNotificationPreference() {
  const { control, handleSubmit, getValues } = useForm({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      notification_email: 0,
      notification_sms: 0,
      notification_push: 0,
    },
  });
  const values = getValues();
  console.log(values);
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="flex flex-col items-start justify-start w-full p-5 space-y-5 shadow-xl rounded-xl border-2">
        <p className="  text-xl font-medium mt-[2rem] text-start">
          Notification Preferences
        </p>
        <div className="flex items-center justify-between w-full p-4 space-x-3 border-b-2">
          <Label htmlFor="email">Email Notification</Label>
          <Controller
            control={control}
            name="notification_email"
            render={({ field: { onChange, value, ...others } }) => {
              return (
                <Switch
                  {...others}
                  name="notification_email"
                  onCheckedChange={(e) => onChange(e ? 1 : 0)}
                  checked={value === 1 ? true : false}
                />
              );
            }}
          />
          {/* <Switch id="email" /> */}
        </div>
        <div className="flex items-center justify-between w-full p-4 space-x-3 border-b-2">
          <Label htmlFor="push">Push Notification</Label>
          <Controller
            control={control}
            name="notification_push"
            render={({ field: { onChange, value, ...others } }) => {
              return (
                <Switch
                  {...others}
                  name="notification_push"
                  onCheckedChange={(e) => onChange(e ? 1 : 0)}
                  checked={value === 1 ? true : false}
                />
              );
            }}
          />
        </div>
        <div className="flex items-center justify-between w-full p-4 space-x-3 border-b-2">
          <Label htmlFor="sms">SMS Notification</Label>
          <Controller
            control={control}
            name="notification_sms"
            render={({ field: { onChange, value, ...others } }) => {
              return (
                <Switch
                  {...others}
                  name="notification_sms"
                  onCheckedChange={(e) => onChange(e ? 1 : 0)}
                  checked={value === 1 ? true : false}
                />
              );
            }}
          />
          {/* <ToggleSwitch /> */}
        </div>
      </div>
    </form>
  );
}
export default UserNotificationPreference;
