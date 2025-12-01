"use client";

import { useEffect, useState } from "react";

export default function CurtainReveal({ onDone }: { onDone: () => void }) {
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setSlide(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className="fixed inset-0 z-30 bg-black"
      style={{
        transform: slide ? "translateX(100%)" : "translateX(0%)",
        transition: "transform 1.1s cubic-bezier(0.7, 0, 0.3, 1)",
      }}
      onTransitionEnd={onDone}
    />
  );
}
