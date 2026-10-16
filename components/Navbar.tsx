"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/Icons";
import Magnetic from "@/components/Magnetic";
import { Menu, X, Mail, ArrowUpRight, Code2 } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Live API", href: "#api-panel" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((l) => l.href.substring(1));
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 160 && rect.bottom >= 160;
      });
      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "site-header nav-scrolled" : "site-header"}>
      <motion.div
        className="nav-shell"
        initial={reduce ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.a
          href="#top"
          whileHover={reduce ? undefined : { y: -1 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.7rem",
            textDecoration: "none",
            color: "#fff",
            minWidth: 0,
          }}
        >
          <motion.div
            className="nav-mark"
            whileHover={reduce ? undefined : { rotate: -8, scale: 1.08 }}
            whileTap={reduce ? undefined : { scale: 0.94 }}
            transition={{ type: "spring", stiffness: 420, damping: 18 }}
          >
            <Code2 size={18} color="#fff" />
          </motion.div>
          <div>
            <span style={{ fontWeight: 750, fontSize: "0.98rem", display: "block", lineHeight: 1.15 }}>
              Awais Farooq
            </span>
            <span className="nav-brand-meta">
              <span className="nav-live-dot" />
              Full Stack Dev
            </span>
          </div>
        </motion.a>

        <nav className="desktop-nav">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={isActive ? "nav-link nav-link-active" : "nav-link"}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="nav-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="nav-link-label">{link.name}</span>
              </a>
            );
          })}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Magnetic>
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="nav-social nav-icon nav-icon-gh"
              whileTap={reduce ? undefined : { scale: 0.94 }}
            >
              <GithubIcon size={16} />
            </motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="nav-social nav-icon nav-icon-li"
              whileTap={reduce ? undefined : { scale: 0.94 }}
            >
              <LinkedinIcon size={16} />
            </motion.a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="btn-primary nav-cta"
              style={{ padding: "0.5rem 1rem", fontSize: "0.82rem" }}
            >
              <span>Let&apos;s Connect</span>
              <span className="nav-cta-arrow">
                <ArrowUpRight size={15} />
              </span>
            </a>
          </Magnetic>

          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileMenuOpen ? "close" : "open"}
                initial={reduce ? false : { rotate: -80, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={reduce ? undefined : { rotate: 80, opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{ display: "flex" }}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div
              style={{
                padding: "1rem 1.15rem 1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.1rem",
              }}
            >
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="nav-drawer-link"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduce ? 0 : 0.04 * index, duration: 0.28 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="mobile-actions" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", paddingTop: "0.9rem" }}>
                <a href={`mailto:${profile.email}`} className="btn-secondary" style={{ flex: 1, fontSize: "0.85rem" }}>
                  <Mail size={15} /> Email
                </a>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ flex: 1, fontSize: "0.85rem" }}
                >
                  <WhatsAppIcon size={15} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
