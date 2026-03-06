// ============================================================
//  Dashboard — Events Page
// ============================================================
"use client";

import { HiExclamationTriangle, HiBell, HiCpuChip, HiVideoCamera, HiFunnel } from "react-icons/hi2";

const events = [
  { id: 1, type: "person", camera: "Front Entry", time: "2026-03-06 15:42:18", severity: "high", description: "Person detected in secure zone. Alarm triggered automatically.", snapshot: true },
  { id: 2, type: "motion", camera: "Back Door", time: "2026-03-06 15:27:03", severity: "medium", description: "Motion detected. No person identified.", snapshot: true },
  { id: 3, type: "audio", camera: "Garage", time: "2026-03-06 14:58:41", severity: "low", description: "Audio event: possible glass break detected (62% confidence).", snapshot: false },
  { id: 4, type: "person", camera: "Living Room", time: "2026-03-06 12:15:22", severity: "medium", description: "Person detected. Identified as known resident — alarm not triggered.", snapshot: true },
  { id: 5, type: "motion", camera: "Front Entry", time: "2026-03-06 10:33:09", severity: "low", description: "Motion detected. Classified as animal/pet.", snapshot: true },
  { id: 6, type: "system", camera: "—", time: "2026-03-06 08:00:00", severity: "info", description: "System armed. All sensors online.", snapshot: false },
  { id: 7, type: "alarm", camera: "Front Entry", time: "2026-03-05 23:14:55", severity: "high", description: "Manual alarm triggered via dashboard. Duration: 15s.", snapshot: false },
  { id: 8, type: "person", camera: "Back Door", time: "2026-03-05 21:07:33", severity: "high", description: "Person detected after hours. Alarm triggered. Police-mimic strobe activated.", snapshot: true },
];

const severityConfig = {
  high: { color: "text-danger", bg: "bg-danger/10", border: "border-danger/30" },
  medium: { color: "text-warning", bg: "bg-warning/10", border: "border-warning/30" },
  low: { color: "text-muted", bg: "bg-muted/10", border: "border-border" },
  info: { color: "text-accent", bg: "bg-accent/10", border: "border-accent/30" },
};

function getIcon(type: string) {
  switch (type) {
    case "person": return HiExclamationTriangle;
    case "alarm": return HiBell;
    case "audio": return HiBell;
    case "motion": return HiCpuChip;
    default: return HiVideoCamera;
  }
}

export default function EventsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Events</h1>
          <p className="mt-1 text-sm text-muted">Detection events, alarms, and system activity log.</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-muted transition-all hover:border-accent hover:text-foreground">
          <HiFunnel className="h-4 w-4" />
          Filter
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-3">
        {events.map((event) => {
          const sev = severityConfig[event.severity as keyof typeof severityConfig];
          const Icon = getIcon(event.type);
          return (
            <div
              key={event.id}
              className={`rounded-xl border ${sev.border} bg-surface p-5 transition-all hover:border-accent/30`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${sev.bg}`}>
                  <Icon className={`h-5 w-5 ${sev.color}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold capitalize">{event.type} Event</span>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${sev.bg} ${sev.color}`}>
                          {event.severity}
                        </span>
                      </div>
                      <div className="mt-0.5 text-xs text-muted">
                        {event.camera !== "—" ? `Camera: ${event.camera}` : "System"} • {event.time}
                      </div>
                    </div>
                    {event.snapshot && (
                      <div className="h-16 w-24 shrink-0 rounded-lg bg-background border border-border flex items-center justify-center">
                        <HiVideoCamera className="h-4 w-4 text-muted/30" />
                      </div>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-muted">{event.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
