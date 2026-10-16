import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#05070d",
};

export const metadata: Metadata = {
  title: "Muhammad Awais Farooq | Full Stack Developer & AI Software Engineer",
  description:
    "Portfolio of Muhammad Awais Farooq - Full Stack Developer architecting modern React, Next.js, and Python FastAPI applications with real-time WebSockets, WebRTC, and scalable SQL databases.",
  keywords: [
    "Muhammad Awais Farooq",
    "Full Stack Developer",
    "Next.js Developer",
    "FastAPI Python Developer",
    "React Developer",
    "WebSockets",
    "WebRTC",
    "Pakistan",
  ],
  authors: [{ name: "Muhammad Awais Farooq" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
