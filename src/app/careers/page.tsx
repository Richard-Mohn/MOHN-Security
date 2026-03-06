// Company — Careers
import Link from "next/link";
import { HiBriefcase, HiArrowRight } from "react-icons/hi2";

const openings = [
  { title: "Embedded Firmware Engineer", type: "Full-time", location: "Richmond, VA / Remote", desc: "Build ESP32 sensor firmware, OTA update systems, and MQTT integrations." },
  { title: "Full-Stack Developer", type: "Full-time", location: "Remote", desc: "Next.js, Firebase, Flutter — build the dashboard and mobile apps." },
  { title: "Security System Installer", type: "Full-time", location: "Richmond, VA", desc: "Install cameras, sensor nodes, and networking equipment at customer sites." },
  { title: "Sales & Business Development", type: "Full-time", location: "Richmond, VA", desc: "Grow our residential and commercial customer base in the Mid-Atlantic." },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiBriefcase className="h-3 w-3" /> Join Us
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Careers at <span className="text-accent">MOHN Security</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            We&apos;re building a team of passionate engineers, installers, and sales professionals
            who want to reshape the security industry.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold">Open Positions</h2>
          <div className="mt-8 space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <div className="mt-1 flex flex-wrap gap-2">
                      <span className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">{job.type}</span>
                      <span className="rounded-full bg-surface-light px-3 py-0.5 text-xs text-muted">{job.location}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted">{job.desc}</p>
                  </div>
                  <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium text-muted hover:border-accent hover:text-foreground">
                    Apply <HiArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Don&apos;t see your role?</h2>
          <p className="mt-2 text-muted">Send us your resume anyway — we&apos;re always looking for talented people.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover">
            Send Resume <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
