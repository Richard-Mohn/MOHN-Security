// Company — Case Studies
import Link from "next/link";
import { HiLightBulb, HiArrowRight } from "react-icons/hi2";

const studies = [
  {
    title: "Residential Estate — Chesterfield, VA",
    type: "Residential",
    summary: "4-camera, 8-sensor deployment protecting a 4,000 sq ft home with detached garage. Frigate NVR detects intruders and triggers ESP32 sirens in under 200ms.",
    results: ["Zero false alarms in 90 days", "3 real events detected and deterred", "100% uptime across all nodes"],
  },
  {
    title: "Auto Body Shop — Richmond, VA",
    type: "Commercial",
    summary: "6-camera perimeter system with after-hours detection zones covering the lot, bay doors, and customer entrance. License plate recognition for vehicle tracking.",
    results: ["Eliminated overnight break-ins", "Insurance premium reduced 15%", "Full event footage for claims"],
  },
  {
    title: "Multi-Unit Rental — Short Pump, VA",
    type: "Commercial",
    summary: "White-labeled deployment for a property management company across 3 buildings. Each unit has independent sensor zones with centralized monitoring.",
    results: ["Tenant satisfaction up 40%", "Maintenance response time halved", "Single dashboard for all units"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiLightBulb className="h-3 w-3" /> Real Deployments
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Case <span className="text-accent">Studies</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            See how MOHN Security systems perform in real-world deployments across
            residential, commercial, and multi-site installations.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {studies.map((study) => (
            <div key={study.title} className="rounded-2xl border border-border bg-surface p-8">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">{study.type}</span>
              </div>
              <h3 className="mt-3 text-xl font-bold">{study.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{study.summary}</p>
              <div className="mt-4">
                <div className="text-xs font-semibold text-accent uppercase tracking-wider">Results</div>
                <ul className="mt-2 space-y-1">
                  {study.results.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" /> {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Want results like these?</h2>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover">
            Get a Free Consultation <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
