// ============================================================
//  Dashboard — Automation Page
// ============================================================
"use client";

import { useState } from "react";
import { HiLightBulb, HiLockClosed, HiSpeakerWave, HiBell, HiHome } from "react-icons/hi2";

interface AutomationRule {
  id: number;
  name: string;
  trigger: string;
  actions: string[];
  enabled: boolean;
  icon: React.ElementType;
}

const initialRules: AutomationRule[] = [
  {
    id: 1,
    name: "Intruder Detected — Full Response",
    trigger: "Person detected in secure zone (after hours)",
    actions: ["Activate siren + strobe", "Turn on all interior lights", "Lock all doors", "Send push notification", "Start recording all cameras"],
    enabled: true,
    icon: HiSpeakerWave,
  },
  {
    id: 2,
    name: "Glass Break Alert",
    trigger: "Audio: glass break detected (>80% confidence)",
    actions: ["Activate nearest siren", "Flash entry lights red", "Send push notification", "Snapshot all cameras"],
    enabled: true,
    icon: HiBell,
  },
  {
    id: 3,
    name: "Welcome Home",
    trigger: "Known person detected at front door",
    actions: ["Unlock front door", "Turn on entry lights", "Disarm interior sensors"],
    enabled: false,
    icon: HiHome,
  },
  {
    id: 4,
    name: "Night Mode",
    trigger: "Scheduled: 11:00 PM daily",
    actions: ["Arm all sensors", "Turn off exterior non-security lights", "Enable motion recording"],
    enabled: true,
    icon: HiLightBulb,
  },
  {
    id: 5,
    name: "Perimeter Breach",
    trigger: "Motion detected on exterior cameras (after hours)",
    actions: ["Turn on exterior flood lights", "Start recording", "Send notification"],
    enabled: true,
    icon: HiLockClosed,
  },
];

export default function AutomationPage() {
  const [rules, setRules] = useState(initialRules);

  const toggleRule = (id: number) => {
    setRules(rules.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r)));
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Automation</h1>
          <p className="mt-1 text-sm text-muted">
            Automated rules that trigger actions based on detection events, schedules, and conditions.
          </p>
        </div>
        <button className="rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover">
          + Create Rule
        </button>
      </div>

      {/* Rules */}
      <div className="space-y-4">
        {rules.map((rule) => (
          <div
            key={rule.id}
            className={`rounded-2xl border p-6 transition-all ${
              rule.enabled ? "border-border bg-surface" : "border-border/50 bg-surface/50 opacity-60"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${rule.enabled ? "bg-accent/10 text-accent" : "bg-muted/10 text-muted"}`}>
                  <rule.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{rule.name}</h3>
                  <div className="mt-1 text-sm text-muted">
                    <span className="font-medium text-foreground/70">Trigger:</span> {rule.trigger}
                  </div>
                  <div className="mt-3">
                    <span className="text-xs font-medium text-foreground/70">Actions:</span>
                    <ul className="mt-1 space-y-1">
                      {rule.actions.map((action, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-muted">
                          <div className="h-1 w-1 rounded-full bg-accent" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Toggle */}
              <button
                onClick={() => toggleRule(rule.id)}
                className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                  rule.enabled ? "bg-accent" : "bg-border"
                }`}
              >
                <div
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                    rule.enabled ? "left-[22px]" : "left-0.5"
                  }`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
