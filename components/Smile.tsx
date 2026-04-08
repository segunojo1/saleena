"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Smile = () => {
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const parallaxImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!parallaxRef.current || !parallaxImageRef.current) return;

    const container = parallaxRef.current;
    const image = parallaxImageRef.current;

    const parallaxTween = gsap.to(image, {
      y: () => {
        const travelDistance = Math.max(
          0,
          image.offsetHeight - container.clientHeight,
        );

        return -travelDistance;
      },
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    // Refresh ScrollTrigger when image loads
    const handleImageLoad = () => {
      ScrollTrigger.refresh();
    };

    image.addEventListener("load", handleImageLoad);

    return () => {
      image.removeEventListener("load", handleImageLoad);
      parallaxTween.scrollTrigger?.kill();
      parallaxTween.kill();
    };
  }, []);
  return (
    <div className="relative w-full flex flex-col items-center">
      <Image
        src="/assets/mail.svg"
        width={113}
        height={113}
        alt="mail"
        className="absolute top-[98px] left-[30%] rotate-12"
      />
      <Image
        src="/assets/smiley.svg"
        width={400}
        height={400}
        alt="Smiley"
        className="mt-[158px]"
      />
      <p className="text-[22.02px]/[100%] -tracking-[4%] font-medium font-neuemontreal mt-[44px] mb-[30px]">
        She’s got
      </p>

      <div
        ref={parallaxRef}
        className="relative h-[500px] overflow-hidden rounded-[20px]"
      >
        <Image
          src="/assets/saleena4.png"
          ref={parallaxImageRef}
          width={1167}
          height={1600}
          alt="saleena 4"
          className="w-full h-auto will-change-transform"
        />
        <p className="text-[100px]/[100%] text-white w-fit absolute bottom-[34px] left-0 right-0 mx-auto -tracking-[4%] font-medium font-neuebit mt-[15px]">
          My favourite smile
        </p>
      </div>

      <div className="text-[28px]/[100%] relative border-[0.81px] max-w-[1166px] rounded-[28px] border-[#F0F0EF] font-medium flex flex-col gap-[30px] -tracking-[4%] font-neuemontreal px-[146px] py-[35px] mt-[83px] ">
        <span>
          There are so many small things in life that people say shouldn’t
          matter as much as they do. A quick laugh. A photo sent at random. A
          smile caught mid-conversation. Tiny moments that come and go without
          ceremony. But somehow, her smile has never felt like a small thing to
          me.
        </span>

        <span>
          It has this quiet way of changing the mood of my entire day without
          asking for permission first. I can be busy, distracted, overwhelmed,
          caught up in everything happening around me, and then I see her smile,
          and everything slows down just enough for me to breathe again.
        </span>

        <span>
          It’s not just the way it looks. It’s what it means. It means she’s
          happy. It means she’s okay. It means somewhere out there, in her own
          world, you’re living and laughing and shining in the way only she can.
          And knowing that brings me a kind of comfort I don’t think I knew I
          needed until her.
        </span>

        <span>
          If I had to pick one expression to carry with me through every busy
          day and every quiet night, it would always be that smile. Because
          somehow, without even trying, it reminds me of everything good.
        </span>
        <Image
          src="/assets/flower3.svg"
          width={110.77}
          height={110.77}
          alt="flower"
          className="right-0 bottom-0 absolute"
        />
      </div>
    </div>
  );
};

export default Smile;
