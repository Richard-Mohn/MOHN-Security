// ============================================================
//  Contact Section — CTA + contact info
// ============================================================
"use client";

import { useState } from "react";
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire to Firebase Firestore or a Cloud Function
    setSubmitted(true);
  };

  return (
    <section id="contact" className="border-t border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left — Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Get In Touch</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Secure Your Property?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Schedule a free consultation. We&apos;ll assess your needs, design a custom system, 
              and provide a transparent quote — no pressure, no hidden fees.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <HiEnvelope className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Email</div>
                  <div className="text-sm text-muted">contact@mohnsecurity.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <HiPhone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Phone</div>
                  <div className="text-sm text-muted">(555) 000-MOHN</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <HiMapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Service Area</div>
                  <div className="text-sm text-muted">Nationwide — Custom installations everywhere</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="rounded-2xl border border-border bg-background p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Message Received!</h3>
                <p className="mt-2 text-sm text-muted">
                  We&apos;ll review your inquiry and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder-muted focus:border-accent focus:outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder-muted focus:border-accent focus:outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder-muted focus:border-accent focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Property Type</label>
                  <select className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none">
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial / Warehouse</option>
                    <option>Integrator / White-Label</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Tell Us About Your Needs</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder-muted focus:border-accent focus:outline-none resize-none"
                    placeholder="Number of entry points, current system, specific concerns..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-accent py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
