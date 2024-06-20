import Account from "@/components/ui/account";
import Card from "@/components/cards/card";
import Checkwithtext from "@/components/ui/check-with-text";
import Exchange from "@/public/assets/img/png/exchange.png";
import Fund from "@/public/assets/img/svg/fund.svg";
import Grad from "@/public/assets/img/svg/grad.svg";
import Image from "next/image";
import Money from "@/public/assets/img/png/money.png";
import Progress from "@/public/assets/img/svg/progress.svg";
import Stocks from "@/public/assets/img/png/stocks.png";
import Tap from "@/public/assets/img/svg/tap.svg";
import { Testimonials } from "@/mock/data";
import TestimonialsCard from "@/components/ui/test-card";
import Textwithcolor from "@/components/ui/text-with-color";
import Think from "@/public/assets/img/svg/think.svg";
import Topheader from "@/src/components/screens/top-header/top-header";
import Video from "@/components/ui/video";
const data = [
  {
    icon: "/assets/img/svg/education.svg",
    head: "Education",
    info: "Knowledge is the Key to Unlocking Boundless Possibilities.",
  },
  {
    icon: "/assets/img/svg/trade.svg",
    head: "Trade",
    info: "Here Strategy Meets Opportunity, and Decisions Shape Destinies.",
  },
  {
    icon: "/assets/img/svg/opportunity.svg",
    head: "Opportunity",
    info: "Take advantage of market changes. Access a huge selection of FX, indices, commodities, and equity instruments.",
  },
  {
    icon: "/assets/img/svg/value.svg",
    head: "Value",
    info: "Save more of your earnings. Trade with ultra-tight spreads, and build a professional traders portfolio.",
  },
];
export default function Home() {
  return (
    <>
      <Topheader
        backgroundImage={"/assets/img/png/people.png"}
        colouredText={"Learning"}
        otherText={"on any other platform would be settling for less"}
        check1={"Get educated on better trading"}
        check2={"Take on the market with monitored funding "}
        check3={"Your rollover made easier"}
      />
      <div
        className="bg-no-repeat bg-cover "
        style={{ backgroundImage: `url('/assets/img/png/sec-bg.png')` }}
      >
        <div
          className="w-full mb-10 px-[2rem] lg:px-[5rem] pt-[2rem] "
          style={{ backgroundImage: `url('/assets/img/png/global.png')` }}
        >
          <p className=" text-black text-[25px] text-center lg:text-start lg:text-[40px] font-semibold underline">
            Your Global Trade Educator
          </p>
          <Card cardData={data} />
        </div>
        <div className="w-full lg:px-[5rem] ">
          <div className="bg-black lg:rounded-3xl pb-[4rem]">
            <div className="flex flex-col-reverse justify-between gap-4 lg:flex-row ">
              <div className="lg:pl-[4rem] pt-[4rem] w-full lg:w-1/2">
                <Textwithcolor
                  colouredText={"Welcome"}
                  otherText={"to Block"}
                />
                <Checkwithtext
                  Check={Grad}
                  check1={"Trade Education"}
                  info={
                    "Unlocking Knowledge Together: Knowledge is the Key to Unlocking Boundless Possibilities."
                  }
                />
                <Checkwithtext
                  Check={Fund}
                  check1={"Trade Markets"}
                  info={
                    "Markets Are Catalysts for information: Here Strategy Meets Opportunity, and Decisions Shape Destinies."
                  }
                />
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src={Stocks}
                  // height={100}
                  // width={100}
                  alt="stocks"
                  className="lg:w-full lg:h-full h-[30%]"
                />
              </div>
            </div>
            <div className="lg:px-[4rem] pt-[4rem]">
              <Textwithcolor colouredText={"Welcome"} otherText={"to Block"} />
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <Checkwithtext
                  Check={Fund}
                  check1={"Trade Funding"}
                  info={
                    "Empowering Opportunity Through Free Trade Funding: Where borders fade, economies thrive, and innovation knows no limits."
                  }
                />
                <Checkwithtext
                  Check={Progress}
                  check1={"Tracked Education"}
                  info={
                    "Guiding the Journey of Knowledge: With progress tracking, every step becomes a milestone towards a brighter, smarter future."
                  }
                />
                <Checkwithtext
                  Check={Tap}
                  check1={"Interactive Sessions"}
                  info={
                    "Unlocking Knowledge Together: In the realm of interactive sessions, learning transcends boundaries and curiosity sparks meaningful connections."
                  }
                />
                <Checkwithtext
                  Check={Think}
                  check1={"Challenges"}
                  info={
                    "Challenges Are Catalysts for Growth: In every hurdle lies an opportunity to redefine our limits and shape our success."
                  }
                />
              </div>
            </div>
            <div className="lg:grid grid-cols-2 gap-4 pt-[4rem] lg:px-[4rem] hidden ">
              <div className="">
                <div className="border-2">
                  <Image
                    src={Exchange}
                    // height={100}
                    // width={100}
                    alt="Exchange"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center">
                <Textwithcolor
                  colouredText={"Trading"}
                  // otherText={"to Block"}
                />
                <p className="text-base font-normal text-white text-opacity-90">
                  Trading is the act of purchasing and selling financial
                  instruments for profit, including stocks, bonds, currencies,
                  and commodities. Success also hinges on a trader`&apos;`s
                  capacity for sustained profitability.
                  <br />
                  <br />
                  Investors aim to benefit from buying or selling an asset at a
                  higher or cheaper price by predicting market price
                  fluctuations. A security can be purchased going long in the
                  hopes that its value will increase and you will benefit, or it
                  can be sold going short in the expectation that its value will
                  decrease.
                </p>
              </div>
            </div>
            <div className="lg:grid grid-cols-2 gap-4 pt-[4rem] lg:px-[4rem] hidden">
              <div className="flex flex-col items-end justify-center">
                <Textwithcolor
                  colouredText={"Forex Trading"}
                  // otherText={"to Block"}
                />
                <p className="text-base font-normal text-right text-white text-opacity-90">
                  The term Forex (sometimes spelt FX) refers to the
                  international market for buying and selling foreign
                  currencies.
                  <br />
                  <br />
                  Every second, currency prices fluctuate, providing investors
                  with countless opportunities to make deals. And investors aim
                  to increase their profits by correctly anticipating the price
                  changes of several pairs.
                </p>
              </div>
              <div className="">
                <div className="border-2">
                  <Image
                    src={Money}
                    // height={100}
                    // width={100}
                    alt="Exchange"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div>
              <Video />
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-no-repeat bg-cover px-[2rem] lgpx-[4rem] pt-[4rem] pb-[4rem]"
        style={{ backgroundImage: `url('/assets/img/png/testimonials.png')` }}
      >
        <p className=" text-black text-[40px] font-semibold leading-[72px] mb-[4rem]">
          Testimonials
        </p>
        <div className="flex flex-col items-center justify-evenly lg:flex-row space-y-14 lg:space-y-0">
          {Testimonials.map((testimonial, i) => (
            <TestimonialsCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <div className="hidden lg:block bg-white">
        <div className="w-full h-[312px] relative">
          <div className="w-[187px] h-16 px-[30px] py-5 left-[641px] top-[189px] absolute bg-black rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="text-base font-medium text-center text-white capitalize">
              Copy trades
            </div>
          </div>
          <div className=" left-[636px] top-[122px] absolute text-black text-xl font-medium ">
            Get access to trades with grown equity and great spreads.
          </div>
          <div className="w-[515px] left-[86px] top-[115px] absolute text-center">
            <span className="text-black text-[40px] font-bold ">Copy</span>
            <span className="text-black text-[40px] font-semibold "> </span>
            <span className="text-black text-[40px] font-semibold ">Block</span>
            <span className="text-black text-[40px] font-semibold "> </span>
            <span className="text-black text-[40px] font-bold ">Traders</span>
          </div>
        </div>
      </div>
      <Account />
      <div className="hidden  lg:block">
        <div className="w-full h-[312px] relative bg-[#D4AF37]">
          <div className="w-[187px] mt-8 h-16 px-[30px] py-5 left-[641px] top-[189px] absolute bg-black rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="text-base font-medium text-center text-white capitalize">
              Create Account
            </div>
          </div>
          <div className=" left-[636px] top-[122px] absolute text-white text-xl font-medium ">
            Register for a Block trade account to get personalised course
            recommendations and offers
          </div>
          <div className="w-[515px] left-[86px] top-[115px] absolute text-center">
            <span className="text-white text-[40px] font-bold ">Join</span>
            <span className="text-black text-[40px] font-semibold "> </span>
            <span className="text-black text-[40px] font-semibold ">Block</span>
            <span className="text-black text-[40px] font-semibold ">
              Traders{" "}
            </span>
            <span className="text-white text-[40px] font-bold ">Today</span>
          </div>
        </div>
      </div>
    </>
  );
}
