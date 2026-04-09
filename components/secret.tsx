"use client";

import { useEffect, useMemo, useState } from "react";

type HiddenItem = {
id: number;
x: string;
y: string;
note: string;
label: string;
};

const STORAGE_KEY = "secret-love-hunt-found-v1";

const ITEMS: HiddenItem[] = [
{ id: 1, x: "8%", y: "22%", label: "A", note: "You make ordinary days feel special." },
{ id: 2, x: "84%", y: "30%", label: "B", note: "I smile more because of you." },
{ id: 3, x: "14%", y: "66%", label: "C", note: "You are my favorite part of every plan." },
{ id: 4, x: "76%", y: "74%", label: "D", note: "Even silence with you feels warm." },
{ id: 5, x: "48%", y: "46%", label: "E", note: "Every version of you is beautiful to me." },
];

export default function SecretLoveHunt() {
const [found, setFound] = useState<number[]>([]);
const [activeNote, setActiveNote] = useState<string | null>(null);
const [isFinalOpen, setIsFinalOpen] = useState(false);

useEffect(() => {
const raw = window.localStorage.getItem(STORAGE_KEY);
if (!raw) return;
try {
const parsed = JSON.parse(raw) as number[];
if (Array.isArray(parsed)) setFound(parsed);
} catch {
// ignore bad storage
}
}, []);

useEffect(() => {
window.localStorage.setItem(STORAGE_KEY, JSON.stringify(found));
if (found.length === ITEMS.length) {
setIsFinalOpen(true);
}
}, [found]);

const progressText = useMemo(
() => `${found.length}/${ITEMS.length} found`,
[found.length]
);

const onFind = (item: HiddenItem) => {
if (!found.includes(item.id)) {
setFound((prev) => [...prev, item.id]);
}
setActiveNote(item.note);
};

const resetHunt = () => {
setFound([]);
setActiveNote(null);
setIsFinalOpen(false);
window.localStorage.removeItem(STORAGE_KEY);
};

return (
  <section className="relative w-full h-[620px] my-14 rounded-[28px] border border-[#F0F0EF] bg-[#FFF8FB] overflow-hidden">
    <div className="pointer-events-none absolute top-4 right-4 z-[20] rounded-full bg-white/90 px-4 py-2 shadow-md border border-[#F0F0EF]">
      <p className="pointer-events-auto text-sm font-ibmplexmono tracking-tight text-black">
        Secret Hunt: {progressText}
      </p>
    </div>

    <div className="absolute inset-0 z-[10] pointer-events-none">
      {ITEMS.map((item) => {
        const isFound = found.includes(item.id);
        return (
          <button
            key={item.id}
            type="button"
            aria-label={"Hidden clue " + item.id}
            onClick={() => onFind(item)}
            className={[
              "pointer-events-auto absolute h-9 w-9 rounded-full border-2",
              "font-neuemontreal text-sm font-semibold transition-all duration-300",
              "shadow-md hover:scale-110 active:scale-95",
              isFound
                ? "bg-[#FF5379] border-[#FF5379] text-white opacity-70"
                : "bg-white border-black/20 text-black animate-pulse",
            ].join(" ")}
            style={{ left: item.x, top: item.y }}
          >
            {item.label}
          </button>
        );
      })}
    </div>

    {activeNote && (
      <div className="absolute bottom-4 left-1/2 z-[30] -translate-x-1/2 rounded-2xl border border-[#F0F0EF] bg-white px-5 py-3 shadow-lg max-w-[90%]">
        <p className="text-sm md:text-base font-ibmplexmono text-black text-center">
          {activeNote}
        </p>
      </div>
    )}

    {isFinalOpen && (
      <div className="absolute inset-0 z-[40] grid place-items-center bg-black/45 px-4">
        <div className="w-full max-w-lg rounded-3xl bg-white p-6 md:p-8 shadow-2xl border border-[#F0F0EF]">
          ...
        </div>
      </div>
    )}
  </section>
);
}
