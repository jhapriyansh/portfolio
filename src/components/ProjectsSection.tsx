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
    title: "Todo Application",
    description:
      "Full-stack todo application with user authentication, task management, and real-time updates.",
    tech: ["React.js", "MongoDB", "Node.js", "Bootstrap", "Express.js"],
    github: "https://github.com/jhapriyansh/todo-mern-app",
    live: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Lightweight, responsive e-commerce app built with React.js and LocalStorage for cart and session management—no backend needed.",
    tech: ["React.js"],
    github: "https://github.com/jhapriyansh/e-comm-fe",
    live: "https://nscc-web-project.vercel.app/",
  },
  {
    title: "Blogify Backend",
    description:
      "RESTful API for a blogging platform with user authentication, post management, comments and likes.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/jhapriyansh/blogify",
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
