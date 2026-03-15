"use client";

import Link from "next/link";

const footerLinks = [
  { label: "Instagram", href: "https://www.instagram.com/seamun.th/", target: "_blank", rel: "noreferrer" },
  { label: "Email", href: "mailto:information@seamun.com" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t-2 border-[var(--soft-blue)] bg-[var(--un-deep-blue)] py-20 md:py-24 scroll-mt-24"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col items-center gap-12 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <p className="text-xl font-bold tracking-tight text-white">
              United Nations Economic and Social Council
            </p>
            <p className="mt-1 text-sm text-white/70">
              SEAMUN I · Bangkok, Thailand
            </p>
          </div>

          <nav aria-label="Footer links">
            <ul className="flex flex-wrap justify-center gap-8 md:gap-10" role="list">
              {footerLinks.map(({ href, label, target, rel }) => (
                <li key={label}>
                  <Link
                    href={href}
                    {...(target ? { target, rel } : {})}
                    className="text-sm font-medium text-white/80 transition-colors hover:text-white focus:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="#register"
            className="inline-flex items-center rounded-[14px] border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 focus:bg-white/20"
          >
            Register
            <span className="ml-1.5" aria-hidden>→</span>
          </Link>
        </div>
        <p className="mt-12 text-center text-xs text-white/50">
          <a href="https://seamun.com" target="_blank" rel="noreferrer" className="underline hover:text-white/70">
            seamun.com
          </a>
          {" · "}
          Policies with a Purpose
        </p>
      </div>
    </footer>
  );
}
