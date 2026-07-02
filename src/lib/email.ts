import { Resend } from "resend";

import { siteConfig } from "@/lib/site";

export interface ContactEmailPayload {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
}

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

const SANDBOX_FROM_EMAIL = `${siteConfig.name} <onboarding@resend.dev>`;

function isUnverifiedDomainError(message: string): boolean {
  return /domain is not verified|not verified/i.test(message);
}

function logDevSubmission(
  to: string,
  from: string,
  payload: ContactEmailPayload,
  reason: string
): { delivered: boolean; mode: "dev-log" } {
  console.warn(`[contact:dev] ${reason}`);
  console.info("[contact:dev]", { to, from, ...payload });
  return { delivered: false, mode: "dev-log" };
}

function buildContactEmailHtml(payload: ContactEmailPayload): string {
  const rows = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Service", payload.service || "Not specified"],
    ["Message", payload.message || "Not provided"],
  ];

  const body = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top;">${label}</td><td style="padding:8px 12px;">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111;">
      <h2 style="margin:0 0 16px;">New consultation request — ${siteConfig.name}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:560px;">${body}</table>
      <p style="margin-top:16px;font-size:12px;color:#666;">Sent from the TaxSimpl website contact form.</p>
    </div>
  `;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendContactEmail(
  payload: ContactEmailPayload
): Promise<{ delivered: boolean; mode: "resend" | "dev-log" }> {
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from =
    process.env.RESEND_FROM_EMAIL ?? `${siteConfig.name} <onboarding@resend.dev>`;

  const resend = getResendClient();

  if (!resend) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("RESEND_API_KEY is not configured.");
    }

    console.info("[contact:dev]", { to, from, ...payload });
    return { delivered: false, mode: "dev-log" };
  }

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: `New consultation request from ${payload.name}`,
    html: buildContactEmailHtml(payload),
  });

  if (error && isUnverifiedDomainError(error.message) && from !== SANDBOX_FROM_EMAIL) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[contact:dev] Custom sender domain is not verified in Resend; retrying with sandbox sender."
      );

      const retry = await resend.emails.send({
        from: SANDBOX_FROM_EMAIL,
        to: [to],
        replyTo: payload.email,
        subject: `New consultation request from ${payload.name}`,
        html: buildContactEmailHtml(payload),
      });

      if (!retry.error) {
        return { delivered: true, mode: "resend" };
      }

      return logDevSubmission(
        to,
        from,
        payload,
        `Resend sandbox send also failed: ${retry.error.message}`
      );
    }

    throw new Error(
      `${error.message} Verify taxsimpl.com at https://resend.com/domains and set RESEND_FROM_EMAIL to an address on that domain.`
    );
  }

  if (error) {
    if (process.env.NODE_ENV !== "production") {
      return logDevSubmission(to, from, payload, `Resend send failed: ${error.message}`);
    }

    throw new Error(error.message);
  }

  return { delivered: true, mode: "resend" };
}
