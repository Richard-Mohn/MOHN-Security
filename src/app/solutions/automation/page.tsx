// Solutions — Home Automation
import Link from "next/link";
import { HiServerStack, HiArrowRight, HiCheck, HiLightBulb, HiSun } from "react-icons/hi2";

export default function AutomationSolutionPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiServerStack className="h-3 w-3" /> Smart Home
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Home <span className="text-accent">Automation</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Integrate lighting, climate, and appliance control with your security system.
            Automate routines triggered by presence detection, schedules, or alarm events.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-3">
          {[
            { icon: HiLightBulb, title: "Smart Lighting", desc: "Automated lights that respond to occupancy, time of day, or security events." },
            { icon: HiSun, title: "Climate Control", desc: "HVAC integration with presence-aware scheduling and energy monitoring." },
            { icon: HiServerStack, title: "Appliance Control", desc: "Smart plugs and relays for any device — triggered by rules or dashboard." },
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
          <h2 className="text-2xl font-bold text-center">Automation Rules</h2>
          <p className="mt-2 text-center text-muted">Create custom automation rules from the dashboard — no coding required.</p>
          <div className="mt-8 space-y-3">
            {[
              { trigger: "Person detected at front door", action: "Turn on porch lights + send notification" },
              { trigger: "Alarm triggered", action: "Flash all interior lights + lock all doors" },
              { trigger: "11:00 PM every night", action: "Arm perimeter sensors + enable night mode" },
              { trigger: "All occupants leave (geofence)", action: "Set thermostat to away + arm sensors" },
            ].map((rule, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl border border-border bg-background p-4">
                <div className="flex-1">
                  <div className="text-xs font-medium text-accent">WHEN</div>
                  <div className="text-sm">{rule.trigger}</div>
                </div>
                <div className="hidden sm:block text-muted">→</div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-success">THEN</div>
                  <div className="text-sm">{rule.action}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Automate your home</h2>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover">
            Get Started <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
