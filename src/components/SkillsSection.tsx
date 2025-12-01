"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Server, Cpu, Boxes } from "lucide-react";
import { motion } from "framer-motion";

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
    category: "Databases & Cloud",
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
    category: "Tools & Ops",
    icon: <Boxes className="w-4 h-4" />,
    items: ["Git", "Docker", "Postman", "Nginx", "Linux", "Vercel"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-[#6EE7B7]">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="h-full" // <── ADD THIS
            >
              <Card
                className="h-full border-[#6EE7B7]/25 bg-black/70 backdrop-blur-sm 
                   hover:shadow-[0_0_28px_rgba(110,231,183,0.25)] transition-all"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base text-[#6EE7B7]">
                    <span>{skill.icon}</span>
                    {skill.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-full">
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="bg-black/60 border border-[#6EE7B7]/35 text-zinc-200 text-[0.68rem] font-mono"
                      >
                        {item}
                      </Badge>
                    ))}
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
