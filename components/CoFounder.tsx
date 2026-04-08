import Image from "next/image";
import React from "react";

const CoFounder = () => {
  return (
    <div className="flex flex-col items-center border-[#F0F0EF] border">
      <div className="flex items-center gap-[39px] py-[97px] ">
        <h2 className="font-neuebit text-[100px]/[100%] font-bold -tracking-[2%]">
          The best Co-founder
        </h2>
        <Image
          src="/assets/cohort.svg"
          width={92.75}
          height={92.75}
          alt="Cohort"
        />
      </div>
      <Image src="/assets/icons.svg" width={546} height={85} alt="icons" />

      <div className="font-ibmplexmono relative p-8 pb-[64px] text-[25px]/[140%] max-w-[1185px] -tracking-[4%] flex flex-col gap-9 items-start">
        <span>Dear Miss Tiwari:)</span>
        <span>
          There’s something incredibly special about watching someone chase
          their ideas and refuse to let them stay as “just ideas.” I’ve seen the
          way you think, the way you solve problems, the way you approach
          challenges with this quiet determination that doesn’t need to be loud
          to be powerful.
        </span>
        <span>
          Working with you on Cohort has shown me a side of you that goes far
          beyond anything people see at first glance. The late nights, the
          brainstorming, the tiny details you care about, the way you keep going
          even when things get difficult. It’s inspiring in a way that’s hard to
          put into simple words.
        </span>
        <span>
          I’m genuinely grateful that out of all the people in the world, you
          chose to build something with me. That you trusted me enough to share
          this journey, these ideas, and this vision. It means more to me than I
          probably say out loud.
        </span>
        <span>
          You’re incredibly smart in the way that really matters, not just in
          what you know, but in how you think, how you question things, how you
          see possibilities where others might stop. Watching you work reminds
          me why I admire you so much.
        </span>
        <span>
          And getting to build something meaningful with someone I care about
          this deeply feels like one of the luckiest parts of my life.
        </span>
        <Image 
          src="/assets/love.svg"
          width={111}
          height={111}
          alt="flower"
          className="animate-float-slow absolute -left-20 bottom-0 top-0 my-auto "
        />
      </div>
    </div>
  );
};

export default CoFounder;
