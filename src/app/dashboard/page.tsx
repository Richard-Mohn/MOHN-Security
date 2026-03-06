// ============================================================
//  Dashboard Overview — Main dashboard page
// ============================================================
"use client";

import { useAuth } from "@/lib/auth-context";
import {
  HiVideoCamera,
  HiCpuChip,
  HiBell,
  HiShieldCheck,
  HiExclamationTriangle,
} from "react-icons/hi2";

// Mock data — replace with Firestore queries later
const stats = [
  { label: "Cameras Online", value: "4", icon: HiVideoCamera, color: "text-accent", bg: "bg-accent/10" },
  { label: "Sensors Active", value: "12", icon: HiCpuChip, color: "text-success", bg: "bg-success/10" },
  { label: "Events Today", value: "7", icon: HiBell, color: "text-warning", bg: "bg-warning/10" },
  { label: "System Status", value: "Online", icon: HiShieldCheck, color: "text-success", bg: "bg-success/10" },
];

const recentEvents = [
  { id: 1, type: "person", camera: "Front Entry", time: "2 min ago", severity: "high" },
  { id: 2, type: "motion", camera: "Back Door", time: "15 min ago", severity: "medium" },
  { id: 3, type: "audio", camera: "Garage", time: "1 hour ago", severity: "low" },
  { id: 4, type: "person", camera: "Living Room", time: "3 hours ago", severity: "medium" },
  { id: 5, type: "motion", camera: "Front Entry", time: "5 hours ago", severity: "low" },
];

const cameras = [
  { name: "Front Entry", status: "alert", lastEvent: "Person detected" },
  { name: "Back Door", status: "online", lastEvent: "No events" },
  { name: "Garage", status: "online", lastEvent: "Audio event" },
  { name: "Living Room", status: "online", lastEvent: "No events" },
];

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">
          Welcome back, {user?.displayName || user?.email?.split("@")[0] || "User"}
        </h1>
        <p className="mt-1 text-sm text-muted">
          Here&apos;s what&apos;s happening across your security system.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent/30"
          >
            <div className="flex items-center justify-between">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.bg}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
            <div className="mt-3 text-sm text-muted">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Camera Grid */}
        <div className="lg:col-span-2">
          <h2 className="mb-4 text-lg font-semibold">Live Cameras</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {cameras.map((cam) => (
              <div
                key={cam.name}
                className="overflow-hidden rounded-xl border border-border bg-surface"
              >
                {/* Camera Feed Placeholder */}
                <div className="relative aspect-video bg-background">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <HiVideoCamera className="h-8 w-8 text-muted/30" />
                  </div>
                  {/* Status Badge */}
                  <div className="absolute top-2 left-2 flex items-center gap-1.5 rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium backdrop-blur-sm">
                    <div
                      className={`h-1.5 w-1.5 rounded-full ${
                        cam.status === "alert" ? "bg-danger animate-pulse" : "bg-success"
                      }`}
                    />
                    {cam.status === "alert" ? "ALERT" : "Live"}
                  </div>
                  {/* Camera Name */}
                  <div className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-0.5 text-[10px] backdrop-blur-sm">
                    {cam.name}
                  </div>
                </div>
                <div className="px-3 py-2 text-xs text-muted">{cam.lastEvent}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Events */}
        <div>
          <h2 className="mb-4 text-lg font-semibold">Recent Events</h2>
          <div className="space-y-2">
            {recentEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3 transition-all hover:border-accent/30"
              >
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                    event.severity === "high"
                      ? "bg-danger/10 text-danger"
                      : event.severity === "medium"
                      ? "bg-warning/10 text-warning"
                      : "bg-muted/10 text-muted"
                  }`}
                >
                  {event.type === "person" ? (
                    <HiExclamationTriangle className="h-4 w-4" />
                  ) : event.type === "audio" ? (
                    <HiBell className="h-4 w-4" />
                  ) : (
                    <HiCpuChip className="h-4 w-4" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium capitalize">{event.type} Detection</div>
                  <div className="text-xs text-muted">{event.camera}</div>
                </div>
                <div className="text-xs text-muted whitespace-nowrap">{event.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alarm Control */}
      <div className="mt-8 rounded-xl border border-border bg-surface p-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-semibold">Alarm System</h2>
            <p className="mt-1 text-sm text-muted">
              Manual control for your deterrence system. Can also be triggered automatically via AI detection.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="rounded-xl bg-danger px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-danger/80 shadow-lg shadow-danger/20">
              Trigger Alarm
            </button>
            <button className="rounded-xl border border-border px-6 py-2.5 text-sm font-semibold text-muted transition-all hover:border-success hover:text-success">
              All Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
