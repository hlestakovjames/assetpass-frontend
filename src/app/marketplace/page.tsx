import Link from "next/link";
import { PublicPage, ContentSection } from "../components/public-page";

const categories = [
  { icon: "▦", title: "IT & Electronics", detail: "Computers, printers, networking and office technology" },
  { icon: "⚙", title: "Industrial Equipment", detail: "Tools, machinery and operational equipment" },
  { icon: "▤", title: "Office & Furniture", detail: "Workstations, seating and office essentials" },
  { icon: "⌂", title: "Facilities & Property", detail: "Facility-related assets and infrastructure" },
];

const listings = [
  { category: "IT & ELECTRONICS", name: "Business-grade laptops", detail: "Refurbished · Multiple units", price: "Enquire for price", tag: "Technology" },
  { category: "OFFICE EQUIPMENT", name: "Office workstation sets", detail: "Pre-owned · Good condition", price: "Enquire for price", tag: "Furniture" },
  { category: "INDUSTRIAL", name: "Workshop equipment", detail: "Used · Inspection recommended", price: "Enquire for price", tag: "Equipment" },
];

export default function MarketplacePage() {
  return <PublicPage
    primaryHref="/marketplace#public-listings"
    primaryLabel="View discovery preview"
    secondaryHref="https://assetpass-app.vercel.app/register"
    secondaryLabel="Get started with AssetPass"
    eyebrow="THE ASSETPASS MARKETPLACE"
    title="A smarter way to discover and connect around assets."
    description="AssetPass Marketplace is designed for open discovery of eligible published assets and opportunities. Public browsing should not require an account; sign-in belongs at the point where a visitor chooses an action that requires an authenticated participant."
  >
    <section className="marketplace-intro">
      <div className="marketplace-intro-copy">
        <span className="marketplace-kicker">DISCOVER · CONNECT · EXPLORE</span>
        <h2>More than a listing directory.</h2>
        <p>AssetPass Marketplace is designed to bring asset owners, organizations and interested participants into one structured discovery experience. When published listings are connected, visitors can review approved information and decide on an appropriate next step.</p>
        <div className="marketplace-actions">
          <a href="#public-listings" className="home-primary-button">View discovery preview <span aria-hidden="true">↓</span></a>
          <a href="https://assetpass-app.vercel.app/register" className="marketplace-text-link">Get started with AssetPass</a>
        </div>
      </div>
      <div className="marketplace-visual" aria-label="Illustrative marketplace listing preview">
        <div className="marketplace-visual-top"><span><i></i> MARKETPLACE PREVIEW</span><span>ILLUSTRATIVE</span></div>
        <div className="marketplace-searchbar"><span>⌕</span> Search assets and opportunities <b>Filter</b></div>
        <div className="marketplace-preview-grid">
          <div className="marketplace-preview-card"><div className="marketplace-preview-art art-laptop"><span>▰</span></div><small>IT & ELECTRONICS</small><strong>Business laptops</strong><em>Enquire for price</em></div>
          <div className="marketplace-preview-card"><div className="marketplace-preview-art art-furniture"><span>▤</span></div><small>OFFICE EQUIPMENT</small><strong>Workstation sets</strong><em>Enquire for price</em></div>
        </div>
        <div className="marketplace-visual-foot"><span>Illustrative category discovery</span><span>AssetPass Marketplace</span></div>
      </div>
    </section>

    <ContentSection title="Explore by category">
      <p className="marketplace-section-lead">The Marketplace is designed to support discovery across different kinds of organizational and business assets.</p>
      <div className="marketplace-category-grid">{categories.map(item => <article className="marketplace-category" key={item.title}><span className="marketplace-category-icon">{item.icon}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><span className="marketplace-category-arrow">↗</span></article>)}</div>
    </ContentSection>

    <div id="public-listings" className="marketplace-public-discovery">
      <div className="marketplace-public-heading"><div><span className="marketplace-kicker">PUBLIC DISCOVERY · DESIGNED FOR OPEN ACCESS</span><h2>Find assets. Explore opportunities.</h2><p>The intended public experience allows visitors to explore eligible published listings and approved listing details before deciding whether to join AssetPass.</p></div><span className="marketplace-open-label">PUBLIC ACCESS</span></div>
      <div className="marketplace-public-search" aria-label="Illustrative public marketplace search preview"><span aria-hidden="true">⌕</span><span>Search by asset name, category or keyword</span><span className="marketplace-filter-label">Filter by category</span></div>
      <p className="marketplace-live-note">Live listing search, category filtering and inventory are not connected on this public website yet. The search bar and sample cards below are illustrative previews, not working search controls or live offers.</p>
    </div>

    <ContentSection title="Illustrative listing examples">
      <p className="marketplace-section-lead">These sample cards demonstrate how public listings could be presented. They are not available inventory. Actual listing pages must display only fields approved for public disclosure.</p>
      <div className="marketplace-listing-grid">{listings.map(item => <article className="marketplace-listing" key={item.name}><div className="marketplace-listing-art"><span>{item.tag === "Technology" ? "▰" : item.tag === "Furniture" ? "▤" : "⚙"}</span><small>EXAMPLE LISTING</small></div><div className="marketplace-listing-body"><small>{item.category}</small><h3>{item.name}</h3><p>{item.detail}</p><div className="marketplace-listing-bottom"><strong>{item.price}</strong><span>Illustrative</span></div></div></article>)}</div>
    </ContentSection>

    <ContentSection title="How the marketplace journey is intended to work">
      <div className="marketplace-journey">{[
        ["01", "Discover", "Explore eligible published listings and relevant categories when the public listing service is connected."],
        ["02", "Evaluate", "Review approved descriptions, condition information and public listing details."],
        ["03", "Connect", "Use the supported enquiry or offer process to contact the listing organization or owner."],
        ["04", "Proceed responsibly", "Any agreement, transaction or asset transfer must follow its own verified process."]
      ].map(([number,title,copy]) => <article className="marketplace-journey-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
    </ContentSection>

    <section className="marketplace-core-bridge">
      <div><span className="marketplace-kicker">CONNECTED TO ASSETPASS CORE</span><h2>Discovery outside. Accountability inside.</h2><p>The Marketplace complements AssetPass Core. Core is designed to support asset records and custody lifecycle activity; the Marketplace provides a separate discovery experience. A listing by itself does not change an asset&apos;s legal ownership, custody or status in an organization&apos;s records.</p><Link href="/platform" className="marketplace-bridge-link">Explore AssetPass Core <span aria-hidden="true">→</span></Link></div>
      <div className="marketplace-bridge-graphic"><div className="bridge-node"><span>▦</span><strong>Marketplace</strong><small>Discover & connect</small></div><div className="bridge-line"><i></i><span>Verified process</span><i></i></div><div className="bridge-node bridge-node-core"><span>◇</span><strong>AssetPass Core</strong><small>Records & custody</small></div></div>
    </section>

    <ContentSection title="Designed with trust and clarity in mind">
      <div className="marketplace-trust-grid">
        <article><span>01</span><h3>Clear listing information</h3><p>Show only approved public details so interested parties can understand what is being offered.</p></article>
        <article><span>02</span><h3>Separate asset records</h3><p>Marketplace listing activity remains distinct from internal custody and lifecycle records.</p></article>
        <article><span>03</span><h3>Responsible next steps</h3><p>Ownership and custody changes require their own appropriate verification and approval processes.</p></article>
      </div>
    </ContentSection>

    <section className="marketplace-final-cta"><span className="marketplace-kicker">BE PART OF THE ASSETPASS ECOSYSTEM</span><h2>Discover what&apos;s possible with connected assets.</h2><p>Create an account to get started with the AssetPass ecosystem.</p><a href="https://assetpass-app.vercel.app/register" className="home-primary-button">Get started with AssetPass <span aria-hidden="true">→</span></a></section>
    <p className="marketplace-release-note">This page is currently a presentation prototype. Public listing search, canonical listing details, seller publishing and transaction services are not connected here. Sample cards are illustrative only. Transaction execution, payment processing and escrow are not represented as available services.</p>
  </PublicPage>;
}
