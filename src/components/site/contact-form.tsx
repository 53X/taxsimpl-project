"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactServiceGroups } from "@/lib/home-content";
import {
  contactFormSchema,
  toContactPayload,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { getWhatsAppUrl, siteConfig } from "@/lib/site";

interface ContactFormProps {
  defaultService?: string;
  className?: string;
}

export function ContactForm({ defaultService = "", className }: ContactFormProps) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: defaultService,
      message: "",
    },
    mode: "onBlur",
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: ContactFormValues) {
    const toastId = toast.loading("Sending your enquiry…");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toContactPayload(values)),
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Request failed");
      }

      toast.success(result.message ?? "Thank you. We will get back to you within 10 mins.", {
        id: toastId,
      });
      form.reset({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: defaultService,
        message: "",
      });
    } catch (error) {
      const description =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please call us or try WhatsApp instead.";

      toast.error("Could not send your enquiry", {
        id: toastId,
        description,
        action: {
          label: "WhatsApp",
          onClick: () => window.open(getWhatsAppUrl(), "_blank", "noopener,noreferrer"),
        },
      });
    }
  }

  function handleInvalid() {
    toast.error("Please fix the highlighted fields and try again.");
    const firstErrorField = Object.keys(form.formState.errors)[0] as keyof ContactFormValues | undefined;
    if (firstErrorField) {
      form.setFocus(firstErrorField);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, handleInvalid)}
        className={className ?? "flex min-w-0 flex-col gap-4 text-center"}
        aria-busy={isSubmitting}
        noValidate
      >
        <p className="text-sm text-muted-foreground">
          We typically respond within{" "}
          <span className="font-medium text-foreground">10 mins</span>.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label form-label-required">First Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="given-name"
                    className="form-input"
                    placeholder="Arjun"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Last Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="family-name"
                    className="form-input"
                    placeholder="Sharma"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label form-label-required">Email Address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  className="form-input"
                  placeholder="arjun@company.com"
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label form-label-required">Phone Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  className="form-input"
                  placeholder="+91 98765 43210"
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">Service Required</FormLabel>
              <FormControl>
                <select {...field} className="form-select" disabled={isSubmitting}>
                  <option value="">Select a service</option>
                  {contactServiceGroups.map((group) => (
                    <optgroup key={group.label} label={group.label}>
                      {group.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">Tell us about your requirement</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={4}
                  className="form-input min-h-[100px] resize-y"
                  placeholder="Please briefly describe your business and what you need help with..."
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full justify-center py-4"
        >
          {isSubmitting ? "Sending…" : "Send enquiry"}
        </button>

        <p className="text-xs text-muted-foreground">
          Prefer a direct line?{" "}
          <a href={`tel:${siteConfig.phone}`} className="link-muted font-medium">
            Call {siteConfig.phoneDisplay}
          </a>
        </p>
      </form>
    </Form>
  );
}
