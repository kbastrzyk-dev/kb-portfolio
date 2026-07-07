"use client";

import { motion } from "framer-motion";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  // Animacja "mask reveal" - tekst wyjeżdża z dołu i zwalnia pod koniec
  const revealAnimation = {
    initial: { y: "100%" },
    animate: { y: 0 },
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  };

  return (
    <main className="flex flex-col ">
      {/* Sekcja Hero (Powitalna) */}
      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden">
        {/* maska dla imienia */}
        <div className="overflow-hidden">
          <motion.h1
            variants={revealAnimation}
            initial="initial"
            animate="animate"
            className="text-6xl font-bold tracking-tighter uppercase md:text-8xl lg:text-9xl text-[#f3f4f6]"
          >
            Krzysztof
          </motion.h1>
        </div>

        {/* maska dla stanowiska */}
        <div className="mt-4 overflow-hidden md:mt-6">
          <motion.h2
            variants={revealAnimation}
            initial="initial"
            animate="animate"
            // Małe opóźnienie, żeby tekst pojawił się po imieniu
            transition={{ ...revealAnimation.transition, delay: 0.1 }}
            className="text-xl font-light tracking-wide text-gray-400 md:text-3xl"
          >
            Frontend Developer
          </motion.h2>
        </div>
      </section>

      {/* Wyświetlanie nowych komponentów */}
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
