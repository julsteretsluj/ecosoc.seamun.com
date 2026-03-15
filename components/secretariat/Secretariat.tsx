"use client";

import { motion } from "framer-motion";
import { useCallback, useState } from "react";

const members = [
  {
    role: "Secretary General",
    name: "Jules K.A.",
    email: "juleskittoastrop@gmail.com",
    initial: "JK",
    image: "/secretariat/jules.png",
  },
  {
    role: "Deputy Secretary General",
    name: "Emily H.",
    email: "emily.yhstudent@sisbschool.com",
    initial: "EH",
    image: "/secretariat/emily.png",
  },
  {
    role: "Parliamentarian & Head of Logistics",
    name: "Lotus T.",
    email: "ladapham14@gmail.com",
    initial: "LT",
    image: "/secretariat/lotus.png",
  },
  {
    role: "Head of Delegate Affairs",
    name: "Dominic S. S.",
    email: "dominicstott09@gmail.com",
    initial: "DS",
    image: "/secretariat/dominic.png",
  },
  {
    role: "Deputy Head of Finance",
    name: "Mannan P.",
    email: "mannanparikh27@gmail.com",
    initial: "MP",
    image: "/secretariat/mannan.png",
  },
  {
    role: "Head of PR & Advertising",
    name: "Phil",
    email: "sarana79262@gmail.com",
    initial: "P",
    image: "/secretariat/phil.png",
  },
  {
    role: "Head of Media",
    name: "Ping J.",
    email: "30bping@regents.ac.th",
    initial: "PJ",
    image: "/secretariat/ping.png",
  },
];

export default function Secretariat() {
  const [index, setIndex] = useState(0);
  const member = members[index];
  const total = members.length;

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  return (
    <section
      id="secretariat"
      className="scroll-mt-24 bg-[var(--soft-blue)] py-24 md:py-32"
      aria-labelledby="secretariat-heading"
    >
      <div className="mx-auto max-w-[1000px] px-6 md:px-10">
        <motion.h2
          id="secretariat-heading"
          className="text-3xl font-bold tracking-tight text-[var(--un-deep-blue)] md:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Secretariat &amp; Leadership
        </motion.h2>

        <div className="mt-12 flex items-stretch gap-4 md:gap-6">
          {/* Prev */}
          <button
            type="button"
            onClick={goPrev}
            className="flex shrink-0 items-center justify-center rounded-full bg-white p-3 text-[var(--un-deep-blue)] shadow-md transition-opacity hover:opacity-90 focus:opacity-90"
            aria-label="Previous member"
          >
            <span className="text-xl font-semibold">‹</span>
          </button>

          {/* Main card */}
          <div className="min-w-0 flex-1 rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
              <div className="flex shrink-0 justify-center md:justify-start">
                <div className="secretariat-avatar-wrap relative h-40 w-40 overflow-hidden rounded-2xl border-2 border-[var(--soft-blue)] bg-white">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt=""
                      className="h-full w-full object-contain object-center bg-white"
                      style={{ backgroundColor: "#fff" }}
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-4xl font-bold text-[var(--primary-blue)]">
                      {member.initial}
                    </span>
                  )}
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-[var(--dark-text)]/60">
                  {index + 1} / {total}
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-[var(--primary-blue)]">
                  {member.role}
                </p>
                <p className="mt-2 text-2xl font-bold text-[var(--un-deep-blue)] md:text-3xl">
                  {member.name}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="mt-2 inline-block text-sm font-medium text-[var(--primary-blue)] underline underline-offset-2 hover:opacity-80"
                >
                  {member.email}
                </a>
              </div>
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={goNext}
            className="flex shrink-0 items-center justify-center rounded-full bg-white p-3 text-[var(--un-deep-blue)] shadow-md transition-opacity hover:opacity-90 focus:opacity-90"
            aria-label="Next member"
          >
            <span className="text-xl font-semibold">›</span>
          </button>
        </div>

        {/* Thumbnail dots */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {members.map((m, i) => (
            <button
              key={m.email}
              type="button"
              onClick={() => setIndex(i)}
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all focus:opacity-90 ${
                i === index
                  ? "border-2 border-[var(--primary-blue)] bg-white text-[var(--primary-blue)] shadow"
                  : "border-2 border-white bg-white/80 text-[var(--dark-text)]/70 hover:bg-white"
              }`}
              aria-label={`View ${m.name}`}
              aria-current={i === index ? "true" : undefined}
            >
              {m.initial}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
