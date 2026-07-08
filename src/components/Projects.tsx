"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projectsList = [
  {
    id: 1,
    title: "ML Gym Predictor",
    category: "Machine Learning / Data",
    year: "2026",
    link: "https://github.com/kbastrzyk-dev/ML-Gym-Predictor",
  },
  {
    id: 2,
    title: "garage_inventory",
    category: "Full-Stack / Web App",
    year: "2026",
    link: "https://github.com/kbastrzyk-dev/garage_inventory",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full  px-4 py-24 md:px-12 lg:px-24 text-[#f3f4f6]">
      <div className="mb-12 border-b border-gray-800 pb-8">
        <h2 className="text-3xl font-light uppercase tracking-widest text-gray-400">
          Selected Works
        </h2>
      </div>

      <div className="flex flex-col">
        {projectsList.map((project, index) => (
          <motion.div
            key={project.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative flex cursor-pointer items-center justify-between border-b border-gray-800 py-8 transition-colors duration-500 hover:border-gray-200"
          >
            <motion.div
              animate={{
                x: hoveredIndex === index ? 20 : 0,
                opacity:
                  hoveredIndex !== null && hoveredIndex !== index ? 0.3 : 1,
              }}
              transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
              className="flex flex-col"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-4xl font-bold tracking-tight transition-colors duration-300 hover:text-gray-200 md:text-6xl lg:text-7xl"
              >
                {project.title}
              </a>
              <span className="mt-2 text-sm font-medium tracking-wider text-gray-500 uppercase md:text-base">
                {project.category}
              </span>
            </motion.div>

            <motion.div
              animate={{
                opacity:
                  hoveredIndex !== null && hoveredIndex !== index ? 0.3 : 1,
              }}
              className="text-lg font-light text-gray-400 md:text-2xl"
            >
              {project.year}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
