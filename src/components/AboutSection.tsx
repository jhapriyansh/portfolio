"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-[#6EE7B7]/25 bg-black/70 backdrop-blur-sm p-6 sm:p-8 shadow-[0_0_35px_rgba(110,231,183,0.18)]"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-[#6EE7B7] text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <p>
                I&apos;m a full stack developer who enjoys building things that
                are fast, functional, and easy to use. I work across the stack
                to turn ideas into polished, working products with clarity and
                performance in mind.
              </p>
              <p>
                I like digging into operating systems, internals, and low-level
                details that most people ignore. At the same time, I care a lot
                about good UI, smooth flows, and developer experience.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m usually exploring new tools,
                reading about systems design, contributing to projects, or
                helping other developers learn.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://github.com/jhapriyansh"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#6EE7B7]/60 text-[#6EE7B7] bg-transparent hover:bg-[#6EE7B7] hover:text-black hover:border-[#6EE7B7] transition-colors font-mono text-xs"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/priyanshu-kumarjha/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#6EE7B7]/60 text-[#6EE7B7] bg-transparent hover:bg-[#6EE7B7] hover:text-black hover:border-[#6EE7B7] transition-colors font-mono text-xs"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-xl border border-[#6EE7B7]/40 overflow-hidden shadow-[0_0_40px_rgba(110,231,183,0.35)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(110,231,183,0.22)_0,_transparent_65%)]" />
                <img
                  src="heroPhoto.png"
                  alt="Priyanshu portrait"
                  className="relative z-10 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
