import { z } from "zod";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const contactApiSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120, "Name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter a valid email address.")
    .email("Please enter a valid email address.")
    .max(160, "Email address is too long."),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid phone number.")
    .max(30, "Phone number is too long."),
  service: z.string().trim().max(120, "Service or message is too long."),
  message: z.string().trim().max(2000, "Service or message is too long."),
});

export function parseContactFormData(
  body: Record<string, unknown>
): { data?: ContactFormData; error?: string } {
  const parsed = contactApiSchema.safeParse({
    name: typeof body.name === "string" ? body.name : "",
    email: typeof body.email === "string" ? body.email : "",
    phone: typeof body.phone === "string" ? body.phone : "",
    service: typeof body.service === "string" ? body.service : "",
    message: typeof body.message === "string" ? body.message : "",
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid form data." };
  }

  return { data: parsed.data };
}
