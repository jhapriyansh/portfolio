"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-zinc-800 mt-6 bg-black/85">
      <div className="max-w-5xl mx-auto">
        <Separator className="mb-6 bg-zinc-800" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-zinc-400 font-mono">
            © {new Date().getFullYear()} Priyanshu Kumar Jha
            <span className="opacity-70"> · built with Next.js</span>
          </p>
          <div className="flex gap-2">
            <a
              href="https://github.com/jhapriyansh"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-[#6EE7B7] hover:bg-[#6EE7B7]/10"
              >
                <Github className="w-4 h-4" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshu-kumarjha/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-[#6EE7B7] hover:bg-[#6EE7B7]/10"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </a>
            <a href="mailto:jhapriyanshu336@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="text-[#6EE7B7] hover:bg-[#6EE7B7]/10"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
