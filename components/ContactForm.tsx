"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon, WhatsAppIcon, InstagramIcon, FacebookIcon } from "@/components/Icons";
import GlassCard from "@/components/GlassCard";
import Magnetic from "@/components/Magnetic";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check } from "lucide-react";

export default function ContactForm() {
  const reduce = useReducedMotion();
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = Object.fromEntries(new FormData(form));
    setState("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fd),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Message delivery failed.");
      form.reset();
      setState("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Message delivery failed.");
      setState("error");
    }
  }

  return (
    <section id="contact" className="section section-rule">
      <div className="container">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span className="glass-pill" style={{ color: "#c7d2fe", marginBottom: "1rem" }}>
            <Mail size={14} />
            Let&apos;s Connect
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
            Start a <span className="gradient-text-accent">Conversation</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "36rem", fontSize: "1.05rem" }}>
            Interested in building high-speed web products, API architectures, or AI integrations? Send a note or reach out directly.
          </p>
        </motion.div>

        <div className="contact-grid">
          <div className="contact-stack">
            <GlassCard style={{ padding: "1.25rem 1.35rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
              <div className="contact-email-copy" style={{ display: "flex", alignItems: "center", gap: "1rem", minWidth: 0, flex: 1 }}>
                <div style={{ width: 44, height: 44, borderRadius: "0.9rem", background: "rgba(99, 102, 241, 0.16)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mail size={20} color="#818cf8" />
                </div>
                <div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 550 }}>Direct Email</div>
                  <a href={`mailto:${profile.email}`} style={{ fontSize: "0.95rem", fontWeight: 650, color: "#fff", textDecoration: "none", wordBreak: "break-all" }}>
                    {profile.email}
                  </a>
                </div>
              </div>
              <button
                onClick={copyEmail}
                title="Copy Email Address"
                className="social-btn"
                style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)" }}
              >
                {copiedEmail ? <Check size={16} color="#34d399" /> : <Copy size={16} />}
              </button>
            </GlassCard>

            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <GlassCard style={{ padding: "1.25rem 1.35rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: "0.9rem", background: "rgba(16, 185, 129, 0.16)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <WhatsAppIcon size={20} color="#34d399" />
                </div>
                <div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 550 }}>WhatsApp / Phone</div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 650 }}>{profile.phone}</div>
                </div>
              </GlassCard>
            </a>

            <GlassCard style={{ padding: "1.25rem 1.35rem", display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: 44, height: 44, borderRadius: "0.9rem", background: "rgba(56, 189, 248, 0.16)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <MapPin size={20} color="#38bdf8" />
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 550 }}>Primary Location</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 650 }}>{profile.location} (PKT / UTC+5)</div>
              </div>
            </GlassCard>

            <GlassCard style={{ padding: "1.25rem 1.35rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.8rem", flexWrap: "wrap" }}>
              <div style={{ fontSize: "0.9rem", fontWeight: 650 }}>Find me on social</div>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="social-btn">
                  <GithubIcon size={18} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="social-btn" style={{ color: "#60a5fa" }}>
                  <LinkedinIcon size={18} />
                </a>
                <a href={profile.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="social-btn" style={{ color: "#f472b6" }}>
                  <InstagramIcon size={18} />
                </a>
                <a href={profile.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile" className="social-btn" style={{ color: "#60a5fa" }}>
                  <FacebookIcon size={18} />
                </a>
              </div>
            </GlassCard>
          </div>

          <GlassCard className="contact-form-card" style={{ padding: "2rem" }} hoverLift={false}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 750, marginBottom: "0.35rem" }}>Send an Instant Dispatch</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              Fill out the details below. Messages trigger an automated webhook and email alert.
            </p>

            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }} noValidate>
              <div>
                <label htmlFor="contact-name" style={{ display: "block", fontSize: "0.84rem", fontWeight: 650, color: "#dbe4f3", marginBottom: "0.4rem" }}>
                  Your Name
                </label>
                <input id="contact-name" name="name" type="text" required placeholder="e.g. Alex Henderson" className="glass-input" />
              </div>
              <div>
                <label htmlFor="contact-email" style={{ display: "block", fontSize: "0.84rem", fontWeight: 650, color: "#dbe4f3", marginBottom: "0.4rem" }}>
                  Your Email
                </label>
                <input id="contact-email" name="email" type="email" required placeholder="alex@company.com" className="glass-input" />
              </div>
              <div>
                <label htmlFor="contact-subject" style={{ display: "block", fontSize: "0.84rem", fontWeight: 650, color: "#dbe4f3", marginBottom: "0.4rem" }}>
                  Subject
                </label>
                <input id="contact-subject" name="subject" type="text" required placeholder="e.g. Project Collaboration, Job Opportunity..." className="glass-input" />
              </div>
              <div>
                <label htmlFor="contact-message" style={{ display: "block", fontSize: "0.84rem", fontWeight: 650, color: "#dbe4f3", marginBottom: "0.4rem" }}>
                  Project Details or Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Describe your project, timeline, or engineering inquiry..."
                  className="glass-input"
                  style={{ resize: "vertical", minHeight: "7.5rem" }}
                />
              </div>
              <input name="website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" />

              <Magnetic strength={8} className="contact-submit">
                <button type="submit" disabled={state === "sending"} className="btn-primary" style={{ width: "100%", padding: "0.9rem", marginTop: "0.2rem" }}>
                  <Send size={16} />
                  <span>{state === "sending" ? "Dispatching Message..." : "Transmit Message"}</span>
                </button>
              </Magnetic>

              {state === "sent" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-pill form-alert"
                  style={{ color: "#34d399", borderColor: "rgba(16,185,129,0.3)", width: "100%", justifyContent: "flex-start", padding: "0.75rem 1rem", borderRadius: "0.9rem" }}
                >
                  <CheckCircle2 size={18} />
                  <span>Your message was received successfully! I will reply promptly.</span>
                </motion.div>
              )}

              {state === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-pill form-alert"
                  style={{ color: "#f87171", borderColor: "rgba(239,68,68,0.3)", width: "100%", justifyContent: "flex-start", padding: "0.75rem 1rem", borderRadius: "0.9rem" }}
                >
                  <AlertCircle size={18} />
                  <span>{error || "An error occurred while sending your message."}</span>
                </motion.div>
              )}
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
