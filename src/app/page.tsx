"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Menu,
  X,
  Code,
  Database,
  Server,
  Wrench,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact Me" },
  ];

  const skills = {
    frontend: [
      { name: "React", level: "Advanced" },
      { name: "HTML/CSS", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
    ],
    backend: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "REST APIs", level: "Advanced" },
    ],
    database: [
      { name: "MongoDB", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
    ],
    tools: [
      { name: "Git", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "AWS", level: "Beginner" },
      { name: "Figma", level: "Intermediate" },
    ],
  };

  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg?height=200&width=300",
      githubUrl: "https://github.com/username/ecommerce",
      liveUrl: "https://ecommerce-demo.com",
    },
    {
      id: 2,
      name: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      techStack: ["React", "Express", "PostgreSQL", "Socket.io"],
      image: "/placeholder.svg?height=200&width=300",
      githubUrl: "https://github.com/username/taskmanager",
      liveUrl: "https://taskmanager-demo.com",
    },
    {
      id: 3,
      name: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts and interactive charts.",
      techStack: ["React", "Chart.js", "Weather API", "Tailwind"],
      image: "/placeholder.svg?height=200&width=300",
      githubUrl: "https://github.com/username/weather",
      liveUrl: "https://weather-demo.com",
    },
  ];

  return (
    <div className="min-h-screen h-screen bg-gradient-to-b from-[#fe9b62] to-[#e66f5c] text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#3f4f6e22] backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-black">
                Priyanshu Kumar Jha
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors  ${
                      activeSection === item.id
                        ? "bg-black/15 text-white"
                        : "hover:text-white hover:bg-black/5"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-4 border-transparent hover:border-[#2a3750] text-black hover:bg-black/5 hover:text-white bg-transparent"
                  onClick={() =>
                    window.open("https://example.com/resume.pdf", "_blank")
                  }
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-primary/5"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.id
                      ? "text-[#fe9b62] bg-primary/10"
                      : "text-[#fe9b62] hover:text-[#fe9b62] hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="mt-2 ml-3 border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                onClick={() =>
                  window.open("https://example.com/resume.pdf", "_blank")
                }
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* About Me Section */}
      <section id="about" className="pt-24 h-screen pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative">
                <img
                  src="heroPhoto.png"
                  alt="heroPhoto.png"
                  className="w-80 h-80 rounded-4xl object-contain mx-auto lg:mx-0 shadow-2xl"
                />
              </div>
            </div>

            <div className="animate-slide-in-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#131f2f] mb-6">
                Hi, I'm{" "}
                <span className="text-[#3f4f6e]">Priyanshu Kumar Jha</span>
              </h2>
              <p className="text-lg text-[#f7f8fa] mb-6 leading-relaxed">
                <br />
                Full-stack by skill.{" "}
                <span className="bg-gradient-to-r from-[#1d2a3a] to-[#3f4f6e] bg-clip-text text-transparent">
                  Precise{" "}
                </span>
                by instinct.
              </p>
              <p className="text-lg text-[#f7f8fa] mb-8 leading-relaxed">
                Outside of coding, I spend time deepening my understanding of
                technologies like C++ and the MERN stack, contributing to
                open-source, and staying active in the developer community
                through shared learning.
              </p>

              <div className="flex gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-primary hover:text-[#fe9b62] hover:bg-[#131f2f] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.4)] transition-all duration-200"
                >
                  Get In Touch
                </Button>
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-primary text-white hover:text-[#fe9b62] hover:bg-[#131f2f] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.4)] transition-all duration-200"
                >
                  View My Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#e66f5c] to-[#695c7b]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#f7f8fa] mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-[#c0c3d1] max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to
              life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            <Card className="group bg-gradient-to-t from-[#e66f5c] to-[#695c7b] border border-[#2a3750] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#e66f5c] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#fe9b62] transition-colors">
                  <Code className="w-6 h-6 text-[#f7f8fa]" />
                </div>
                <CardTitle className="text-[#f7f8fa]">Frontend</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  {skills.frontend.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex justify-between items-center text-[#c0c3d1]"
                    >
                      <span className="text-sm font-medium">{skill.name}</span>
                      <Badge
                        variant="outline"
                        className="text-xs border-[#2a3750] text-[#695c7b]"
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-t from-[#e66f5c] to-[#695c7b] border border-[#2a3750] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#e66f5c] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#fe9b62] transition-colors">
                  <Server className="w-6 h-6 text-[#f7f8fa]" />
                </div>
                <CardTitle className="text-[#f7f8fa]">Backend</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  {skills.backend.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex justify-between items-center text-[#c0c3d1]"
                    >
                      <span className="text-sm font-medium">{skill.name}</span>
                      <Badge
                        variant="outline"
                        className="text-xs border-[#2a3750] text-[#695c7b]"
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-t from-[#e66f5c] to-[#695c7b] border border-[#2a3750] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#e66f5c] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#fe9b62] transition-colors">
                  <Database className="w-6 h-6 text-[#f7f8fa]" />
                </div>
                <CardTitle className="text-[#f7f8fa]">Database</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  {skills.database.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex justify-between items-center text-[#c0c3d1]"
                    >
                      <span className="text-sm font-medium">{skill.name}</span>
                      <Badge
                        variant="outline"
                        className="text-xs border-[#2a3750] text-[#695c7b]"
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-t from-[#e66f5c] to-[#695c7b] border border-[#2a3750] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#f29b4f] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#fe9b62] transition-colors">
                  <Wrench className="w-6 h-6 text-[#f7f8fa]" />
                </div>
                <CardTitle className="text-[#f7f8fa]">Tools</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  {skills.tools.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex justify-between items-center text-[#c0c3d1]"
                    >
                      <span className="text-sm font-medium">{skill.name}</span>
                      <Badge
                        variant="outline"
                        className="text-xs border-[#2a3750] text-[#695c7b]"
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className=" bg-gradient-to-b from-[#695c7b] to-[#3f4f6e] py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-dark group-hover:text-primary transition-colors">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b to-[#102e4d] from-[#3f4f6e]"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations.
              Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-dark">Send me a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        className="focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project or just say hello!"
                        rows={5}
                        className="focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-dark mb-4">
                  Let's connect
                </h3>
                <p className="text-gray-600 mb-6">
                  Feel free to reach out through any of these platforms. I'm
                  always happy to connect with fellow developers and potential
                  collaborators.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:john@example.com"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 group-hover:text-primary">
                      john@example.com
                    </span>
                  </a>

                  <a
                    href="https://linkedin.com/in/johndeveloper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 group-hover:text-primary">
                      LinkedIn Profile
                    </span>
                  </a>

                  <a
                    href="https://github.com/johndeveloper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-colors group"
                  >
                    <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 group-hover:text-primary">
                      GitHub Profile
                    </span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-xl text-white">
                <h4 className="text-lg font-semibold mb-2">
                  Ready to start a project?
                </h4>
                <p className="text-white/90 mb-4">
                  Download my resume to learn more about my experience and
                  skills.
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() =>
                    window.open("https://example.com/resume.pdf", "_blank")
                  }
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#102e4d] to-[#131f2f] text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 John Developer. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
