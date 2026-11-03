import { PublicPage, ContentSection } from "../components/public-page";

const stages = [
  ["01", "Establish the record", "Register an asset and create its structured digital identity."],
  ["02", "Identify it physically", "Connect the asset to a QR-enabled passport for convenient identification."],
  ["03", "Manage responsibility", "Record custody, condition and lifecycle activity through controlled workflows."],
  ["04", "Make informed decisions", "Use consistent records and history to support oversight and accountability."]
];

export default function HowItWorksPage() {
  return <PublicPage eyebrow="HOW ASSETPASS WORKS" title="From physical assets to connected records." description="AssetPass links an asset's physical identity to the information, responsibility and lifecycle activity that help organizations manage it.">
    <ContentSection title="A connected asset journey"><div className="inner-grid">{stages.map(([number,title,copy]) => <article className="inner-card" key={number}><h3>{number} · {title}</h3><p>{copy}</p></article>)}</div></ContentSection>
    <ContentSection title="QR-enabled identification"><p>A QR code provides a convenient bridge between a physical asset and its digital passport. Public passport experiences are limited to approved information; restricted custody and operational details remain subject to authorization.</p><a href="/scan" className="home-primary-button">Open QR scanner <span aria-hidden="true">→</span></a></ContentSection>
  </PublicPage>;
}