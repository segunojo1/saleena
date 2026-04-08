"use client";

import { useState } from "react";

import Image from "next/image";
import Sticker from "../components/Sticker";
import HoverPopup from "../components/HoverPopup";
import IntroScreen from "../components/intro-screen";

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
            popupClassName="-bottom-[45px] right-20"
            className="self-end -top-[206px]"
            message="Saleena loves listening to music. I’ve never heard her sing though."
          >
            <div className="self-end animate-spin hover:paused relative">
              <Image
                src="/assets/dj.png"
                width={374}
                height={374}
                alt="DJ Saleena"
              />
            </div>
          </HoverPopup>

          <HoverPopup
            popupClassName="-bottom-[63px] -right-28"
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

          <div className="flex relative self-end mt-[307px]">
            <Image
              src="/assets/spoon.svg"
              width={269}
              height={269}
              alt="spoon"
              className="absolute -left-[330px] -top-17"
            />
            <p className="text-[22.02px] -tracking-[4%] font-medium font-neuemontreal w-[199px] absolute right-46 top-10">
              Saleena loves eating. I love watching her eat.
            </p>
            <Image
              src="/assets/croissant.svg"
              width={269}
              height={269}
              alt="croissant"
              className="absolute -top-52 right-15"
            />
            <Image
              src="/assets/juice.svg"
              width={269}
              height={269}
              alt="juice"
              className="w-[269px] h-[269px] relative -right-10"
            />
          </div>

          <HoverPopup className="self-start" message="im so ATL!!!">
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
            popupClassName="bottom-2 right-26"
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

          <HoverPopup
            popupClassName="-bottom-[30px] -right-25"
            message="Saleena loves planning and being organized."
          >
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

        <div className="relative">
          <Image
            src="/assets/saleena4.png"
            width={1167}
            height={500}
            alt="saleena 4"
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
            ceremony. But somehow, her smile has never felt like a small thing
            to me.
          </span>

          <span>
            It has this quiet way of changing the mood of my entire day without
            asking for permission first. I can be busy, distracted, overwhelmed,
            caught up in everything happening around me, and then I see her
            smile, and everything slows down just enough for me to breathe
            again.
          </span>

          <span>
            It’s not just the way it looks. It’s what it means. It means she’s
            happy. It means she’s okay. It means somewhere out there, in her own
            world, you’re living and laughing and shining in the way only she
            can. And knowing that brings me a kind of comfort I don’t think I
            knew I needed until her.
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

      <div className="flex flex-col items-center mt-[96px] relative">
        <div className=" flex flex-col border-b-[1px] pb-10 items-center">
          <Image
            src="/assets/mail.svg"
            width={113}
            height={113}
            alt="mail"
            className="-left-32 absolute rotate-12"
          />
          <p className="text-[20px]/[100%] -tracking-[2%] font-bold font-neuebit">
            Shes a
          </p>
          <h2 className="text-[100px]/[100%] font-bold -tracking-[2%] font-neuebit">
            Sunshine in human form
          </h2>
          <Image
            src="/assets/flower3.svg"
            width={110.77}
            height={110.77}
            alt="flower"
            className="right-0 bottom-0 absolute"
          />
        </div>

        <div className="relative w-full flex flex-col justify-center mt-[100px]">
          <div className="flex relative justify-end mr-[50px]">
            <Image
              src="/assets/typewriter22.png"
              width={1007}
              height={716}
              alt="typewriter back"
              className="absolute w-[1007px] -left-7 bottom-0 top-0 my-auto"
            />
            <div className="flex flex-col z-[99999]  mr-[140px] gap-[30px] max-w-[559.2px] border-[#E5E5E5] bg-white rounded-2xl border-[0.5px] p-[23px] pb-[68px] font-neuemontreal text-[16px] font-medium">
              <span>
                Some people walk into a room and fill it with noise. Others walk
                in and fill it with light. You’ve always felt like the second
                kind to me.
              </span>
              <span>
                There&apos;s something about the way you exist that feels warm
                and easy, like sunlight through a window on a slow morning when
                the world hasn’t fully woken up yet. Not loud. Not overwhelming.
                Just gentle, steady warmth that makes everything feel a little
                softer.
              </span>
              <span>
                You don’t even realise how many little moments you brighten. The
                conversations that feel lighter. The days that feel less heavy.
                The quiet reassurance of knowing you’re there. It’s not
                something you try to do. It’s just who you are.
              </span>
              <span>
                And I think that’s what makes it so special. You shine without
                effort. You make ordinary days feel less ordinary. And being
                close to that kind of light — even from far away — feels like a
                gift I didn’t know I’d be lucky enough to receive.
              </span>
            </div>
          </div>
          <div className="bg-[#FAF9F5] rounded-t-[29.85px] -mt-[210px]">
            <Image
              src="/assets/typewriter_transparent.svg"
              width={1025}
              height={1155}
              alt="typewriter"
              className=" z-[99999] relative right-0"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-[143px] pb-[289px]">
        <p className="text-[20px]/[100%] -tracking-[2%] font-bold font-neuebit">
          She’s
        </p>
        <h2 className="text-[100px]/[100%] font-bold -tracking-[2%] font-neuebit">
          The prettiest girl I know
        </h2>
        <p className="text-[35px] font-neuebit font-bold">
          Take a look yourself.
        </p>

        <div className="mt-12 w-full max-w-[1380px]">
          <div className="grid grid-cols-2 gap-5 rounded-[20px] p-4 md:hidden">
            <Image
              src="/assets/saleena5.png"
              width={300}
              height={420}
              alt="Saleena portrait 5"
              className="w-full rounded-[8px] object-cover"
            />
            <Image
              src="/assets/saleena6.png"
              width={300}
              height={420}
              alt="Saleena portrait 6"
              className="w-full rounded-[8px] object-cover"
            />
            <Image
              src="/assets/saleena7.png"
              width={300}
              height={420}
              alt="Saleena portrait 7"
              className="w-full rounded-[8px] object-cover"
            />
            <Image
              src="/assets/saleena8.png"
              width={300}
              height={420}
              alt="Saleena portrait 8"
              className="w-full rounded-[8px] object-cover"
            />
            <Image
              src="/assets/saleena9.png"
              width={300}
              height={420}
              alt="Saleena portrait 9"
              className="w-full rounded-[8px] object-cover"
            />
            <Image
              src="/assets/saleena10.png"
              width={300}
              height={420}
              alt="Saleena portrait 10"
              className="w-full rounded-[8px] object-cover"
            />
          </div>

          <div className="relative hidden h-[1320px] w-full overflow-hidden rounded-[28px] md:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.06),_transparent_30%)]" />

            <div className="absolute left-[2%] top-[130px] -rotate-8 animate-float-slow">
              <Image
                src="/assets/saleena6.png"
                width={235}
                height={346}
                alt="Saleena portrait 6"
                className="rounded-[18px] object-cover shadow-2xl shadow-black/40 transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>

            <div className="absolute left-1/2 top-[40px] -translate-x-1/2 rotate-2 animate-float-medium">
              <Image
                src="/assets/saleena5.png"
                width={430}
                height={320}
                alt="Saleena portrait 5"
                className="rounded-[18px] object-cover shadow-2xl shadow-black/40 transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            <div
              className="absolute right-[2%] top-[140px] rotate-6 animate-float-slow"
              style={{ animationDelay: "1s" }}
            >
              <Image
                src="/assets/saleena7.png"
                width={220}
                height={160}
                alt="Saleena portrait 7"
                className="rounded-[18px] object-cover shadow-2xl shadow-black/40 transition-transform duration-300 hover:scale-[1.04]"
              />
            </div>

            <div
              className="absolute left-[12%] top-[615px] -rotate-4 animate-float-medium"
              style={{ animationDelay: "0.8s" }}
            >
              <Image
                src="/assets/saleena8.png"
                width={395}
                height={442}
                alt="Saleena portrait 8"
                className="rounded-[18px] object-cover shadow-2xl shadow-black/40 transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            <div
              className="absolute right-[3%] top-[500px] rotate-3 animate-float-slow"
              style={{ animationDelay: "1.4s" }}
            >
              <Image
                src="/assets/saleena9.png"
                width={220}
                height={160}
                alt="Saleena portrait 9"
                className="rounded-[18px] object-cover shadow-2xl shadow-black/40 transition-transform duration-300 hover:scale-[1.04]"
              />
            </div>

            <div
              className="absolute right-[10%] top-[840px] -rotate-[2deg] animate-float-medium"
              style={{ animationDelay: "1.2s" }}
            >
              <Image
                src="/assets/saleena10.png"
                width={290}
                height={397}
                alt="Saleena portrait 10"
                className="rounded-[18px] object-cover shadow-2xl shadow-black/40 transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>

            <Image
              src="/assets/flower.svg"
              width={88}
              height={88}
              alt="flower"
              className="absolute right-6 top-[80px] animate-float-slow"
            />
          </div>
        </div>
      </div>

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

        <div className="font-ibmplexmono p-8 pb-[64px] text-[25px]/[140%] max-w-[1185px] -tracking-[4%] flex flex-col gap-9 items-start">
          <span>Dear Miss Tiwari:)</span>
          <span>
            There’s something incredibly special about watching someone chase
            their ideas and refuse to let them stay as “just ideas.” I’ve seen
            the way you think, the way you solve problems, the way you approach
            challenges with this quiet determination that doesn’t need to be
            loud to be powerful.
          </span>
          <span>
            Working with you on Cohort has shown me a side of you that goes far
            beyond anything people see at first glance. The late nights, the
            brainstorming, the tiny details you care about, the way you keep
            going even when things get difficult. It’s inspiring in a way that’s
            hard to put into simple words.
          </span>
          <span>
            I’m genuinely grateful that out of all the people in the world, you
            chose to build something with me. That you trusted me enough to
            share this journey, these ideas, and this vision. It means more to
            me than I probably say out loud.
          </span>
          <span>
            You’re incredibly smart in the way that really matters, not just in
            what you know, but in how you think, how you question things, how
            you see possibilities where others might stop. Watching you work
            reminds me why I admire you so much.
          </span>
          <span>
            And getting to build something meaningful with someone I care about
            this deeply feels like one of the luckiest parts of my life.
          </span>
        </div>
      </div>
      
      <div className="relative w-full">
        <Image
            src="/assets/glass-flower.png"
            width={104}
            height={119}
            alt="glass flower"
            className="absolute -top-10 left-30"
          />
          <Image
            src="/assets/gaming.png"
            width={102}
            height={102}
            alt="gaming"
            className="absolute -top-10 right-70"
          />
          <Image
            src="/assets/popcorn.svg"
            width={104}
            height={119}
            alt="popcorn"
            className="absolute -bottom-10 left-50"
          />
          <Image
            src="/assets/circle.svg"
            width={102}
            height={102}
            alt="gaming"
            className="absolute bottom-0 right-70"
          />

        <div className="flex flex-col items-center py-[91px] pb-[70px]">
          <p className="text-[20px]/[100%] -tracking-[2%] font-bold font-neuebit">
            Saleena Tiwari is
          </p>
          <h2 className="text-[100px]/[100%] font-bold -tracking-[2%] font-neuebit">
            The cutest ever!!
          </h2>
        </div>
      </div>
    </section>
  );
};
