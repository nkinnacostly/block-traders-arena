"use client";

import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Cookies from "js-cookie";
import { deleteSessionStorageItem } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/store";
import useApiRequest from "@/hooks/useCustonApiQuery";
import { toast } from "sonner";

function UserAccountStatus() {
  const { loggedInUserDetails } = useUserStore();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { useMutationRequest } = useApiRequest();
  const { mutateAsync, isPending } = useMutationRequest();
  const router = useRouter();

  const logout = () => {
    router.push("/login");
    Cookies.remove("__session");
    deleteSessionStorageItem({ key: "__session" });
    deleteSessionStorageItem({ key: "user" });
  };

  const handleDeleteAccount = async () => {
    const response = await mutateAsync({
      url: `/deleteUser/?id=${loggedInUserDetails?.id}&account_status=deleted`,
      method: "DELETE",
    });
    if (response) {
      toast.success("Account deleted successfully");
      logout();
    }
    if (response.error) {
      toast.error(response.error);
    }
  };

  const handleSwitchClick = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setShowDeleteModal(false);
    handleDeleteAccount();
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className="flex flex-col items-start justify-start w-full p-5 space-y-5 shadow-xl rounded-xl border-2">
        <p className="  text-xl font-medium mt-[2rem] text-start">Account</p>

        <div className="flex items-center justify-between w-full p-4 space-x-3 border-b-2">
          <Label htmlFor="airplane-mode">Delete Account</Label>
          <Switch id="airplane-mode" onClick={handleSwitchClick} />
        </div>
        <div className="flex items-end justify-end w-full p-4">
          <Button onClick={() => logout()}>Log Out</Button>
          {/* <ToggleSwitch /> */}
        </div>
      </div>

      {/* Confirmation Modal */}
      <Dialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
        <DialogContent className="sm:max-w-[425px] p-4">
          <DialogHeader>
            <DialogTitle className="text-red-600">Delete Account</DialogTitle>
            <DialogDescription className="">
              Are you sure you want to delete your account? This action cannot
              be undone and will permanently remove all your data, including
              courses, progress, and account information.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleCancelDelete}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirmDelete}
              disabled={isPending}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white"
            >
              {isPending ? "Deleting..." : "Delete Account"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default UserAccountStatus;
