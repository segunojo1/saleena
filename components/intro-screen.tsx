import { ArrowRight } from "lucide-react";
import Image from "next/image";

const IntroScreen = () => {
  return (
    <section className="py-[15px] px-5 h-screen ">
      <div className="bg-[url('/assets/bg1.png')] p-5 bg-cover bg-center h-full w-full rounded-lg flex items-end justify-start ">
        <div className="p-5 rounded-[15px] bg-white h-fit font-neuebit">
          <h1 className="mb-[5px] text-[40px]/[100%] font-bold font-neuebit -tracking-[4%]">Begin experience.</h1>
          <p className="mb-[10px] font-neuemontreal text-[13.57px]/[auto] font-medium -tracking-[2%]">Take a moment, settle in, and continue when you’re ready.</p>
          <button className="bg-[#FF5379] text-[18px]/[100%] -tracking-[2%] font-neuebit text-white px-[10px] py-[5px] rounded-full font-bold hover:bg-pink-500 transition-colors inline-flex items-center gap-1 transform hover:scale-105 active:scale-95 duration-200 h-fit cursor-pointer">
            Enter 
            <Image src="/assets/arrow-right.svg" alt="Arrow Right" width={15} height={17} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntroScreen;
