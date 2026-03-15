"use client";

import { motion } from "framer-motion";

export default function AboutEcosoc() {
  return (
    <section
      id="about"
      className="relative bg-[var(--neutral-white)] py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[720px] px-6 md:px-10">
        <motion.div
          className="absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 rounded-b-full bg-[var(--primary-blue)]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
        <motion.h2
          id="about-heading"
          className="text-center text-4xl font-extrabold tracking-tight text-[var(--dark-text)] md:text-[2.75rem]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          What is ECOSOC?
        </motion.h2>
        <motion.div
          className="mt-10 space-y-7 text-center text-lg leading-relaxed text-[var(--dark-text)]/90 md:text-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>
            The United Nations Economic and Social Council is the principal
            platform for international economic and social cooperation.
          </p>
          <p className="font-medium text-[var(--un-deep-blue)]">
            At ECOSOC 2027, delegates collaborate to solve global development
            challenges through diplomacy, negotiation, and multilateral
            policymaking.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
