"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

function UserAccesibility() {
  return (
    <>
      <div className="flex flex-col items-start justify-start w-full p-5 space-y-5 shadow-xl rounded-xl border-2">
        <p className="text-xl font-medium mt-[2rem] text-start">Accesibility</p>
        <div className="flex items-center justify-between w-full p-4 space-x-3 border-b-2">
          {/* <ToggleSwitch /> */}
          <Label htmlFor="high-contrast">High Contrast Mode</Label>
          <Switch id="high-contrast" />
        </div>
        <div className="flex items-center justify-between w-full p-4 space-x-3 border-b-2">
          <Label htmlFor="screen-reader">Screen Reader Compatibility </Label>
          <Switch id="screen-reader" />
        </div>
      </div>
    </>
  );
}

export default UserAccesibility;
