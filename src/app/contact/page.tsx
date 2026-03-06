// Company — Contact
"use client";
import { useState } from "react";
import { HiEnvelope, HiPhone, HiMapPin, HiArrowRight } from "react-icons/hi2";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Whether you need a security consultation, a custom quote, or technical support —
            we&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold">Contact Information</h2>
              <p className="mt-2 text-sm text-muted">Fill out the form and our team will get back to you within 24 hours.</p>
            </div>
            {[
              { icon: HiEnvelope, label: "Email", value: "info@mohnsecurity.com" },
              { icon: HiPhone, label: "Phone", value: "(804) 555-MOHN" },
              { icon: HiMapPin, label: "Service Area", value: "Richmond, VA Metro Area" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <item.icon className="mt-0.5 h-5 w-5 text-accent shrink-0" />
                <div>
                  <div className="text-sm font-medium">{item.label}</div>
                  <div className="text-sm text-muted">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-success/30 bg-success/5 p-12 text-center">
                <div className="text-4xl">✓</div>
                <h3 className="mt-4 text-xl font-bold">Message Sent!</h3>
                <p className="mt-2 text-muted">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-4 rounded-2xl border border-border bg-surface p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">First Name</label>
                    <input type="text" required className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-accent focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Last Name</label>
                    <input type="text" required className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-accent focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input type="email" required className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-accent focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone</label>
                  <input type="tel" className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-accent focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Property Type</label>
                  <select className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-accent focus:outline-none">
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Multi-Site</option>
                    <option>Integrator / Reseller</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea rows={4} required className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-accent focus:outline-none resize-none" />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover">
                  Send Message <HiArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
