// Solutions — Remote Monitoring
import Link from "next/link";
import { HiSignal, HiDevicePhoneMobile, HiComputerDesktop, HiArrowRight, HiCheck } from "react-icons/hi2";

export default function MonitoringPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiSignal className="h-3 w-3" /> Always Connected
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Remote <span className="text-accent">Monitoring</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Access your entire security system from anywhere — live camera feeds, sensor
            status, event history, and alarm controls, all from a single dashboard.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-3">
          {[
            { icon: HiComputerDesktop, title: "Web Dashboard", desc: "Full-featured Next.js dashboard with real-time updates, accessible from any browser." },
            { icon: HiDevicePhoneMobile, title: "Mobile Apps", desc: "Native iOS and Android apps (Flutter) with push notifications and live view." },
            { icon: HiSignal, title: "API Access", desc: "REST API for integrations — connect to Home Assistant, Node-RED, or your own tools." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-surface p-6">
              <item.icon className="h-10 w-10 text-accent" />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center">Dashboard Features</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Live camera grid with status badges", "Real-time event feed with severity levels", "Sensor arm/disarm controls", "Automation rule management", "System health & connectivity status", "User management & white-label branding", "Detection snapshot viewer", "Historical event search & export"].map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 text-sm">
                <HiCheck className="h-4 w-4 text-success shrink-0" /> {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">See your property in real time</h2>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover">
            Request Access <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
