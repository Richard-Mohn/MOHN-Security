// Products — Residential Security
import Link from "next/link";
import { HiHome, HiArrowRight, HiCheck, HiShieldCheck } from "react-icons/hi2";

const packages = [
  {
    name: "Essential",
    desc: "Perfect for apartments and small homes",
    features: ["2 AI cameras", "4 ESP32 sensor nodes", "Web dashboard", "Email alerts", "7-day recording"],
  },
  {
    name: "Premium",
    desc: "Full coverage for mid-size homes",
    features: ["4 AI cameras", "8 ESP32 sensor nodes", "Web + mobile apps", "Push & SMS alerts", "30-day recording", "Smart lock integration", "Automation rules"],
    popular: true,
  },
  {
    name: "Estate",
    desc: "Maximum protection for large properties",
    features: ["8+ AI cameras", "16+ sensor nodes", "Multi-building coverage", "Dedicated support", "90-day recording", "Full automation suite", "Access control", "Custom zones"],
  },
];

export default function ResidentialPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiHome className="h-3 w-3" /> For Homeowners
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Residential <span className="text-accent">Security</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Complete home security packages with AI detection, instant deterrence,
            and smart automation — professionally installed and configured.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl border p-8 ${pkg.popular ? "border-accent bg-accent/5 ring-1 ring-accent" : "border-border bg-surface"}`}
            >
              {pkg.popular && (
                <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                  <HiShieldCheck className="h-3 w-3" /> Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <p className="mt-1 text-sm text-muted">{pkg.desc}</p>
              <div className="mt-4 text-3xl font-bold">Custom</div>
              <p className="text-xs text-muted">Contact for pricing</p>
              <ul className="mt-6 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <HiCheck className="h-4 w-4 text-success shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 block rounded-xl px-6 py-3 text-center text-sm font-semibold transition-colors ${
                  pkg.popular
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "border border-border text-muted hover:border-accent hover:text-foreground"
                }`}
              >
                Get a Quote
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Not sure which package?</h2>
          <p className="mt-2 text-muted">We&apos;ll do a free consultation to assess your property and recommend the right system.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover">
            Free Consultation <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
