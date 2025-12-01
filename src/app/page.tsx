"use client";

import { useState } from "react";
import TerminalIntro from "@/components/TerminalIntro";
import CurtainReveal from "@/components/CurtainReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [phase, setPhase] = useState<"intro" | "reveal" | "ready">("intro");

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
        <Footer />
      </div>

      {phase === "intro" && <TerminalIntro onDone={() => setPhase("reveal")} />}

      {phase === "reveal" && <CurtainReveal onDone={() => setPhase("ready")} />}
    </main>
  );
}
