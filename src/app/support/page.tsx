// Support / Help Center
import Link from "next/link";
import { HiLifebuoy, HiBookOpen, HiChatBubbleLeftRight, HiEnvelope, HiChevronDown } from "react-icons/hi2";

const faqs = [
  { q: "How do I reset my ESP32 sensor?", a: "Hold the BOOT button for 10 seconds, then release. The device will clear stored WiFi/MQTT credentials and restart in setup mode. Re-flash firmware if needed via PlatformIO." },
  { q: "My camera shows offline in the dashboard", a: "Check that the RTSP stream URL is correct, the camera is powered and on the same VLAN, and that Frigate is running (docker ps). Verify the substream path for your camera model." },
  { q: "How do I update Frigate NVR?", a: "SSH into your server, navigate to the project directory, run 'docker compose pull' then 'docker compose up -d'. Your config.yml is volume-mounted so settings persist." },
  { q: "Can I add more cameras later?", a: "Yes. Add the camera's RTSP URL to config.yml under the cameras section, then restart Frigate. Register the camera in the dashboard under Settings → Cameras." },
  { q: "What happens if my internet goes down?", a: "Frigate NVR and ESP32 sensors operate on your local network. Detection, recording, and alarm triggering all work without internet. Dashboard access requires connectivity." },
  { q: "How do I change alarm duration?", a: "Edit ALARM_DURATION_MS in config.h (default 15000 ms = 15 seconds), then re-flash the ESP32. For per-rule changes, use the Automation section in the dashboard." },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiLifebuoy className="h-3 w-3" /> Support
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">
            Help <span className="text-accent">Center</span>
          </h1>
          <p className="mt-3 text-muted">Find answers, read guides, or reach our team.</p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-b border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            { icon: HiBookOpen, title: "Documentation", desc: "Setup guides, API reference, and firmware docs.", href: "/docs" },
            { icon: HiChatBubbleLeftRight, title: "Community Forum", desc: "Ask questions and share configs with other users.", href: "#" },
            { icon: HiEnvelope, title: "Contact Support", desc: "Email our team for account or hardware issues.", href: "/contact" },
          ].map((c) => (
            <Link key={c.title} href={c.href} className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40">
              <c.icon className="h-8 w-8 text-accent" />
              <h3 className="mt-3 font-bold group-hover:text-accent transition-colors">{c.title}</h3>
              <p className="mt-1 text-sm text-muted">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-0 divide-y divide-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between font-medium">
                  {f.q}
                  <HiChevronDown className="h-4 w-4 text-muted transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-muted leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
