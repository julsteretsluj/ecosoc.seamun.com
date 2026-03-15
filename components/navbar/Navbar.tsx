"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#about", label: "About" },
  { href: "#agenda", label: "Agenda" },
  { href: "#key-terms", label: "Key Terms" },
  { href: "#secretariat", label: "Secretariat" },
  { href: "#resources", label: "Resources" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.header
      role="banner"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 mx-auto max-w-[1400px] px-4 py-2 md:px-6 md:py-2"
    >
      <nav
        className="flex items-center justify-between rounded-xl border border-white/20 bg-white/80 px-4 py-2 shadow-md backdrop-blur-[20px] md:px-5 md:py-2"
        style={{ backdropFilter: "blur(var(--glass-blur))" }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-[var(--un-deep-blue)] transition-opacity hover:opacity-80 focus:opacity-80"
          aria-label="ECOSOC — Home"
        >
          ECOSOC
        </Link>

        {/* Center nav — hidden on small screens, visible from tablet */}
        <ul className="hidden items-center gap-6 md:flex" role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="relative text-xs font-medium text-[var(--dark-text)] after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-0 after:bg-[var(--primary-blue)] after:transition-[width] after:duration-200 hover:after:w-full focus:after:w-full"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Register CTA */}
        <Link
          href="#register"
          className="rounded-lg bg-[var(--un-deep-blue)] px-4 py-2 text-xs font-semibold text-white shadow transition-all hover:bg-[var(--un-deep-blue)]/90 focus:bg-[var(--un-deep-blue)]/90"
        >
          Register
        </Link>
      </nav>
    </motion.header>
  );
}
