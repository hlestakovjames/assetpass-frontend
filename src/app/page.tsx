import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Asset lifecycle management",
    description:
      "Maintain a structured view of assets from registration and assignment through maintenance, retirement and disposal.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Custody and accountability",
    description:
      "Track who is responsible for an asset, manage transfers and preserve a traceable record of custody changes.",
    icon: "⇄",
  },
  {
    number: "03",
    title: "QR-powered asset passports",
    description:
      "Give each registered asset a QR identity that connects physical assets to their digital passport.",
    icon: "▦",
  },
  {
    number: "04",
    title: "Inspections and maintenance",
    description:
      "Record condition assessments and maintenance activity to support responsible asset management.",
    icon: "⌁",
  },
  {
    number: "05",
    title: "Visibility and reporting",
    description:
      "Bring asset information and operational activity together to support more informed decisions.",
    icon: "▥",
  },
  {
    number: "06",
    title: "Governance and auditability",
    description:
      "Support accountable workflows with controlled access, traceable actions and lifecycle history.",
    icon: "⬡",
  },
];

const steps = [
  {
    number: "01",
    title: "Register",
    description:
      "Create an asset record and establish its digital identity.",
  },
  {
    number: "02",
    title: "Identify",
    description:
      "Associate the asset with a QR code for convenient physical identification.",
  },
  {
    number: "03",
    title: "Manage",
    description:
      "Record custody, condition and lifecycle changes through controlled workflows.",
  },
  {
    number: "04",
    title: "Account",
    description:
      "Maintain visibility and traceability throughout the asset's lifecycle.",
  },
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`brand-mark${light ? " brand-mark-light" : ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" fill="none">
        <path
          d="M24 3.8 40 10v12.5c0 10.1-6.5 17.3-16 21.7C14.5 39.8 8 32.6 8 22.5V10L24 3.8Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="m15.5 24 5.6 5.6L33 17.7"
          stroke="#2DD4BF"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function QrGraphic() {
  return (
    <svg
      viewBox="0 0 160 160"
      className="qr-graphic"
      role="img"
      aria-label="Illustration of a QR code"
    >
      <rect width="160" height="160" rx="12" fill="#fff" />
      <g fill="#123047">
        <path d="M12 12h44v44H12zm8 8v28h28V20zm7 7h14v14H27z" />
        <path d="M104 12h44v44h-44zm8 8v28h28V20zm7 7h14v14h-14z" />
        <path d="M12 104h44v44H12zm8 8v28h28v-28zm7 7h14v14H27z" />
        <path d="M68 12h8v8h-8zm16 0h8v16h-8zm-16 16h16v8H68zm8 8h8v16h-8zm8 8h16v8H84zm16-16h8v16h-8zm8 16h8v8h-8z" />
        <path d="M68 68h8v8h-8zm16 0h16v8H84zm24 0h8v16h-8zm16 0h8v8h-8zm-40 16h8v16h-8zm16 0h16v8H92zm24 8h8v8h-8zm16-8h16v8h-16zm-64 16h16v8H68zm24 8h8v16h-8zm16-8h8v8h-8zm16 8h8v16h-8zm16 0h8v8h-8zm-56 16h8v8h-8zm16 8h16v8h-16zm24 8h8v8h-8zm16 0h8v8h-8z" />
      </g>
      <rect x="65" y="65" width="30" height="30" rx="7" fill="#2DD4BF" />
      <path
        d="m73 80 5 5 10-11"
        stroke="#123047"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-container">
          <Link href="/" className="brand" aria-label="AssetPass home">
            <BrandMark />
            <span className="brand-name">
              Asset<span>Pass</span>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#platform">Platform</a>
            <a href="#how-it-works">How it works</a>
            <a href="#security">Security</a>
          </nav>

          <div className="nav-actions">
            <Link href="/scan" className="nav-scan">
              Scan QR
            </Link>
            <a
              href="https://app.assetpass.com"
              className="button button-primary button-small"
            >
              Staff login <ArrowIcon />
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              ASSET LIFECYCLE &amp; CUSTODY MANAGEMENT
            </div>

            <h1>
              Every asset.
              <br />
              <span>One clear record.</span>
            </h1>

            <p className="hero-description">
              Bring asset records, custody, condition and lifecycle activity
              together in one structured platform. Know what you have, track
              responsibility and support accountable decisions.
            </p>

            <div className="hero-actions">
              <a href="#platform" className="button button-primary">
                Explore the platform <ArrowIcon />
              </a>
              <Link href="/scan" className="button button-outline">
                <span className="button-qr" aria-hidden="true">▦</span>
                Scan an asset
              </Link>
            </div>

            <div className="hero-note">
              <span className="note-check">✓</span>
              Public asset identification and controlled staff access
            </div>
          </div>

          <div className="hero-visual" aria-label="Illustration of a digital asset passport">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="asset-card">
              <div className="asset-card-top">
                <div className="asset-card-brand">
                  <BrandMark />
                  <span>ASSET<span className="teal-text">PASS</span></span>
                </div>
                <span className="record-label">DIGITAL RECORD</span>
              </div>

              <div className="asset-illustration">
                <div className="laptop">
                  <div className="laptop-screen">
                    <div className="screen-camera" />
                    <div className="screen-content">
                      <BrandMark />
                      <span>ASSET IDENTITY</span>
                    </div>
                  </div>
                  <div className="laptop-base" />
                </div>
              </div>

              <div className="asset-card-divider" />

              <div className="asset-card-bottom">
                <div>
                  <span className="field-label">DIGITAL ASSET PASSPORT</span>
                  <h3>One asset. One identity.</h3>
                  <p>Connected to its lifecycle record</p>
                </div>
                <div className="qr-wrap">
                  <QrGraphic />
                </div>
              </div>
            </div>

            <div className="floating-chip chip-top">
              <span className="chip-icon">✓</span>
              <span>
                <strong>Traceable records</strong>
                <small>Lifecycle visibility</small>
              </span>
            </div>

            <div className="floating-chip chip-bottom">
              <span className="chip-icon chip-icon-qr">▦</span>
              <span>
                <strong>QR identification</strong>
                <small>Physical to digital</small>
              </span>
            </div>
          </div>
        </div>

        <div className="container hero-footer">
          <span>IDENTIFY</span>
          <span className="footer-line" />
          <span>TRACK</span>
          <span className="footer-line" />
          <span>ACCOUNT</span>
          <span className="hero-footer-caption">
            Secure Every Asset. Track Every Transition.
          </span>
        </div>
      </section>

      <section className="trust-strip" id="security">
        <div className="container trust-layout">
          <div className="trust-intro">
            <span className="section-kicker">BUILT AROUND ACCOUNTABILITY</span>
            <h2>Asset management with a clearer view.</h2>
          </div>
          <div className="trust-item">
            <span className="trust-icon">◈</span>
            <div>
              <strong>Lifecycle visibility</strong>
              <p>Records across asset stages</p>
            </div>
          </div>
          <div className="trust-item">
            <span className="trust-icon">⇄</span>
            <div>
              <strong>Custody traceability</strong>
              <p>Structured responsibility changes</p>
            </div>
          </div>
          <div className="trust-item">
            <span className="trust-icon">⬡</span>
            <div>
              <strong>Controlled access</strong>
              <p>Information appropriate to each user</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section platform-section" id="platform">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">THE ASSETPASS PLATFORM</span>
              <h2>More than an asset list.</h2>
            </div>
            <p>
              A structured approach to identifying assets, managing
              responsibility and maintaining visibility throughout the
              lifecycle.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="feature-top">
                  <span className="feature-icon">{feature.icon}</span>
                  <span className="feature-number">{feature.number}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="feature-rule" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section workflow-section" id="how-it-works">
        <div className="container workflow-layout">
          <div className="workflow-copy">
            <span className="section-kicker">FROM PHYSICAL TO DIGITAL</span>
            <h2>A connected identity for every asset.</h2>
            <p>
              AssetPass links physical identification with structured digital
              records. A QR code provides a convenient entry point, while
              access to sensitive information remains subject to authorization.
            </p>
            <Link href="/scan" className="text-link">
              Open the QR scanner <ArrowIcon />
            </Link>
          </div>

          <div className="workflow-steps">
            {steps.map((step, index) => (
              <div className="workflow-step" key={step.number}>
                <div className="step-marker">
                  <span>{step.number}</span>
                  {index !== steps.length - 1 && (
                    <span className="step-connector" />
                  )}
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="access-section">
        <div className="container access-panel">
          <div className="access-copy">
            <span className="section-kicker">START WITH ASSETPASS</span>
            <h2>Find the right way in.</h2>
            <p>
              Looking for information about an asset, or managing an
              organization&apos;s asset records? Choose the access point that
              fits your task.
            </p>
          </div>
          <div className="access-options">
            <Link href="/scan" className="access-option">
              <span className="access-option-icon">▦</span>
              <span className="access-option-copy">
                <strong>Scan an asset</strong>
                <small>Open the public QR scanner</small>
              </span>
              <ArrowIcon />
            </Link>
            <a href="https://assetpass-app.vercel.app" className="access-option">
              <span className="access-option-icon access-option-dark">↗</span>
              <span className="access-option-copy">
                <strong>Staff application</strong>
                <small>Sign in to the management platform</small>
              </span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand-block">
            <Link href="/" className="brand footer-brand">
              <BrandMark light />
              <span className="brand-name">
                Asset<span>Pass</span>
              </span>
            </Link>
            <p>Secure Every Asset. Track Every Transition.</p>
          </div>
          <div className="footer-links">
            <a href="#platform">Platform</a>
            <a href="#how-it-works">How it works</a>
            <Link href="/scan">Scan QR</Link>
            <a href="https://app.assetpass.com">Staff login</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 AssetPass. All rights reserved.</span>
          <span>Asset lifecycle and custody management</span>
        </div>
      </footer>
    </main>
  );
}

