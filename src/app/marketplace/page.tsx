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
    primaryLabel="Browse public listings"
    secondaryHref="https://assetpass-app.vercel.app/register"
    secondaryLabel="List assets with AssetPass"
    eyebrow="THE ASSETPASS MARKETPLACE"
    title="A smarter way to discover and connect around assets."
    description="Discover assets listed by organizations and sellers, compare opportunities and explore what is available. The public marketplace is designed to be browsed without an AssetPass account—sign-in should only be requested when you choose an action that requires an account."
  >
    <section className="marketplace-intro">
      <div className="marketplace-intro-copy">
        <span className="marketplace-kicker">DISCOVER · CONNECT · EXPLORE</span>
        <h2>More than a listing directory.</h2>
        <p>AssetPass Marketplace is designed to bring asset owners, organizations and interested buyers into one structured discovery environment. Find relevant opportunities, review the information provided and take the next step with greater clarity.</p>
        <div className="marketplace-actions">
          <a href="#public-listings" className="home-primary-button">Explore public listings <span aria-hidden="true">↓</span></a>
          <a href="https://assetpass-app.vercel.app/register" className="marketplace-text-link">List or manage assets with AssetPass</a>
        </div>
      </div>
      <div className="marketplace-visual" aria-label="Illustrative marketplace listing preview">
        <div className="marketplace-visual-top"><span><i></i> MARKETPLACE PREVIEW</span><span>ILLUSTRATIVE</span></div>
        <div className="marketplace-searchbar"><span>⌕</span> Search assets and opportunities <b>Filter</b></div>
        <div className="marketplace-preview-grid">
          <div className="marketplace-preview-card"><div className="marketplace-preview-art art-laptop"><span>▰</span></div><small>IT & ELECTRONICS</small><strong>Business laptops</strong><em>Enquire for price</em></div>
          <div className="marketplace-preview-card"><div className="marketplace-preview-art art-furniture"><span>▤</span></div><small>OFFICE EQUIPMENT</small><strong>Workstation sets</strong><em>Enquire for price</em></div>
        </div>
        <div className="marketplace-visual-foot"><span>Discover opportunities across categories</span><span>AssetPass Marketplace</span></div>
      </div>
    </section>

    <ContentSection title="Explore by category">
      <p className="marketplace-section-lead">A marketplace structure that can support different kinds of organizational and business assets.</p>
      <div className="marketplace-category-grid">{categories.map(item => <article className="marketplace-category" key={item.title}><span className="marketplace-category-icon">{item.icon}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><span className="marketplace-category-arrow">↗</span></article>)}</div>
    </ContentSection>

    <div id="public-listings" className="marketplace-public-discovery">
      <div className="marketplace-public-heading"><div><span className="marketplace-kicker">PUBLIC DISCOVERY · NO LOGIN REQUIRED</span><h2>Find assets. Explore opportunities.</h2><p>Visitors should be able to search, browse categories and open public listing pages before deciding whether to join AssetPass.</p></div><span className="marketplace-open-label">OPEN TO EVERYONE</span></div>
      <div className="marketplace-public-search" aria-label="Illustrative public marketplace search"><span aria-hidden="true">⌕</span><span>Search by asset name, category or keyword</span><span className="marketplace-filter-label">Filter by category</span></div>
      <p className="marketplace-live-note">Public listing search and live inventory will be connected when the marketplace listing service is integrated. The examples below demonstrate the intended discovery experience; they are not live offers.</p>
    </div>

    <ContentSection title="Examples of assets visitors could discover">
      <p className="marketplace-section-lead">These sample cards illustrate how publicly visible listings can advertise available assets. Actual listings will display only information approved for public viewing.</p>
      <div className="marketplace-listing-grid">{listings.map(item => <article className="marketplace-listing" key={item.name}><div className="marketplace-listing-art"><span>{item.tag === "Technology" ? "▰" : item.tag === "Furniture" ? "▤" : "⚙"}</span><small>EXAMPLE LISTING</small></div><div className="marketplace-listing-body"><small>{item.category}</small><h3>{item.name}</h3><p>{item.detail}</p><div className="marketplace-listing-bottom"><strong>{item.price}</strong><span>Illustrative</span></div></div></article>)}</div>
    </ContentSection>

    <ContentSection title="How the marketplace journey works">
      <div className="marketplace-journey">{[
        ["01", "Discover", "Browse asset opportunities and explore relevant categories."],
        ["02", "Evaluate", "Review available descriptions, condition information and listing details."],
        ["03", "Connect", "Express interest and connect with the listing organization or owner."],
        ["04", "Proceed responsibly", "Any resulting agreement and formal transaction must follow the applicable verified process."]
      ].map(([number,title,copy]) => <article className="marketplace-journey-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
    </ContentSection>

    <section className="marketplace-core-bridge">
      <div><span className="marketplace-kicker">CONNECTED TO ASSETPASS CORE</span><h2>Discovery outside. Accountability inside.</h2><p>The Marketplace complements AssetPass Core. Core supports an organization's asset records and custody lifecycle; the Marketplace provides a separate space to discover and explore opportunities. A listing by itself does not change an asset's ownership, custody or status in an organization's records.</p><Link href="/platform" className="marketplace-bridge-link">Explore AssetPass Core <span aria-hidden="true">→</span></Link></div>
      <div className="marketplace-bridge-graphic"><div className="bridge-node"><span>▦</span><strong>Marketplace</strong><small>Discover & connect</small></div><div className="bridge-line"><i></i><span>Verified process</span><i></i></div><div className="bridge-node bridge-node-core"><span>◇</span><strong>AssetPass Core</strong><small>Records & custody</small></div></div>
    </section>

    <ContentSection title="Designed with trust and clarity in mind">
      <div className="marketplace-trust-grid">
        <article><span>01</span><h3>Clear listing information</h3><p>Help interested parties understand what is being offered and what details are available.</p></article>
        <article><span>02</span><h3>Separate asset records</h3><p>Marketplace activity remains distinct from internal custody and lifecycle records.</p></article>
        <article><span>03</span><h3>Responsible next steps</h3><p>Ownership and custody changes require their own appropriate verification and approval processes.</p></article>
      </div>
    </ContentSection>

    <section className="marketplace-final-cta"><span className="marketplace-kicker">BE PART OF THE ASSETPASS ECOSYSTEM</span><h2>Discover what's possible with connected assets.</h2><p>Create an account to get started with the AssetPass ecosystem.</p><a href="https://assetpass-app.vercel.app/register" className="home-primary-button">Get started with AssetPass <span aria-hidden="true">→</span></a></section>
    <p className="marketplace-release-note">Public browsing is the intended marketplace experience and should not require login. Live listing search, listing detail pages and seller publishing depend on the marketplace backend and are not yet connected on this public website. Transaction execution, payment processing and escrow are not represented as available services.</p>
  </PublicPage>;
}