// Pricing — Standalone Page
import Link from "next/link";
import { HiCheck, HiShieldCheck, HiArrowRight } from "react-icons/hi2";

const tiers = [
  {
    name: "Residential",
    price: "Custom",
    desc: "Complete home security system tailored to your property",
    features: [
      "2-8 AI cameras",
      "4-16 ESP32 sensor nodes",
      "Frigate NVR on dedicated hardware",
      "Web dashboard access",
      "Push & email alerts",
      "7-30 day recording retention",
      "Remote arm/disarm",
      "Professional installation",
    ],
    cta: "Get a Quote",
  },
  {
    name: "Commercial",
    price: "Custom",
    desc: "Enterprise-grade security for businesses of all sizes",
    popular: true,
    features: [
      "Everything in Residential, plus:",
      "Up to 50+ cameras",
      "200+ sensor nodes",
      "Multi-site dashboard",
      "Employee access control",
      "License plate recognition",
      "Compliance audit logs",
      "99.9% uptime SLA",
      "Priority support",
    ],
    cta: "Request Enterprise Quote",
  },
  {
    name: "Integrator",
    price: "Contact Us",
    desc: "White-label the platform under your own brand",
    features: [
      "Everything in Commercial, plus:",
      "Custom branding & domain",
      "Multi-tenant management",
      "Reseller pricing on hardware",
      "Training & certification",
      "API access for integrations",
      "Co-marketing support",
      "Dedicated account manager",
    ],
    cta: "Apply for Partnership",
  },
];

const faqs = [
  { q: "Are there monthly monitoring fees?", a: "No. Once installed, the system runs on your own hardware with no recurring fees. Updates are free." },
  { q: "Can I install it myself?", a: "Yes — we offer hardware kits and documentation for DIY installs. Professional installation is also available." },
  { q: "What cameras work with the system?", a: "Any ONVIF-compatible or RTSP IP camera. We recommend Wisenet, Reolink, and Amcrest models." },
  { q: "How long does installation take?", a: "Residential: 2-4 hours. Commercial: 1-3 days depending on scope. We schedule at your convenience." },
  { q: "Do you offer financing?", a: "Yes — 0% financing is available for qualifying residential and commercial customers." },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, <span className="text-accent">Transparent</span> Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            No monthly fees. No hidden costs. One-time installation with free lifetime software updates.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-8 ${tier.popular ? "border-accent bg-accent/5 ring-1 ring-accent" : "border-border bg-surface"}`}
            >
              {tier.popular && (
                <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                  <HiShieldCheck className="h-3 w-3" /> Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <p className="mt-1 text-sm text-muted">{tier.desc}</p>
              <div className="mt-4 text-3xl font-bold">{tier.price}</div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <HiCheck className="mt-0.5 h-4 w-4 text-success shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 block rounded-xl px-6 py-3 text-center text-sm font-semibold transition-colors ${
                  tier.popular
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "border border-border text-muted hover:border-accent hover:text-foreground"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-border bg-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Ready to secure your property?</h2>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover">
            Get Started <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
