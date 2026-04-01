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
      <h2 className="font-headline mb-4 text-3xl text-on-surface">
        Send a message
      </h2>
      <p className="mb-8 text-on-surface-variant">
        Free consultation available to determine fit.
      </p>
      {submitted ? (
        <p className="text-lg leading-relaxed text-on-surface-variant">
          Thank you—I&apos;ve received your note and will be in touch soon.
        </p>
      ) : (
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="first_name"
                className="ml-1 text-sm font-medium text-on-surface-variant"
              >
                First name
              </label>
              <input
                id="first_name"
                name="first_name"
                required
                className="w-full rounded-xl border-none bg-surface-container-high px-6 py-4 placeholder:text-outline/50 focus:ring-2 focus:ring-secondary/20"
                placeholder="First name"
                type="text"
                autoComplete="given-name"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="last_name"
                className="ml-1 text-sm font-medium text-on-surface-variant"
              >
                Last name
              </label>
              <input
                id="last_name"
                name="last_name"
                required
                className="w-full rounded-xl border-none bg-surface-container-high px-6 py-4 placeholder:text-outline/50 focus:ring-2 focus:ring-secondary/20"
                placeholder="Last name"
                type="text"
                autoComplete="family-name"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="ml-1 text-sm font-medium text-on-surface-variant"
            >
              Email
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
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="ml-1 text-sm font-medium text-on-surface-variant"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full resize-none rounded-xl border-none bg-surface-container-high px-6 py-4 placeholder:text-outline/50 focus:ring-2 focus:ring-secondary/20"
              placeholder="Tell me a little about yourself and your needs (if you know them)..."
              rows={5}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-secondary py-5 text-lg font-semibold text-on-secondary transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
