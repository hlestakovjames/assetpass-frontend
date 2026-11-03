"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/platform", label: "Platform" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/organizations", label: "Organizations" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/security", label: "Security" },
];

export function PublicNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="home-nav-menu">
      <a href="https://assetpass-app.vercel.app" className="home-mobile-login">Login</a>
      <button
        type="button"
        className="home-mobile-menu-toggle"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="assetpass-mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="assetpass-mobile-navigation"
        className={`home-nav-panel${open ? " is-open" : ""}`}
      >
        <nav className="home-nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="home-nav-actions">
          <Link href="/scan" className="home-scan-link" onClick={() => setOpen(false)}>Scan QR</Link>
          <a href="https://assetpass-app.vercel.app" className="home-login">Login</a>
          <a href="https://assetpass-app.vercel.app/register" className="home-register">Get started <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  );
}
