"use client";
import Account from "@/components/ui/account";
import { Button } from "@/components/ui/button";
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
import Topheader from "@/components/screens/top-header/top-header";
import Video from "@/components/ui/video";
import { motion, HTMLMotionProps } from "framer-motion";
import { HTMLAttributes, FC } from "react";

type MotionDivProps = HTMLMotionProps<"div"> & HTMLAttributes<HTMLDivElement>;
type MotionPProps = HTMLMotionProps<"p"> & HTMLAttributes<HTMLParagraphElement>;
type MotionH2Props = HTMLMotionProps<"h2"> & HTMLAttributes<HTMLHeadingElement>;

interface CardData {
  icon: string;
  head: string;
  info: string;
}

const data: CardData[] = [
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

const MotionDiv = motion.div as FC<MotionDivProps>;
const MotionP = motion.p as FC<MotionPProps>;
const MotionH2 = motion.h2 as FC<MotionH2Props>;

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Topheader
        backgroundImage={"/assets/img/png/people.png"}
        colouredText={"Learning"}
        otherText={"on any other platform would be settling for less"}
        check1={"Get educated on better trading"}
        check2={"Take on the market with monitored funding "}
        check3={"Your rollover made easier"}
        className="relative z-10"
      />

      {/* @ts-ignore */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ backgroundImage: `url('/assets/img/png/sec-bg.png')` }}
        className="bg-no-repeat bg-cover relative"
      >
        <div className="w-full mb-10 px-4 lg:px-20 pt-8 relative z-10">
          <MotionP
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-black text-2xl lg:text-4xl font-semibold text-center lg:text-left mb-8"
          >
            Your Global Trade Educator
          </MotionP>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((item, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Card cardData={[item]} />
              </MotionDiv>
            ))}
          </div>
        </div>

        <div className="w-full px-4 lg:px-20">
          <div className="bg-black rounded-3xl p-8 lg:p-12">
            <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2 space-y-6">
                <Textwithcolor
                  colouredText={"Welcome"}
                  otherText={"to Block"}
                />
                <div className="space-y-4">
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
              </div>
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={Stocks}
                    alt="stocks"
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>

            <div className="mt-16 space-y-8">
              <Textwithcolor colouredText={"Welcome"} otherText={"to Block"} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    Check: Fund,
                    check1: "Trade Funding",
                    info: "Empowering Opportunity Through Free Trade Funding: Where borders fade, economies thrive, and innovation knows no limits.",
                  },
                  {
                    Check: Progress,
                    check1: "Tracked Education",
                    info: "Guiding the Journey of Knowledge: With progress tracking, every step becomes a milestone towards a brighter, smarter future.",
                  },
                  {
                    Check: Tap,
                    check1: "Interactive Sessions",
                    info: "Unlocking Knowledge Together: In the realm of interactive sessions, learning transcends boundaries and curiosity sparks meaningful connections.",
                  },
                  {
                    Check: Think,
                    check1: "Challenges",
                    info: "Challenges Are Catalysts for Growth: In every hurdle lies an opportunity to redefine our limits and shape our success.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Checkwithtext {...item} />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Textwithcolor colouredText={"Trading"} otherText={""} />
                <p className="text-white/90 text-lg leading-relaxed">
                  Trading is the act of purchasing and selling financial
                  instruments for profit, including stocks, bonds, currencies,
                  and commodities. Success also hinges on a trader&apos;s
                  capacity for sustained profitability.
                </p>
                <p className="text-white/90 text-lg leading-relaxed">
                  Investors aim to benefit from buying or selling an asset at a
                  higher or cheaper price by predicting market price
                  fluctuations. A security can be purchased going long in the
                  hopes that its value will increase and you will benefit, or it
                  can be sold going short in the expectation that its value will
                  decrease.
                </p>
              </div>
              <div className="relative">
                <Image
                  src={Exchange}
                  alt="Exchange"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative order-2 lg:order-1">
                <Image
                  src={Money}
                  alt="Money"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <Textwithcolor colouredText={"Forex Trading"} otherText={""} />
                <p className="text-white/90 text-lg leading-relaxed">
                  The term Forex (sometimes spelt FX) refers to the
                  international market for buying and selling foreign
                  currencies.
                </p>
                <p className="text-white/90 text-lg leading-relaxed">
                  Every second, currency prices fluctuate, providing investors
                  with countless opportunities to make deals. And investors aim
                  to increase their profits by correctly anticipating the price
                  changes of several pairs.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <Video />
            </div>
          </div>
        </div>
      </MotionDiv>

      <div className="py-16 px-4 lg:px-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <MotionH2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold text-center mb-12"
        >
          What Our Traders Say
        </MotionH2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Testimonials.map((testimonial, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <TestimonialsCard testimonial={testimonial} />
            </MotionDiv>
          ))}
        </div>
      </div>

      <div className="py-16 px-4 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4">
              Copy <span className="font-semibold">Block</span> Traders
            </h2>
            <p className="text-xl text-gray-600">
              Get access to trades with grown equity and great spreads.
            </p>
          </div>
          <Button className="bg-black text-white px-8 py-6 text-lg hover:bg-gray-800 transition-colors">
            Start Copy Trading
          </Button>
        </div>
      </div>

      <Account />

      <div className="py-16 px-4 lg:px-20 bg-[#D4AF37]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Block Traders Today
          </h2>
          <p className="text-xl text-white mb-8">
            Register for a Block trade account to get personalised course
            recommendations and offers
          </p>
          <Button className="bg-black text-white px-8 py-6 text-lg hover:bg-gray-800 transition-colors">
            Create Account
          </Button>
        </div>
      </div>

      {/* Mobile CTA Button */}
      <div className="fixed bottom-4 right-4 lg:hidden z-50">
        <Button className="bg-black text-white rounded-full p-4 shadow-lg hover:bg-gray-800 transition-colors">
          Start Trading
        </Button>
      </div>
    </main>
  );
}
