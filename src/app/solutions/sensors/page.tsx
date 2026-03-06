// ============================================================
//  Solutions — ESP32 Sensor Networks
// ============================================================
import Link from "next/link";
import { HiCpuChip, HiSignal, HiArrowRight, HiCheck } from "react-icons/hi2";

const sensors = [
  { name: "PIR Motion", desc: "Wide-angle passive infrared motion detection with configurable sensitivity" },
  { name: "Glass-Break Audio", desc: "ESP32 I2S microphone with ML classifier for shattering glass" },
  { name: "Door / Window Contact", desc: "Reed switch sensors that trigger on open/close state changes" },
  { name: "Temperature & Humidity", desc: "DHT22 / BME280 environment monitoring with fire-risk alerts" },
  { name: "Smoke & CO Detection", desc: "MQ-2 / MQ-7 analog sensors with threshold-based alarming" },
  { name: "Vibration / Tamper", desc: "ADXL345 accelerometer for cabinet, safe, or window tamper detection" },
];

export default function SensorsPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiCpuChip className="h-3 w-3" /> Hardware Layer
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            ESP32 <span className="text-accent">Sensor Networks</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted leading-relaxed">
            A mesh of custom ESP32 nodes deployed throughout the property — each running
            our open-source firmware that communicates via MQTT for instant, zero-cloud detection.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold">Supported Sensor Types</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sensors.map((s) => (
              <div key={s.name} className="rounded-2xl border border-border bg-surface p-6">
                <HiSignal className="h-8 w-8 text-accent" />
                <h3 className="mt-3 text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold">Built on ESP32-S3</h2>
            <p className="mt-3 text-muted">
              Our firmware targets the ESP32-S3 platform with support for the T190 Vision Master
              and standard DevKitC boards. OTA updates, battery monitoring, and mesh networking
              are built in.
            </p>
            <ul className="mt-6 space-y-3">
              {["Open-source PlatformIO firmware", "MQTT over WiFi (< 50ms latency)", "OTA updates via Firestore", "Battery & signal strength reporting", "Configurable alarm zones"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <HiCheck className="h-4 w-4 text-success shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-background p-6 font-mono text-xs text-muted leading-relaxed">
            <div className="text-accent">// ESP32 — main.cpp snippet</div>
            <div className="mt-2">void mqttCallback(char* topic, byte* payload, uint len) {"{"}</div>
            <div className="ml-4">if (isPerson || isGlassBreak) {"{"}</div>
            <div className="ml-8 text-success">startAlarm(); <span className="text-muted">// zero-delay response</span></div>
            <div className="ml-4">{"}"}</div>
            <div>{"}"}</div>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Want custom sensors for your property?</h2>
          <p className="mt-2 text-muted">We design and deploy sensor networks tailored to your specific security needs.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover">
            Get a Custom Quote <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
