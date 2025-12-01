"use client";

import { useEffect, useState } from "react";

type Phase = "hello" | "name" | "kill";

export default function TerminalIntro({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>("hello");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("name"), 400);
    const t2 = setTimeout(() => setPhase("kill"), 1200);
    const t3 = setTimeout(onDone, 1800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onDone]);

  const isKilling = phase === "kill";

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black">
      <div
        className={[
          "relative",
          "w-[340px] sm:w-[440px] md:w-[520px]",
          "h-[90px] sm:h-[100px]",
          "flex items-center justify-start",
          "border border-[#6EE7B7]/60 bg-black/90 backdrop-blur",
          "shadow-[0_0_35px_rgba(110,231,183,0.5)]",
          "transition-all duration-700 px-6",
          "rounded-2xl",
          isKilling
            ? "opacity-0 scale-110 brightness-150"
            : "opacity-100 scale-100",
        ].join(" ")}
      >
        <div className="absolute left-4 top-4 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-[0_0_6px_#FF5F57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-[0_0_6px_#FEBC2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-[0_0_6px_#28C840]"></div>
        </div>

        <div className="relative w-full font-mono text-lg sm:text-xl text-[#E5FFF5]">
          <span className="text-[#6EE7B7] mr-2">&gt;</span>

          <span className="relative inline-block align-middle">
            <span className="opacity-0 inline-block">
              I&apos;m Priyanshu Kumar Jha
            </span>

            <span
              className={[
                "absolute inset-0 left-0 top-0",
                "transition-opacity duration-300",
                phase === "hello" ? "opacity-100" : "opacity-0",
              ].join(" ")}
            >
              Hello World
            </span>

            <span
              className={[
                "absolute inset-0 left-0 top-0",
                "transition-opacity duration-300",
                phase === "name" || phase === "kill"
                  ? "opacity-100"
                  : "opacity-0",
              ].join(" ")}
            >
              I&apos;m Priyanshu Kumar Jha
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
