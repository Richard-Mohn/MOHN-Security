// Products — Hardware Kits
import Link from "next/link";
import { HiWrenchScrewdriver, HiArrowRight, HiCpuChip, HiVideoCamera } from "react-icons/hi2";

const kits = [
  {
    name: "Starter Sensor Kit",
    desc: "Everything to build your first ESP32 security node",
    items: ["ESP32-S3 DevKitC board", "PIR motion sensor", "Reed switch (door/window)", "Red + Blue LEDs", "Passive speaker + transistor", "Breadboard + jumper wires", "USB-C cable"],
    price: "$49",
  },
  {
    name: "Camera Bundle",
    desc: "AI-ready cameras pre-configured for Frigate NVR",
    items: ["Wisenet ANV-L7012R IP camera", "PoE injector", "Ethernet cable (25ft)", "Mounting bracket + screws", "Pre-configured RTSP profile"],
    price: "$189",
  },
  {
    name: "Full Deployment Kit",
    desc: "Complete hardware for a single-property deployment",
    items: ["4x IP cameras with PoE switch", "8x ESP32 sensor nodes (assembled)", "NVR server (mini PC)", "Pre-loaded Docker + Frigate", "All cables and mounting hardware", "Installation guide"],
    price: "Contact Us",
  },
];

export default function HardwarePage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiWrenchScrewdriver className="h-3 w-3" /> DIY & Pro
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Hardware <span className="text-accent">Kits</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Pre-packaged hardware bundles for DIY enthusiasts and professional installers.
            Every kit includes tested components and our open-source firmware.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-3">
          {kits.map((kit) => (
            <div key={kit.name} className="rounded-2xl border border-border bg-surface p-8">
              <div className="flex items-center gap-3">
                {kit.name.includes("Camera") ? (
                  <HiVideoCamera className="h-8 w-8 text-accent" />
                ) : (
                  <HiCpuChip className="h-8 w-8 text-accent" />
                )}
                <h3 className="text-lg font-bold">{kit.name}</h3>
              </div>
              <p className="mt-2 text-sm text-muted">{kit.desc}</p>
              <div className="mt-4 text-2xl font-bold text-accent">{kit.price}</div>
              <ul className="mt-4 space-y-2">
                {kit.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 block rounded-xl border border-border px-6 py-3 text-center text-sm font-semibold text-muted transition-colors hover:border-accent hover:text-foreground"
              >
                Order Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Need a custom configuration?</h2>
          <p className="mt-2 text-muted">We can build a kit tailored to your specific deployment requirements.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover">
            Custom Order <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
