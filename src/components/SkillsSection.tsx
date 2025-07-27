"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Server } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Globe className="w-4 h-4" />,
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Figma",
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-4 h-4" />,
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    icon: <Database className="w-4 h-4" />,
    items: [
      "MySQL",
      "MongoDB",
      "Supabase",
      "Firebase",
      "PostgreSQL",
    ],
  },
  {
    category: "Tools",
    icon: <Code className="w-4 h-4" />,
    items: ["GitHub", "Docker", "Vercel", "Postman", "VS Code", "Linux"],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
