"use client";

import { useEffect, useRef, useState } from "react";
import { initSheryMouseFollower } from "../components/SherySetup";

interface InteractiveBackgroundProps {
  onBackgroundChange?: (index: number) => void;
}

const backgrounds = [
  "/assets/bg1.png",
  "/assets/bg2.png",
  "/assets/bg3.png",
  "/assets/bg4.png",
];

export default function InteractiveBackground({
  onBackgroundChange,
}: InteractiveBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current || !canvasRef.current) return;

    initSheryMouseFollower();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const offscreenCanvas = document.createElement("canvas");
    const offscreenCtx = offscreenCanvas.getContext("2d");
    if (!offscreenCtx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      offscreenCanvas.width = window.innerWidth;
      offscreenCanvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Load images
    const images = backgrounds.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    const gooeyStrength = 60;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleClick = () => {
      setCurrentIndex(nextIndex);
      setNextIndex((nextIndex + 1) % backgrounds.length);
      onBackgroundChange?.(nextIndex);
    };

    // Animation loop
    const animate = () => {
      mouseX += (targetMouseX - mouseX) * 0.15;
      mouseY += (targetMouseY - mouseY) * 0.15;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw current background
      if (images[currentIndex].complete) {
        ctx.drawImage(images[currentIndex], 0, 0, canvas.width, canvas.height);
      }

      // Draw next background with gooey mask following mouse
      if (images[nextIndex].complete) {
        offscreenCtx.clearRect(0, 0, canvas.width, canvas.height);
        offscreenCtx.drawImage(
          images[nextIndex],
          0,
          0,
          canvas.width,
          canvas.height,
        );

        const gradient = offscreenCtx.createRadialGradient(
          mouseX,
          mouseY,
          0,
          mouseX,
          mouseY,
          gooeyStrength,
        );
        gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
        gradient.addColorStop(0.7, "rgba(0, 0, 0, 0.45)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        offscreenCtx.globalCompositeOperation = "destination-in";
        offscreenCtx.fillStyle = gradient;
        offscreenCtx.fillRect(0, 0, canvas.width, canvas.height);
        offscreenCtx.globalCompositeOperation = "source-over";

        ctx.save();
        ctx.filter = "blur(6px)";
        ctx.drawImage(offscreenCanvas, 0, 0, canvas.width, canvas.height);
        ctx.restore();
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [currentIndex, nextIndex, onBackgroundChange, isClient]);

  return (
    <div ref={containerRef} className="w-full h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-pointer"
        style={{ display: "block" }}
      />
      <div className="absolute bottom-5 left-5 text-white font-neuebit pointer-events-none">
        <p className="text-sm">Move mouse to reveal • Click to change</p>
      </div>
    </div>
  );
}
