import React, { useState, useRef, useEffect } from "react";

interface ScrambleTextProps {
  text: string;
  duration?: number; // Scramble duration in milliseconds
}

const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  duration = 500,
}) => {
  const [displayedText, setDisplayedText] = useState(text);
  const originalTextRef = useRef(text);
  const scrambleIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrambleText = () => {
    const scrambleInterval = 50; // Interval between scrambles in milliseconds
    let elapsedTime = 0;

    if (scrambleIntervalRef.current) {
      clearInterval(scrambleIntervalRef.current);
    }

    scrambleIntervalRef.current = setInterval(() => {
      const scrambled = originalTextRef.current.split("");

      // Scramble by swapping characters
      for (let i = 0; i < scrambled.length; i++) {
        if (Math.random() > elapsedTime / duration) {
          const randomIndex = Math.floor(Math.random() * scrambled.length);
          // Swap characters
          [scrambled[i], scrambled[randomIndex]] = [
            scrambled[randomIndex],
            scrambled[i],
          ];
        }
      }

      setDisplayedText(scrambled.join(""));
      elapsedTime += scrambleInterval;

      if (elapsedTime >= duration && scrambleIntervalRef.current) {
        clearInterval(scrambleIntervalRef.current);
        setDisplayedText(originalTextRef.current); // Ensure final text is correct
      }
    }, scrambleInterval);
  };

  useEffect(() => {
    return () => {
      if (scrambleIntervalRef.current) {
        clearInterval(scrambleIntervalRef.current);
      }
    };
  }, []);

  return (
    <div
      onMouseEnter={scrambleText}
      onMouseLeave={scrambleText}
      className="text-center text-[100px]/[100%] font-bold -tracking-[2%] font-neuebit"
    >
      {displayedText}
    </div>
  );
};

export default ScrambleText;
