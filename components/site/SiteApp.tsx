"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ALLOCATIONS = [
  "Australia",
  "Brazil",
  "Canada",
  "China",
  "Ethiopia",
  "Finland",
  "France",
  "Germany",
  "India",
  "Israel",
  "Italy",
  "Japan",
  "Nigeria",
  "Russia",
  "Saudi Arabia",
  "South Africa",
  "South Korea",
  "Switzerland",
  "United Kingdom",
  "United States",
] as const;

const DAY1 = [
  ["7:30", "Arrival & Registration"],
  ["8:30", "Opening Ceremony"],
  ["9:15", "Break & Photo Ops"],
  ["9:45", "Icebreakers"],
  ["10:00", "Committee Session 1 — Motion Focused"],
  ["11:30", "Lunch (Socialise)"],
  ["12:00", "Lunch (Eat)"],
  ["13:00", "Committee Session 2 — Resolution Writing"],
  ["14:30", "Break & Photo Ops — Resolutions Due"],
  ["15:00", "Committee Session 3 — Voting Procedures"],
  ["16:30", "Feedback Sessions & Delegate Departure"],
  ["17:00", "Chair + SMT Departure"],
] as const;

const DAY2 = [
  ["7:30", "Arrival"],
  ["8:30", "Registration & Photo Ops"],
  ["9:00", "Committee Session 1 — Motion Focused"],
  ["10:00", "Break"],
  ["10:30", "Committee Session 2 — Motions & Resolution Writing"],
  ["11:30", "Lunch (Socialise)"],
  ["12:00", "Lunch (Eat)"],
  ["12:30", "Committee Session 3 — Resolution Writing"],
  ["14:30", "Break — Resolutions Due"],
  ["15:00", "Committee Session 4 — Voting Procedures"],
  ["16:00", "Feedback & Break"],
  ["16:30", "Closing Ceremony"],
  ["17:30", "Photo Ops & Chair + Delegate Departure"],
  ["18:00", "SMT Departure"],
] as const;

