const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export function parseContactFormData(
  body: Record<string, unknown>
): { data?: ContactFormData; error?: string } {
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const service = typeof body.service === "string" ? body.service.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || name.length < 2) {
    return { error: "Please enter your full name." };
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  if (!phone || phone.length < 8) {
    return { error: "Please enter a valid phone number." };
  }

  if (name.length > 120 || email.length > 160 || phone.length > 30) {
    return { error: "One or more fields are too long." };
  }

  if (service.length > 120 || message.length > 2000) {
    return { error: "Service or message is too long." };
  }

  return { data: { name, email, phone, service, message } };
}
