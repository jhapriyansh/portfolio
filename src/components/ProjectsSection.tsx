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
    title: "Social Media App",
    type: "fs",
    description:
      "A full-stack social media application featuring user authentication, profiles, post creation, a real-time feed, and real-time direct messaging (DMs).", // Changed
    tech: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ], // Changed
    github: "https://github.com/jhapriyansh/socialmedia-app",
    live: "#", // Add your live deployment link here
  },
  {
    title: "Todo Application",
    type: "fs",
    description:
      "Full-stack todo application with user authentication, task management, and real-time updates.",
    tech: ["React.js", "MongoDB", "Node.js", "Bootstrap", "Express.js"],
    github: "https://github.com/jhapriyansh/todo-mern-app",
    live: "#",
  },
  {
    title: "Blogify",
    type: "fs",
    description:
      "Full-stack blogging platform with a React front end and a RESTful API. Features user authentication, post management, comments, and likes.",
    tech: ["React.js", "Vite", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/jhapriyansh/blogify",
    live: "no deployment yet",
  },
  {
    title: "React Hangman",
    type: "fe",
    description:
      "A classic Hangman word-guessing game built with React. Features dynamic word generation, visual hangman drawing, and interactive keyboard input.",
    tech: ["React.js", "TypeScript", "CSS", "vite"],
    github: "https://github.com/jhapriyansh/react-hangman",
    live: "https://react-hangman-delta.vercel.app/",
  },
  {
    title: "Portfolio",
    type: "fe",
    description:
      "A modern and responsive developer portfolio built with Next.js and Tailwind CSS along with shadcn/ui components. Showcases projects, skills, and contact details with smooth animations and a super clean UI.",
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui", "TypeScript"],
    github: "https://github.com/jhapriyansh/portfolio",
    live: "https://priyanshujha-portfolio.vercel.app/",
  },
  {
    title: "StockSphere (Inventory & Billing System)",
    type: "fs",
    description:
      "A full-stack inventory and billing management system with role-based workflows (Admin & Staff), real-time billing counter updates via WebSockets, and a QR-based mobile scanning workflow (PoC).",
    tech: [
      "React.js",
      "Vite",
      "CSS Modules",
      "Context API",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Socket.IO",
    ],
    github: "https://github.com/jhapriyansh/stocksphere-showcase",
    live: "#",
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
