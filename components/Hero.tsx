import Image from "next/image"
import Sticker from "./Sticker"

const Hero = () => {
  return (
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
  )
}

export default Hero