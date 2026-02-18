"use client";

import { motion } from "framer-motion";
import { Heart, Star, Flower, Sparkles, Globe, Mail, Sun, Headphones, Smile } from "lucide-react";
import { cn } from "@/lib/utils";

import Image from "next/image";

interface StickerProps {
    type?: "heart" | "star" | "flower" | "sparkle" | "tape" | "globe" | "mail" | "sun" | "headphones" | "smile";
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    color?: string;
    className?: string;
    rotation?: number;
    delay?: number;
    scale?: number;
    text?: string;
    strokeWidth?: number;
    spin?: boolean;
}

export default function Sticker({
    type,
    src,
    alt = "sticker",
    width = 64,
    height = 64,
    color = "text-pink-400",
    className,
    rotation = 0,
    delay = 0,
    scale = 1,
    text,
    strokeWidth = 2,
    spin = false,
}: StickerProps) {
    const Icon = type ? {
        heart: Heart,
        star: Star,
        flower: Flower,
        sparkle: Sparkles,
        tape: null,
        globe: Globe,
        mail: Mail,
        sun: Sun,
        headphones: Headphones,
        smile: Smile,
    }[type] : null;

    if (type === "tape") {
        // ... tape implementation ...
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.8, scale: 1 }}
                transition={{ delay, duration: 0.5, type: "spring" }}
                className={cn(
                    "absolute bg-white/40 backdrop-blur-sm h-8 w-24 shadow-sm transform-gpu",
                    className
                )}
                style={{ transform: `rotate(${rotation}deg)` }}
            />
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, rotate: rotation - 45 }}
            whileInView={{
                opacity: 1,
                scale: scale,
                rotate: spin ? [0, 360] : rotation
            }}
            whileHover={{ scale: scale * 1.2, rotate: spin ? [0, 360] : rotation + 10 }}
            transition={{
                delay,
                duration: spin ? 10 : 0.5,
                type: spin ? "tween" : "spring",
                repeat: spin ? Infinity : 0,
                ease: spin ? "linear" : "easeOut"
            }}
            className={cn("absolute flex items-center justify-center z-10 select-none", className)}
        >
            {src ? (
                <div style={{ width, height }} className="relative">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-contain"
                    />
                </div>
            ) : (
                Icon && (
                    <Icon
                        className={cn("w-full h-full drop-shadow-md", color)}
                        fill="currentColor"
                        strokeWidth={strokeWidth}
                    />
                )
            )}
            {text && (
                <span className="absolute whitespace-nowrap font-neuebit text-xl text-black/70 bg-white/80 px-2 py-0.5 rounded-full rotate-[-5deg] shadow-sm transform translate-y-full">
                    {text}
                </span>
            )}
        </motion.div>
    );
}
