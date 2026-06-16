import { NextResponse } from "next/server";

import { parseContactFormData } from "@/lib/contact-validation";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = parseContactFormData(body);

  if (!parsed.data) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  try {
    const result = await sendContactEmail(parsed.data);

    return NextResponse.json({
      ok: true,
      delivered: result.delivered,
      message:
        result.mode === "dev-log"
          ? "Received locally. Set RESEND_API_KEY to send emails in production."
          : "Thank you. We will get back to you shortly.",
    });
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      {
        error:
          "We could not send your message right now. Please call or WhatsApp us instead.",
      },
      { status: 500 }
    );
  }
}
