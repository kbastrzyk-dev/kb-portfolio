"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  BarChart3,
  Terminal,
  Cpu,
} from "lucide-react";

const skills = [
  {
    name: "React / Next.js",
    icon: <Layout className="w-8 h-8" />,
    desc: "Budowanie nowoczesnych interfejsów",
  },
  {
    name: "JavaScript",
    icon: <Code2 className="w-8 h-8" />,
    desc: "Logika i interakcje",
  },
  {
    name: "Apex",
    icon: <Terminal className="w-8 h-8" />,
    desc: "Salesforce Development",
  },
  {
    name: "SQL",
    icon: <Database className="w-8 h-8" />,
    desc: "Zarządzanie danymi",
  },
  {
    name: "Power BI",
    icon: <BarChart3 className="w-8 h-8" />,
    desc: "Analityka i wizualizacja",
  },
  {
    name: "Tailwind CSS",
    icon: <Cpu className="w-8 h-8" />,
    desc: "Szybkie i responsywne style",
  },
];

export default function Skills() {
  return (
    <section className="w-full bg-[#0a0a0a] px-4 py-24 md:px-12 lg:px-24">
      <div className="mb-16 border-b border-gray-800 pb-8">
        <h2 className="text-3xl font-light uppercase tracking-widest text-gray-400">
          Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, backgroundColor: "#141414" }}
            className="group relative flex flex-col justify-between rounded-2xl border border-gray-800 p-8 transition-all duration-300"
          >
            <div className="mb-4 text-gray-500 group-hover:text-[#f3f4f6] transition-colors">
              {skill.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#f3f4f6] mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-500">{skill.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