export default function SiteApp() {
  const [announcementHidden, setAnnouncementHidden] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("ecosoc-announcement-dismissed") === "1") {
        setAnnouncementHidden(true);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const dismissAnnouncement = () => {
    setAnnouncementHidden(true);
    try {
      sessionStorage.setItem("ecosoc-announcement-dismissed", "1");
    } catch {
      /* ignore */
    }
  };

  const closeNav = () => setNavOpen(false);

  return (
    <div id="site-app" className="ecosoc-site">
      {!announcementHidden && (
        <div className="announcement" id="announcement" role="banner">
          <div className="container announcement-inner">
            <p className="announcement-text">
              <strong>SEAMUN I 2027</strong> — ECOSOC. January 16–17, D-PREP (Bang Phli).{" "}
              <a
                className="announcement-cta"
                href="https://seamun.com/forms#delegate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Delegate Sign Up
              </a>{" "}
              ·{" "}
              <a
                className="announcement-cta"
                href="https://seamun.com/forms#chair"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chair Application
              </a>
            </p>
            <button
              type="button"
              className="announcement-close"
              aria-label="Dismiss"
              onClick={dismissAnnouncement}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <header className="site-header">
        <div className="container header-inner">
          <Link className="logo" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo-image" src="/ecosoc-logo.png" alt="ECOSOC" />
            <span className="logo-text">ECOSOC</span>
          </Link>
          <nav className="nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#topics">Topics</a>
            <a href="#allocations">Allocations</a>
            <a href="#schedule">Schedule</a>
            <a href="#resources">Resources</a>
            <a href="#contact">Contact</a>
            <a
              className="btn btn-header"
              href="https://seamun.com/forms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register
            </a>
          </nav>
          <button
            className="nav-toggle"
            type="button"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            aria-expanded={navOpen}
            onClick={() => setNavOpen((o) => !o)}
          />
        </div>
        <div className="nav-dropdown" id="nav-dropdown" hidden={!navOpen}>
          <a href="#about" onClick={closeNav}>
            About
          </a>
          <a href="#topics" onClick={closeNav}>
            Topics
          </a>
          <a href="#allocations" onClick={closeNav}>
            Allocations
          </a>
          <a href="#schedule" onClick={closeNav}>
            Schedule
          </a>
          <a href="#resources" onClick={closeNav}>
            Resources
          </a>
          <a href="#contact" onClick={closeNav}>
            Contact
          </a>
          <a
            href="https://seamun.com/forms"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeNav}
          >
            Register
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="hero-logo"
                src="/ecosoc-logo.png"
                alt="Economic and Social Council emblem"
              />
              <p className="hero-badge">January 16–17, 2027 · Schedule Group 3</p>
              <h1 className="hero-title">Economic and Social Council</h1>
              <p className="hero-tagline">ECOSOC</p>
              <p className="hero-audience">SEAMUN I — Policies with a Purpose</p>
              <p className="hero-lead">
                A beginner traditional committee for grades 7–12 and university students. Debate
                universal basic income and reallocating military expenditure toward public health —
                with 20 delegate seats and 2 chairs.
              </p>
              <div className="meta-pills">
                <span className="meta-pill">2 Chairs</span>
                <span className="meta-pill">20 Delegates</span>
                <span className="meta-pill">Beginner</span>
                <span className="meta-pill">Traditional</span>
                <span className="meta-pill">Grades 7–12 &amp; university</span>
              </div>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#resources">
                  Committee resources
                </a>
                <a className="btn btn-secondary" href="#topics">
                  View topics
                </a>
                <a
                  className="btn btn-secondary"
                  href="https://seamun.com/forms#delegate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Delegate Sign Up
                </a>
                <a
                  className="btn btn-secondary"
                  href="https://seamun.com/committee?c=ecosoc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  On seamun.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <h2 className="section-title">About this committee</h2>
            <p className="section-desc">
              ECOSOC is one of ten committees at SEAMUN I, a student-led, non-profit Model UN
              conference focused on global healthcare and sustainability. 100% of surplus is donated
              to the Thai Red Cross Society.
            </p>
            <div className="about-grid">
              <div className="about-card">
                <h3>What is ECOSOC?</h3>
                <p>
                  The Economic and Social Council is the UN’s principal body for coordinating
                  economic and social work. At SEAMUN I it is the <strong>beginner</strong>{" "}
                  traditional track—ideal for first-time and early-career delegates practicing
                  moderated debate, caucusing, and resolution writing.
                </p>
              </div>
              <div className="about-card">
                <h3>Format</h3>
                <p>
                  <strong>Type:</strong> Traditional · <strong>Difficulty:</strong> Beginner ·{" "}
                  <strong>ROP:</strong> Standard · <strong>Crisis:</strong> No. Expect moderated
                  debate, unmoderated caucuses, and formal resolution writing under SEAMUN rules of
                  procedure.
                </p>
              </div>
              <div className="about-card">
                <h3>Conference</h3>
                <p>
                  <strong>SEAMUN I 2027</strong> — January 16–17 at{" "}
                  <a
                    href="https://www.google.com/maps/place/D-PREP+International+School+Secondary+Campus/@13.6448316,100.6850120,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    D-PREP International School Secondary Campus
                  </a>{" "}
                  (Bang Phli, Samut Prakan). Open to grades 7–12 and university students.
                </p>
              </div>
              <div className="about-card">
                <h3>Fees</h3>
                <p>
                  Delegates: <strong>2,500 THB</strong>. Chairs: <strong>800 THB</strong>.
                  Photographers &amp; advisors: <strong>0 THB</strong>. Conference capacity: 200
                  delegates, up to 60 staff.
                </p>
              </div>
            </div>
            <p style={{ marginTop: "1.25rem" }}>
              <a
                className="back-link"
                href="https://seamun.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ← Back to seamun.com
              </a>
            </p>
          </div>
        </section>

        <section className="section" id="topics">
          <div className="container">
            <h2 className="section-title">Topics</h2>
            <p className="section-desc">Two curated beginner topics for SEAMUN I ECOSOC.</p>
            <div className="topic-panel">
              <h3>
                <span className="topic-emoji" aria-hidden="true">
                  💰
                </span>
                The Question of Implementing Universal Basic Incomes (UBIs) as a Strategy for
                Eradicating Poverty and Maintaining Economic Stability
              </h3>
              <span className="difficulty-tag">Beginner</span>
              <p style={{ marginTop: "0.85rem" }}>
                Delegates will examine how coordinated cash-transfer and income-security frameworks
                could reduce poverty while supporting economic stability. Prepare position papers for
                your allocated country once the chair report and ROP are published.
              </p>
            </div>
            <div className="topic-panel" style={{ marginTop: "0.85rem" }}>
              <h3>
                <span className="topic-emoji" aria-hidden="true">
                  🏥
                </span>
                The Question of Establishing Frameworks for Reallocating Global Military Expenditure
                to Public Health Infrastructure
              </h3>
              <span className="difficulty-tag">Beginner</span>
              <p style={{ marginTop: "0.85rem" }}>
                Delegates will explore international mechanisms to shift defense spending toward
                strengthening public health systems—aligned with SEAMUN I’s healthcare and
                sustainability focus.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="allocations">
          <div className="container">
            <h2 className="section-title">Allocations</h2>
            <p className="section-desc">
              20 country assignments. You will be allocated one when you register as a delegate.
            </p>
            <ul className="allocation-grid">
              {ALLOCATIONS.map((country) => (
                <li key={country}>{country}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="schedule">
          <div className="container">
            <h2 className="section-title">Schedule</h2>
            <p className="section-desc">
              ECOSOC follows <strong>Group 3</strong> with UNODC, Interpol, and FWC at D-PREP
              International School Secondary Campus.
            </p>
            <div className="schedule-grid-local">
              <div className="schedule-day">
                <h3>Day 1 — Friday, January 16, 2027</h3>
                <p className="section-desc" style={{ marginBottom: "0.75rem" }}>
                  Total debate time: 6 hours
                </p>
                <ul className="schedule-list">
                  {DAY1.map(([time, activity]) => (
                    <li key={time + activity}>
                      <span className="time">{time}</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="schedule-day">
                <h3>Day 2 — Saturday, January 17, 2027</h3>
                <p className="section-desc" style={{ marginBottom: "0.75rem" }}>
                  Total debate time: 4 hours 45 minutes
                </p>
                <ul className="schedule-list">
                  {DAY2.map(([time, activity]) => (
                    <li key={time + activity}>
                      <span className="time">{time}</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="resources">
          <div className="container">
            <h2 className="section-title">Resources</h2>
            <p className="section-desc">
              Official committee materials. Links below are placeholders until documents and portals
              go live.
            </p>
            <div className="resource-grid">
              <article className="resource-card" id="rop">
                <div className="resource-card-icon" aria-hidden="true">
                  §
                </div>
                <span className="badge-soon">Coming soon</span>
                <h3>Rules of Procedure</h3>
                <p>
                  SEAMUN ROP for moderated debate, motions, resolution writing, and voting. Document
                  placeholder until chairs publish the official guide.
                </p>
                <a className="btn btn-secondary" href="#rop-placeholder" aria-disabled="true">
                  View ROP
                </a>
              </article>
              <article className="resource-card" id="position-papers">
                <div className="resource-card-icon" aria-hidden="true">
                  PP
                </div>
                <span className="badge-soon">Coming soon</span>
                <h3>Position Paper Portal</h3>
                <p>
                  Submit position papers for both agenda topics before conference. Portal
                  placeholder—submission link and deadlines will appear here.
                </p>
                <a className="btn btn-secondary" href="#pp-placeholder" aria-disabled="true">
                  Open portal
                </a>
              </article>
              <article className="resource-card" id="chair-report">
                <div className="resource-card-icon" aria-hidden="true">
                  CR
                </div>
                <span className="badge-soon">Coming soon</span>
                <h3>Chair Report</h3>
                <p>
                  Background guide from the ECOSOC chairs: topic framing, research leads, and
                  expectations. Report placeholder until released.
                </p>
                <a className="btn btn-secondary" href="#cr-placeholder" aria-disabled="true">
                  Read report
                </a>
              </article>
            </div>

            <div className="placeholder-panel" id="rop-placeholder" style={{ marginTop: "1.5rem" }}>
              <h3>ROP — placeholder</h3>
              <p>
                The ECOSOC Rules of Procedure PDF (or page) will be linked here. Follow standard
                SEAMUN procedure once this document is published.
              </p>
            </div>
            <div className="placeholder-panel" id="pp-placeholder">
              <h3>Position paper submission — placeholder</h3>
              <p>
                A submission form or upload portal will replace this block. Until then, prepare
                position papers on UBI and military-to-health expenditure for your allocated country.
              </p>
            </div>
            <div className="placeholder-panel" id="cr-placeholder">
              <h3>Chair report — placeholder</h3>
              <p>
                The official chair report / background guide will be published here for delegate
                research ahead of January 16–17, 2027.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <h2 className="section-title">Register &amp; contact</h2>
            <p className="section-desc">
              Registration runs through the main SEAMUN I forms. Chairs TBD.
            </p>
            <div className="hero-actions" style={{ justifyContent: "flex-start", marginTop: "1rem" }}>
              <a
                className="btn btn-primary"
                href="https://seamun.com/forms#delegate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Delegate Sign Up
              </a>
              <a
                className="btn btn-secondary"
                href="https://seamun.com/forms#advisor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Advisor Sign Up
              </a>
              <a
                className="btn btn-secondary"
                href="https://seamun.com/forms#chair"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chair Application
              </a>
              <a
                className="btn btn-secondary"
                href="https://seamun.com/committees"
                target="_blank"
                rel="noopener noreferrer"
              >
                All committees
              </a>
            </div>
            <div className="meta-row" style={{ marginTop: "1.5rem" }}>
              <span>
                <strong>Venue:</strong> D-PREP International School Secondary Campus (Bang Phli,
                Samut Prakan)
              </span>
              <span>
                <strong>Facebook:</strong>{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=61589086223034"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SEAMUN I
                </a>
              </span>
              <span>
                <strong>Main site:</strong>{" "}
                <a href="https://seamun.com" target="_blank" rel="noopener noreferrer">
                  seamun.com
                </a>
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="footer-logo" src="/ecosoc-logo.png" alt="" />
          <p className="footer-tagline">SEAMUN I — ECOSOC · Policies with a Purpose</p>
          <p className="footer-social">
            <a
              href="https://www.facebook.com/profile.php?id=61589086223034"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            ·{" "}
            <a href="https://seamun.com" target="_blank" rel="noopener noreferrer">
              seamun.com
            </a>
          </p>
          <p className="footer-copy">&copy; SEAMUN I 2027</p>
        </div>
      </footer>
    </div>
  );
}
