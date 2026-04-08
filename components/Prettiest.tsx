import Image from 'next/image'
import React from 'react'

const Prettiest = () => {
  return (
    <div className="flex flex-col w-full items-center relative mt-[143px] pb-[289px]">
        <p className="text-[20px]/[100%] -tracking-[2%] font-bold font-neuebit">
          She’s
        </p>
        <h2 className="text-[100px]/[100%] font-bold -tracking-[2%] font-neuebit">
          The prettiest girl I know
        </h2>
        <p className="text-[35px] font-neuebit font-bold">
          Take a look yourself.
        </p>

        <div className="mt-12 w-full  max-w-[700px]">
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

          </div>
        </div>
            <Image
              src="/assets/flower.svg"
              width={88}
              height={88}
              alt="flower"
              className="absolute -right-9  top-[100px] animate-float-slow"
            />
      </div>
  )
}

export default Prettiest