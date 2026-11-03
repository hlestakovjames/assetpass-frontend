import Link from "next/link";
import type { ReactNode } from "react";

const links = [
  { href: "/platform", label: "Platform" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/organizations", label: "Organizations" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/security", label: "Security" },
];

function Mark() {
  return <span className="home-brand-mark" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><path d="M24 3.8 40 10v12.5c0 10.1-6.5 17.3-16 21.7C14.5 39.8 8 32.6 8 22.5V10L24 3.8Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/><path d="m15.5 24 5.6 5.6L33 17.7" stroke="#2DD4BF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>;
}

export function PublicPage({ eyebrow, title, description, children, primaryHref, primaryLabel, secondaryHref, secondaryLabel }: { eyebrow: string; title: string; description: string; children: ReactNode; primaryHref?: string; primaryLabel?: string; secondaryHref?: string; secondaryLabel?: string }) {
  return <main className="home-page public-inner-page">
    <header className="home-header"><div className="home-container home-nav">
      <Link href="/" className="home-brand" aria-label="AssetPass home"><Mark/><span>Asset<span>Pass</span></span></Link>
      <nav className="home-nav-links" aria-label="Main navigation">{links.map(link => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav>
      <div className="home-nav-actions"><Link href="/scan" className="home-scan-link">Scan QR</Link><a href="https://assetpass-app.vercel.app" className="home-login">Login</a><a href="https://assetpass-app.vercel.app/register" className="home-register">Get started <span aria-hidden="true">→</span></a></div>
    </div></header>
    <section className="inner-hero"><div className="home-container"><small>{eyebrow}</small><h1>{title}</h1><p>{description}</p><div className="inner-hero-actions"><Link href={primaryHref ?? "https://assetpass-app.vercel.app/register"} className="home-primary-button">{primaryLabel ?? "Get started"} <span aria-hidden="true">→</span></Link><Link href={secondaryHref ?? "/scan"} className="home-secondary-button">{secondaryLabel ?? "Scan an asset"}</Link></div></div></section>
    <div className="inner-content"><div className="home-container">{children}</div></div>
    <footer className="home-footer"><div className="home-container"><div className="home-footer-main"><div><Link href="/" className="home-brand home-footer-brand"><Mark/><span>Asset<span>Pass</span></span></Link><p>Secure Every Asset. Track Every Transition.</p></div><div className="home-footer-links">{links.map(link => <Link href={link.href} key={link.href}>{link.label}</Link>)}<Link href="/scan">Scan QR</Link><a href="https://assetpass-app.vercel.app">Login</a></div></div><div className="home-footer-bottom"><span>© 2026 AssetPass. All rights reserved.</span><span>Asset lifecycle management · Connected marketplace</span></div></div></footer>
  </main>;
}

export function ContentSection({ title, children }: { title: string; children: ReactNode }) {
  return <section className="inner-section"><h2>{title}</h2>{children}</section>;
}
