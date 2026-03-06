// ============================================================
//  Dashboard — Cameras Page
// ============================================================
"use client";

import { HiVideoCamera, HiCog6Tooth, HiArrowsPointingOut } from "react-icons/hi2";

const cameras = [
  { id: 1, name: "Front Entry", ip: "192.168.1.50", model: "Wisenet ANV-L7012R", status: "online", fps: 5, resolution: "1280x720" },
  { id: 2, name: "Back Door", ip: "192.168.1.51", model: "ESP32-CAM", status: "online", fps: 10, resolution: "640x480" },
  { id: 3, name: "Garage", ip: "192.168.1.52", model: "Wisenet ANV-L7012R", status: "online", fps: 5, resolution: "1280x720" },
  { id: 4, name: "Living Room", ip: "192.168.1.53", model: "ESP32-T190", status: "offline", fps: 0, resolution: "—" },
];

export default function CamerasPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Cameras</h1>
          <p className="mt-1 text-sm text-muted">Manage and view all connected camera feeds.</p>
        </div>
        <button className="rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover">
          + Add Camera
        </button>
      </div>

      {/* Camera Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {cameras.map((cam) => (
          <div key={cam.id} className="overflow-hidden rounded-2xl border border-border bg-surface">
            {/* Feed Area */}
            <div className="relative aspect-video bg-background">
              <div className="absolute inset-0 flex items-center justify-center">
                <HiVideoCamera className={`h-12 w-12 ${cam.status === "online" ? "text-muted/20" : "text-danger/20"}`} />
              </div>
              {/* Overlays */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
                <div className={`h-2 w-2 rounded-full ${cam.status === "online" ? "bg-success" : "bg-danger"}`} />
                {cam.status === "online" ? "Live" : "Offline"}
              </div>
              <div className="absolute top-3 right-3 flex gap-2">
                <button className="rounded-lg bg-black/70 p-1.5 text-white/70 backdrop-blur-sm transition-colors hover:text-white">
                  <HiArrowsPointingOut className="h-4 w-4" />
                </button>
                <button className="rounded-lg bg-black/70 p-1.5 text-white/70 backdrop-blur-sm transition-colors hover:text-white">
                  <HiCog6Tooth className="h-4 w-4" />
                </button>
              </div>
              <div className="absolute bottom-3 left-3 rounded bg-black/70 px-2.5 py-1 text-xs backdrop-blur-sm">
                {cam.name}
              </div>
              {cam.status === "online" && (
                <div className="absolute bottom-3 right-3 rounded bg-black/70 px-2.5 py-1 text-[10px] text-muted backdrop-blur-sm">
                  {cam.resolution} @ {cam.fps}fps
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{cam.name}</h3>
                <span className={`text-xs font-medium ${cam.status === "online" ? "text-success" : "text-danger"}`}>
                  {cam.status}
                </span>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-muted">
                <div>Model: {cam.model}</div>
                <div>IP: {cam.ip}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
