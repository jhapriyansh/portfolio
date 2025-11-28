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

const projects = [
  {
    title: "Social Media App (Frontend)",
    type: "fs",
    description:
      "Responsive social media frontend featuring authentication, profiles, a real-time chat system, posts, comments, likes, and activity feeds. Built with modern React tooling and optimized client-side performance.",
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
      "Scalable backend powering a full social media platform with JWT auth, user profiles, posts, comments, notifications, and real-time messaging. Includes media uploads via Cloudinary and websocket-based chat.",
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
      "High-performance orbital visualizer using a multithreaded WebAssembly module compiled from C via Emscripten. Generates hydrogen-like orbital particle clouds and renders them interactively using React + Three.js.",
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
    title: "StockSphere (Inventory & Billing System) – Frontend",
    type: "fs",
    description:
      "Inventory and billing management frontend with role-based dashboards (Admin/Staff), product management, stock requests, billing interface, and structured UI components with CSS Modules.",
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
      "Backend server for the StockSphere system with JWT auth, product and stock request APIs, bill generation endpoints, and MongoDB-based data models for users, products, and billing workflows.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    github: "https://github.com/jhapriyansh/stocksphereims-be",
    live: "#",
  },

  {
    title: "Blogify",
    type: "fs",
    description:
      "Full-stack blogging platform with user auth, post CRUD, comments, like system, and timestamped activity. Clean REST API and structured React/Vite frontend.",
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
      "Task management platform with JWT auth, task CRUD, filtering, and clean React UI. Includes Node/Express backend with MongoDB for persistent storage.",
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
      "Interactive Hangman puzzle game built with React and TypeScript featuring animated drawing stages and responsive UI.",
    tech: ["React.js", "TypeScript", "CSS", "Vite"],
    github: "https://github.com/jhapriyansh/react-hangman",
    live: "https://react-hangman-delta.vercel.app/",
  },

  {
    title: "Developer Portfolio",
    type: "fe",
    description:
      "Modern developer portfolio built using Next.js, Tailwind CSS, and shadcn/ui. Features elegant animations, responsive layouts, and structured project/skills sections.",
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui", "TypeScript"],
    github: "https://github.com/jhapriyansh/portfolio",
    live: "https://priyanshujha-portfolio.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`border-gray-200 hover:shadow-xl transition-all duration-300 hover:translate-y-[-6px] delay-${
                index * 150
              }`}
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-gray-900 hover:text-white transition-colors bg-gray-50"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                  {project.type === "fe" && (
                    <a href={project.live} target="_blank">
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-gray-900 bg-gray-50 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
