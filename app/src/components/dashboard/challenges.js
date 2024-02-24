import React from "react";
import Buttonwithbg from "../ui/button-with-bg";
import Image from "next/image";

function DashboardChallenges() {
  return (
    <>
      <div className="w-full bg-black shadow-lg text-white flex items-center justify-center rounded-xl h-[291px]">
        <div className="w-[65%] p-4">
          <h5 className="text-[24px]  font-[500]">
            Earn badges while learning or trading
          </h5>
          <p className="mb-4">
            Explore the potential challenges of implementing trade knowledge in
            trade market. Discover your strengths, test out all levels and earn
            badges and get rewards. Get rewards with unique achievements as you
            engage in challenge activities.
          </p>
          <Buttonwithbg
            btnText={"Get Challenged"}
            className={"w-[167px] mb-4"}
          />
        </div>
        <div className="w-[35%] h-full">
          <Image
            src={"/assets/img/png/rect-img.png"}
            alt=""
            height={200}
            width={600}
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
}

export default DashboardChallenges;
