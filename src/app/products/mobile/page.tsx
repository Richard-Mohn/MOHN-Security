// Products — Mobile Apps
import Link from "next/link";
import { HiDevicePhoneMobile, HiArrowRight, HiCheck } from "react-icons/hi2";

export default function MobilePage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiDevicePhoneMobile className="h-3 w-3" /> Cross-Platform
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Mobile <span className="text-accent">Apps</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Native iOS and Android apps built with Flutter — live camera feeds,
            push notifications, alarm control, and full dashboard access from your pocket.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center">App Features</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Live camera feeds with PTZ control", "Push notifications for all events", "One-tap alarm arm/disarm", "Event history with snapshots", "Sensor status & battery levels", "Automation rule toggles", "Geofence-based automation", "Biometric app lock (Face ID / fingerprint)", "Multi-property support", "Offline mode with sync"].map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 text-sm">
                <HiCheck className="h-4 w-4 text-success shrink-0" /> {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-3 text-center">
          {[
            { label: "iOS", desc: "iPhone & iPad — App Store" },
            { label: "Android", desc: "Phone & Tablet — Google Play" },
            { label: "Web", desc: "Progressive Web App — any browser" },
          ].map((platform) => (
            <div key={platform.label} className="rounded-2xl border border-border bg-background p-8">
              <div className="text-3xl font-bold text-accent">{platform.label}</div>
              <p className="mt-2 text-sm text-muted">{platform.desc}</p>
              <div className="mt-4 inline-flex rounded-full bg-warning/10 px-3 py-1 text-xs font-medium text-warning">
                Coming Soon
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Get early access</h2>
          <p className="mt-2 text-muted">Sign up to be notified when mobile apps launch.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover">
            Join Waitlist <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
