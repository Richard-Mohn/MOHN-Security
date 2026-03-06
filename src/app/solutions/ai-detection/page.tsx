// ============================================================
//  Solutions — AI Video Detection
// ============================================================
import Link from "next/link";
import {
  HiVideoCamera,
  HiEye,
  HiBolt,
  HiCpuChip,
  HiArrowRight,
  HiCheck,
} from "react-icons/hi2";

const capabilities = [
  "Real-time person, vehicle, and animal detection",
  "Glass-break and scream audio analysis",
  "Custom zone-based detection regions",
  "Frigate NVR with sub-second latency",
  "Works with any ONVIF / RTSP camera",
  "Google Coral TPU acceleration supported",
  "Automatic recording on detection events",
  "Snapshot capture with bounding boxes",
];

export default function AIDetectionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                <HiVideoCamera className="h-3 w-3" /> Core Technology
              </div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                AI-Powered <span className="text-accent">Video Detection</span>
              </h1>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Every MOHN Security system is built on Frigate NVR — a self-hosted,
                privacy-first video analytics engine that processes camera feeds
                in real time with zero cloud dependency.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  Request a Demo <HiArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground"
                >
                  View Documentation
                </Link>
              </div>
            </div>

            {/* Detection Diagram */}
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="space-y-4">
                {[
                  { icon: HiVideoCamera, label: "Camera Feed", desc: "RTSP stream from any IP camera" },
                  { icon: HiCpuChip, label: "Frigate NVR", desc: "On-premise AI processing engine" },
                  { icon: HiEye, label: "Object Detection", desc: "TensorFlow Lite inference < 100ms" },
                  { icon: HiBolt, label: "Instant Action", desc: "MQTT event → ESP32 deterrence" },
                ].map((step, i) => (
                  <div key={step.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-accent">0{i + 1}</span>
                        <span className="text-sm font-semibold">{step.label}</span>
                      </div>
                      <p className="text-xs text-muted">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold">Full Detection Capabilities</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            Everything you need for intelligent video surveillance, running entirely on your own hardware.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <div
                key={cap}
                className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4"
              >
                <HiCheck className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-sm">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Ready to see it in action?</h2>
          <p className="mt-2 text-muted">
            Schedule a live demo and we&apos;ll show you real-time AI detection on your own cameras.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Schedule Demo <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
