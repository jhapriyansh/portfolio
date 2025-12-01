"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

const sections = [
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact Me" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 10);

      const checkpoint = y + window.innerHeight * 0.3;
      let bestId = sections[0]!.id;
      let bestDist = Infinity;

      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const dist = Math.abs(top - checkpoint);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = id;
        }
      });

      setActive(bestId);
    };

    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "hidden sm:block fixed top-0 left-0 right-0 z-20 transition-colors",
        scrolled
          ? "bg-black/70 backdrop-blur border-b border-[#6EE7B7]/20"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="font-mono text-xs sm:text-sm text-[#6EE7B7]">
          &gt; priyanshu_jha<span className="opacity-60"> / portfolio</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={cn(
                "px-2.5 sm:px-3 py-1 rounded-md text-[0.7rem] sm:text-xs font-mono transition-all border border-transparent",
                active === s.id
                  ? "bg-[#6EE7B7] text-black shadow-[0_0_14px_rgba(110,231,183,0.7)]"
                  : "text-zinc-200 hover:text-black hover:bg-[#6EE7B7]/80 hover:border-[#6EE7B7]"
              )}
            >
              {s.label}
            </button>
          ))}

          <a
            href="https://drive.google.com/file/d/1JeVfrKL_VtLY9O87wyi5j-WvdF8wIiIy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1"
          >
            <button className="flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-md text-[0.7rem] sm:text-xs font-mono border border-[#6EE7B7]/60 text-[#6EE7B7] hover:bg-[#6EE7B7] hover:text-black transition-all shadow-[0_0_12px_rgba(110,231,183,0.7)]">
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Resume</span>
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
}
