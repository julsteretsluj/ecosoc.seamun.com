"use client";

import { motion } from "framer-motion";

export default function Resources() {
  return (
    <section
      id="resources"
      className="scroll-mt-24 bg-[var(--neutral-white)] py-24 md:py-32"
      aria-labelledby="resources-heading"
    >
      <div className="mx-auto max-w-[700px] px-6 text-center md:px-10">
        <motion.span
          className="block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary-blue)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Resources
        </motion.span>
        <motion.h2
          id="resources-heading"
          className="mt-2 text-4xl font-extrabold tracking-tight text-[var(--dark-text)] md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          Background &amp; materials
        </motion.h2>
        <motion.p
          className="mt-8 text-lg leading-relaxed text-[var(--dark-text)]/80"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Background guides, rules of procedure, and committee materials will be
          shared with registered delegates.
        </motion.p>
      </div>
    </section>
  );
}
