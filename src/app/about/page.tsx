// Company — About Us
import Link from "next/link";
import { HiShieldCheck, HiArrowRight } from "react-icons/hi2";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About <span className="text-accent">MOHN Security</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            We&apos;re building the next generation of security systems — custom-engineered,
            AI-powered, and fully transparent. No monthly monitoring fees. No cloud lock-in.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Traditional security companies charge high monthly fees for outdated technology
              and slow response times. MOHN Security was founded to change that.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We build custom, high-end security systems using open-source AI (Frigate NVR),
              custom ESP32 sensor networks, and a modern web dashboard — all running on
              infrastructure you own. Zero-delay deterrence. Full transparency. No hidden fees.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Our Approach</h2>
            <div className="mt-4 space-y-4">
              {[
                { title: "Privacy First", desc: "All processing happens on-premise. Your video never touches our servers." },
                { title: "Open Source Core", desc: "Frigate NVR, ESP32 firmware, and our API are open source and auditable." },
                { title: "Custom Engineering", desc: "Every deployment is designed for the specific property and threat model." },
                { title: "No Monthly Fees", desc: "One-time installation and hardware cost. The software and updates are free." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-surface p-4">
                  <div className="flex items-center gap-2">
                    <HiShieldCheck className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-2xl font-bold">By the Numbers</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-4">
            {[
              { stat: "2024", label: "Founded" },
              { stat: "100%", label: "Privacy-First" },
              { stat: "< 200ms", label: "Detection Speed" },
              { stat: "$0/mo", label: "Monitoring Fees" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl font-bold text-accent">{item.stat}</div>
                <div className="mt-1 text-sm text-muted">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Ready to get started?</h2>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover">
            Contact Us <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
