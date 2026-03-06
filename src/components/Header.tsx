// ============================================================
//  MOHN Security — Professional Navigation with Dropdowns
// ============================================================
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/lib/auth-context";
import { HiShieldCheck } from "react-icons/hi2";
import {
  HiChevronDown,
  HiBars3,
  HiXMark,
  HiVideoCamera,
  HiCpuChip,
  HiBolt,
  HiSignal,
  HiLockClosed,
  HiServerStack,
  HiDevicePhoneMobile,
  HiPaintBrush,
  HiHome,
  HiBuildingOffice2,
  HiWrenchScrewdriver,
  HiLightBulb,
  HiChatBubbleLeftRight,
  HiDocumentText,
  HiQuestionMarkCircle,
  HiGlobeAlt,
  HiUserGroup,
  HiNewspaper,
  HiBriefcase,
} from "react-icons/hi2";

// ---- Navigation Structure ----
interface NavChild {
  label: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

const navigation: NavItem[] = [
  {
    label: "Solutions",
    children: [
      {
        label: "AI Video Detection",
        href: "/solutions/ai-detection",
        description: "Frigate NVR with real-time person & object detection",
        icon: HiVideoCamera,
      },
      {
        label: "Sensor Networks",
        href: "/solutions/sensors",
        description: "ESP32 mesh for motion, glass-break, and environment",
        icon: HiCpuChip,
      },
      {
        label: "Instant Deterrence",
        href: "/solutions/deterrence",
        description: "Zero-delay alarm, strobe, and siren response",
        icon: HiBolt,
      },
      {
        label: "Remote Monitoring",
        href: "/solutions/monitoring",
        description: "24/7 dashboard access from any device",
        icon: HiSignal,
      },
      {
        label: "Access Control",
        href: "/solutions/access-control",
        description: "Smart locks, keypads, and biometric entry",
        icon: HiLockClosed,
      },
      {
        label: "Home Automation",
        href: "/solutions/automation",
        description: "Lighting, HVAC, and appliance control integration",
        icon: HiServerStack,
      },
    ],
  },
  {
    label: "Products",
    children: [
      {
        label: "Residential",
        href: "/products/residential",
        description: "Complete home security packages",
        icon: HiHome,
      },
      {
        label: "Commercial",
        href: "/products/commercial",
        description: "Enterprise-grade surveillance and access control",
        icon: HiBuildingOffice2,
      },
      {
        label: "Integrator / White-Label",
        href: "/products/integrator",
        description: "Rebrand and resell under your own label",
        icon: HiPaintBrush,
      },
      {
        label: "Mobile Apps",
        href: "/products/mobile",
        description: "iOS & Android companion apps",
        icon: HiDevicePhoneMobile,
      },
      {
        label: "Hardware Kits",
        href: "/products/hardware",
        description: "ESP32 nodes, cameras, and sensor bundles",
        icon: HiWrenchScrewdriver,
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "Documentation",
        href: "/docs",
        description: "Setup guides, API reference, and tutorials",
        icon: HiDocumentText,
      },
      {
        label: "Blog",
        href: "/blog",
        description: "Security tips, product updates, and case studies",
        icon: HiNewspaper,
      },
      {
        label: "Help Center",
        href: "/support",
        description: "FAQs, troubleshooting, and live chat",
        icon: HiQuestionMarkCircle,
      },
      {
        label: "System Status",
        href: "/status",
        description: "Real-time platform health and uptime",
        icon: HiGlobeAlt,
      },
    ],
  },
  {
    label: "Company",
    children: [
      {
        label: "About Us",
        href: "/about",
        description: "Our mission, team, and story",
        icon: HiUserGroup,
      },
      {
        label: "Careers",
        href: "/careers",
        description: "Join the MOHN Security team",
        icon: HiBriefcase,
      },
      {
        label: "Contact",
        href: "/contact",
        description: "Speak with our team directly",
        icon: HiChatBubbleLeftRight,
      },
      {
        label: "Case Studies",
        href: "/case-studies",
        description: "Real deployments and customer results",
        icon: HiLightBulb,
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];

// ---- Dropdown Component ----
function DesktopDropdown({
  item,
  open,
  onToggle,
}: {
  item: NavItem;
  open: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        if (open) onToggle();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onToggle]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-foreground"
      >
        {item.label}
        <HiChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 mt-3 w-[420px] -translate-x-1/2 rounded-xl border border-border bg-surface p-2 shadow-xl shadow-black/30">
          <div className="grid gap-0.5">
            {item.children!.map((child) => {
              const Icon = child.icon;
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onToggle}
                  className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-surface-light"
                >
                  {Icon && (
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                      <Icon className="h-4 w-4" />
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-medium text-foreground">{child.label}</div>
                    {child.description && (
                      <div className="mt-0.5 text-xs text-muted">{child.description}</div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ---- Main Header ----
export default function Header() {
  const { user, signOut } = useAuth();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <HiShieldCheck className="h-8 w-8 text-accent" />
          <span>
            MOHN <span className="text-accent">Security</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) =>
            item.children ? (
              <DesktopDropdown
                key={item.label}
                item={item}
                open={openDropdown === item.label}
                onToggle={() =>
                  setOpenDropdown(openDropdown === item.label ? null : item.label)
                }
              />
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  pathname === item.href ? "text-accent" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  isDashboard
                    ? "bg-accent text-white"
                    : "bg-accent/10 text-accent hover:bg-accent hover:text-white"
                }`}
              >
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <HiXMark className="h-6 w-6" />
          ) : (
            <HiBars3 className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-surface lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label
                      )
                    }
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface-light hover:text-foreground"
                  >
                    {item.label}
                    <HiChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="ml-3 mt-1 space-y-0.5 border-l border-border pl-3">
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-light hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-surface-light ${
                    pathname === item.href
                      ? "text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

            <hr className="border-border my-3" />

            {user ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg bg-accent px-3 py-2.5 text-center text-sm font-semibold text-white"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    setMobileOpen(false);
                  }}
                  className="mt-1 block w-full rounded-lg border border-border px-3 py-2.5 text-center text-sm font-medium text-muted"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-center text-sm font-medium text-muted hover:text-foreground"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg bg-accent px-3 py-2.5 text-center text-sm font-semibold text-white"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
