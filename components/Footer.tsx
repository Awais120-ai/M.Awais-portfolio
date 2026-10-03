"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from "@/components/Icons";
import {
  ArrowUp,
  Mail,
  Code2,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        background: "rgba(7, 9, 14, 0.95)",
        padding: "3.5rem 0 2.5rem 0",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand & Summary */}
          <div style={{ maxWidth: "340px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "0.6rem",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "0.5rem",
                  background: "linear-gradient(135deg, #4f46e5 0%, #38bdf8 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Code2 size={16} color="#fff" />
              </div>
              <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#fff" }}>
                {profile.name}
              </span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              Full Stack Engineer specializing in React, Next.js, Python FastAPI, and real-time distributed web systems.
            </p>
          </div>

          {/* Navigation Links */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
            <a
              href="#about"
              style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem" }}
            >
              About
            </a>
            <a
              href="#projects"
              style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem" }}
            >
              Projects
            </a>
            <a
              href="#skills"
              style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem" }}
            >
              Skills
            </a>
            <a
              href="#experience"
              style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem" }}
            >
              Experience
            </a>
            <a
              href="#api-panel"
              style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem" }}
            >
              Live API
            </a>
            <a
              href="#contact"
              style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem" }}
            >
              Contact
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" style={{ width: "38px", height: "38px", borderRadius: "0.5rem", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", textDecoration: "none" }}>
              <GithubIcon size={17} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" style={{ width: "38px", height: "38px", borderRadius: "0.5rem", background: "rgba(10, 102, 194, 0.12)", border: "1px solid rgba(10, 102, 194, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60a5fa", textDecoration: "none" }}>
              <LinkedinIcon size={17} />
            </a>
            <a href={profile.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram (@wasi._.20)" title="Instagram" style={{ width: "38px", height: "38px", borderRadius: "0.5rem", background: "rgba(225, 48, 108, 0.12)", border: "1px solid rgba(225, 48, 108, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#f472b6", textDecoration: "none" }}>
              <InstagramIcon size={17} />
            </a>
            <a href={profile.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook (M.Awais.020)" title="Facebook" style={{ width: "38px", height: "38px", borderRadius: "0.5rem", background: "rgba(24, 119, 242, 0.12)", border: "1px solid rgba(24, 119, 242, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60a5fa", textDecoration: "none" }}>
              <FacebookIcon size={17} />
            </a>
            <button onClick={scrollToTop} title="Return to Top" style={{ width: "38px", height: "38px", borderRadius: "0.5rem", background: "rgba(99, 102, 241, 0.2)", border: "1px solid rgba(99, 102, 241, 0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#a5b4fc", cursor: "pointer" }}>
              <ArrowUp size={17} />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div
          style={{
            paddingTop: "1.75rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.825rem",
            color: "var(--text-muted)",
          }}
        >
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span>Engineered with Next.js 14, Framer Motion &amp; TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
