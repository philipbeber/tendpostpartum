"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-[2.5rem] border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-[0_8px_32px_rgba(27,28,23,0.04)] md:p-12">
      <h2 className="font-headline mb-8 text-3xl text-on-surface">
        Inquiry Details
      </h2>
      {submitted ? (
        <p className="text-lg leading-relaxed text-on-surface-variant">
          Thank you—we&apos;ve received your note. We typically respond within
          24–48 business hours.
        </p>
      ) : (
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="ml-1 text-sm font-medium text-on-surface-variant"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-xl border-none bg-surface-container-high px-6 py-4 placeholder:text-outline/50 focus:ring-2 focus:ring-secondary/20"
                placeholder="Your name"
                type="text"
                autoComplete="name"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="ml-1 text-sm font-medium text-on-surface-variant"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                required
                className="w-full rounded-xl border-none bg-surface-container-high px-6 py-4 placeholder:text-outline/50 focus:ring-2 focus:ring-secondary/20"
                placeholder="your@email.com"
                type="email"
                autoComplete="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="timing"
              className="ml-1 text-sm font-medium text-on-surface-variant"
            >
              Due Date or Baby&apos;s Age
            </label>
            <input
              id="timing"
              name="timing"
              className="w-full rounded-xl border-none bg-surface-container-high px-6 py-4 placeholder:text-outline/50 focus:ring-2 focus:ring-secondary/20"
              placeholder="e.g. October 2024 or 3 weeks old"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="ml-1 text-sm font-medium text-on-surface-variant"
            >
              How can we support you?
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full resize-none rounded-xl border-none bg-surface-container-high px-6 py-4 placeholder:text-outline/50 focus:ring-2 focus:ring-secondary/20"
              placeholder="Tell us a little about your needs..."
              rows={5}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-secondary py-5 text-lg font-semibold text-on-secondary transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95"
          >
            Send Inquiry
          </button>
          <p className="text-center text-sm text-outline">
            We typically respond within 24-48 business hours.
          </p>
        </form>
      )}
    </div>
  );
}
