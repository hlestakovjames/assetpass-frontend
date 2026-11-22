import { PublicPage, ContentSection } from "../components/public-page";

export default function SecurityPage() {
  return <PublicPage eyebrow="ACCOUNTABILITY BY DESIGN" title="Useful information. Appropriate access." description="AssetPass is designed around controlled access, organization data boundaries and responsible information disclosure throughout the asset lifecycle.">
    <ContentSection title="Access should follow responsibility">
      <p>AssetPass is designed to apply role and permission checks to organization information. A browser link or asset identifier alone should not grant access to private records. Authorization must be enforced by the relevant backend service.</p>
      <div className="inner-grid">
        <article className="inner-card"><h3>Role-aware access</h3><p>Operational access is intended to reflect defined roles, permissions and responsibilities.</p></article>
        <article className="inner-card"><h3>Organization data boundaries</h3><p>Organization information is designed to remain separated and accessible only through authorized server-side requests.</p></article>
        <article className="inner-card"><h3>Traceable activity</h3><p>Important actions and supported lifecycle transitions are designed to retain an accountable history.</p></article>
        <article className="inner-card"><h3>Privacy-conscious QR access</h3><p>Public passport views are designed to disclose approved asset information, not private custody, financial or operational records.</p></article>
      </div>
    </ContentSection>
    <ContentSection title="Public passport information">
      <p>The approved public passport information is limited to an asset's name, category, general status and general condition. Serial numbers, custodian identity, precise private location, financial details, evidence references, private notes, reviewer decisions and internal audit history are not public passport fields.</p>
      <p>These statements describe the approved design boundaries. They are not a certification or a claim that every planned control has been independently assessed. Public passport lookup is not connected until its backend disclosure controls are implemented and verified.</p>
    </ContentSection>
  </PublicPage>;
}
