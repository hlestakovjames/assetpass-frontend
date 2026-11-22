import Image from "next/image";
import Link from "next/link";
import { PublicNavigation } from "./components/public-navigation";

const MARKETPLACE_URL = "https://assetpass-app.vercel.app/marketplace";

const lifecycle = [
  ["01", "Register", "Establish a structured asset record and digital identity."],
  ["02", "Identify", "Connect the physical asset to its QR-enabled passport."],
  ["03", "Use & manage", "Keep responsibility, condition and lifecycle activity connected."],
  ["04", "Maintain", "Record inspections and maintenance as part of the asset history."],
  ["05", "Circulate", "Discover opportunities for eligible assets through Marketplace."],
  ["06", "Recover or retire", "Keep important lifecycle decisions traceable."]
];

function BrandMark() {
  return (
    <Image
      src="/brand/Assetpass%20Logo.png"
      alt=""
      width={48}
      height={48}
      className="home-brand-mark"
    />
  );
}

export default function Home() {
  return <main className="home-page release-home">
    <header className="home-header"><div className="home-container home-nav">
      <Link href="/" className="home-brand" aria-label="AssetPass home"><BrandMark/><span>Asset<span>Pass</span></span></Link>
      <PublicNavigation />
    </div></header>

    <section className="release-hero">
      <div className="home-container release-hero-grid">
        <div className="release-hero-copy">
          <span className="release-eyebrow"><i /> THE ASSET ECOSYSTEM PLATFORM</span>
          <h1>Manage assets.<br/><em>Extend their value.</em></h1>
          <p>Keep every transition accountable. AssetPass connects structured asset lifecycle management with a dedicated marketplace for discovering and circulating eligible assets.</p>
          <div className="release-actions"><Link href="/platform" className="home-primary-button">Explore AssetPass Core <span aria-hidden="true">→</span></Link><a href={MARKETPLACE_URL} className="home-secondary-button">Explore Marketplace ↗</a></div>
          <div className="release-assurance"><span>✓</span> Built around visibility, responsibility and traceable asset activity</div>
        </div>
        <div className="release-hero-panel" aria-label="Illustrative connected asset record">
          <div className="release-panel-top"><span>ASSET RECORD</span><span>ILLUSTRATIVE VIEW</span></div>
          <div className="release-panel-symbol"><BrandMark/></div>
          <div className="release-panel-title"><small>DIGITAL ASSET IDENTITY</small><strong>One asset. One connected record.</strong><p>Identity · Responsibility · Lifecycle</p></div>
          <div className="release-panel-bottom"><span>QR-enabled identification</span><span>AssetPass Core</span></div>
        </div>
      </div>
      <div className="home-container release-trust-row"><span>TRACEABILITY</span><i/><span>LIFECYCLE VISIBILITY</span><i/><span>ACCOUNTABILITY</span><i/><span>ASSET CIRCULATION</span></div>
    </section>

    <section className="release-intro"><div className="home-container release-intro-grid"><div><small>ONE ECOSYSTEM. TWO CONNECTED PILLARS.</small><h2>Control what you manage.<br/>Discover what comes next.</h2></div><p>AssetPass helps individuals and organizations understand the assets they own or manage, maintain a clearer record of responsibility, and discover opportunities beyond their current inventory.</p></div></section>

    <section className="release-pillars"><div className="home-container">
      <div className="release-section-heading"><div><small>THE ASSETPASS ECOSYSTEM</small><h2>Two connected experiences.</h2></div><p>Core asset management and Marketplace discovery work alongside one another while retaining their distinct responsibilities.</p></div>
      <div className="release-pillar-grid">
        <article className="release-pillar release-core"><span className="release-index">01 / ASSETPASS CORE</span><div className="release-pillar-icon">◈</div><h3>Manage assets with clarity.</h3><p>Build structured asset records and keep identification, custody, condition and supported lifecycle activity connected.</p><ul><li>Asset registration and digital identity</li><li>Custody and responsibility tracking</li><li>Inspections and maintenance records</li><li>Lifecycle visibility and reporting</li></ul><Link href="/platform">Explore AssetPass Core <b>→</b></Link></article>
        <article className="release-pillar release-market"><span className="release-index">02 / ASSETPASS MARKETPLACE</span><div className="release-market-art"><div className="release-market-orbit"/><Image src="/brand/Assetpass%20Marketplace%20icon.png" alt="" width={68} height={68} className="relative z-10 h-[68px] w-[68px] object-contain" /></div><h3>Discover new asset opportunities.</h3><p>Enter a dedicated Marketplace experience designed for public discovery and the controlled circulation of eligible assets.</p><ul><li>Separate Marketplace application</li><li>Public discovery as capabilities are released</li><li>Sale, donation and exchange opportunities</li><li>Listing activity does not itself transfer custody</li></ul><a href={MARKETPLACE_URL}>Enter AssetPass Marketplace <b>↗</b></a></article>
      </div>
    </div></section>

    <section className="release-lifecycle"><div className="home-container"><div className="release-section-heading"><div><small>THE ASSET LIFECYCLE</small><h2>From registration to the next chapter.</h2></div><p>Keep the important stages of an asset's journey connected through a consistent record.</p></div><div className="release-lifecycle-grid">{lifecycle.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

    <section className="release-organization"><div className="home-container release-organization-grid"><div className="release-org-visual"><span>ORGANIZATION ASSET VIEW</span><div className="release-org-record"><small>ASSET PROFILE</small><strong>Equipment & resources</strong><div/><div/><div/><footer>Responsibility · Condition · History</footer></div><b>ACCOUNTABLE BY DESIGN</b></div><div><small className="release-kicker">FOR ORGANIZATIONS AND INDIVIDUALS</small><h2>Asset accountability belongs in everyday work.</h2><p>Whether you manage organizational equipment or personal assets, reliable records help clarify what exists, who is responsible and what has changed.</p><ul><li>Bring asset information into a structured record.</li><li>Connect people and responsibility through authorized workflows.</li><li>Retain a clearer history of important transitions.</li></ul><Link href="/organizations" className="home-primary-button">Explore organization use cases <span>→</span></Link></div></div></section>

    <section className="release-qr"><div className="home-container release-qr-layout"><div><small>IDENTIFY WITH QR</small><h2>Connect the physical asset to its digital passport.</h2><p>Use the public scanner to open an AssetPass passport link. Public passport information is limited to approved fields; private custody and operational details remain protected.</p><Link href="/scan" className="release-inline-link">Open QR scanner →</Link></div><div className="release-qr-card"><div className="release-qr-box">▦</div><div><strong>Digital asset passport</strong><small>Public information with privacy boundaries</small></div></div></div></section>

    <section className="release-security"><div className="home-container release-security-grid"><div><small>SECURITY & GOVERNANCE</small><h2>Useful information.<br/>Appropriate access.</h2></div><div><p>AssetPass is designed around controlled access, clear application boundaries and responsible disclosure. A public identifier is not permission to view private records.</p><Link href="/security" className="release-inline-link">Read about security and privacy →</Link></div></div></section>

    <section className="release-final"><div className="home-container"><small>START WITH THE RIGHT EXPERIENCE</small><h2>Bring your assets into clearer view.</h2><p>Explore AssetPass Core, discover the separate Marketplace application or create an account to get started.</p><div className="release-actions"><a href="https://assetpass-app.vercel.app/register" className="home-primary-button">Get started <span>→</span></a><a href={MARKETPLACE_URL} className="release-final-link">Go to Marketplace ↗</a></div></div></section>

    <footer className="home-footer"><div className="home-container"><div className="home-footer-main"><div><Link href="/" className="home-brand home-footer-brand"><BrandMark/><span>Asset<span>Pass</span></span></Link><p>Manage assets. Extend their value. Keep every transition accountable.</p></div><div className="home-footer-groups"><div className="home-footer-group"><strong>Explore</strong><Link href="/platform">Platform</Link><a href={MARKETPLACE_URL}>Marketplace ↗</a><Link href="/organizations">Organizations</Link><Link href="/how-it-works">How it works</Link></div><div className="home-footer-group"><strong>Company</strong><Link href="/about">About</Link><Link href="/developers">Developers</Link><Link href="/resources">Resources</Link></div><div className="home-footer-group"><strong>Help & information</strong><Link href="/support">Support</Link><Link href="/contact">Contact</Link><Link href="/legal">Legal</Link><Link href="/security">Security</Link><Link href="/scan">Scan QR</Link></div></div></div><div className="home-footer-bottom"><span>© 2026 AssetPass. All rights reserved.</span><span>Asset lifecycle management · Connected marketplace</span></div></div></footer>
  </main>;
}
