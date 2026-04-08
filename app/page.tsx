"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Sticker from "../components/Sticker";
import HoverPopup from "../components/HoverPopup";
import IntroScreen from "../components/intro-screen";
import ScrambleText from "../components/ScrambleText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "../components/Hero";
import BehindSmile from "../components/BehindSmile";
import Smile from "../components/Smile";
import Sunshine from "../components/Sunshine";
import Prettiest from "../components/Prettiest";
import CoFounder from "../components/CoFounder";
import CutestEver from "../components/CutestEver";
import Footer from "../components/Footer";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <>
      {!hasEntered && <IntroScreen onContinue={() => setHasEntered(true)} />}

      {hasEntered && <MainContent />}
    </>
  );
}

export const MainContent = () => {
  return (
    <section className="min-h-screen bg-white mx-auto flex flex-col items-center w-full max-w-[1440px] pt-16 px-[43px]">
      <Hero />
      <BehindSmile />
      <Smile />
      <Sunshine />
      <Prettiest />
      <CoFounder />
      <CutestEver />
      <div>
        <Image
          src="/assets/mapp.svg"
          width={1300}
          height={763}
          alt="map"
          className=""
        />
      </div>
      <Footer />
    </section>
  );
};
