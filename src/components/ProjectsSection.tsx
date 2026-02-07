"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "S-Core — Syllabus-Aware AI Study Companion",
    type: "fs",
    description:
      "AI-powered study system enforcing strict syllabus boundaries using RAG, domain guards, and adaptive learning modes.",
    tech: [
      "React",
      "Vite",
      "FastAPI",
      "ChromaDB",
      "ONNX Runtime",
      "Sentence Transformers",
      "MongoDB",
      "Groq LLaMA 3.3",
    ],
    github: "https://github.com/jhapriyansh/s-core-frontend",
    live: "#",
  },

  {
    title: "RepoCraft — AI Repository Analysis Platform",
    type: "fs",
    description:
      "AI platform that analyzes GitHub repositories to generate READMEs, resume bullets, and portfolio summaries.",
    tech: [
      "Next.js",
      "FastAPI",
      "GitHub OAuth",
      "LLMs",
      "Streaming Responses",
      "MongoDB",
    ],
    github: "https://github.com/jhapriyansh/repocraft",
    live: "https://repocraft-phi.vercel.app",
  },

  {
    title: "SimuCore — WebAssembly Orbital Visualizer",
    type: "fe",
    description:
      "High-performance orbital visualization engine using multithreaded WebAssembly compiled from C and rendered with React + Three.js.",
    tech: [
      "C",
      "WebAssembly",
      "Emscripten",
      "PThreads",
      "React",
      "Three.js",
    ],
    github: "https://github.com/jhapriyansh/simucore",
    live: "https://simucore.netlify.app",
  },

  {
    title: "Social Media Platform",
    type: "fs",
    description:
      "Full-featured social media platform with authentication, posts, real-time chat, notifications, and media handling.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "JWT",
      "Socket.IO",
      "Cloudinary",
    ],
    github: "https://github.com/jhapriyansh/socialmedia-app",
    live: "#",
  },

  {
    title: "StockSphere — Inventory Management System",
    type: "fs",
    description:
      "Role-based inventory and billing system with product management, stock tracking, and invoice generation.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "JWT",
      "RBAC",
    ],
    github: "https://github.com/jhapriyansh/stocksphereims",
    live: "#",
  },

  {
    title: "Developer Portfolio",
    type: "fe",
    description:
      "Personal developer portfolio showcasing projects, experience, and technical focus areas.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui"],
    github: "https://github.com/jhapriyansh/portfolio",
    live: "https://priyanshujha-portfolio.vercel.app/",
  },
];


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-[#6EE7B7]">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="h-full" // ← REQUIRED
            >
              <Card
                className="h-full border-[#6EE7B7]/25 bg-black/75 backdrop-blur-sm 
                   hover:shadow-[0_0_28px_rgba(110,231,183,0.25)]
                   hover:-translate-y-1.5 transition-all"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-[#6EE7B7]">
                    {project.title}
                  </CardTitle>

                  <CardDescription className="text-xs uppercase tracking-[0.16em] text-zinc-400">
                    {project.type === "fs"
                      ? "Full Stack"
                      : project.type === "fe"
                      ? "Frontend"
                      : "Backend"}
                  </CardDescription>

                  <CardDescription className="text-zinc-300 text-sm mt-2 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-[#6EE7B7]/35 text-zinc-200 bg-black/60 text-[0.68rem] font-mono"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#6EE7B7]/60 text-[#6EE7B7] bg-transparent 
                           hover:bg-[#6EE7B7] hover:text-black transition-colors 
                           font-mono text-xs"
                      >
                        <Github className="w-4 h-4 mr-1.5" />
                        Code
                      </Button>
                    </a>

                    {project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#6EE7B7]/60 text-[#6EE7B7] bg-transparent 
                             hover:bg-[#6EE7B7] hover:text-black transition-colors 
                             font-mono text-xs"
                        >
                          <ExternalLink className="w-4 h-4 mr-1.5" />
                          Live
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
