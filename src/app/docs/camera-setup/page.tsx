// Docs — Camera Setup (content from FrigateSystem/CAMERA_SETUP.md)
import { HiVideoCamera } from "react-icons/hi2";

export default function CameraSetupPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiVideoCamera className="h-3 w-3" /> Camera Guide
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Camera Setup — Wisenet + Port Forwarding</h1>
          <p className="mt-3 text-muted">Connect your IP cameras to Frigate NVR for AI-powered detection.</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl space-y-8">
          <Step n={1} title="Find the Camera's Local IP">
            <ol className="list-decimal ml-5 space-y-1 text-sm text-muted">
              <li>Log into your router — usually <code className="rounded bg-surface-light px-2 py-0.5 text-accent">http://192.168.1.1</code></li>
              <li>Go to <strong>Connected Devices</strong> or <strong>DHCP Table</strong></li>
              <li>Find the Wisenet camera — note its IP (e.g. <code className="rounded bg-surface-light px-2 py-0.5 text-accent">192.168.1.50</code>)</li>
            </ol>
          </Step>

          <Step n={2} title="Test the Camera's RTSP Stream Locally">
            <p className="text-sm text-muted mb-3">From a PC on the same network, open VLC → Media → Open Network Stream:</p>
            <Code>{`# Wisenet ANV-L7012R — Main stream
rtsp://admin:admin@192.168.1.50:554/profile2/media.smp

# Sub stream (lower res, uses less bandwidth)
rtsp://admin:admin@192.168.1.50:554/profile5/media.smp`}</Code>
            <div className="mt-3 rounded-lg border border-warning/30 bg-warning/5 p-3 text-sm text-warning">
              Default Wisenet credentials: admin / admin — <strong>change this!</strong>
            </div>
          </Step>

          <Step n={3} title="Port Forward on Your Router">
            <p className="text-sm text-muted mb-3">Log into your router and add a port forwarding rule:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="py-2 pr-4 font-medium">Setting</th>
                    <th className="py-2 font-medium">Value</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">Service Name</td><td className="py-2">Camera-RTSP</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">External Port</td><td className="py-2">554</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">Internal IP</td><td className="py-2">192.168.1.50</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">Internal Port</td><td className="py-2">554</td></tr>
                  <tr><td className="py-2 pr-4">Protocol</td><td className="py-2">TCP</td></tr>
                </tbody>
              </table>
            </div>
          </Step>

          <Step n={4} title="Find Your Home's Public IP">
            <p className="text-sm text-muted mb-3">On the home network, visit:</p>
            <Code>{`https://api.ipify.org`}</Code>
            <p className="mt-3 text-sm text-muted">Note this IP — you&apos;ll put it in the Frigate config.</p>
          </Step>

          <Step n={5} title="Update Frigate Config">
            <p className="text-sm text-muted mb-3">In <code className="rounded bg-surface-light px-2 py-0.5 text-accent">config.yml</code>, update the camera path:</p>
            <Code lang="yaml">{`cameras:
  front_entry:
    enabled: true
    ffmpeg:
      inputs:
        - path: rtsp://admin:YOUR_PASSWORD@HOME_PUBLIC_IP:554/profile2/media.smp
          roles:
            - detect
            - record
            - audio
    detect:
      enabled: true
      width: 1280
      height: 720
      fps: 5
    objects:
      track:
        - person
      filters:
        person:
          min_area: 5000
          min_score: 0.6
    audio:
      enabled: true
      listen:
        - glass_breaking
        - scream
        - shatter`}</Code>
            <p className="mt-3 text-sm text-muted">Then restart Frigate:</p>
            <Code>{`docker compose restart frigate`}</Code>
          </Step>

          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold">Troubleshooting</h3>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="py-2 pr-4 font-medium">Problem</th>
                    <th className="py-2 font-medium">Fix</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">Stream won&apos;t connect</td><td className="py-2">Confirm port 554 is open: nc -zv PUBLIC_IP 554</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">Black screen in Frigate</td><td className="py-2">Try the sub-stream URL instead</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">Camera not detected</td><td className="py-2">Check camera&apos;s web UI for RTSP enable setting</td></tr>
                  <tr><td className="py-2 pr-4">Auth error</td><td className="py-2">Reset camera password via web UI</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">{n}</span>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="mt-4 ml-11">{children}</div>
    </div>
  );
}

function Code({ children, lang }: { children: string; lang?: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-border bg-background p-4 text-xs leading-relaxed">
      <code className={lang ? `language-${lang}` : ""}>{children}</code>
    </pre>
  );
}
