"use client";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <Separator className="mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500">
            © 2025 Priyanshu Kumar Jha. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/jhapriyansh">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-gray-100 transition-colors"
              >
                <Github className="w-4 h-4" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/priyanshu-kumarjha/">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-gray-100 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </a>
            <a href="mailto:jhapriyanshu336@gmail.com">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-gray-100 transition-colors"
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
