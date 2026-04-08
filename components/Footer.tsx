import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Footer = () => {
  const planeRef = useRef<HTMLImageElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const carRef = useRef<HTMLImageElement | null>(null);
  const carTriggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!planeRef.current) return;

    const planeTl = gsap.timeline({
      repeat: -1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });

    planeTl
      .fromTo(
        planeRef.current,
        { x: 0, y: 0, opacity: 0, scaleX: 1, rotation: -5 },
        {
          x: -1000,
          y: -12,
          opacity: 1,
          duration: 3.8,
          ease: "power3.out",
          rotation: 4,
          scaleX: 1,
        },
      )
      .to(planeRef.current, {
        x: 0,
        y: 8,
        duration: 3.8,
        ease: "power3.inOut",
        scaleX: -1,
        rotation: -4,
      });

    let carTl: gsap.core.Timeline | null = null;

    if (carRef.current) {
      carTl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 100%",
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
        },
      });

      carTl.fromTo(
        carRef.current,
        { x: 300, opacity: 1 },
        {
          x: 0,
          opacity: 1,
          duration: 4,
          ease: "power3.out",
        },
      );
    }

    return () => {
      planeTl.scrollTrigger?.kill();
      planeTl.kill();
      carTl?.scrollTrigger?.kill();
      carTl?.kill();
    };
  }, []);
  return (
    <div ref={triggerRef} className="mt-6 flex flex-col items-center w-full">
      <div className="flex items-center justify-between mb-5 w-full">
        <Image
          src="/assets/globee.svg"
          width={173}
          height={173}
          alt="globe"
          className=""
        />
        <Image
          src="/assets/heart.svg"
          width={189}
          height={189}
          alt="heart"
          className=""
        />
      </div>
      <h2 className="text-[100px]/[100%] font-bold -tracking-[2%] font-neuebit mb-[50px]">
        Worth every mile
      </h2>
      <p className="text-[40px]/[100%] font-medium -tracking-[4%] font-neuemontreal max-w-[1184px]">
        Entfernung misst nur den Raum, nie die Bedeutung. Und jeder Kilometer
        zwischen uns ist ein Versprechen auf den Tag, an dem wir ihn überwinden.
      </p>
      <Image
        src="/assets/airplane.svg"
        ref={planeRef}
        width={189}
        height={189}
        alt="airplane"
        className="mr-[150px] self-end mt-4"
      />

      <div
        ref={carTriggerRef}
        className="flex mt-[187px] justify-between w-full"
      >
        <Image
          src="/assets/sign.svg"
          width={189}
          height={189}
          alt="sign"
          className=""
        />
        <div className="flex items-center">
          <Image
            src="/assets/house.svg"
            width={189}
            height={189}
            alt="house"
            className=""
          />
          <Image
            src="/assets/car.svg"
            width={189}
            height={189}
            alt="car"
            ref={carRef}
            className=""
          />
        </div>
        <Image
          src="/assets/flag.svg"
          width={189}
          height={189}
          alt="flag"
          className=""
        />
      </div>
    </div>
  );
};

export default Footer;
