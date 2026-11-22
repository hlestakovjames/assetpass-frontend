import Link from "next/link";
import { PublicPage, ContentSection } from "../components/public-page";

export default function SupportPage() {
  return <PublicPage eyebrow="SUPPORT & GUIDANCE" title="Find the right place to get help." description="Use the available public guidance to understand AssetPass, navigate the website and reach the appropriate application.">
    <ContentSection title="Common starting points"><div className="inner-grid">
      <article className="inner-card"><h3>Getting to know AssetPass</h3><p>Start with the product overview and learn how Core and Marketplace fit together.</p><Link href="/about" className="release-inline-link">About AssetPass →</Link></article>
      <article className="inner-card"><h3>Using QR scanning</h3><p>Open the public scanner to scan an AssetPass QR code or enter a passport link.</p><Link href="/scan" className="release-inline-link">Open QR scanner →</Link></article>
      <article className="inner-card"><h3>Security and public passports</h3><p>Understand which information is intended to be visible in a public passport.</p><Link href="/security" className="release-inline-link">Security information →</Link></article>
      <article className="inner-card"><h3>Account access</h3><p>Existing users can continue to the authenticated AssetPass application.</p><a href="https://assetpass-app.vercel.app" className="release-inline-link">Open AssetPass login →</a></article>
    </div></ContentSection>
    <ContentSection title="Support channel availability"><p>A dedicated public support portal, ticketing workflow and published support contact channel are not currently verified. This page provides navigation guidance only and does not imply that a staffed support service or response-time commitment is available.</p></ContentSection>
  </PublicPage>;
}
