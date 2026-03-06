// ============================================================
//  Dashboard Layout — Sidebar + protected route wrapper
// ============================================================
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import {
  HiShieldCheck,
  HiVideoCamera,
  HiCpuChip,
  HiBell,
  HiHome,
  HiCog6Tooth,
  HiArrowRightOnRectangle,
  HiSquares2X2,
} from "react-icons/hi2";

const sidebarLinks = [
  { href: "/dashboard", label: "Overview", icon: HiSquares2X2 },
  { href: "/dashboard/cameras", label: "Cameras", icon: HiVideoCamera },
  { href: "/dashboard/sensors", label: "Sensors & Alarms", icon: HiCpuChip },
  { href: "/dashboard/events", label: "Events", icon: HiBell },
  { href: "/dashboard/automation", label: "Automation", icon: HiHome },
  { href: "/dashboard/settings", label: "Settings", icon: HiCog6Tooth },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="hidden w-64 border-r border-border bg-surface lg:block">
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="border-b border-border p-4">
            <div className="flex items-center gap-2">
              <HiShieldCheck className="h-6 w-6 text-accent" />
              <span className="text-sm font-bold">MOHN Security</span>
            </div>
            <div className="mt-2 truncate text-xs text-muted">{user.email}</div>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 space-y-1 p-3">
            {sidebarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-all hover:bg-surface-light hover:text-foreground"
              >
                <link.icon className="h-5 w-5" />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Sign Out */}
          <div className="border-t border-border p-3">
            <button
              onClick={() => signOut()}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-all hover:bg-surface-light hover:text-danger"
            >
              <HiArrowRightOnRectangle className="h-5 w-5" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="mx-auto max-w-7xl p-6">{children}</div>
      </div>
    </div>
  );
}
