"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="overview"
      className="relative min-h-[92vh] overflow-hidden pt-24 pb-24 md:pt-32 md:pb-32"
      aria-label="Hero"
    >
      {/* Strong gradient + subtle grid */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(165deg, var(--hero-gradient-start) 0%, var(--soft-blue) 45%, var(--hero-gradient-end) 100%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(10,37,64,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,37,64,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--un-deep-blue)]/5 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center gap-14 px-6 md:flex-row md:items-center md:justify-between md:gap-20 md:px-10">
        <div className="max-w-xl text-center md:text-left">
          <motion.span
            className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary-blue)]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            SEAMUN I 2027
          </motion.span>
          <motion.h1
            className="mt-3 text-[3rem] font-extrabold leading-[1.05] tracking-tight text-[var(--un-deep-blue)] md:text-[4.5rem]"
            style={{ fontSize: "clamp(2.75rem, 6vw, 4.5rem)" }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            ECOSOC
          </motion.h1>
          <motion.p
            className="mt-3 text-lg font-medium text-[var(--un-deep-blue)]/75 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            United Nations Economic and Social Council
          </motion.p>
          <motion.p
            className="mt-8 text-2xl font-bold tracking-tight text-[var(--dark-text)] md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Global Policy.
            <br />
            <span className="text-[var(--primary-blue)]">Real Diplomacy.</span>
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="#agenda"
              className="inline-flex items-center justify-center rounded-[14px] border-2 border-[var(--primary-blue)] bg-transparent px-7 py-3.5 text-sm font-semibold text-[var(--primary-blue)] transition-all hover:bg-[var(--primary-blue)] hover:text-white focus:bg-[var(--primary-blue)] focus:text-white"
            >
              View Agenda
            </Link>
            <Link
              href="#register"
              className="inline-flex items-center justify-center rounded-[14px] bg-[var(--un-deep-blue)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--un-deep-blue)]/25 transition-all hover:bg-[var(--un-deep-blue)]/90 focus:bg-[var(--un-deep-blue)]/90"
            >
              Register
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative w-[300px] rounded-[28px] border border-white/60 bg-white/95 p-6 shadow-[0_32px_64px_-12px_rgba(10,37,64,0.2)] backdrop-blur-md sm:w-[340px] md:w-[380px]"
            style={{ transform: "rotate(-4deg)" }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative aspect-[1.586/1] w-full overflow-hidden rounded-2xl bg-white">
              <Image
                src="/ECOSOC.png"
                alt="ECOSOC"
                fill
                className="object-contain p-5 bg-white"
                sizes="(max-width: 768px) 300px, 380px"
                priority
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const next = e.currentTarget.nextElementSibling as HTMLElement;
                  if (next) next.style.display = "flex";
                }}
              />
              <div
                className="absolute inset-0 hidden flex-col items-center justify-center p-6 text-center font-bold text-[var(--un-deep-blue)]"
                style={{ display: "none" }}
                aria-hidden
              >
                <span className="text-3xl md:text-4xl">ECOSOC</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
