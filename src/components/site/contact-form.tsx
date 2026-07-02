"use client";

import { useId, useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactServiceGroups } from "@/lib/home-content";
import {
  buildContactPayload,
  type ContactFormField,
  validateContactField,
  validateContactFields,
} from "@/lib/contact-validation";
import { getWhatsAppUrl, siteConfig } from "@/lib/site";

interface ContactFormProps {
  defaultService?: string;
  className?: string;
}

const FIELD_ORDER: ContactFormField[] = ["firstName", "email", "phone", "message"];

export function ContactForm({ defaultService = "", className }: ContactFormProps) {
  const statusId = useId();
  const firstNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const fieldRefs: Record<ContactFormField, React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>> =
    {
      firstName: firstNameRef,
      email: emailRef,
      phone: phoneRef,
      message: messageRef,
    };

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<ContactFormField, string>>>(
    {}
  );

  function readFormValues(form: HTMLFormElement) {
    const formData = new FormData(form);
    return {
      firstName: String(formData.get("firstName") ?? "").trim(),
      lastName: String(formData.get("lastName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };
  }

  function focusFirstInvalid(errors: Partial<Record<ContactFormField, string>>) {
    const firstField = FIELD_ORDER.find((field) => errors[field]);
    if (!firstField) return;
    fieldRefs[firstField].current?.focus();
  }

  function handleFieldBlur(field: ContactFormField, value: string) {
    const error = validateContactField(field, value);
    setFieldErrors((current) => {
      const next = { ...current };
      if (error) {
        next[field] = error;
      } else {
        delete next[field];
      }
      return next;
    });
  }

  function resetFormState() {
    setStatus("idle");
    setMessage("");
    setFieldErrors({});
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = readFormValues(form);
    const errors = validateContactFields(values);

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      setMessage("Please fix the highlighted fields and try again.");
      focusFirstInvalid(errors);
      return;
    }

    setStatus("loading");
    setMessage("");
    setFieldErrors({});

    const payload = buildContactPayload(values);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Request failed");
      }

      setStatus("success");
      setMessage(result.message ?? "Thank you. We will get back to you within 10 mins.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please call us or try WhatsApp instead."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={className ?? "flex min-w-0 flex-col gap-4 text-center"}
      aria-busy={status === "loading"}
      noValidate
    >
      <p className="text-sm text-muted-foreground">
        We typically respond within{" "}
        <span className="font-medium text-foreground">10 mins</span>.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="form-field">
          <Label htmlFor="firstName" className="form-label form-label-required">
            First Name
          </Label>
          <Input
            ref={firstNameRef}
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            className="form-input"
            placeholder="Arjun"
            disabled={status === "loading"}
            aria-invalid={Boolean(fieldErrors.firstName)}
            aria-describedby={fieldErrors.firstName ? "firstName-error" : undefined}
            onBlur={(event) => handleFieldBlur("firstName", event.target.value)}
          />
          {fieldErrors.firstName ? (
            <p id="firstName-error" className="form-field-error" role="alert">
              {fieldErrors.firstName}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <Label htmlFor="lastName" className="form-label">
            Last Name
          </Label>
          <Input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            className="form-input"
            placeholder="Sharma"
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div className="form-field">
        <Label htmlFor="email" className="form-label form-label-required">
          Email Address
        </Label>
        <Input
          ref={emailRef}
          id="email"
          name="email"
          type="email"
          inputMode="email"
          required
          autoComplete="email"
          className="form-input"
          placeholder="arjun@company.com"
          disabled={status === "loading"}
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
          onBlur={(event) => handleFieldBlur("email", event.target.value)}
        />
        {fieldErrors.email ? (
          <p id="email-error" className="form-field-error" role="alert">
            {fieldErrors.email}
          </p>
        ) : null}
      </div>

      <div className="form-field">
        <Label htmlFor="phone" className="form-label form-label-required">
          Phone Number
        </Label>
        <Input
          ref={phoneRef}
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          required
          autoComplete="tel"
          className="form-input"
          placeholder="+91 98765 43210"
          disabled={status === "loading"}
          aria-invalid={Boolean(fieldErrors.phone)}
          aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
          onBlur={(event) => handleFieldBlur("phone", event.target.value)}
        />
        {fieldErrors.phone ? (
          <p id="phone-error" className="form-field-error" role="alert">
            {fieldErrors.phone}
          </p>
        ) : null}
      </div>

      <div className="form-field">
        <Label htmlFor="service" className="form-label">
          Service Required
        </Label>
        <select
          id="service"
          name="service"
          defaultValue={defaultService}
          className="form-select"
          disabled={status === "loading"}
        >
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
      </div>

      <div className="form-field">
        <Label htmlFor="message" className="form-label">
          Tell us about your requirement
        </Label>
        <Textarea
          ref={messageRef}
          id="message"
          name="message"
          rows={4}
          className="form-input min-h-[100px] resize-y"
          placeholder="Please briefly describe your business and what you need help with..."
          disabled={status === "loading"}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          onBlur={(event) => handleFieldBlur("message", event.target.value)}
        />
        {fieldErrors.message ? (
          <p id="message-error" className="form-field-error" role="alert">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center py-4"
        aria-describedby={message ? statusId : undefined}
      >
        {status === "loading"
          ? "Sending…"
          : status === "success"
            ? "Enquiry sent"
            : "Send enquiry"}
      </button>

      {status === "success" ? (
        <button type="button" className="btn-secondary w-full justify-center" onClick={resetFormState}>
          Send another enquiry
        </button>
      ) : null}

      {message ? (
        <div
          id={statusId}
          className={
            status === "error" ? "form-status-error text-left" : "form-status-success text-left"
          }
          role={status === "error" ? "alert" : "status"}
          aria-live={status === "error" ? "assertive" : "polite"}
        >
          <p>{message}</p>
          {status === "error" ? (
            <p className="mt-2 text-sm">
              Or{" "}
              <a href={`tel:${siteConfig.phone}`} className="link-muted font-medium">
                call {siteConfig.phoneDisplay}
              </a>{" "}
              /{" "}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="link-muted font-medium"
              >
                WhatsApp us
              </a>
              .
            </p>
          ) : null}
        </div>
      ) : null}
    </form>
  );
}
