"use client";

import { motion } from "framer-motion";
import { keyTermsByTopic } from "@/data/keyTerms";

const topicLabels: Record<string, string> = {
  t1: "Topic 1 — Universal Basic Income (UBI)",
  t2: "Topic 2 — Military Spending & Global Health",
};

export default function KeyTerms() {
  return (
    <section
      id="key-terms"
      className="scroll-mt-24 bg-[var(--neutral-white)] py-24 md:py-32"
      aria-labelledby="key-terms-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <motion.span
          className="block text-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary-blue)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Key Terms
        </motion.span>
        <motion.h2
          id="key-terms-heading"
          className="mt-2 text-center text-4xl font-extrabold tracking-tight text-[var(--dark-text)] md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          Glossary by topic
        </motion.h2>

        <div className="mt-16 space-y-20">
          {(Object.keys(keyTermsByTopic) as Array<keyof typeof keyTermsByTopic>).map((topicId, topicIndex) => (
            <motion.div
              key={topicId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: topicIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold text-[var(--un-deep-blue)] md:text-2xl">
                {topicLabels[topicId]}
              </h3>
              <p className="mt-1 text-sm text-[var(--dark-text)]/60">
                {keyTermsByTopic[topicId].length} terms
              </p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
                {keyTermsByTopic[topicId].map((term, i) => (
                  <motion.li
                    key={term.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.02 }}
                    className="rounded-xl border border-[var(--soft-blue)] bg-white p-4 shadow-[var(--card-shadow)] transition-shadow hover:shadow-[var(--card-shadow-hover)]"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary-blue)]">
                      {term.tag}
                    </span>
                    <h4 className="mt-2 font-bold text-[var(--dark-text)]">
                      {term.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--dark-text)]/80">
                      {term.desc}
                    </p>
                    {term.links.length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {term.links.map((link) => (
                          <li key={link.url}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-medium text-[var(--primary-blue)] underline underline-offset-2 hover:opacity-80"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
