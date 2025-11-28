"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Server, Cpu, Boxes } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: <Code className="w-4 h-4" />,
    items: ["C", "C++", "JavaScript", "TypeScript", "Python"],
  },
  {
    category: "Frontend",
    icon: <Globe className="w-4 h-4" />,
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    category: "Backend",
    icon: <Server className="w-4 h-4" />,
    items: ["Node.js", "Express.js", "WebSockets (Socket.IO)", "REST APIs"],
  },
  {
    category: "Databases",
    icon: <Database className="w-4 h-4" />,
    items: [
      "MongoDB (Mongoose)",
      "MySQL",
      "Supabase",
      "Firebase",
      "Cloudinary",
    ],
  },
  {
    category: "Systems & Performance",
    icon: <Cpu className="w-4 h-4" />,
    items: ["WebAssembly (WASM)", "Emscripten", "PThreads"],
  },
  {
    category: "Tools",
    icon: <Boxes className="w-4 h-4" />,
    items: ["Git", "Docker", "Postman", "Nginx", "Linux", "Vercel"],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.category}
              className={`border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] delay-${
                index * 100
              }`}
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  {skill.icon}
                  {skill.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
