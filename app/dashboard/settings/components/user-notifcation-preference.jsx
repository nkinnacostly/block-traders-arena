import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

function UserNotificationPreference() {
  return (
    <div className="flex flex-col items-start justify-start w-full p-5 space-y-5 shadow-xl rounded-xl border-2">
      <p className="  text-xl font-medium mt-[2rem] text-start">
        Notification Preferences
      </p>
      <div className="flex items-center justify-between w-full p-4 space-x-3 border-b-2">
        <Label htmlFor="email">Email Notification</Label>
        <Switch id="email" />
      </div>
      <div className="flex items-center justify-between w-full p-4 space-x-3 border-b-2">
        <Label htmlFor="push">Push Notification</Label>
        <Switch id="push" />
      </div>
      <div className="flex items-center justify-between w-full p-4 space-x-3 border-b-2">
        <Label htmlFor="sms">SMS Notification</Label>
        <Switch id="sms" />
        {/* <ToggleSwitch /> */}
      </div>
    </div>
  );
}
export default UserNotificationPreference;
