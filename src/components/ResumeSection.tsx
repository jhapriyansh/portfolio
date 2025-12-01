"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#6EE7B7]">
            Resume
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 mb-8 leading-relaxed">
            Want the full story? Download my resume for a detailed view of my
            experience, projects, and skills.
          </p>
          <a
            href="https://drive.google.com/file/d/1JeVfrKL_VtLY9O87wyi5j-WvdF8wIiIy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-[#6EE7B7]/70 bg-black text-[#6EE7B7] hover:bg-[#6EE7B7] hover:text-black hover:border-[#6EE7B7] transition-colors font-mono text-xs sm:text-sm shadow-[0_0_26px_rgba(110,231,183,0.35)]"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
