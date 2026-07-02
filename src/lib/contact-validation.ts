const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export type ContactFormField = "firstName" | "email" | "phone" | "message";

export function validateContactField(
  field: ContactFormField,
  value: string
): string | undefined {
  const trimmed = value.trim();

  switch (field) {
    case "firstName":
      if (!trimmed) return "Please enter your first name.";
      if (trimmed.length < 2) return "First name must be at least 2 characters.";
      if (trimmed.length > 60) return "First name is too long.";
      return undefined;
    case "email":
      if (!trimmed) return "Please enter your email address.";
      if (!EMAIL_PATTERN.test(trimmed)) return "Please enter a valid email address.";
      if (trimmed.length > 160) return "Email address is too long.";
      return undefined;
    case "phone":
      if (!trimmed) return "Please enter your phone number.";
      if (trimmed.length < 8) return "Please enter a valid phone number.";
      if (trimmed.length > 30) return "Phone number is too long.";
      return undefined;
    case "message":
      if (trimmed.length > 2000) return "Message is too long (max 2000 characters).";
      return undefined;
    default:
      return undefined;
  }
}

export function validateContactFields(values: {
  firstName: string;
  email: string;
  phone: string;
  message: string;
}): Partial<Record<ContactFormField, string>> {
  const errors: Partial<Record<ContactFormField, string>> = {};

  for (const field of ["firstName", "email", "phone", "message"] as const) {
    const error = validateContactField(field, values[field]);
    if (error) {
      errors[field] = error;
    }
  }

  return errors;
}

export function buildContactPayload(values: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  return {
    name: [values.firstName, values.lastName].filter(Boolean).join(" "),
    email: values.email.trim(),
    phone: values.phone.trim(),
    service: values.service.trim(),
    message: values.message.trim(),
  };
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
