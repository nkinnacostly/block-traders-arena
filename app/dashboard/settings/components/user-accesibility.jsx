"use client";

import { Label } from "@/components/ui/label";
import React from "react";
import { Switch } from "@/components/ui/switch";

function UserAccesibility() {
  return (
    <>
      <div className="flex flex-col items-start justify-start w-full p-5 space-y-5 shadow-xl rounded-xl border-2">
        <p className="  text-xl font-medium mt-[2rem] text-start">
          Accesibility
        </p>
        <div className="flex items-center justify-between w-full p-4 space-x-3 border-b-2">
          {/* <ToggleSwitch /> */}
          <Label htmlFor="airplane-mode">High Contrast Mode</Label>
          <Switch id="airplane-mode" />
        </div>
        <div className="flex items-center justify-between w-full p-4 space-x-3 border-b-2">
          <Label htmlFor="airplane-mode">Screen Reader Compatibility </Label>
          <Switch id="airplane-mode" />
        </div>
      </div>
    </>
  );
}

export default UserAccesibility;
