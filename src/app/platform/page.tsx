import { PublicPage, ContentSection } from "../components/public-page";

export default function PlatformPage() {
  return <PublicPage eyebrow="ASSETPASS CORE" title="A clearer view of the asset lifecycle." description="AssetPass Core is designed to support organizations with structured asset records, accountable custody, connected inspections and traceable lifecycle activity.">
    <ContentSection title="One reliable record for every asset">
      <p>AssetPass Core is designed to help organizations establish a consistent view of the assets they own or manage, who is responsible for them, and what happens throughout their lifecycle.</p>
      <div className="inner-grid">
        <article className="inner-card"><h3>Asset registration</h3><p>Structured asset records and digital identities that can be referenced throughout the supported lifecycle.</p></article>
        <article className="inner-card"><h3>Custody and transfers</h3><p>Workflows for recording responsibility and retaining a traceable history of handovers and acknowledged transfers.</p></article>
        <article className="inner-card"><h3>Inspections and maintenance</h3><p>Condition checks and maintenance activity connected to the asset record where those workflows are available.</p></article>
        <article className="inner-card"><h3>Lifecycle governance</h3><p>Controlled processes for asset changes, retirement, disposal and lifecycle history.</p></article>
      </div>
    </ContentSection>
    <ContentSection title="Built around accountability">
      <p>The capabilities below describe the Core product direction; availability depends on the functionality released in the authenticated application.</p>
      <ul className="inner-list">
        <li>Role-aware access to operational information.</li>
        <li>Traceable custody and lifecycle transitions.</li>
        <li>QR-enabled digital asset passports.</li>
        <li>Organization-level visibility and reporting.</li>
      </ul>
    </ContentSection>
  </PublicPage>;
}
