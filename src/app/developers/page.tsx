import { PublicPage, ContentSection } from "../components/public-page";

export default function DevelopersPage() {
  return <PublicPage eyebrow="DEVELOPER ECOSYSTEM" title="Built for responsible connection." description="AssetPass is designed to grow through clearly governed integrations and well-defined application boundaries. A public developer portal is part of the longer-term ecosystem, not a currently released service.">
    <ContentSection title="An integration-first direction"><p>The AssetPass architecture uses explicit APIs and domain ownership boundaries so applications can work together without duplicating authoritative records or bypassing security controls.</p><div className="inner-grid">
      <article className="inner-card"><h3>Clear domain ownership</h3><p>Integrations should use the service responsible for the relevant identity, asset, organization or Marketplace record.</p></article>
      <article className="inner-card"><h3>Controlled access</h3><p>Access must follow approved identity, permission and data-disclosure rules. Public identifiers are not authorization credentials.</p></article>
    </div></ContentSection>
    <ContentSection title="Developer portal status"><p>A public developer portal, self-service API credentials, public SDKs and external integration onboarding are not currently available. This page describes product direction only; it does not offer API access or imply that external integrations are enabled.</p></ContentSection>
  </PublicPage>;
}
