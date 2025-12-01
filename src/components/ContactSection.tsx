"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#6EE7B7]">
            Contact Me
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 mb-10 leading-relaxed">
            Have an idea, project, or opportunity? I&apos;d love to hear about
            it. Drop me an email and let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:jhapriyanshu336@gmail.com">
              <Button
                size="lg"
                className="bg-[#6EE7B7] text-black hover:bg-[#A7F3D0] border border-[#6EE7B7] font-mono text-xs sm:text-sm shadow-[0_0_26px_rgba(110,231,183,0.5)]"
              >
                <Mail className="w-4 h-4 mr-2" />
                jhapriyanshu336@gmail.com
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
