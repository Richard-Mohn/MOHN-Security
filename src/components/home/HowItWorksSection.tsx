// ============================================================
//  How It Works Section — Step-by-step flow
// ============================================================

const steps = [
  {
    step: "01",
    title: "Consultation & Design",
    description:
      "We assess your property, identify vulnerabilities, and design a custom security layout with camera placements, sensor positions, and deterrence zones.",
  },
  {
    step: "02",
    title: "Hardware Installation",
    description:
      "Professional installation of cameras, ESP32 sensor nodes, siren units, and smart home integrations. All wiring is concealed and weatherproofed.",
  },
  {
    step: "03",
    title: "AI Configuration",
    description:
      "We configure Frigate NVR with custom detection zones, person recognition, glass-break audio, and fine-tuned sensitivity for your environment.",
  },
  {
    step: "04",
    title: "Dashboard & App Setup",
    description:
      "Your branded dashboard goes live with real-time camera feeds, sensor status, event history, and full control from any device, anywhere.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Process</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            From Design to Defense in 4 Steps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Every installation is custom. No cookie-cutter kits — just professional-grade 
            protection tailored to your property.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-8 translate-x-full bg-border lg:block" />
              )}
              <div className="rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/50">
                <div className="mb-4 text-4xl font-bold text-accent/20">{item.step}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detection Flow Diagram */}
        <div className="mt-20 rounded-2xl border border-border bg-surface p-8">
          <h3 className="mb-6 text-center text-lg font-semibold">Real-Time Detection Flow</h3>
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            {[
              { label: "Camera", sub: "RTSP Stream", color: "accent" },
              { label: "Frigate NVR", sub: "AI Detection", color: "accent" },
              { label: "MQTT Broker", sub: "Event Publish", color: "warning" },
              { label: "ESP32 Node", sub: "Siren + Strobe", color: "danger" },
            ].map((node, i) => (
              <div key={node.label} className="flex items-center gap-4">
                <div className="rounded-xl border border-border bg-background p-4 text-center min-w-[140px]">
                  <div className={`text-sm font-bold text-${node.color}`}>{node.label}</div>
                  <div className="text-xs text-muted">{node.sub}</div>
                </div>
                {i < 3 && (
                  <div className="hidden text-muted md:block">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-muted">
            Detection to deterrence in under 200ms — powered by local MQTT, not cloud round-trips.
          </p>
        </div>
      </div>
    </section>
  );
}
