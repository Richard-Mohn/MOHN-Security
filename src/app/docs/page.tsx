// Resources — Documentation Hub
import Link from "next/link";
import { HiDocumentText, HiArrowRight, HiCommandLine, HiCpuChip, HiVideoCamera, HiServerStack } from "react-icons/hi2";

const guides = [
  {
    icon: HiServerStack,
    title: "Server Setup",
    desc: "Deploy Frigate NVR + MQTT on a Google Compute Engine instance with Docker Compose.",
    href: "/docs/server-setup",
  },
  {
    icon: HiVideoCamera,
    title: "Camera Configuration",
    desc: "Connect Wisenet, Reolink, or any RTSP camera to Frigate with zone-based detection.",
    href: "/docs/camera-setup",
  },
  {
    icon: HiCpuChip,
    title: "ESP32 Firmware",
    desc: "Flash the zero-delay deterrence firmware onto your ESP32-S3 sensor nodes.",
    href: "/docs/esp32-firmware",
  },
  {
    icon: HiCommandLine,
    title: "API Reference",
    desc: "REST API documentation for cameras, sensors, events, automation, and webhooks.",
    href: "/docs/api",
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiDocumentText className="h-3 w-3" /> Developer Resources
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-accent">Documentation</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Everything you need to deploy, configure, and manage MOHN Security systems.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              href={guide.href}
              className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <guide.icon className="h-8 w-8 text-accent" />
              <h3 className="mt-3 text-lg font-semibold group-hover:text-accent transition-colors">{guide.title}</h3>
              <p className="mt-2 text-sm text-muted">{guide.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent">
                Read Guide <HiArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Need help?</h2>
          <p className="mt-2 text-muted">Can&apos;t find what you&apos;re looking for? Reach out to our support team.</p>
          <Link href="/support" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover">
            Contact Support <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
