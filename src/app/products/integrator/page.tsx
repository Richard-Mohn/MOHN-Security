// Products — Integrator / White-Label
import Link from "next/link";
import { HiPaintBrush, HiArrowRight, HiCheck, HiShieldCheck } from "react-icons/hi2";

export default function IntegratorPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiPaintBrush className="h-3 w-3" /> Partner Program
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Integrator / <span className="text-accent">White-Label</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Rebrand the entire MOHN Security platform under your own company name.
            Sell, install, and manage security systems with your own logo, colors, and domain.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl font-bold">What You Get</h2>
            <ul className="mt-6 space-y-3">
              {["Custom branding (logo, colors, domain)", "Your own Firebase project & database", "White-labeled dashboard & mobile apps", "Hardware sourcing & fulfillment", "Training & certification program", "Dedicated integrator support", "Revenue-share or flat licensing", "Multi-tenant client management"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <HiCheck className="h-4 w-4 text-success shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-accent bg-accent/5 p-8">
            <HiShieldCheck className="h-12 w-12 text-accent" />
            <h3 className="mt-4 text-xl font-bold">Become a Partner</h3>
            <p className="mt-2 text-sm text-muted">
              Whether you&apos;re an existing security installer looking to upgrade your tech stack,
              or an entrepreneur launching a new security brand — we provide the full platform.
            </p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover">
              Apply for Partnership <HiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-center">How White-Label Works</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Apply", desc: "Fill out the partner application" },
              { step: "02", title: "Configure", desc: "Set your brand, colors, and domain" },
              { step: "03", title: "Deploy", desc: "Install systems under your brand" },
              { step: "04", title: "Manage", desc: "Use the multi-tenant dashboard" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
