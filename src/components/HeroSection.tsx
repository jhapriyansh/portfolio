"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div
        className={`text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-normal mb-6 tracking-tight">
          Priyanshu <span className="font-light">Kumar Jha</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
          Full Stack Web Developer
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Crafting digital experiences with clean code and thoughtful design
        </p>
      </div>
    </section>
  );
}
