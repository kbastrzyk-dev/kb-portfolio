"use client";

import { motion } from "framer-motion";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  const name = "KRZYSZTOF";

  // Warianty dla głównego kontenera
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08, // Odstęp czasowy między każdą literą
      },
    },
  };

  // Warianty dla pojedynczej litery
  const letterVariants = {
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <main className="flex flex-col relative">
      <section className="relative z-10 flex h-screen flex-col items-center justify-center overflow-hidden">
        {/* Maska dla imienia - litery wyskakują w górę */}
        <div className="overflow-hidden flex">
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="flex"
          >
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl text-[#f3f4f6]"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Subtitle pojawia się lekko po literach */}
        <div className="mt-4 overflow-hidden md:mt-6">
          <motion.h2
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.8 }}
            className="text-xl font-light tracking-wide text-gray-400 md:text-3xl uppercase"
          >
            Frontend Developer
          </motion.h2>
        </div>
      </section>

      <div className="relative z-10">
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
