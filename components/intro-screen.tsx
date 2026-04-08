"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface Props {
  onContinue: () => void;
}

export default function IntroScreen({ onContinue }: Props) {
  const [isClient, setIsClient] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const backgrounds = [
    "/assets/bg1.png",
    "/assets/bg2.png",
    "/assets/bg3.png",
    "/assets/bg4.png",
    "/assets/bg5.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length)
    }, 6000)

    return () => clearInterval(interval);
  }, [])

  // useEffect(() => {
  //   backgrounds.forEach((src) => {
  //     const img = new window.Image();
  //     img.src = src;
  //   })
  // }, [])

  if (!isClient) {
    return (
      <div className="w-full h-screen bg-gray-200">
        <div className="p-5 h-full flex items-end justify-start">
          <div className="p-5 rounded-[15px] bg-white h-fit font-neuebit">
            <h1 className="mb-[5px] text-[40px]/[100%] font-bold font-neuebit -tracking-[4%]">
              Begin experience.
            </h1>
            <p className="mb-[10px] font-neuemontreal text-[13.57px]/[auto] font-medium -tracking-[2%]">
              Loading...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.section initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }} className="py-[15px] px-5 h-screen ">
      <div className="relative p-5 h-full w-full rounded-lg flex items-end justify-start overflow-hidden">
        <motion.div key={currentBg}
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1.05 }}
        exit={{opacity: 0}}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgrounds[currentBg]})`
        }} />
           
        <div className="p-5 relative z-10 rounded-[15px] bg-white h-fit font-neuebit">
          <h1 className="mb-[5px] text-[40px]/[100%] font-bold font-neuebit -tracking-[4%]">Begin experience.</h1>
          <p className="mb-[10px] font-neuemontreal text-[13.57px]/[auto] font-medium -tracking-[2%]">Take a moment, settle in, and continue when you’re ready.</p>
          <button onClick={onContinue} className="bg-[#FF5379] text-[18px]/[100%] -tracking-[2%] font-neuebit text-white px-[10px] py-[5px] rounded-full font-bold hover:bg-pink-500 transition-colors inline-flex items-center gap-1 transform hover:scale-105 active:scale-95 duration-200 h-fit cursor-pointer">
            Enter 
            <Image src="/assets/arrow-right.svg" alt="Arrow Right" width={15} height={17} />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
