import Buttonwithoutbg from "@/src/components/ui/button-without-bg";
import React from "react";

export default function UserProfilePic() {
  return (
    <div className="h-[355px] w-full rounded-xl shadow-xl flex items-center justify-center flex-col space-y-5 border-2">
      <div className="rounded-full h-[220px] w-[220px] flex items-center justify-center flex-col border-2">
        Hello Image
      </div>
      <Buttonwithoutbg Btntext={"Get Started"} className={""} />
    </div>
  );
}
