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
    title: "Social Media App (Frontend)",
    type: "fs",
    description:
      "Responsive social media frontend featuring authentication, profiles, a real-time chat system, posts, comments, likes, and activity feeds.",
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "React Router",
      "Socket.IO",
      "Material UI Icons",
      "React Toastify",
    ],
    github: "https://github.com/jhapriyansh/socialmedia-app",
    live: "#",
  },
  {
    title: "Social Media App (Backend)",
    type: "be",
    description:
      "Scalable backend powering a full social media platform with JWT auth, user profiles, posts, comments, notifications, and real-time messaging.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Socket.IO",
      "Cloudinary",
      "Multer",
    ],
    github: "https://github.com/jhapriyansh/socialmedia-app-backend",
    live: "#",
  },
  {
    title: "SimuCore – WebAssembly Orbital Visualizer",
    type: "fe",
    description:
      "High-performance orbital visualizer using a multithreaded WebAssembly module compiled from C via Emscripten, rendered with React + Three.js.",
    tech: [
      "C",
      "WebAssembly (WASM)",
      "Emscripten",
      "PThreads",
      "JavaScript",
      "React.js",
      "Three.js",
    ],
    github: "https://github.com/jhapriyansh/simucore",
    live: "https://simucore.netlify.app",
  },
  {
    title: "StockSphere (Frontend)",
    type: "fs",
    description:
      "Inventory and billing management frontend with role-based dashboards, product management, stock requests, and billing flows.",
    tech: [
      "React.js",
      "Vite",
      "React Context",
      "React Router",
      "CSS Modules",
      "Axios",
    ],
    github: "https://github.com/jhapriyansh/stocksphereims",
    live: "#",
  },
  {
    title: "StockSphere Backend",
    type: "be",
    description:
      "Backend for StockSphere with JWT auth, product and stock APIs, bill generation, and MongoDB models.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    github: "https://github.com/jhapriyansh/stocksphereims-be",
    live: "#",
  },
  {
    title: "Blogify",
    type: "fs",
    description:
      "Full-stack blogging platform with auth, post CRUD, comments, likes, and activity timelines.",
    tech: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Bootstrap",
    ],
    github: "https://github.com/jhapriyansh/blogify",
    live: "#",
  },
  {
    title: "Todo Application (MERN)",
    type: "fs",
    description:
      "Task management app with JWT auth, task CRUD, filtering, and a clean React UI backed by Node/Express and MongoDB.",
    tech: [
      "React.js",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],
    github: "https://github.com/jhapriyansh/todo-mern-app",
    live: "#",
  },
  {
    title: "React Hangman",
    type: "fe",
    description:
      "Interactive Hangman puzzle game built with React and TypeScript with animated drawing stages.",
    tech: ["React.js", "TypeScript", "CSS", "Vite"],
    github: "https://github.com/jhapriyansh/react-hangman",
    live: "https://react-hangman-delta.vercel.app/",
  },
  {
    title: "Developer Portfolio",
    type: "fe",
    description:
      "Modern developer portfolio built using Next.js, Tailwind CSS, and shadcn/ui.",
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui", "TypeScript"],
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
