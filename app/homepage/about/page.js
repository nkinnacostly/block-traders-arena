import React from "react";
import Card from "@/app/src/components/cards/card";
import NumbersCard from "@/app/src/components/cards/numbersCard";
import Topheader from "@/app/src/components/screens/top-header/top-header";
import Image from "next/image";
import Textwithcolor from "@/app/src/components/ui/text-with-color";
import Envelop from "@/public/assets/img/svg/Envelope.svg";
import Telephone from "@/public/assets/img/svg/Telephone.svg";
import Address from "@/public/assets/img/svg/address.svg";
import Send from "@/public/assets/img/svg/send.svg";
import Buttonwithbg from "@/app/src/components/ui/button-with-bg";
import Buttonwithoutbg from "@/app/src/components/ui/button-without-bg";
import Footercontact from "@/app/src/components/ui/footer-contact";
const data = [
  {
    icon: "/assets/img/svg/education.svg",
    head: "Education",
    info: "We offer instruction for novice and experienced traders in a range of forms to help you get started or enhance your trading abilities.",
  },
  {
    icon: "/assets/img/svg/trade.svg",
    head: "Trade",
    info: "We offer free funding to our traders eliminating prop firm challenge failure",
  },
  {
    icon: "/assets/img/svg/human.svg",
    head: "Trade needs",
    info: "We give you funded accounts according to your trading level and expertise in the market ",
  },
  {
    icon: "/assets/img/svg/platform.svg",
    head: "Platform",
    info: "We offer the platform to track all your trading progress and help you be a better trader",
  },
];
function AboutPage() {
  return (
    <>
      <Topheader
        backgroundImage={"/assets/img/png/about.png"}
        colouredText={"Years"}
        otherText={"trusted trading and education"}
        check1={"Get educated on better trading"}
        check2={"Take on the market with monitored funding "}
        check3={"Your rollover made easier"}
        className={"relative"}
      />
      <div
        className="w-full px-[5rem] pt-[2rem] h-[800px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/img/png/ab-bg.png')` }}
      >
        <div className=" h-[820px] overflow-y-scroll 2xl:text-center p-6 bg-black rounded-[20px] flex items-start justify-center flex-col absolute -bottom-[46rem] left-[2rem] right-[2rem] lg:-bottom-[45rem] 2xl:right-[13rem] lg:left-[6rem] lg:w-[80%] lg:px-[2rem] xl:right-[7.5rem]">
          <div className="w-full h-full">
            <div className="">
              <span className="text-white text-[40px] font-semibold">
                About{" "}
              </span>
              <span className="text-amber-400 text-[40px] font-semibold">
                Block Traders Academy
              </span>
            </div>
            <p className="text-xl font-normal text-white text-opacity-90 lg:text-start 2xl:text-center">
              Block Traders Academy was created because we believed that trading
              was too interesting to be reserved for a select few.
              <br />
              <br />
              As traders ourselves, we were able to see how the developing web
              may present opportunities
              <br />
              to anyone willing to take a small amount of risk and invest the
              time to learn. We established
              <br />
              three guidelines to direct our goal and help the globe seize
              opportunity.
              <br />
              <br />
              Anyone who choose to trade with us would be able to do so with
              complete confidence . We committed to being open and truthful.
              Hence, there were no stealth fees and no trader-specific
              statistics.
              <br />
              <br />
              Access to knowledge and education regarding success in the Forex
              market shouldn’t be hidden anymore, like Warren Buffetts, to
              maximize
              <br />
              benefits.
              <br />
              Our commitment is to reduce trading costs and provide
              collaborative services, helping clients
              <br />
              become profitable traders.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url('/assets/img/png/ab-bg.png')` }}
      >
        <p className="text-2xl  text-black lg:text-[40px] font-semibold  w-full px-[2rem] lg:px-[5rem] py-[3rem]">
          Block Traders In Numbers
        </p>
        <div className="w-full bg-black lg:h-[270px] flex-col lg:flex-row flex items-center px-[2rem] justify-between xl:px-[7rem] space-y-10 lg:space-y-0 py-5 lg:py-0">
          <div className="flex flex-col items-center justify-center">
            <div>
              <span className="text-5xl font-bold text-amber-400 ">200</span>
              <span className="text-5xl font-semibold text-white ">+</span>
            </div>
            <p className="text-base font-normal text-center text-white capitalize">
              Around the world, more than 200 <br /> people have chosen to learn
              with Block
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <span className="text-5xl font-bold text-amber-400 ">300</span>
              <span className="text-5xl font-semibold text-white ">+</span>
            </div>
            <p className="text-base font-normal text-center text-white capitalize">
              Block traders has been opted for <br /> by more than 200 persons
              globally
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <span className="text-5xl font-bold text-amber-400 ">100</span>
              <span className="text-5xl font-semibold text-white ">+</span>
            </div>
            <p className="text-base font-normal text-center text-white capitalize">
              Block Traders has been chosen to <br /> work with more than 100
              trading <br />
              companies and investors worldwide
            </p>
          </div>
        </div>
        <div className="px-[2rem] w-full lg:px-[5rem] mt-8">
          <p className=" text-black text-[40px] font-semibold ">
            More Reasons to trade with Block Traders
          </p>
          <Card cardData={data} />
        </div>
        <div className="px-[2rem] flex-col lg:flex-row items-center justify-center flex lg:justify-between lg:px-[5rem] mt-[8rem] pb-[4rem]">
          <div className="">
            <span className="text-black text-[40px] font-bold ">Copy</span>
            <span className="text-black text-[40px] font-semibold "> </span>
            <span className="text-black text-[40px] font-semibold ">Block</span>
            <span className="text-black text-[40px] font-semibold "> </span>
            <span className="text-black text-[40px] font-bold ">Traders</span>
          </div>

          <div className="mt-5">
            <p className="text-xl font-medium text-black ">
              Get access to trades with grown equity and great spreads.
            </p>
            <div className=" h-16 px-[30px] py-5 bg-black rounded-lg justify-center items-center gap-2.5 inline-flex mt-5 cursor-pointer">
              <p className="text-base font-medium text-center text-white capitalize">
                Copy trades
              </p>
            </div>
          </div>
        </div>
        <div className="border-2 px-[2rem] w-full bg-black  xl:px-[5rem] py-[3rem]">
          <h5 className=" text-white text-xl lg:text-[32px] font-medium mb-5 text-center lg:text-start">
            How to open an account
          </h5>
          <div className="flex flex-col items-center space-y-10 lg:space-y-0 lg:flex-row justify-evenly">
            <NumbersCard number={"1"} text={"Create a Block Account"} />
            <NumbersCard number={"2"} text={"Start Learning"} />
            <NumbersCard number={"3"} text={"Get Funded"} />
            <NumbersCard number={"4"} text={"Start Trading"} />
          </div>
        </div>
        <div className="px-[2rem] flex flex-col justify-center lg:flex-row lg:justify-between xl:px-[5rem] py-[4rem] bg-amber-400 ">
          <div className="text-center lg:text-start">
            <span className=" text-2xl lg:text-[40px] font-bold text-white italic">
              Join
            </span>
            <span className="text-black text-2xl lg:text-[40px]  "> </span>
            <span className="text-black text-2xl lg:text-[40px]  ">Block</span>
            <span className="text-black text-2xl lg:text-[40px]  "> </span>
            <span className="text-black text-2xl lg:text-[40px]  ">
              Traders
            </span>
            <span className="text-black text-2xl lg:text-[40px] font-bold ">
              {" "}
            </span>
            <span className="text-white italic text-2xl lg:text-[40px] font-bold ">
              Today
            </span>
          </div>

          <div className="text-center lg:text-start">
            <p className="text-xl font-medium text-white ">
              Register for a Block trade account to get personalised course
              recommendations and offers
            </p>
            <div className=" h-16 px-[30px] py-5 bg-black rounded-lg justify-center items-center gap-2.5 inline-flex mt-5 cursor-pointer">
              <p className="text-base font-medium text-center text-white capitalize">
                Create Account
              </p>
            </div>
          </div>
        </div>
        <Footercontact />
      </div>
    </>
  );
}

export default AboutPage;
