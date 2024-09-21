import React from "react";
import Image from "next/image";

function Badges() {
  return (
    <div>
      <div className="border-2 rounded-xl flex items-center justify-center">
        <Image
          src={"/assets/img/svg/Warranty.svg"}
          height={150}
          width={150}
          alt="award"
        />
      </div>
    </div>
  );
}

export default Badges;
