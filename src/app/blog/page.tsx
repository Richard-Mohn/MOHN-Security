// Blog listing page (placeholder)
import Link from "next/link";
import { HiNewspaper, HiArrowRight } from "react-icons/hi2";

const posts = [
  {
    slug: "#",
    title: "Why On-Premise AI Beats Cloud-Only Security",
    excerpt: "Local Frigate NVR inference eliminates cloud latency and recurring fees while keeping footage private.",
    date: "Jan 15, 2025",
    tag: "Engineering",
  },
  {
    slug: "#",
    title: "ESP32-S3 — Building a Zero-Delay Deterrence Node",
    excerpt: "How we engineered sub-200ms alarm response using MQTT and custom firmware on $6 microcontrollers.",
    date: "Jan 8, 2025",
    tag: "Hardware",
  },
  {
    slug: "#",
    title: "Deploying Frigate NVR on Google Compute Engine",
    excerpt: "Step-by-step guide to running AI-powered video analytics on a GCE instance with Docker Compose.",
    date: "Dec 20, 2024",
    tag: "Tutorial",
  },
  {
    slug: "#",
    title: "Wisenet Camera Setup for RTSP Streaming",
    excerpt: "Configuring Hanwha Wisenet cameras for reliable RTSP sub-streams with Frigate integration.",
    date: "Dec 12, 2024",
    tag: "Tutorial",
  },
  {
    slug: "#",
    title: "The Future of Residential Security is Open Source",
    excerpt: "Open hardware and transparent firmware give homeowners real control over their security systems.",
    date: "Nov 30, 2024",
    tag: "Opinion",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-gradient-to-b from-accent/5 to-transparent px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <HiNewspaper className="h-3 w-3" /> Blog
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">
            Engineering <span className="text-accent">Insights</span>
          </h1>
          <p className="mt-3 text-muted">Deep dives into open-source security, hardware design, and AI detection.</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-0 divide-y divide-border">
          {posts.map((p) => (
            <article key={p.title} className="py-8 first:pt-0 last:pb-0">
              <div className="flex items-center gap-3 text-xs text-muted">
                <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-medium text-accent">{p.tag}</span>
                <time>{p.date}</time>
              </div>
              <h2 className="mt-3 text-xl font-bold">
                <Link href={p.slug} className="hover:text-accent transition-colors">{p.title}</Link>
              </h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">{p.excerpt}</p>
              <Link href={p.slug} className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                Read more <HiArrowRight className="h-3 w-3" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
