"use client";

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-[70vh] flex items-center justify-center pt-24 pb-12 px-4"
    >
      <div className="max-w-4xl w-full flex flex-col gap-5">
        <p className="font-mono text-xs sm:text-sm text-[#6EE7B7]/80">
          &gt; full stack developer / systems enthusiast
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-white">Priyanshu</span>{" "}
          <span className="text-[#6EE7B7]">Kumar Jha</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
          I build fast, clean web applications with{" "}
          <span className="text-[#6EE7B7]">React / Next.js</span> and{" "}
          <span className="text-[#6EE7B7]">Node.js</span>, with a growing focus
          on systems, OS internals, and WebAssembly to squeeze more out of the
          browser.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <span className="font-mono text-xs sm:text-sm px-3 py-1 rounded-full border border-[#6EE7B7]/40 text-[#6EE7B7] bg-black/50">
            MERN stack
          </span>
          <span className="font-mono text-xs sm:text-sm px-3 py-1 rounded-full border border-[#6EE7B7]/40 text-[#6EE7B7] bg-black/50">
            C / C++ &amp; systems
          </span>
          <span className="font-mono text-xs sm:text-sm px-3 py-1 rounded-full border border-[#6EE7B7]/40 text-[#6EE7B7] bg-black/50">
            WebAssembly &amp; performance
          </span>
        </div>
      </div>
    </section>
  );
}
