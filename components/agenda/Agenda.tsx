"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const topics = [
  {
    number: "01",
    title: "Universal Basic Income (UBI)",
    fullTitle:
      "The Question of Implementing a Globally Coordinated Universal Basic Income (UBI) Programme as a Strategy for Poverty Eradication and Economic Stability",
    accent: "var(--topic-1)",
    href: "#topic-1",
  },
  {
    number: "02",
    title: "Military Spending & Global Health",
    fullTitle:
      "The Question of Exploring International Mechanisms for Reallocating Military Expenditures Towards the Development and Strengthening of Global Public Health Systems",
    accent: "var(--topic-2)",
    href: "#topic-2",
  },
];

export default function Agenda() {
  return (
    <section
      id="agenda"
      className="scroll-mt-24 bg-[var(--un-deep-blue)] py-24 md:py-32"
      aria-labelledby="agenda-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.span
          className="block text-center text-sm font-semibold uppercase tracking-[0.2em] text-white/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Agenda
        </motion.span>
        <motion.h2
          id="agenda-heading"
          className="mt-2 text-center text-4xl font-extrabold tracking-tight text-white md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Two topics. One committee.
        </motion.h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-10">
          {topics.map((topic, i) => (
            <motion.article
              key={topic.number}
              id={topic.href.replace("#", "")}
              className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/95 p-8 shadow-[var(--card-shadow-hover)] backdrop-blur-sm transition-all hover:border-white/20 hover:shadow-[0_24px_56px_-12px_rgba(0,0,0,0.2)] md:p-10 scroll-mt-24"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div
                className="absolute left-0 top-0 h-full w-1 rounded-l-[24px]"
                style={{ background: topic.accent }}
              />
              <span
                className="text-sm font-bold uppercase tracking-wider"
                style={{ color: topic.accent }}
              >
                Topic {topic.number}
              </span>
              <h3 className="mt-3 text-2xl font-bold leading-tight text-[var(--dark-text)] md:text-[26px]">
                {topic.title}
              </h3>
              <p className="mt-5 max-w-[520px] text-base leading-relaxed text-[var(--dark-text)]/80">
                {topic.fullTitle}
              </p>
              <Link
                href={topic.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80 focus:opacity-80"
                style={{ color: topic.accent }}
              >
                Learn more
                <span aria-hidden>→</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
