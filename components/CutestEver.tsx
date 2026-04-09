import React from 'react'
import ScrambleText from './ScrambleText'
import Image from 'next/image'

const CutestEver = () => {
  return (
    <div className=" w-full flex flex-col items-center">
            <div className="flex relative w-full flex-col items-center py-[91px] pb-[130px]">
              <Image
                src="/assets/glass-flower.png"
                width={104}
                height={119}
                alt="glass flower"
                className="absolute -top-10 left-30 animate-float-slow"
              />
              <Image
                src="/assets/gaming.png"
                width={102}
                height={102}
                alt="gaming"
                className="absolute -top-10 right-70 animate-float-slow"
              />
              <Image
                src="/assets/popcorn.svg"
                width={104}
                height={119}
                alt="popcorn"
                className="absolute bottom-10 left-50"
              />
              <Image
                src="/assets/circle.svg"
                width={102}
                height={102}
                alt="gaming"
                className="absolute bottom-20 right-70"
              />
              <p className="text-[20px]/[100%] -tracking-[2%] font-bold font-neuebit">
                Saleena Tiwari is
              </p>
              <h2 className="text-[100px]/[100%] font-bold -tracking-[2%] font-neuebit">
                The cutest ever!!
              </h2>
            </div>
    
            <div className="mb-6">
              <Image
                src="/assets/saleena11.png"
                width={1102}
                height={849}
                alt="saleena"
              />
            </div>
    
            <div className="flex justify-between gap-[135px] mb-[35px]">
              <h2 className="text-[100px]/[100%] font-bold -tracking-[2%] font-neuebit self-start">
                Saleena
              </h2>
              <Image src="/assets/leaf.svg" width={400} height={400} alt="leaf" className='animate-float-slow'/>
              <h2 className="text-[100px]/[100%] font-bold -tracking-[2%] font-neuebit self-end">
                Tiwari
              </h2>
            </div>
            <h2 className="text-[143.57px]/[100%] font-normal -tracking-[2%] font-mondwest mb-[430px]">
              ist einfach die Beste
            </h2>
    
            <div className="max-w-[739px] relative pb-32">
              <ScrambleText
                text="no matter where in the world we are. i still care about you bae."
                duration={800}
              />
              <Image
                src="/assets/done.svg"
                width={144}
                height={144}
                alt="done"
                className="right-0 absolute bottom-0"
              />
            </div>
          </div>
  )
}

export default CutestEver