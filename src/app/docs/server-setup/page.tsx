// Docs — Server Setup (content from FrigateSystem/SETUP_SERVER.md)
import { HiServerStack } from "react-icons/hi2";

export default function ServerSetupPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiServerStack className="h-3 w-3" /> Setup Guide
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Server Setup — Google Compute Engine + Docker</h1>
          <p className="mt-3 text-muted">Deploy Frigate NVR and Mosquitto MQTT broker on a cloud VM.</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose-custom mx-auto max-w-4xl space-y-8">
          <Step n={1} title="SSH into your Compute Instance">
            <Code>{`gcloud compute ssh YOUR_INSTANCE_NAME`}</Code>
          </Step>

          <Step n={2} title="Install Docker">
            <Code>{`curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER
newgrp docker`}</Code>
          </Step>

          <Step n={3} title="Install Docker Compose">
            <Code>{`sudo apt-get install -y docker-compose-plugin
docker compose version   # Should print v2.x.x`}</Code>
          </Step>

          <Step n={4} title="Upload Project Files">
            <p className="text-sm text-muted mb-3">From your local machine, copy the server folder to the instance:</p>
            <Code>{`cd FrigateSystem
gcloud compute scp --recurse ./server YOUR_INSTANCE_NAME:~/security`}</Code>
          </Step>

          <Step n={5} title="docker-compose.yml">
            <p className="text-sm text-muted mb-3">This is the Docker Compose config that runs both services:</p>
            <Code lang="yaml">{`services:
  # MQTT Broker (Mosquitto)
  mqtt:
    image: eclipse-mosquitto:2.0
    container_name: mosquitto
    restart: unless-stopped
    ports:
      - "1883:1883"
      - "9001:9001"
    volumes:
      - ./mosquitto/mosquitto.conf:/mosquitto/config/mosquitto.conf
      - mosquitto_data:/mosquitto/data
      - mosquitto_log:/mosquitto/log

  # Frigate NVR
  frigate:
    image: ghcr.io/blakeblackshear/frigate:stable
    container_name: frigate
    restart: unless-stopped
    privileged: true
    shm_size: "256mb"
    depends_on:
      - mqtt
    ports:
      - "8971:8971"    # Frigate UI
      - "8554:8554"    # RTSP restream
      - "8555:8555/tcp"
      - "8555:8555/udp"
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./config/config.yml:/config/config.yml:ro
      - frigate_storage:/media/frigate
    environment:
      FRIGATE_RTSP_PASSWORD: "changeme"

volumes:
  mosquitto_data:
  mosquitto_log:
  frigate_storage:`}</Code>
          </Step>

          <Step n={6} title="Start the Stack">
            <Code>{`cd ~/security/server
docker compose up -d`}</Code>
          </Step>

          <Step n={7} title="Open Firewall Ports (Google Cloud Console)">
            <p className="text-sm text-muted mb-3">Go to: VPC Network → Firewall → Add Rule</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="py-2 pr-4 font-medium">Rule</th>
                    <th className="py-2 pr-4 font-medium">Port</th>
                    <th className="py-2 font-medium">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">allow-mqtt</td><td className="py-2 pr-4">TCP 1883</td><td className="py-2">ESP32 MQTT</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 pr-4">allow-frigate-ui</td><td className="py-2 pr-4">TCP 8971</td><td className="py-2">Web dashboard</td></tr>
                  <tr><td className="py-2 pr-4">allow-rtsp</td><td className="py-2 pr-4">TCP 8554</td><td className="py-2">RTSP restream</td></tr>
                </tbody>
              </table>
            </div>
          </Step>

          <Step n={8} title="Verify Everything is Running">
            <Code>{`docker compose ps          # Both services should show "Up"
docker compose logs frigate  # Look for "Frigate is running"
docker compose logs mqtt     # Look for "mosquitto version X.X starting"`}</Code>
          </Step>

          <Step n={9} title="Access Frigate UI">
            <p className="text-sm text-muted">
              Open a browser: <code className="rounded bg-surface-light px-2 py-0.5 text-accent">http://YOUR_GOOGLE_COMPUTE_IP:8971</code>
            </p>
          </Step>

          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold">Useful Commands</h3>
            <Code>{`# Restart a single service
docker compose restart frigate

# View live logs
docker compose logs -f frigate

# Stop everything
docker compose down

# Rebuild after config changes
docker compose up -d --force-recreate`}</Code>
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
