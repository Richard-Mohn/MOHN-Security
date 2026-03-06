// Products — Commercial Security
import Link from "next/link";
import { HiBuildingOffice2, HiArrowRight, HiCheck } from "react-icons/hi2";

export default function CommercialPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiBuildingOffice2 className="h-3 w-3" /> Enterprise Grade
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Commercial <span className="text-accent">Security</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Enterprise-grade surveillance, access control, and automation for offices,
            warehouses, retail, and multi-site deployments.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold">Built for Business</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["Multi-site centralized dashboard", "Employee access control with badge/PIN", "Vehicle license plate recognition", "Inventory area monitoring", "After-hours intrusion detection", "Loading dock surveillance", "Visitor management system", "Compliance-ready audit logs", "99.9% uptime SLA available"].map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 text-sm">
                <HiCheck className="h-4 w-4 text-success shrink-0" /> {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold">Industries We Serve</h2>
            <div className="mt-6 space-y-3">
              {["Retail & Hospitality", "Warehousing & Logistics", "Office Buildings", "Healthcare Facilities", "Construction Sites", "Educational Institutions"].map((ind) => (
                <div key={ind} className="flex items-center gap-3 text-sm">
                  <div className="h-2 w-2 rounded-full bg-accent" /> {ind}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-background p-8 text-center">
            <div className="text-5xl font-bold text-accent">50+</div>
            <div className="mt-2 text-muted">Cameras per site supported</div>
            <div className="mt-6 text-5xl font-bold text-accent">200+</div>
            <div className="mt-2 text-muted">Sensor nodes per deployment</div>
            <div className="mt-6 text-5xl font-bold text-accent">&lt; 1s</div>
            <div className="mt-2 text-muted">Detection to alert latency</div>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Secure your business</h2>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover">
            Request Enterprise Quote <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
