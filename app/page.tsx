"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroScreen from "@/components/intro-screen";
import Image from "next/image";
import Sticker from "@/components/Sticker";
import HoverPopup from "@/components/HoverPopup";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!hasEntered && <IntroScreen onContinue={() => setHasEntered(true)} />}
      </AnimatePresence>

      {hasEntered && <MainContent />}
    </>
  );
}

export const MainContent = () => {
  return (
    <section className="min-h-screen bg-white mx-auto flex flex-col items-center w-full max-w-[1440px] pt-16 px-[43px]">
      <div className="relative flex flex-col items-center w-full min-h-[1024px]  h-full">
        <h1 className="text-[50px]/[100%] font-neuebit font-bold -tracking-[2%]">
          Saleena Tiwari
        </h1>
        <div className="flex items-center w-full pt-7 justify-between">
          <Image
            src="/assets/saleena1.png"
            alt="Saleena Tiwari"
            width={140}
            height={140}
            className=""
          />
          <Image
            src="/assets/globe.svg"
            alt="globe"
            width={140}
            height={140}
            className=""
          />
        </div>
        <div className="space-y-10 max-w-[656px] mt-[106px] flex flex-col gap-10 text-center items-center">
          <h1 className="text-[50px]/[100%] font-mondwest font-normal -tracking-[2%]">
            Für die süßeste Frau, die ich kenne.
          </h1>
          <p className="text-[35px]/[100%] font-neuebit font-bold z-[111] relative">
            “दूरीले हामीलाई फरक ठाउँमा राख्न सक्छ, तर तिमीलाई कहिल्यै मेरो
            मुटुबाट टाढा राख्न सक्दैन। यो पेज आज हामीलाई अलि नजिक ल्याउने मेरो
            सानो प्रयास हो।
          </p>
          <button className="bg-[#FF5379] text-[22px]/[100%] -tracking-[2%] font-neuebit text-white px-[10px] py-[5px] rounded-full font-bold hover:bg-pink-500 transition-colors inline-flex items-center gap-1 transform hover:scale-105 active:scale-95 duration-200 h-fit w-fit cursor-pointer">
            Meet Saleena
            <Image
              src="/assets/arrow-down.svg"
              alt="Arrow Down"
              width={12.75}
              height={9.92}
            />
          </button>
        </div>

        <Sticker
          src="/assets/mail.svg"
          className="top-1/4 left-4 md:left-1/5 w-12 h-12 md:w-[85px] md:h-[85px]"
          rotation={-15}
          delay={0.4}
          width={85}
          height={85}
        />

        {/* Center Right: Cupcake/Popcorn */}
        <Sticker
          src="/assets/popcorn.svg"
          className="top-[27%] right-6 md:right-[8%] w-[109px] h-[109px]"
          rotation={0}
          delay={0.5}
          width={109}
          height={109}
        />

        <Sticker
          src="/assets/atlanta.png"
          className="top-[51%] right-6 md:right-[21%] w-[157px] h-[90px]"
          rotation={0}
          delay={0.5}
          width={157}
          height={90}
        />

        <Sticker
          src="/assets/circle.svg"
          className="top-[65%] left-6 md:left-[13%] w-[92px] h-[92px]"
          rotation={0}
          delay={0.5}
          width={92}
          height={92}
        />

        <Sticker
          src="/assets/stand.svg"
          className="bottom-0 left-3 md:left-4 w-36 h-32"
          rotation={0}
          delay={0.6}
          width={144}
          height={133}
        />

        {/* Bottom Center: Headphones */}
        <Sticker
          src="/assets/headset.svg"
          className="bottom-16 left-1/2 -translate-x-1/2 w-[106px] h-[90px]"
          rotation={0}
          delay={0.7}
          width={106}
          height={90}
        />

        {/* Bottom Right: Heart/Love */}
        <Sticker
          src="/assets/love.svg"
          className="bottom-[3px] right-3 md:right-8 w-[146px] h-[146px]"
          rotation={20}
          delay={0.8}
          width={146}
          height={146}
        />

        <Sticker
          src="/assets/flower.svg"
          className="top-1/2 right-0 w-[146px] h-[146px]"
          rotation={0}
          delay={0.8}
          width={146}
          height={146}
        />
      </div>

      <div className="mt-[70px] relative  flex flex-col items-center">
        <span className="relative flex flex-col items-center">
          <h2 className="text-[50px] font-mondwest font-normal -tracking-[2%]">
            The girl behind the smile that makes my day better.
          </h2>
          <p className="text-[35px] font-bold font-neuebit max-w-[656px] text-center">
            She’s thoughtful, warm, brilliant and full of the kind of energy
            that makes people feel at home. <br />
            Getting to know her has been one of my favourite things.
          </p>
          <Image
            src="/assets/flower2.svg"
            alt="flowers"
            width={171}
            height={171}
            className=" absolute -right-0 bottom-0 my-auto"
          />
        </span>
        <Image
          src="/assets/saleena2.png"
          alt="Saleena Tiwari"
          width={1422}
          height={1896}
          className=" mt-10 rounded-[20.82px]"
        />

        <div className="flex flex-col items-center w-full  mt-[187px] ">
          <HoverPopup
            className="self-start"
            message="Rare picture of being observed in an enclosed - The subject (Saleena) is seen just being Saleena."
          >
              <Image
                src="/assets/saleena3.png"
                width={300}
                height={324}
                alt="saleena 3"
              />
          </HoverPopup>

          <HoverPopup
            className="self-end -top-[206px]"
            message="Saleena loves listening to music. I’ve never heard her sing though."
          >
            <div className="self-end  relative">
              <Image
                src="/assets/dj.png"
                width={374}
                height={374}
                alt="DJ Saleena"
              />
            </div>
          </HoverPopup>

          <HoverPopup
            className="self-start"
            message="Saleena loves playing sports. She’s really good at it."
          >
            <div className="self-start ml-12">
              <Image
                src="/assets/tennis.svg"
                width={312}
                height={312}
                alt="tennis"
              />
            </div>
          </HoverPopup>

          <HoverPopup
            className="self-end"
            message="Breakfast moments with style and flavor"
          >
            <div className="flex relative self-end mt-[307px]">
              <Image
                src="/assets/spoon.svg"
                width={269}
                height={269}
                alt="spoon"
                className="absolute -left-68 -top-20"
              />
              <Image
                src="/assets/croissant.svg"
                width={269}
                height={269}
                alt="croissant"
                className="absolute -top-52 right-0"
              />
              <Image
                src="/assets/juice.svg"
                width={269}
                height={269}
                alt="juice"
                className="w-[269px] h-[269px] relative -right-24"
              />
            </div>
          </HoverPopup>

          <HoverPopup
            className="self-start"
            message="im so ATL!!!"
          >
            <div className="self-start">
              <Image
                src="/assets/atlanta1.svg"
                width={465}
                height={268}
                alt="atl"
              />
            </div>
          </HoverPopup>

          <HoverPopup
            className="self-end"
            message="Saleena loves travelling. She’s been to 10+ countries."
          >
            <div className="self-end mt-[62px]">
              <Image
                src="/assets/flag.svg"
                width={400}
                height={400}
                alt="flag"
              />
            </div>
          </HoverPopup>

          <HoverPopup message="Saleena loves planning and being organized.">
            <div className="mt-10">
              <Image
                src="/assets/calendar.svg"
                width={400}
                height={400}
                alt="calendar"
              />
            </div>
          </HoverPopup>
        </div>
      </div>
    </section>
  );
};
