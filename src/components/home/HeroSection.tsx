// ============================================================
//  Hero Section — Main landing visual
// ============================================================
import Link from "next/link";
import { HiShieldCheck, HiPlay } from "react-icons/hi2";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <HiShieldCheck className="h-4 w-4" />
            Zero-Delay Active Deterrence
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Security That{" "}
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Stops Intruders
            </span>
            <br />
            Before They Start
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Custom-built, AI-powered security for high-end properties. Person detection, 
            glass-break audio analysis, and instant police-mimic deterrence — all in under 200ms.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="w-full rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-hover hover:shadow-accent/40 sm:w-auto"
            >
              Request a Consultation
            </Link>
            <Link
              href="/#how-it-works"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-8 py-3.5 text-base font-semibold text-foreground transition-all hover:border-accent hover:text-accent sm:w-auto"
            >
              <HiPlay className="h-5 w-5" />
              See How It Works
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm text-muted">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success" />
              Sub-200ms Response Time
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success" />
              AI-Powered Detection
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success" />
              Custom White-Label Systems
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success" />
              24/7 Cloud Dashboard
            </div>
          </div>
        </div>

        {/* Dashboard Preview Mock */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="rounded-2xl border border-border bg-surface p-2 shadow-2xl shadow-black/40">
            <div className="rounded-xl bg-surface-light p-6">
              {/* Mock Dashboard Header */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-danger" />
                  <div className="h-3 w-3 rounded-full bg-warning" />
                  <div className="h-3 w-3 rounded-full bg-success" />
                </div>
                <span className="text-xs text-muted">MOHN Security Dashboard — Live</span>
                <div className="flex items-center gap-2 text-xs text-success">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-success" />
                  All Systems Online
                </div>
              </div>
              {/* Mock Camera Grid */}
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {["Front Entry", "Back Door", "Garage", "Living Room"].map((cam, i) => (
                  <div key={cam} className="aspect-video rounded-lg bg-background/50 border border-border flex flex-col items-center justify-center">
                    <div className={`h-2 w-2 rounded-full ${i === 0 ? "bg-danger animate-pulse" : "bg-success"} mb-2`} />
                    <span className="text-[10px] text-muted">{cam}</span>
                    <span className={`text-[9px] ${i === 0 ? "text-danger" : "text-success"}`}>
                      {i === 0 ? "ALERT" : "Clear"}
                    </span>
                  </div>
                ))}
              </div>
              {/* Mock Stats */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-background/50 border border-border p-3 text-center">
                  <div className="text-2xl font-bold text-accent">4</div>
                  <div className="text-xs text-muted">Cameras</div>
                </div>
                <div className="rounded-lg bg-background/50 border border-border p-3 text-center">
                  <div className="text-2xl font-bold text-success">12</div>
                  <div className="text-xs text-muted">Sensors</div>
                </div>
                <div className="rounded-lg bg-background/50 border border-border p-3 text-center">
                  <div className="text-2xl font-bold text-warning">3</div>
                  <div className="text-xs text-muted">Events Today</div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow behind card */}
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/5 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
