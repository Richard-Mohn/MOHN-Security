// Solutions — Access Control
import Link from "next/link";
import { HiLockClosed, HiArrowRight, HiCheck, HiFingerPrint, HiKey } from "react-icons/hi2";

export default function AccessControlPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiLockClosed className="h-3 w-3" /> Entry Management
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Smart <span className="text-accent">Access Control</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Control who enters your property with smart locks, keypads, and biometric
            readers — all integrated with the MOHN Security dashboard.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-3">
          {[
            { icon: HiKey, title: "Smart Locks", desc: "WiFi and Z-Wave locks with remote lock/unlock, auto-lock schedules, and guest codes." },
            { icon: HiLockClosed, title: "Keypads", desc: "PIN-based entry with time-limited codes for contractors, cleaners, and guests." },
            { icon: HiFingerPrint, title: "Biometric Entry", desc: "Fingerprint readers for high-security areas — garages, server rooms, safes." },
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
          <h2 className="text-2xl font-bold text-center">Integration Features</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Unlock from dashboard or mobile app", "Auto-lock on alarm trigger", "Entry logs with timestamp & user", "Temporary guest access codes", "Geofence-based auto-unlock", "Integration with camera snapshots"].map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 text-sm">
                <HiCheck className="h-4 w-4 text-success shrink-0" /> {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Upgrade your entry points</h2>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover">
            Learn More <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
