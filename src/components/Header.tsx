// ============================================================
//  MOHN Security — Professional Header / Navigation
// ============================================================
"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { HiMenu, HiX } from "react-icons/hi";
import { HiShieldCheck } from "react-icons/hi2";

export default function Header() {
  const { user, signOut } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#contact", label: "Contact" },
  ];

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
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
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
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-surface md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-light hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-border my-2" />
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg bg-accent px-3 py-2 text-center text-sm font-semibold text-white"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => { signOut(); setMobileOpen(false); }}
                  className="mt-1 block w-full rounded-lg border border-border px-3 py-2 text-center text-sm font-medium text-muted"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2 text-center text-sm font-medium text-muted hover:text-foreground"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg bg-accent px-3 py-2 text-center text-sm font-semibold text-white"
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
