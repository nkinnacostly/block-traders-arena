"use client";

import { Label } from "@/components/ui/label";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { deleteSessionStorageItem } from "@/utils/storage";
import { useRouter } from "next/navigation";
function UserAccountStatus() {
  const router = useRouter();
  const logout = () => {
    router.push("/login");
    Cookies.remove("__session");
    deleteSessionStorageItem("__session");
    deleteSessionStorageItem("user");
  };
  return (
    <>
      <div className="flex flex-col items-start justify-start w-full p-5 space-y-5 shadow-xl rounded-xl border-2">
        <p className="  text-xl font-medium mt-[2rem] text-start">Account</p>
        <div className="flex items-center justify-between w-full p-4 space-x-3 border-b-2">
          {/* <ToggleSwitch /> */}
          <Label htmlFor="airplane-mode">Deactivate Account</Label>
          <Switch id="airplane-mode" />
        </div>
        <div className="flex items-center justify-between w-full p-4 space-x-3 border-b-2">
          <Label htmlFor="airplane-mode">Delete Account</Label>
          <Switch id="airplane-mode" />
        </div>
        <div className="flex items-end justify-end w-full p-4">
          <Button onClick={() => logout()}>Log Out</Button>
          {/* <ToggleSwitch /> */}
        </div>
      </div>
    </>
  );
}

export default UserAccountStatus;
