"use client";

import { useEffect } from "react";
import "sheryjs/dist/Shery.css";

export async function initSheryMouseFollower() {
  const Shery = (await import("sheryjs")).default;
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.6,
  });
}

export default function SherySetup() {
  useEffect(() => {
    let mounted = true;

    const init = async () => {
      try {
        if (!mounted) return;
        await initSheryMouseFollower();
      } catch {
        // no-op: avoid crashing if Shery fails to load
      }
    };

    init();

    return () => {
      mounted = false;
    };
  }, []);

  return null;
}
