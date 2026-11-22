import { PublicPage, ContentSection } from "../components/public-page";

const phone = "+254728812649";

export default function ContactPage() {
  return <PublicPage eyebrow="CONTACT ASSETPASS" title="Talk to the AssetPass team." description="Reach AssetPass by phone, WhatsApp or email. Choose the channel that works best for your enquiry.">
    <ContentSection title="Contact channels"><div className="inner-grid">
      <article className="inner-card"><h3>Call us</h3><p>Speak to us by phone during our available hours.</p><a className="release-inline-link" href={`tel:${phone}`}>Call +254 728 812 649 →</a></article>
      <article className="inner-card"><h3>WhatsApp</h3><p>Send a message to AssetPass on WhatsApp.</p><a className="release-inline-link" href="https://wa.me/254728812649" target="_blank" rel="noreferrer">Message us on WhatsApp →</a></article>
      <article className="inner-card"><h3>Email</h3><p>For general enquiries, send us an email.</p><a className="release-inline-link" href="mailto:assetpass.global@gmail.com">assetpass.global@gmail.com →</a></article>
    </div></ContentSection>
    <ContentSection title="What to include"><p>To help us direct your enquiry, briefly describe what you need assistance with. Please do not send passwords, authentication codes, sensitive personal information or confidential asset records through public contact channels.</p></ContentSection>
  </PublicPage>;
}
