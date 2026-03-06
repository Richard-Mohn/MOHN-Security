// ============================================================
//  Dashboard — Sensors & Alarms Page
// ============================================================
"use client";

import { HiCpuChip, HiSignal, HiBolt, HiSpeakerWave } from "react-icons/hi2";

const sensors = [
  { id: 1, name: "Front Door Siren", type: "ESP32-T190", zone: "Entry", status: "armed", battery: null, signal: "Strong", features: ["Siren", "Red/Blue Strobe", "Motion"] },
  { id: 2, name: "Window Sensor A", type: "ESP32-C3", zone: "Living Room", status: "armed", battery: "87%", signal: "Good", features: ["Glass Break Mic", "Contact Sensor"] },
  { id: 3, name: "Motion Sensor Hallway", type: "ESP32-S3", zone: "Interior", status: "armed", battery: "92%", signal: "Strong", features: ["PIR Motion", "Temperature"] },
  { id: 4, name: "Garage Strobe", type: "ESP32-T190", zone: "Garage", status: "disarmed", battery: null, signal: "Weak", features: ["Siren", "Red/Blue Strobe"] },
  { id: 5, name: "Back Door Contact", type: "ESP32-C3", zone: "Entry", status: "armed", battery: "64%", signal: "Good", features: ["Contact Sensor", "Tamper Alert"] },
  { id: 6, name: "Perimeter Motion", type: "ESP32-S3", zone: "Exterior", status: "armed", battery: "78%", signal: "Good", features: ["PIR Motion", "Light Sensor"] },
];

export default function SensorsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Sensors & Alarms</h1>
          <p className="mt-1 text-sm text-muted">Manage ESP32 sensor nodes, sirens, and strobe units.</p>
        </div>
        <div className="flex gap-3">
          <button className="rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-muted transition-all hover:border-danger hover:text-danger">
            Disarm All
          </button>
          <button className="rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover">
            + Add Sensor
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-border bg-surface p-4 text-center">
          <div className="text-2xl font-bold text-success">{sensors.filter((s) => s.status === "armed").length}</div>
          <div className="text-xs text-muted">Armed</div>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4 text-center">
          <div className="text-2xl font-bold text-warning">{sensors.filter((s) => s.status === "disarmed").length}</div>
          <div className="text-xs text-muted">Disarmed</div>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4 text-center">
          <div className="text-2xl font-bold text-accent">{sensors.length}</div>
          <div className="text-xs text-muted">Total Nodes</div>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4 text-center">
          <div className="text-2xl font-bold text-danger">0</div>
          <div className="text-xs text-muted">Alerts</div>
        </div>
      </div>

      {/* Sensor List */}
      <div className="space-y-3">
        {sensors.map((sensor) => (
          <div
            key={sensor.id}
            className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent/30 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${sensor.status === "armed" ? "bg-success/10 text-success" : "bg-muted/10 text-muted"}`}>
                {sensor.features.includes("Siren") ? (
                  <HiSpeakerWave className="h-6 w-6" />
                ) : sensor.features.includes("PIR Motion") ? (
                  <HiBolt className="h-6 w-6" />
                ) : (
                  <HiCpuChip className="h-6 w-6" />
                )}
              </div>
              <div>
                <div className="font-semibold">{sensor.name}</div>
                <div className="mt-0.5 flex flex-wrap gap-2 text-xs text-muted">
                  <span>{sensor.type}</span>
                  <span>•</span>
                  <span>Zone: {sensor.zone}</span>
                  {sensor.battery && (
                    <>
                      <span>•</span>
                      <span className={parseInt(sensor.battery) < 70 ? "text-warning" : ""}>
                        Battery: {sensor.battery}
                      </span>
                    </>
                  )}
                </div>
                <div className="mt-1 flex flex-wrap gap-1">
                  {sensor.features.map((f) => (
                    <span key={f} className="rounded-full bg-background px-2 py-0.5 text-[10px] text-muted border border-border">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs text-muted">
                <HiSignal className={`h-4 w-4 ${sensor.signal === "Strong" ? "text-success" : sensor.signal === "Good" ? "text-warning" : "text-danger"}`} />
                {sensor.signal}
              </div>
              <button
                className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
                  sensor.status === "armed"
                    ? "bg-success/10 text-success hover:bg-danger/10 hover:text-danger"
                    : "bg-muted/10 text-muted hover:bg-success/10 hover:text-success"
                }`}
              >
                {sensor.status === "armed" ? "Armed" : "Disarmed"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
