import Address from "@/public/assets/img/svg/address.svg";
import { Button } from "./button";
// import Buttonwithbg from "./button-with-bg";
import Envelop from "@/public/assets/img/svg/Envelope.svg";
import Image from "next/image";
import React from "react";
import Telephone from "@/public/assets/img/svg/Telephone.svg";
import Textwithcolor from "./text-with-color";
// import Send from "@/public/assets/img/svg/send.svg";
function Footercontact() {
  return (
    <div>
      <div
        className="px-[2rem] w-full xl:px-[5rem] grid grid-cols-1 lg:grid-cols-2 gap-10 py-[3rem] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/img/png/contact-bg.png')` }}
      >
        <div>
          <Textwithcolor
            colouredText={"Learning"}
            otherText={
              "on any other platform would be settling for less, Let’s get in touch"
            }
          />
          <div className="flex flex-col space-y-10 ">
            <div className="flex items-center justify-start pl-4 mt-10 space-x-4">
              <Image src={Envelop} height={20} width={20} alt="envelop" />
              <p className="text-xl font-medium text-white ">
                blocktrader@gmail.com
              </p>
            </div>
            <div className="flex items-center justify-start space-x-4 border-2 border-amber-400 rounded-2xl h-[78px] pl-4">
              <Image src={Telephone} height={20} width={20} alt="envelop" />
              <p className="text-xl font-medium text-white ">
                +234-000-000-000
              </p>
            </div>
            <div className="flex items-center justify-start pl-4 space-x-4">
              <Image src={Address} height={20} width={20} alt="envelop" />
              <p className="text-xl font-medium text-white ">
                22 Obayan street, Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="  bg-white rounded-lg p-[2rem]">
            <p className="text-xl font-medium text-amber-400 ">
              I’m interested in...
            </p>
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-8 mt-4">
              {/* <Buttonwithbg btnText={"Trading"} className={"h-[62px]"} /> */}
              {/* <Button variant="outline" size="lg">
                Sign In
              </Button> */}
              <Button size="lg">Trading</Button>
              <Button
                size="lg"
                variant="outline"
                className="border-stone-900 border-opacity-60 text-stone-900"
              >
                Learning
              </Button>
              {/* <div className=" h-[62px] p-4 rounded-lg border-2 border-stone-900 border-opacity-60 text-stone-900 justify-start items-start gap-2.5 inline-flex">
                <p className="text-xl font-medium text-center grow shrink basis-0 text-stone-900 text-opacity-60 ">
                  Learning
                </p>
              </div> */}
            </div>
            <Button
              size="lg"
              variant="outline"
              className="border-stone-900 border-opacity-60 text-stone-900 mt-4"
            >
              Other
            </Button>
            <div>
              <input
                className="w-full h-[50px]  border-b bg-white border-stone-900 focus:border-amber-400 outline-none mb-[4rem] mt-[3rem] px-3"
                placeholder="Your Email"
              />
              <input
                className="w-full h-[50px] border-b bg-white border-stone-900 focus:border-amber-400 outline-none mb-[4rem] px-3"
                placeholder="Your Email"
              />
              <input
                className="w-full h-[50px] border-b bg-white border-stone-900 focus:border-amber-400 outline-none px-3"
                placeholder="Your Email"
              />
            </div>
            <div>
              <div className=" h-[78px] lg:px-16 py-6 bg-amber-400 rounded-2xl flex items-center justify-center space-x-5 lg:w-[315px] cursor-pointer mt-[5rem]">
                <Image
                  src={"/assets/img/svg/send.svg"}
                  height={20}
                  width={20}
                  alt="send"
                />
                <p className="text-lg font-medium text-center text-white ">
                  Send Message
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footercontact;
