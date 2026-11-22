import Link from "next/link";
import { PublicPage, ContentSection } from "../components/public-page";

export default function ResourcesPage() {
  return <PublicPage eyebrow="ASSETPASS RESOURCES" title="Understand the product and how to get started." description="Explore the public guides and product information currently available on the AssetPass website.">
    <ContentSection title="Explore AssetPass"><div className="inner-grid">
      <article className="inner-card"><h3>AssetPass Core</h3><p>Learn about structured asset records, digital identity, custody and lifecycle management.</p><Link href="/platform" className="release-inline-link">Explore the platform →</Link></article>
      <article className="inner-card"><h3>How it works</h3><p>Follow the asset journey from registration and identification through ongoing management.</p><Link href="/how-it-works" className="release-inline-link">Read the product journey →</Link></article>
      <article className="inner-card"><h3>For organizations</h3><p>Understand how AssetPass is intended to support organizational asset accountability.</p><Link href="/organizations" className="release-inline-link">Organization overview →</Link></article>
      <article className="inner-card"><h3>Security and privacy</h3><p>Read about public information boundaries, QR passport disclosure and responsible access.</p><Link href="/security" className="release-inline-link">Read security information →</Link></article>
    </div></ContentSection>
    <ContentSection title="More resources"><p>Technical documentation, developer guides, downloadable materials and training resources will be added when approved for public distribution. Internal architecture and implementation documents are not presented as public user documentation.</p></ContentSection>
  </PublicPage>;
}
