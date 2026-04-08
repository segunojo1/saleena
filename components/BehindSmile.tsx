import React from 'react'
import HoverPopup from './HoverPopup'
import Image from 'next/image'

const BehindSmile = () => {
  return (
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
  )
}

export default BehindSmile