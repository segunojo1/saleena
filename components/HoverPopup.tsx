"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface HoverPopupProps {
  children: React.ReactNode;
  message: string;
  className?: string;
}

export default function HoverPopup({
  children,
  message,
  className,
}: HoverPopupProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      className={cn("relative inline-block", className)}
    >
      {children}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute -bottom-[93px] font-neuebit -right-24 mb-2 rounded-lg font-semibold text-gray-800 z-20 flex flex-col items-start gap-[10px]"
          >
            <div className="px-[20px] py-[10px]">
            <button
              onClick={() => setIsHovered(false)}
              className="text-[20px]/[100%] flex items-center font-bold text-gray-800 hover:text-gray-600 transition-colors bg-[#FFD1DC] py-[6.5px] px-[10px] rounded-full"
            >
              Click to Close
              <Image
                src="/assets/arrow-right.svg"
                width={17}
                height={15}
                className="ml-2 inline-block w-[15px] invert-100"
                alt=""
              />
            </button>
            </div>
            <span className="font-neuemontreal w-[207px] rounded-[10.7px] p-[10px] border-[#E5E5E5] border-[1px] text-[12px] font-medium bg-[#FFFFFF1A]">
              {message}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
