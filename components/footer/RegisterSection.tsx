"use client";

import { motion } from "framer-motion";

const REGISTER_URL = "https://forms.gle/iy57uXzA89d3WVYy8";

export default function RegisterSection() {
  return (
    <section
      id="register"
      className="scroll-mt-24 bg-white py-24 md:py-32"
      aria-labelledby="register-heading"
    >
      <div className="mx-auto max-w-[700px] px-6 text-center md:px-10">
        <motion.h2
          id="register-heading"
          className="text-4xl font-extrabold tracking-tight text-[var(--dark-text)] md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Register for ECOSOC
        </motion.h2>
        <motion.p
          className="mt-6 text-lg text-[var(--dark-text)]/80"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          SEAMUN I 2027 · Bangkok, Thailand. Show your interest and get updates on registration.
        </motion.p>
        <motion.a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center rounded-[14px] bg-[var(--primary-blue)] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:opacity-90 focus:opacity-90"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Show interest / Register
          <span className="ml-2" aria-hidden>→</span>
        </motion.a>
      </div>
    </section>
  );
}
