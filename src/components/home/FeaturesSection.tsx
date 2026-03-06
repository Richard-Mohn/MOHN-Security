// ============================================================
//  Features Section — Core capabilities
// ============================================================
import {
  HiShieldCheck,
  HiVideoCamera,
  HiBolt,
  HiCpuChip,
  HiDevicePhoneMobile,
  HiHome,
  HiSignal,
  HiEye,
} from "react-icons/hi2";

const features = [
  {
    icon: HiEye,
    title: "AI Person Detection",
    description:
      "Frigate NVR with real-time object detection identifies humans with 95%+ accuracy, filtering out pets, shadows, and debris.",
  },
  {
    icon: HiBolt,
    title: "Zero-Delay Deterrence",
    description:
      "Sub-200ms response from detection to activation. Police-mimic strobes and 120dB sirens engage before intruders can react.",
  },
  {
    icon: HiSignal,
    title: "Glass-Break Audio Detection",
    description:
      "Advanced audio analysis listens for glass shattering, screaming, and forced entry sounds through camera microphones.",
  },
  {
    icon: HiVideoCamera,
    title: "Multi-Camera NVR",
    description:
      "Cloud-hosted Frigate NVR with 24/7 recording, RTSP streaming, and intelligent motion-based clip retention.",
  },
  {
    icon: HiHome,
    title: "Home Automation Integration",
    description:
      "Trigger lights, locks, and smart devices on detection. Flash all interior lights, lock doors, and alert neighbors.",
  },
  {
    icon: HiCpuChip,
    title: "ESP32 Sensor Network",
    description:
      "Custom ESP32 nodes with motion sensors, sirens, and LED strobes. Mesh network for whole-property coverage.",
  },
  {
    icon: HiDevicePhoneMobile,
    title: "Cross-Platform Apps",
    description:
      "Flutter-powered apps for iOS, Android, and web. Full dashboard access from anywhere with real-time push notifications.",
  },
  {
    icon: HiShieldCheck,
    title: "White-Label Ready",
    description:
      "Each client gets their own branded dashboard, custom logo, and isolated login. Professional presentation for your brand.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="border-t border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Capabilities</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Protect What Matters
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            A complete security ecosystem — from AI-powered cameras to instant deterrence hardware, 
            all managed through a single dashboard.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-background p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
