"use client";



import { useState } from "react";



import { contactServiceGroups } from "@/lib/home-content";



interface ContactFormProps {

  defaultService?: string;

  className?: string;

}



export function ContactForm({ defaultService = "", className }: ContactFormProps) {

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(

    "idle"

  );

  const [message, setMessage] = useState("");



  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {

    event.preventDefault();

    setStatus("loading");

    setMessage("");



    const formData = new FormData(event.currentTarget);

    const firstName = String(formData.get("firstName") ?? "").trim();

    const lastName = String(formData.get("lastName") ?? "").trim();

    const payload = {

      name: [firstName, lastName].filter(Boolean).join(" "),

      email: formData.get("email"),

      phone: formData.get("phone"),

      service: formData.get("service"),

      message: formData.get("message"),

    };



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

      event.currentTarget.reset();

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

    <form onSubmit={handleSubmit} className={className ?? "flex flex-col gap-4"}>

      <p className="text-sm text-muted-foreground">
        We typically respond within{" "}
        <span className="font-medium text-foreground">10 mins</span>.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">

        <div className="form-field">

          <label htmlFor="firstName" className="form-label">

            First Name

          </label>

          <input
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            className="form-input"
            placeholder="Arjun"
          />

        </div>

        <div className="form-field">

          <label htmlFor="lastName" className="form-label">

            Last Name

          </label>

          <input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            className="form-input"
            placeholder="Sharma"
          />

        </div>

      </div>



      <div className="form-field">

        <label htmlFor="email" className="form-label">

          Email Address

        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="form-input"
          placeholder="arjun@company.com"
        />

      </div>



      <div className="form-field">

        <label htmlFor="phone" className="form-label">

          Phone Number

        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="form-input"
          placeholder="+91 98765 43210"
        />

      </div>



      <div className="form-field">

        <label htmlFor="service" className="form-label">

          Service Required

        </label>

        <select

          id="service"

          name="service"

          defaultValue={defaultService}

          className="form-input appearance-none"

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

        <label htmlFor="message" className="form-label">

          Tell us about your requirement

        </label>

        <textarea

          id="message"

          name="message"

          rows={4}

          className="form-input min-h-[100px] resize-y"

          placeholder="Please briefly describe your business and what you need help with..."

        />

      </div>



      <button

        type="submit"

        disabled={status === "loading" || status === "success"}

        className="btn-primary w-full justify-center py-4 disabled:cursor-not-allowed disabled:opacity-70"

      >

        {status === "loading"

          ? "Sending…"

          : status === "success"

            ? "Enquiry sent"

            : "Send enquiry"}

      </button>

      {message ? (
        <p
          className={
            status === "error"
              ? "text-sm text-destructive"
              : "text-sm text-muted-foreground"
          }
          role={status === "error" ? "alert" : "status"}
          aria-live={status === "error" ? "assertive" : "polite"}
        >
          {message}
        </p>
      ) : null}

    </form>

  );

}

