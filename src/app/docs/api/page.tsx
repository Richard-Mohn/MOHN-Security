// Docs — API Reference
import { HiCodeBracketSquare } from "react-icons/hi2";

export default function ApiReferencePage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiCodeBracketSquare className="h-3 w-3" /> API Reference
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">REST API Reference</h1>
          <p className="mt-3 text-muted">All endpoints for the MOHN Security platform. Base URL: your deployment domain.</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          <Endpoint method="GET" path="/api/cameras" desc="List all cameras for the authenticated user.">
            <ResExample>{`[
  {
    "id": "cam_001",
    "name": "Front Entry",
    "location": "Front Door",
    "status": "online",
    "rtspUrl": "rtsp://10.0.0.50:554/profile2/media.smp",
    "frigateCamera": "front_entry"
  }
]`}</ResExample>
          </Endpoint>

          <Endpoint method="POST" path="/api/cameras" desc="Create a new camera record.">
            <ReqBody>{`{
  "name": "Backyard",
  "location": "Back Patio",
  "rtspUrl": "rtsp://10.0.0.51:554/profile2/media.smp"
}`}</ReqBody>
          </Endpoint>

          <Endpoint method="GET" path="/api/cameras/:id" desc="Get a single camera by ID." />
          <Endpoint method="PUT" path="/api/cameras/:id" desc="Update camera details." />
          <Endpoint method="DELETE" path="/api/cameras/:id" desc="Delete a camera." />

          <hr className="border-border" />

          <Endpoint method="GET" path="/api/sensors" desc="List all ESP32 sensor nodes.">
            <ResExample>{`[
  {
    "id": "sensor_001",
    "name": "Front Door Sensor",
    "type": "motion",
    "zone": "Entry",
    "status": "online",
    "battery": 87
  }
]`}</ResExample>
          </Endpoint>

          <Endpoint method="POST" path="/api/sensors" desc="Register a new sensor." />
          <Endpoint method="GET" path="/api/sensors/:id" desc="Get sensor details." />
          <Endpoint method="PUT" path="/api/sensors/:id" desc="Update sensor config." />
          <Endpoint method="DELETE" path="/api/sensors/:id" desc="Remove a sensor." />

          <hr className="border-border" />

          <Endpoint method="GET" path="/api/events" desc="List security events (newest first, max 100).">
            <ResExample>{`[
  {
    "id": "evt_001",
    "type": "person_detected",
    "camera": "front_entry",
    "timestamp": "2025-01-15T22:32:00Z",
    "confidence": 0.94,
    "thumbnail": "/api/events/evt_001/thumbnail"
  }
]`}</ResExample>
          </Endpoint>

          <Endpoint method="GET" path="/api/events/:id" desc="Get event details including snapshot." />
          <Endpoint method="PUT" path="/api/events/:id" desc="Update event (mark reviewed, add notes)." />
          <Endpoint method="DELETE" path="/api/events/:id" desc="Delete an event." />

          <hr className="border-border" />

          <Endpoint method="GET" path="/api/automation" desc="List automation rules.">
            <ResExample>{`[
  {
    "id": "rule_001",
    "name": "Night Alarm",
    "trigger": "person_detected",
    "condition": "time_between_22_06",
    "action": "activate_siren",
    "enabled": true
  }
]`}</ResExample>
          </Endpoint>

          <Endpoint method="POST" path="/api/automation" desc="Create a new rule." />
          <Endpoint method="PUT" path="/api/automation/:id" desc="Update a rule." />
          <Endpoint method="DELETE" path="/api/automation/:id" desc="Delete a rule." />

          <hr className="border-border" />

          <Endpoint method="GET" path="/api/system" desc="Get system health status.">
            <ResExample>{`{
  "status": "operational",
  "frigateConnected": true,
  "mqttConnected": true,
  "camerasOnline": 4,
  "sensorsOnline": 6,
  "uptime": "12d 4h 32m"
}`}</ResExample>
          </Endpoint>

          <Endpoint method="POST" path="/api/system/alarm" desc="Trigger or silence the alarm.">
            <ReqBody>{`{ "action": "trigger" | "silence" }`}</ReqBody>
          </Endpoint>

          <hr className="border-border" />

          <Endpoint method="GET" path="/api/user/profile" desc="Get the authenticated user's profile." />
          <Endpoint method="PUT" path="/api/user/profile" desc="Update user profile settings." />

          <hr className="border-border" />

          <Endpoint method="POST" path="/api/webhook/frigate" desc="Incoming webhook from Frigate NVR. Authenticated via WEBHOOK_SECRET header.">
            <ReqBody>{`{
  "type": "new",
  "after": {
    "id": "1234",
    "label": "person",
    "camera": "front_entry",
    "score": 0.91
  }
}`}</ReqBody>
          </Endpoint>
        </div>
      </section>
    </div>
  );
}

function Endpoint({ method, path, desc, children }: { method: string; path: string; desc: string; children?: React.ReactNode }) {
  const colors: Record<string, string> = {
    GET: "text-green-400 bg-green-400/10 border-green-400/30",
    POST: "text-blue-400 bg-blue-400/10 border-blue-400/30",
    PUT: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    DELETE: "text-red-400 bg-red-400/10 border-red-400/30",
  };
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className={`rounded-md border px-2 py-0.5 text-xs font-bold ${colors[method]}`}>{method}</span>
        <code className="text-sm font-medium">{path}</code>
      </div>
      <p className="mt-1 ml-16 text-sm text-muted">{desc}</p>
      {children && <div className="mt-3 ml-16">{children}</div>}
    </div>
  );
}

function ResExample({ children }: { children: string }) {
  return (
    <div>
      <span className="text-xs font-medium text-muted">Response</span>
      <pre className="mt-1 overflow-x-auto rounded-lg border border-border bg-background p-3 text-xs leading-relaxed"><code>{children}</code></pre>
    </div>
  );
}

function ReqBody({ children }: { children: string }) {
  return (
    <div>
      <span className="text-xs font-medium text-muted">Request Body</span>
      <pre className="mt-1 overflow-x-auto rounded-lg border border-border bg-background p-3 text-xs leading-relaxed"><code>{children}</code></pre>
    </div>
  );
}
