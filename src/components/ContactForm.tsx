"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type FormState = {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  industry: string;
  website: string;
  companySize: string;
  message: string;
  honey: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  businessName: "",
  industry: "",
  website: "",
  companySize: "",
  message: "",
  honey: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    trackEvent("contact_form_submit_attempt", { page: "contact" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as { success: boolean; error?: string };
      if (!response.ok || !payload.success) {
        throw new Error(payload.error || "Unable to send your request.");
      }

      setStatus("success");
      setMessage("Your request has been sent. We will follow up shortly.");
      setForm(initialState);
      trackEvent("contact_form_submit_success", { page: "contact" });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your request.");
      trackEvent("contact_form_submit_error", { page: "contact" });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card-panel space-y-5">
      <div>
        <p className="eyebrow text-[var(--text-muted)]">Send project details</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--primary)]">
          Tell us what is slowing the business down
        </h2>
      </div>

      <input
        type="text"
        name="honey"
        aria-hidden="true"
        value={form.honey}
        onChange={(event) => setForm((current) => ({ ...current, honey: event.target.value }))}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" required>
          <input
            required
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className="input-base"
          />
        </Field>
        <Field label="Email" required>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className="input-base"
          />
        </Field>
        <Field label="Phone">
          <input
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            className="input-base"
          />
        </Field>
        <Field label="Business Name">
          <input
            value={form.businessName}
            onChange={(event) => setForm((current) => ({ ...current, businessName: event.target.value }))}
            className="input-base"
          />
        </Field>
        <Field label="Industry">
          <input
            value={form.industry}
            onChange={(event) => setForm((current) => ({ ...current, industry: event.target.value }))}
            className="input-base"
            placeholder="Trades, clinic, real estate, professional services"
          />
        </Field>
        <Field label="Company Size">
          <select
            value={form.companySize}
            onChange={(event) => setForm((current) => ({ ...current, companySize: event.target.value }))}
            className="input-base"
          >
            <option value="">Select one</option>
            <option value="1-5">1-5 staff</option>
            <option value="6-15">6-15 staff</option>
            <option value="16-50">16-50 staff</option>
            <option value="50+">50+ staff</option>
          </select>
        </Field>
      </div>

      <Field label="Website">
        <input
          value={form.website}
          onChange={(event) => setForm((current) => ({ ...current, website: event.target.value }))}
          className="input-base"
          placeholder="https://"
        />
      </Field>

      <Field label="What is breaking down right now?" required>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          className="input-base resize-y"
          placeholder="Examples: leads are not getting called back, admin work is repeated, staff are double-booking, reporting is messy, or tools are not talking to each other."
        />
      </Field>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Request"}
        </button>
        {message ? (
          <p
            role="status"
            aria-live="polite"
            className={`text-sm ${status === "error" ? "text-red-700" : "text-[var(--secondary)]"}`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[var(--text)]">
        {label}
        {required ? " *" : ""}
      </span>
      {children}
    </label>
  );
}
