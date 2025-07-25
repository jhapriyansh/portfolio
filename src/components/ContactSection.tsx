"use client";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-8">Contact Me</h2>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          Let's work together to bring your ideas to life. I'm always open to
          discussing new opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="mailto:jhapriyanshu336@gmail.com">
            <Button
              size="lg"
              className="bg-gray-900 text-white hover:bg-white border-2 border-white border-solid hover:border-gray-400 hover:text-black transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              jhapriyanshu336@gmail.com
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
