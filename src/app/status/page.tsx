// System Status Page
"use client";
import { HiSignal, HiCheckCircle } from "react-icons/hi2";

const services = [
  { name: "Web Dashboard", status: "operational" },
  { name: "Firebase Auth", status: "operational" },
  { name: "Firestore Database", status: "operational" },
  { name: "Frigate NVR API", status: "operational" },
  { name: "MQTT Broker", status: "operational" },
  { name: "Webhook Ingestion", status: "operational" },
  { name: "ESP32 Firmware OTA", status: "operational" },
];

const recent = [
  { date: "Jan 15, 2025", title: "Scheduled Maintenance — Frigate Update", desc: "Upgraded Frigate NVR to v0.14. No downtime." },
  { date: "Jan 10, 2025", title: "Dashboard Deploy", desc: "Deployed new multi-page navigation and documentation pages." },
  { date: "Jan 2, 2025", title: "Initial Launch", desc: "MOHN Security platform launched on Firebase App Hosting." },
];

export default function StatusPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiSignal className="h-3 w-3" /> System Status
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">
            All Systems <span className="text-accent">Operational</span>
          </h1>
          <p className="mt-3 text-muted">Real-time status of MOHN Security services.</p>
        </div>
      </section>

      <section className="border-b border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            {services.map((s, i) => (
              <div key={s.name} className={`flex items-center justify-between px-5 py-4 ${i < services.length - 1 ? "border-b border-border" : ""}`}>
                <span className="font-medium text-sm">{s.name}</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-400">
                  <HiCheckCircle className="h-4 w-4" /> Operational
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-xl font-bold">Recent Incidents</h2>
          <div className="mt-6 space-y-6">
            {recent.map((r) => (
              <div key={r.date} className="border-l-2 border-accent/30 pl-4">
                <time className="text-xs text-muted">{r.date}</time>
                <h3 className="mt-1 font-medium">{r.title}</h3>
                <p className="mt-1 text-sm text-muted">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
