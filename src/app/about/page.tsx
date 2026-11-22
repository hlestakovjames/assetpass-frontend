import { PublicPage, ContentSection } from "../components/public-page";

export default function AboutPage() {
  return <PublicPage eyebrow="ABOUT ASSETPASS" title="A connected ecosystem for the assets people rely on." description="AssetPass brings asset lifecycle management and Marketplace discovery together, helping people and organizations manage assets with greater visibility and accountability.">
    <ContentSection title="Our purpose"><p>Assets move through many hands, places and stages. AssetPass is designed to connect an asset's identity with the information, responsibility and lifecycle activity that help people manage it throughout that journey.</p></ContentSection>
    <ContentSection title="Two connected product experiences"><div className="inner-grid">
      <article className="inner-card"><h3>AssetPass Core</h3><p>Structured asset records, identification, custody and supported lifecycle activity for individuals and organizations.</p></article>
      <article className="inner-card"><h3>AssetPass Marketplace</h3><p>A separate application for discovering and circulating eligible assets through approved marketplace capabilities.</p></article>
    </div></ContentSection>
    <ContentSection title="The principles behind the product"><ul className="inner-list"><li>Clear responsibility for assets and important transitions.</li><li>Traceable records that support visibility and accountability.</li><li>Controlled access and privacy-conscious public information.</li><li>Distinct applications with clear responsibilities and boundaries.</li></ul></ContentSection>
  </PublicPage>;
}
