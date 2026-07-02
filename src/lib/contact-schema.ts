import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "Please enter your first name.")
    .min(2, "First name must be at least 2 characters.")
    .max(60, "First name is too long."),
  lastName: z.string().trim().max(60, "Last name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address.")
    .max(160, "Email address is too long."),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter your phone number.")
    .min(8, "Please enter a valid phone number.")
    .max(30, "Phone number is too long."),
  service: z.string().trim().max(120, "Service selection is too long."),
  message: z.string().trim().max(2000, "Message is too long (max 2000 characters)."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function toContactPayload(values: ContactFormValues) {
  return {
    name: [values.firstName, values.lastName].filter(Boolean).join(" "),
    email: values.email.trim(),
    phone: values.phone.trim(),
    service: values.service.trim(),
    message: values.message.trim(),
  };
}
