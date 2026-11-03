import { PublicPage, ContentSection } from "../components/public-page";

export default function PlatformPage() {
  return <PublicPage eyebrow="ASSETPASS CORE" title="A clearer view of the asset lifecycle." description="Manage organizational assets through structured records, accountable custody, connected inspections and traceable lifecycle activity.">
    <ContentSection title="One reliable record for every asset"><p>AssetPass Core is designed to help organizations establish a consistent view of the assets they own or manage, who is responsible for them, and what happens throughout their lifecycle.</p><div className="inner-grid">
      <article className="inner-card"><h3>Asset registration</h3><p>Create structured asset records with a digital identity that can be referenced throughout the lifecycle.</p></article>
      <article className="inner-card"><h3>Custody and transfers</h3><p>Track responsibility and preserve a clear history of handovers and acknowledged transfers.</p></article>
      <article className="inner-card"><h3>Inspections and maintenance</h3><p>Connect condition checks and maintenance activity to the asset record.</p></article>
      <article className="inner-card"><h3>Lifecycle governance</h3><p>Support controlled workflows for changes, retirement, disposal and audit history.</p></article>
    </div></ContentSection>
    <ContentSection title="Built around accountability"><ul className="inner-list"><li>Role-aware access to operational information.</li><li>Traceable custody and lifecycle transitions.</li><li>QR-enabled digital asset passports.</li><li>Organization-level visibility and reporting.</li></ul></ContentSection>
  </PublicPage>;
}