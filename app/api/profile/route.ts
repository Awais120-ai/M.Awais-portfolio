import { NextResponse } from "next/server";
import { profile } from "@/data/profile";

export async function GET() {
  return NextResponse.json({
    status: "online",
    name: profile.name,
    role: profile.role,
    headline: profile.headline,
    availability: profile.status,
    location: profile.location,
    current_position: "Full Stack Developer · Product Engineering (June 2025 – Present)",
    stack_core: profile.stackHighlights,
    open_for: ["Full Stack Developer", "Backend / API Engineer", "AI Product Engineer"],
    contact: {
      email: profile.email,
      phone: profile.phone,
      whatsapp: profile.whatsapp,
      github: profile.github,
      linkedin: profile.linkedin,
    },
    metrics: profile.stats,
  });
}
