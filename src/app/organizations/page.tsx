import { PublicPage, ContentSection } from "../components/public-page";

export default function OrganizationsPage() {
  return <PublicPage eyebrow="FOR ORGANIZATIONS" title="Bring asset accountability into everyday operations." description="AssetPass is designed to help teams build a shared understanding of what exists, where responsibility sits and what has changed across the organization's assets.">
    <ContentSection title="A shared operational view">
      <p>Whether managing equipment, facilities or other organizational resources, teams need consistent records and clear responsibility. AssetPass is designed to bring asset information and supported lifecycle activity into one structured environment.</p>
      <div className="inner-grid">
        <article className="inner-card"><h3>Know what you have</h3><p>Organize asset records and their digital identities.</p></article>
        <article className="inner-card"><h3>Clarify responsibility</h3><p>Connect assets to accountable users or departments through controlled custody workflows.</p></article>
        <article className="inner-card"><h3>Understand what changed</h3><p>Maintain a traceable history of supported asset events and transitions.</p></article>
        <article className="inner-card"><h3>Support oversight</h3><p>Make asset information easier to review across authorized operational roles.</p></article>
      </div>
    </ContentSection>
    <ContentSection title="Designed for organizational teams">
      <p>AssetPass is intended to support participation by asset managers, department managers, technicians, asset custodians and auditors, with access governed by role and authorization. Available workflows depend on the capabilities released in the application.</p>
      <a href="https://assetpass-app.vercel.app/register" className="home-primary-button">Start organization onboarding <span aria-hidden="true">→</span></a>
    </ContentSection>
  </PublicPage>;
}
