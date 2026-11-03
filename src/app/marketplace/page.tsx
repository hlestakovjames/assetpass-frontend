import { PublicPage, ContentSection } from "../components/public-page";

export default function MarketplacePage() {
  return <PublicPage eyebrow="CONNECTED MARKETPLACE" title="Discover assets. Create connections." description="A dedicated marketplace experience designed to connect organizations and people with asset-related opportunities through a more structured digital environment.">
    <ContentSection title="A connected discovery experience"><p>AssetPass Marketplace extends the asset ecosystem beyond internal management. It is intended to make relevant asset opportunities easier to discover and explore while keeping marketplace activity distinct from an organization's asset custody records.</p><div className="inner-grid">
      <article className="inner-card"><h3>Discover listings</h3><p>Explore assets and opportunities presented through the marketplace.</p></article>
      <article className="inner-card"><h3>Connect interested parties</h3><p>Create a structured starting point for conversations around listed assets.</p></article>
      <article className="inner-card"><h3>Review asset information</h3><p>Understand the information made available for a listing before taking the next step.</p></article>
      <article className="inner-card"><h3>Keep records distinct</h3><p>A marketplace listing alone does not transfer ownership or change asset custody.</p></article>
    </div></ContentSection>
    <ContentSection title="Release 1 availability"><p>Marketplace capabilities will be presented according to what is actually released in the application. Transaction, payment and escrow workflows are not represented here as live services.</p></ContentSection>
  </PublicPage>;
}