// ============================================================
//  Dashboard — Settings Page
// ============================================================
"use client";

import { useAuth } from "@/lib/auth-context";
import { HiShieldCheck } from "react-icons/hi2";

export default function SettingsPage() {
  const { user } = useAuth();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="mt-1 text-sm text-muted">Manage your account, system, and notification preferences.</p>
      </div>

      <div className="space-y-6">
        {/* Profile */}
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold">Profile</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-1.5">Display Name</label>
              <input
                type="text"
                defaultValue={user?.displayName || ""}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Email</label>
              <input
                type="email"
                defaultValue={user?.email || ""}
                disabled
                className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-muted cursor-not-allowed"
              />
            </div>
          </div>
          <button className="mt-4 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover">
            Save Changes
          </button>
        </div>

        {/* System */}
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold">System Configuration</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-1.5">MQTT Broker IP</label>
              <input
                type="text"
                placeholder="e.g. 34.123.45.67"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">MQTT Port</label>
              <input
                type="number"
                defaultValue={1883}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Frigate URL</label>
              <input
                type="text"
                placeholder="http://your-ip:8971"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Alarm Duration (seconds)</label>
              <input
                type="number"
                defaultValue={15}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <div className="mt-4 space-y-4">
            {[
              { label: "Push notifications for person detection", defaultChecked: true },
              { label: "Push notifications for glass-break events", defaultChecked: true },
              { label: "Email digest of daily events", defaultChecked: false },
              { label: "SMS alerts for high-severity events", defaultChecked: false },
            ].map((item) => (
              <label key={item.label} className="flex items-center justify-between">
                <span className="text-sm text-muted">{item.label}</span>
                <input
                  type="checkbox"
                  defaultChecked={item.defaultChecked}
                  className="h-4 w-4 rounded border-border text-accent focus:ring-accent"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Branding (White-Label) */}
        <div className="rounded-2xl border border-border bg-surface p-6">
          <div className="flex items-center gap-2">
            <HiShieldCheck className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-semibold">Branding (White-Label)</h2>
          </div>
          <p className="mt-1 text-sm text-muted">
            Customize the dashboard appearance for your clients. Available on Integrator plans.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-1.5">Company Name</label>
              <input
                type="text"
                defaultValue="MOHN Security"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Primary Color</label>
              <div className="flex gap-2">
                <input
                  type="color"
                  defaultValue="#3b82f6"
                  className="h-10 w-10 cursor-pointer rounded-lg border border-border bg-background"
                />
                <input
                  type="text"
                  defaultValue="#3b82f6"
                  className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1.5">Logo Upload</label>
            <div className="rounded-lg border-2 border-dashed border-border bg-background p-8 text-center">
              <p className="text-sm text-muted">Drag & drop your logo here, or click to browse</p>
              <p className="mt-1 text-xs text-muted">PNG, SVG, or WEBP — max 2MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
