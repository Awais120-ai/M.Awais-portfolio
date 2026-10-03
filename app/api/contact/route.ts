import { NextResponse } from "next/server";
import { appendFile } from "fs/promises";
import path from "path";
import nodemailer from "nodemailer";

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Send the form as JSON." }, { status: 400 });
  }

  const name    = String(body.name    ?? "").trim();
  const email   = String(body.email   ?? "").trim();
  const subject = String(body.subject ?? "Portfolio Contact").trim();
  const message = String(body.message ?? "").trim();

  // Honeypot — bots fill the hidden website field
  if (body.website) return NextResponse.json({ ok: true });

  // Validation
  if (name.length < 2)    return NextResponse.json({ error: "Please enter your name (at least 2 characters)." }, { status: 422 });
  if (!emailOk(email))    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  if (subject.length < 2) return NextResponse.json({ error: "Please enter a subject." }, { status: 422 });
  if (message.length < 10) return NextResponse.json({ error: "Message is too short — write at least 10 characters." }, { status: 422 });
  if (message.length > 3000) return NextResponse.json({ error: "Keep the message under 3000 characters." }, { status: 422 });

  // --- Direct Email via Nodemailer (Gmail SMTP) ---
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS, // Gmail App Password (not your login password)
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
        replyTo: `"${name}" <${email}>`,
        subject: `[Portfolio] ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 24px; border-radius: 12px;">
            <div style="background: linear-gradient(135deg, #4f46e5, #38bdf8); padding: 24px; border-radius: 8px; margin-bottom: 24px;">
              <h1 style="color: white; margin: 0; font-size: 22px;">New Portfolio Message</h1>
              <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0 0; font-size: 14px;">Someone reached out via your portfolio contact form</p>
            </div>
            <div style="background: white; padding: 24px; border-radius: 8px; border: 1px solid #e2e8f0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 80px; vertical-align: top; font-weight: 600;">FROM</td><td style="padding: 8px 0; color: #1e293b; font-size: 15px; font-weight: 600;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top; font-weight: 600;">EMAIL</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #4f46e5; font-size: 14px;">${email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top; font-weight: 600;">SUBJECT</td><td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${subject}</td></tr>
              </table>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
              <h3 style="color: #475569; font-size: 13px; font-weight: 600; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.05em;">Message</h3>
              <p style="color: #1e293b; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="text-align: center; color: #94a3b8; font-size: 12px; margin: 16px 0 0 0;">Sent from Muhammad Awais Farooq's portfolio · <a href="mailto:${email}" style="color: #4f46e5;">Reply directly to ${name}</a></p>
          </div>
        `,
        text: `New portfolio message\n\nFrom: ${name} <${email}>\nSubject: ${subject}\n\nMessage:\n${message}`,
      });
    } catch (e) {
      console.error("Email send failed:", e);
      // Don't fail the request — fall through to save locally
    }
  }

  // Optional: forward to a webhook (Slack, Discord, Make, Zapier)
  if (process.env.CONTACT_WEBHOOK_URL) {
    try {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `📬 New portfolio message from *${name}* <${email}>\n*Subject:* ${subject}\n\n${message}`,
        }),
      });
    } catch (e) {
      console.error("Webhook failed", e);
    }
  }

  // Persist locally (won't work on Vercel read-only FS, but logs it)
  const entry = { name, email, subject, message, at: new Date().toISOString() };
  try {
    await appendFile(path.join(process.cwd(), "data", "messages.jsonl"), JSON.stringify(entry) + "\n");
  } catch {
    console.log("New contact message:", entry);
  }

  return NextResponse.json({ ok: true });
}
