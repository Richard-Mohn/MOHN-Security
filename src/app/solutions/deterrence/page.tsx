// Solutions — Instant Deterrence
import Link from "next/link";
import { HiBolt, HiArrowRight, HiCheck, HiSpeakerWave } from "react-icons/hi2";

export default function DeterrencePage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiBolt className="h-3 w-3" /> Zero-Delay Response
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Instant <span className="text-accent">Deterrence</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            The moment Frigate detects an intruder, an MQTT message fires to the nearest
            ESP32 node — triggering police-style strobes, a 120dB siren, and push notifications
            in under 200ms.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-8 sm:grid-cols-3">
          {[
            { title: "Police Strobe", desc: "Alternating red/blue LED array at 5Hz — visible from 200+ feet", icon: HiBolt },
            { title: "120dB Siren", desc: "Dual-tone wail pattern driven by ESP32 LEDC PWM", icon: HiSpeakerWave },
            { title: "< 200ms Response", desc: "Camera → Frigate → MQTT → ESP32 alarm in under 200 milliseconds", icon: HiBolt },
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
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold">How It Works</h2>
          <div className="mt-8 space-y-4">
            {[
              "Camera captures a person entering a monitored zone",
              "Frigate NVR runs TensorFlow Lite inference on the frame",
              'MQTT publish: frigate/events → { "label": "person", "type": "new" }',
              "ESP32 receives message → startAlarm() fires immediately",
              "Police strobe + siren activate for configured duration (default 15s)",
              "Dashboard and mobile push notification sent simultaneously",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl border border-border bg-background p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-sm pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Protect your property today</h2>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover">
            Get Started <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
