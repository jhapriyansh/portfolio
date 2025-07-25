"use client";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="transition-all duration-700 hover:translate-y-[-2px]">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a full stack developer who enjoys building things that are
                fast, functional, and easy to use. With 2+ years of experience,
                I've worked across the stack to turn ideas into polished,
                working products.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new technologies,
                diving deep into Operating System internals, contributing to
                open source projects, or sharing knowledge with the developer
                community.
              </p>

              <div className="flex gap-4">
                <a href="https://github.com/jhapriyansh" target="_blank">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-gray-900 hover:text-white transition-colors bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/priyanshu-kumar-jha-b05407231/"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-gray-900 hover:text-white transition-colors bg-transparent"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
            <div className="bg-gray-200 aspect-square overflow-hidden rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">
                <img src="heroPhoto.png" alt="pfp" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
