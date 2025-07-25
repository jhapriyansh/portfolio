"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ResumeSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-8">Resume</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Download my resume to learn more about my experience and
          qualifications.
        </p>
        <a href="/resume.pdf" download>
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-gray-900 bg-white hover:text-white transition-colors hover:border-white border-2 border-gray-400"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </a>
      </div>
    </section>
  );
}
