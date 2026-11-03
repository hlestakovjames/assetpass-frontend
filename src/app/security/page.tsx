import { PublicPage, ContentSection } from "../components/public-page";

export default function SecurityPage() {
  return <PublicPage eyebrow="ACCOUNTABILITY BY DESIGN" title="Useful information. Appropriate access." description="AssetPass is designed around controlled access, tenant boundaries and responsible information disclosure throughout the asset lifecycle.">
    <ContentSection title="Access should follow responsibility"><p>Operational information should be available to the people who need it for their authorized responsibilities. Access to organization data is governed by roles and permissions, not by identifiers supplied by a browser or link.</p><div className="inner-grid">
      <article className="inner-card"><h3>Role-aware access</h3><p>Different operational responsibilities are supported through defined roles and permissions.</p></article>
      <article className="inner-card"><h3>Organization data boundaries</h3><p>Organization information is intended to remain separated and protected by server-enforced authorization.</p></article>
      <article className="inner-card"><h3>Traceable activity</h3><p>Important actions and lifecycle transitions are designed to retain an accountable history.</p></article>
      <article className="inner-card"><h3>Privacy-conscious QR access</h3><p>Public passport views are limited to approved asset information rather than private custody, financial or operational records.</p></article>
    </div></ContentSection>
    <ContentSection title="Public passport information"><p>Public QR experiences are intended to disclose only an asset's approved name, category, general status and general condition. Serial numbers, custodian identity, precise location, financial details, private notes and internal audit history are not public passport fields.</p></ContentSection>
  </PublicPage>;
}