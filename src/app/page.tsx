import Link from "next/link";

const coreCapabilities = [
  { number: "01", title: "Asset lifecycle", copy: "Maintain structured records from registration and assignment through maintenance, retirement and disposal.", icon: "◈" },
  { number: "02", title: "Custody & accountability", copy: "Know who is responsible for an asset and preserve a traceable history of custody changes.", icon: "⇄" },
  { number: "03", title: "Digital asset passports", copy: "Connect physical assets to digital identities through QR-enabled passport links.", icon: "▦" },
  { number: "04", title: "Condition & maintenance", copy: "Keep inspection and maintenance activity connected to the asset record.", icon: "⌁" },
  { number: "05", title: "Visibility & reporting", copy: "Bring asset information and operational activity together for clearer decisions.", icon: "▥" },
  { number: "06", title: "Governance & auditability", copy: "Support controlled access, accountable workflows and retained lifecycle history.", icon: "⬡" },
];

const steps = [
  { number: "01", title: "Establish the record", copy: "Register an asset and create its structured digital identity." },
  { number: "02", title: "Identify it physically", copy: "Connect the asset to a QR-enabled passport for convenient identification." },
  { number: "03", title: "Manage responsibility", copy: "Record custody, condition and lifecycle activity through controlled workflows." },
  { number: "04", title: "Make informed decisions", copy: "Use consistent records and history to support oversight and accountability." },
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span className={`home-brand-mark${light ? " home-brand-mark-light" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 3.8 40 10v12.5c0 10.1-6.5 17.3-16 21.7C14.5 39.8 8 32.6 8 22.5V10L24 3.8Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="m15.5 24 5.6 5.6L33 17.7" stroke="#2DD4BF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function QrGraphic() {
  return (
    <svg viewBox="0 0 160 160" className="home-qr" role="img" aria-label="Illustrative QR code">
      <rect width="160" height="160" rx="12" fill="#fff" />
      <g fill="#123047">
        <path d="M12 12h44v44H12zm8 8v28h28V20zm7 7h14v14H27zM104 12h44v44h-44zm8 8v28h28V20zm7 7h14v14h-14zM12 104h44v44H12zm8 8v28h28v-28zm7 7h14v14H27z" />
        <path d="M68 12h8v8h-8zm16 0h8v16h-8zm-16 16h16v8H68zm8 8h8v16h-8zm8 8h16v8H84zm16-16h8v16h-8zm8 16h8v8h-8zM68 68h8v8h-8zm16 0h16v8H84zm24 0h8v16h-8zm16 0h8v8h-8zm-40 16h8v16h-8zm16 0h16v8H92zm24 8h8v8h-8zm16-8h16v8h-16zm-64 16h16v8H68zm24 8h8v16h-8zm16-8h8v8h-8zm16 8h8v16h-8zm16 0h8v8h-8zm-56 16h8v8h-8zm16 8h16v8h-16zm24 8h8v8h-8zm16 0h8v8h-8z" />
      </g>
      <rect x="65" y="65" width="30" height="30" rx="7" fill="#2DD4BF" />
      <path d="m73 80 5 5 10-11" stroke="#123047" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="home-page">
      <header className="home-header">
        <div className="home-container home-nav">
          <Link href="/" className="home-brand" aria-label="AssetPass home">
            <BrandMark />
            <span>Asset<span>Pass</span></span>
          </Link>
          <nav className="home-nav-links" aria-label="Main navigation">
            <Link href="/platform">Platform</Link>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/organizations">Organizations</Link>
            <Link href="/how-it-works">How it works</Link>
          </nav>
          <div className="home-nav-actions">
            <Link href="/scan" className="home-scan-link">Scan QR</Link>
            <a href="https://assetpass-app.vercel.app" className="home-login">Login</a>
            <a href="https://assetpass-app.vercel.app/register" className="home-register">Get started <ArrowIcon /></a>
          </div>
        </div>
      </header>

      <section className="home-hero">
        <div className="home-hero-grid" aria-hidden="true" />
        <div className="home-container home-hero-layout">
          <div className="home-hero-copy">
            <div className="home-eyebrow"><span /> ASSET MANAGEMENT, CONNECTED</div>
            <h1>Manage what you own.<br /><em>Connect what you need.</em></h1>
            <p>AssetPass brings structured asset lifecycle management and a connected marketplace into one platform — helping organizations maintain control of their assets and discover new opportunities.</p>
            <div className="home-hero-actions">
              <Link href="/platform" className="home-primary-button">Explore AssetPass <ArrowIcon /></Link>
              <Link href="/scan" className="home-secondary-button"><span>▦</span> Scan an asset</Link>
            </div>
            <div className="home-hero-assurance"><span>✓</span> Built around accountability, visibility and trusted connections</div>
          </div>
          <div className="home-hero-art" aria-label="Illustration of an AssetPass digital asset record">
            <div className="home-art-ring home-ring-one" /><div className="home-art-ring home-ring-two" />
            <div className="home-record-card">
              <div className="home-record-top"><div className="home-record-brand"><BrandMark /><b>ASSET<span>PASS</span></b></div><span className="home-record-tag">DIGITAL IDENTITY</span></div>
              <div className="home-record-illustration"><div className="home-device"><div className="home-device-screen"><BrandMark /><span>ASSET RECORD</span><div className="home-screen-lines"><i /><i /><i /></div></div><div className="home-device-base" /></div></div>
              <div className="home-record-bottom"><div><small>ASSET PASSPORT</small><strong>One asset. One identity.</strong><p>A connected lifecycle record</p></div><div className="home-qr-wrap"><QrGraphic /></div></div>
            </div>
            <div className="home-float home-float-top"><span>✓</span><div><b>Traceable records</b><small>Lifecycle visibility</small></div></div>
            <div className="home-float home-float-bottom"><span>▦</span><div><b>QR identification</b><small>Physical to digital</small></div></div>
          </div>
        </div>
        <div className="home-container home-hero-foot"><span>IDENTIFY</span><i /><span>MANAGE</span><i /><span>CONNECT</span><i /><span>ACCOUNT</span><small>One connected asset ecosystem</small></div>
      </section>

      <section className="home-intro-band">
        <div className="home-container home-intro-grid">
          <div><small>ONE PLATFORM. TWO CONNECTED PILLARS.</small><h2>Control your assets.<br />Unlock new possibilities.</h2></div>
          <p>From the assets an organization already manages to the opportunities it can discover, AssetPass is designed to connect information, responsibility and access in a more structured way.</p>
        </div>
      </section>

      <section className="home-section home-pillars" id="platform">
        <div className="home-container">
          <div className="home-section-heading"><div><small>THE ASSETPASS ECOSYSTEM</small><h2>Two pillars. One connected platform.</h2></div><p>Bring operational control and marketplace discovery together without losing sight of ownership, accountability or the asset record.</p></div>
          <div className="home-pillar-grid">
            <article className="home-pillar-card home-core-card">
              <div className="home-pillar-index">01 / CORE PLATFORM</div><div className="home-pillar-symbol">◈</div>
              <h3>AssetPass Core</h3><p className="home-pillar-lead">Know your assets. Manage every transition.</p>
              <p>Establish a reliable view of organizational assets, their condition, custody and lifecycle history — supported by structured workflows and controlled access.</p>
              <ul><li>Asset registration and digital passports</li><li>Custody and responsibility tracking</li><li>Inspections, maintenance and lifecycle records</li><li>Visibility, governance and auditability</li></ul>
              <Link href="/platform" className="home-pillar-link">Explore asset management <ArrowIcon /></Link>
            </article>
            <article className="home-pillar-card home-market-card" id="marketplace">
              <div className="home-pillar-index">02 / CONNECTED MARKETPLACE</div><div className="home-market-visual"><div className="home-market-orbit" /><div className="home-market-tile"><span>AP</span><b>ASSET</b><small>DISCOVERY</small></div><div className="home-market-node node-a">↗</div><div className="home-market-node node-b">⌕</div><div className="home-market-node node-c">◇</div></div>
              <h3>AssetPass Marketplace</h3><p className="home-pillar-lead">Discover assets. Create connections.</p>
              <p>A dedicated marketplace experience designed to connect organizations and people with asset-related opportunities through a more structured digital environment.</p>
              <ul><li>Discover listed assets and opportunities</li><li>Connect interested parties</li><li>Explore asset availability and details</li><li>Keep marketplace activity distinct from custody records</li></ul>
              <Link href="/marketplace" className="home-pillar-link">Explore the marketplace <ArrowIcon /></Link>
            </article>
          </div>
          <p className="home-market-note">Marketplace availability and transaction workflows depend on the capabilities released in the application. A listing by itself does not change asset ownership or custody.</p>
        </div>
      </section>

      <section className="home-section home-capabilities" id="core-capabilities">
        <div className="home-container">
          <div className="home-section-heading"><div><small>ASSETPASS CORE</small><h2>A clearer view of the asset lifecycle.</h2></div><p>Move beyond disconnected spreadsheets and informal handovers with a consistent record of the asset and its operational history.</p></div>
          <div className="home-capability-grid">{coreCapabilities.map((item) => <article className="home-capability" key={item.number}><div><span>{item.icon}</span><small>{item.number}</small></div><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
        </div>
      </section>

      <section className="home-section home-organizations" id="organizations">
        <div className="home-container home-org-layout">
          <div className="home-org-visual"><div className="home-org-panel"><div className="home-org-panel-head"><span>ORGANIZATION OVERVIEW</span><i>● ACTIVE VIEW</i></div><div className="home-org-stat"><span>ASSET RECORD</span><b>Structured information</b><small>Identity · Category · Lifecycle</small></div><div className="home-org-lines"><i /><i /><i /></div><div className="home-org-footer"><span>Custody history</span><b>Traceable activity ↗</b></div></div><div className="home-org-shield"><BrandMark /></div></div>
          <div className="home-org-copy"><small>DESIGNED FOR ORGANIZATIONS</small><h2>Bring asset accountability into everyday operations.</h2><p>Whether managing equipment, facilities or other organizational resources, teams need a shared understanding of what exists, where responsibility sits and what has changed.</p><ul><li>Establish consistent asset records</li><li>Support clear roles and responsibility</li><li>Retain a history of important transitions</li><li>Make asset information easier to oversee</li></ul><a href="https://assetpass-app.vercel.app/register" className="home-primary-button">Get started <ArrowIcon /></a></div>
        </div>
      </section>

      <section className="home-section home-workflow" id="how-it-works">
        <div className="home-container home-workflow-layout">
          <div className="home-workflow-copy"><small>FROM PHYSICAL TO DIGITAL</small><h2>A connected identity for every asset.</h2><p>QR identification provides a convenient bridge between a physical asset and its digital passport. Access to restricted asset and custody information remains subject to authorization.</p><Link href="/scan" className="home-text-link">Try the QR scanner <ArrowIcon /></Link></div>
          <div className="home-steps">{steps.map((step, index) => <div className="home-step" key={step.number}><div className="home-step-marker"><span>{step.number}</span>{index !== steps.length - 1 && <i />}</div><div><h3>{step.title}</h3><p>{step.copy}</p></div></div>)}</div>
        </div>
      </section>

      <section className="home-security">
        <div className="home-container home-security-layout"><div className="home-security-icon"><BrandMark light /></div><div><small>ACCOUNTABILITY BY DESIGN</small><h2>Useful information. Appropriate access.</h2><p>AssetPass is designed around controlled access and responsible information disclosure. Public QR experiences are intended for approved asset information — not private custody, financial or operational records.</p></div><div className="home-security-points"><span>✓ Role-aware access</span><span>✓ Traceable activity</span><span>✓ Privacy-conscious public identity</span></div></div>
      </section>

      <section className="home-final-cta"><div className="home-container home-cta-layout"><div><small>TAKE THE NEXT STEP</small><h2>Make every asset connection count.</h2><p>Explore AssetPass and see how a connected approach can support better asset management.</p></div><div className="home-cta-actions"><a href="https://assetpass-app.vercel.app/register" className="home-primary-button">Get started <ArrowIcon /></a><Link href="/scan" className="home-secondary-light">Scan an asset</Link></div></div></section>

      <footer className="home-footer"><div className="home-container"><div className="home-footer-main"><div><Link href="/" className="home-brand home-footer-brand"><BrandMark light /><span>Asset<span>Pass</span></span></Link><p>Secure Every Asset. Track Every Transition.</p></div><div className="home-footer-links"><Link href="/platform">Platform</Link><Link href="/marketplace">Marketplace</Link><Link href="/organizations">Organizations</Link><Link href="/how-it-works">How it works</Link><Link href="/scan">Scan QR</Link><a href="https://assetpass-app.vercel.app">Login</a></div></div><div className="home-footer-bottom"><span>© 2026 AssetPass. All rights reserved.</span><span>Asset lifecycle management · Connected marketplace</span></div></div></footer>
    </main>
  );
}
