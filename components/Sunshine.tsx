import Image from 'next/image'

const Sunshine = () => {
  return (
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
  )
}

export default Sunshine