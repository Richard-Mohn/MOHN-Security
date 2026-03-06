// Docs — ESP32 Firmware (content from FrigateSystem)
import { HiCpuChip } from "react-icons/hi2";

export default function ESP32FirmwarePage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiCpuChip className="h-3 w-3" /> Firmware Guide
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">ESP32 Firmware — Zero-Delay Deterrence</h1>
          <p className="mt-3 text-muted">Flash the deterrence firmware onto ESP32-S3 boards using PlatformIO.</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl space-y-8">
          <Step n={1} title="Requirements">
            <ul className="list-disc ml-5 space-y-1 text-sm text-muted">
              <li>VS Code with PlatformIO extension</li>
              <li>ESP32-S3 board (T190 Vision Master or DevKitC)</li>
              <li>USB-C cable</li>
              <li>Breadboard + components (see wiring below)</li>
            </ul>
          </Step>

          <Step n={2} title="Wiring">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="py-2 pr-4 font-medium">Signal</th>
                    <th className="py-2 pr-4 font-medium">GPIO</th>
                    <th className="py-2 font-medium">Component</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">Red LED</td><td className="py-2 pr-4">GPIO 1</td><td className="py-2">Red LED + 220Ω resistor</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">Blue LED</td><td className="py-2 pr-4">GPIO 2</td><td className="py-2">Blue LED + 220Ω resistor</td></tr>
                  <tr><td className="py-2 pr-4">Siren/Speaker</td><td className="py-2 pr-4">GPIO 3</td><td className="py-2">NPN transistor base via 1kΩ → speaker</td></tr>
                </tbody>
              </table>
            </div>
            <Code>{`LED Wiring:
ESP32 Pin → [220Ω] → LED Anode (+) → LED Cathode (-) → GND

Speaker Wiring via NPN Transistor:
5V → Speaker (+) → Speaker (-) → COLLECTOR
ESP32 Pin 3 → [1kΩ] → BASE
EMITTER → GND`}</Code>
          </Step>

          <Step n={3} title="platformio.ini">
            <Code lang="ini">{`[env:heltec_vision_master_t190]
platform  = espressif32
board     = esp32-s3-devkitc-1
framework = arduino
monitor_speed = 115200
upload_speed = 921600
build_flags =
    -DBOARD_HAS_PSRAM
    -DARDUINO_USB_CDC_ON_BOOT=1

lib_deps =
    knolleary/PubSubClient @ ^2.8
    bblanchon/ArduinoJson @ ^7.0`}</Code>
          </Step>

          <Step n={4} title="Configuration (config.h)">
            <Code lang="cpp">{`#pragma once
#include "secrets.h"   // WIFI_SSID, WIFI_PASSWORD, MQTT_SERVER

// MQTT
#define MQTT_PORT           1883
#define MQTT_CLIENT_ID      "ESP32_Siren_01"
#define TOPIC_FRIGATE_EVENTS "frigate/events"
#define TOPIC_MANUAL_TRIGGER "alarm/trigger"
#define TOPIC_ALARM_STATUS   "alarm/status"

// Hardware Pins
#define PIN_RED_LED     1
#define PIN_BLUE_LED    2
#define PIN_SIREN       3

// Alarm Behavior
#define ALARM_DURATION_MS   15000   // 15 seconds
#define STROBE_HALF_PERIOD  100     // 5Hz strobe
#define TONE_LOW_HZ         800
#define TONE_HIGH_HZ        1200`}</Code>
          </Step>

          <Step n={5} title="Create secrets.h">
            <p className="text-sm text-muted mb-3">
              Copy <code className="rounded bg-surface-light px-2 py-0.5 text-accent">secrets.h.example</code> to{" "}
              <code className="rounded bg-surface-light px-2 py-0.5 text-accent">secrets.h</code> and fill in your values:
            </p>
            <Code lang="cpp">{`#pragma once
#define WIFI_SSID       "YourNetworkName"
#define WIFI_PASSWORD   "YourPassword"
#define MQTT_SERVER     "YOUR_GOOGLE_COMPUTE_IP"`}</Code>
          </Step>

          <Step n={6} title="Flash the Firmware">
            <Code>{`# Using PlatformIO CLI
pio run -t upload

# Or use the PlatformIO sidebar in VS Code:
# Click the → (Upload) button`}</Code>
          </Step>

          <Step n={7} title="Test">
            <ol className="list-decimal ml-5 space-y-1 text-sm text-muted">
              <li>Open Serial Monitor at <strong>115200 baud</strong></li>
              <li>Wait for <code className="rounded bg-surface-light px-2 py-0.5 text-accent">[BOOT] Ready.</code></li>
              <li>Type <code className="rounded bg-surface-light px-2 py-0.5 text-accent">ALARM</code> → LEDs strobe + speaker beeps</li>
              <li>Type <code className="rounded bg-surface-light px-2 py-0.5 text-accent">STOP</code> → everything goes silent</li>
              <li>Type <code className="rounded bg-surface-light px-2 py-0.5 text-accent">STATUS</code> → shows WiFi, MQTT, and alarm state</li>
            </ol>
          </Step>

          <Step n={8} title="MQTT Event Flow">
            <p className="text-sm text-muted mb-3">When Frigate detects a person, it publishes to <code className="rounded bg-surface-light px-2 py-0.5 text-accent">frigate/events</code>:</p>
            <Code lang="json">{`{
  "type": "new",
  "after": {
    "label": "person",
    "camera": "front_entry",
    "score": 0.87
  }
}`}</Code>
            <p className="mt-3 text-sm text-muted">
              The ESP32 firmware parses this JSON, checks for <code className="rounded bg-surface-light px-2 py-0.5 text-accent">label: &quot;person&quot;</code> and{" "}
              <code className="rounded bg-surface-light px-2 py-0.5 text-accent">type: &quot;new&quot;</code>, then calls <code className="rounded bg-surface-light px-2 py-0.5 text-accent">startAlarm()</code>.
            </p>
          </Step>
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
