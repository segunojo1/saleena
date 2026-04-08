"use client";

import Image from "next/image";
import { useState } from "react";

const MobileView = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = ["English", "नेपाली", "Deutsch"];

  const translations = {
    English:
      "This little corner of the internet was made for a bigger screen. Please open it on a laptop or desktop for the full experience.",
    नेपाली:
      "इन्टरनेटको यो सानो कोना एक ठूलो स्क्रीनको लागि बनाइएको थियो। पूर्ण अनुभवको लागि कृपया यसलाई ल्यापटप वा डेस्कटपमा खोल्नुहोस्।",
    Deutsch:
      "Diese kleine Ecke des Internets wurde für einen größeren Bildschirm gemacht. Bitte öffnen Sie es auf einem Laptop oder Desktop für das vollständige Erlebnis.",
  };

  return (
    <div className="bg-[#FFD1DC] p-3 h-screen">
      <div className="bg-white rounded-[14px] h-full flex flex-col items-center justify-between">
        <div className="flex items-start w-full p-[10px] justify-between relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-[#FF5379] text-[22px]/[100%] -tracking-[2%] font-neuebit text-white px-[10px] py-[5px] rounded-full font-bold hover:bg-pink-500 transition-colors inline-flex items-center gap-1 transform hover:scale-105 active:scale-95 duration-200 h-fit w-fit cursor-pointer"
          >
            {selectedLanguage}
            <Image
              src="/assets/arrow-down.svg"
              alt="Arrow Down"
              width={12.75}
              height={9.92}
              className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white border-2 border-[#FF5379] rounded-lg shadow-lg z-10">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setSelectedLanguage(lang);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left font-neuebit text-[18px] transition-colors ${
                    selectedLanguage === lang
                      ? "bg-[#FF5379] text-white"
                      : "hover:bg-[#FFD1DC]"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}

          <Image
            src="/assets/globe.svg"
            alt="Arrow Down"
            width={90}
            height={90}
          />
        </div>

        <h1 className="text-[50px]/[100%] font-bold -tracking-[2%] font-neuebit px-[36px] text-center">
          {translations[selectedLanguage as keyof typeof translations]}
        </h1>

        <div className="flex flex-col gap-8 w-full items-center">
          <button
            onClick={() => {
              const currentIndex = languages.indexOf(selectedLanguage);
              const nextIndex = (currentIndex + 1) % languages.length;
              setSelectedLanguage(languages[nextIndex]);
            }}
            className="text-[20px]/[100%] font-bold -tracking-[2%] font-neuebit text-[#000000] hover:text-pink-500 transition-colors cursor-pointer active:scale-95 duration-100"
          >
            tap to translate
          </button>
          <div className="flex justify-between w-full">
            <Image
              src="/assets/sign.svg"
              width={90}
              height={90}
              alt="sign"
              className=""
            />
            <Image
              src="/assets/house.svg"
              width={90}
              height={90}
              alt="house"
              className=""
            />
            <Image
              src="/assets/car.svg"
              width={90}
              height={90}
              alt="car"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
