"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="flex w-full flex-col items-center justify-center border-t border-gray-800  px-4 py-32 text-[#f3f4f6] md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-gray-500">
          Ready to work together?
        </h2>

        {/* Wielki, interaktywny adres e-mail */}
        <h3 className="mb-12 cursor-pointer text-4xl font-bold tracking-tighter transition-colors hover:text-gray-400 md:text-6xl lg:text-7xl">
          <a href="mailto:kris.bastrzyk@gmail.com">kris.bastrzyk@gmail.com</a>
        </h3>

        {/* Bio */}
        <p className="mb-16 text-lg font-light leading-relaxed text-gray-400 md:text-xl">
          I'm a Frontend Developer and Computer Science student at Collegium Da
          Vinci, based locally in Poznań. I combine modern web technologies like
          React with a strong understanding of enterprise business logic as a
          Certified Salesforce Administrator. Always ready to build immersive,
          reliable digital experiences.
        </p>

        {/* Linki do profili */}
        <div className="flex justify-center gap-8 text-sm font-medium uppercase tracking-wider text-gray-500">
          <a
            href="https://www.linkedin.com/in/krzysztof-bastrzyk/"
            className="transition-colors hover:text-[#f3f4f6]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kbastrzyk-dev"
            className="transition-colors hover:text-[#f3f4f6]"
          >
            Github
          </a>
        </div>
      </motion.div>
    </section>
  );
}
