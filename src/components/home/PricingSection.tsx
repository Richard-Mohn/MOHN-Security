// ============================================================
//  Pricing Section — Tiers
// ============================================================
import Link from "next/link";
import { HiCheck } from "react-icons/hi2";

const tiers = [
  {
    name: "Residential",
    price: "Custom",
    description: "Complete home security with AI detection and instant deterrence.",
    features: [
      "Up to 8 cameras",
      "AI person detection",
      "Glass-break audio analysis",
      "ESP32 siren/strobe nodes",
      "Cloud NVR with 7-day retention",
      "Mobile app access",
      "Email & push notifications",
    ],
    cta: "Request Quote",
    highlighted: false,
  },
  {
    name: "Commercial",
    price: "Custom",
    description: "Multi-zone protection for businesses, warehouses, and retail.",
    features: [
      "Up to 32 cameras",
      "Multi-zone AI detection",
      "Glass-break + audio alerts",
      "Multiple siren/strobe nodes",
      "Cloud NVR with 30-day retention",
      "Branded dashboard",
      "Home automation integration",
      "Priority support",
    ],
    cta: "Request Quote",
    highlighted: true,
  },
  {
    name: "Integrator / White-Label",
    price: "Contact Us",
    description: "Resell MOHN Security under your own brand to your clients.",
    features: [
      "Unlimited cameras per site",
      "Full white-label branding",
      "Client management dashboard",
      "Custom domain & logo",
      "API access",
      "Multi-site management",
      "Dedicated account manager",
      "Volume pricing",
    ],
    cta: "Partner With Us",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Pricing</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Custom Solutions, Transparent Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Every property is different. We design, price, and build to your exact needs — 
            no generic packages.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-8 transition-all ${
                tier.highlighted
                  ? "border-accent bg-accent/5 shadow-xl shadow-accent/10"
                  : "border-border bg-surface hover:border-accent/30"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <div className="mt-2 text-3xl font-bold text-accent">{tier.price}</div>
              <p className="mt-3 text-sm text-muted">{tier.description}</p>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <HiCheck className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className={`mt-8 block rounded-xl py-3 text-center text-sm font-semibold transition-all ${
                  tier.highlighted
                    ? "bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-hover"
                    : "border border-border text-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
