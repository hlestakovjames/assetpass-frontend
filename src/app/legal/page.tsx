import { PublicPage, ContentSection } from "../components/public-page";

export default function LegalPage() {
  return <PublicPage eyebrow="LEGAL INFORMATION" title="The principles that guide responsible use." description="This page provides a starting set of public terms and privacy information for AssetPass. It should be read together with any notices presented in the applications when you use specific services.">
    <ContentSection title="Terms of use"><p><strong>Last updated: 22 November 2026</strong></p>
      <p>By accessing the AssetPass public website, you agree to use it lawfully and responsibly. These terms apply to this public website. Separate terms, notices or agreements may apply to the authenticated AssetPass application and the Marketplace.</p>
      <ul className="inner-list">
        <li>Use the website only for lawful purposes and do not attempt to disrupt, probe, compromise or gain unauthorized access to the website, its services or another person's account or information.</li>
        <li>Do not misuse QR codes, passport links or public information to access information that is not intended for you. A public asset identifier is not an authorization credential.</li>
        <li>Product descriptions on this website explain the intended experience. Features that are described as planned, illustrative or not yet available are not promises that those features are currently operational.</li>
        <li>Do not copy, modify, distribute or use AssetPass branding or website materials in a way that infringes applicable rights or misrepresents your relationship with AssetPass.</li>
        <li>We may update, suspend or change website content and availability as the product evolves. We aim to keep information accurate but do not warrant uninterrupted availability or that every description will always reflect a later application release.</li>
      </ul>
      <p>Nothing on this public website, including a Marketplace listing or public asset passport, by itself establishes legal ownership, transfers custody, creates a sale agreement or guarantees the condition, authenticity or availability of an asset.</p>
    </ContentSection>
    <ContentSection title="Privacy notice"><p>AssetPass respects privacy and aims to handle personal information responsibly. This notice describes the general approach for this public website; additional notices may apply when you register, sign in or use a separate application.</p>
      <ul className="inner-list">
        <li><strong>Information you provide:</strong> If you contact us by phone, WhatsApp or email, you choose what information to include in that communication. The relevant communications provider may also process information under its own terms and privacy notice.</li>
        <li><strong>Website and technical information:</strong> Hosting, security and website operations may involve technical information such as request data, device/browser details and diagnostic logs. The precise information depends on the services and configuration in use.</li>
        <li><strong>How information is used:</strong> Information may be used to respond to enquiries, operate and secure the website, diagnose faults, prevent abuse and meet applicable legal obligations.</li>
        <li><strong>Sharing:</strong> Information may be processed by service providers supporting website hosting, communications or security, or disclosed where required by law. We do not describe contact-channel providers as part of AssetPass or control their independent processing.</li>
        <li><strong>Retention and security:</strong> Information should be retained only as needed for the relevant purpose or legal requirement and protected with safeguards appropriate to its nature. No internet transmission or storage method can be guaranteed completely secure.</li>
        <li><strong>Your choices and rights:</strong> Depending on applicable law, you may have rights to request access, correction, deletion, restriction or other action concerning personal information. Requests can be sent to the contact email below; we may need to verify your identity before acting.</li>
      </ul>
      <p>AssetPass is intended to operate in accordance with applicable privacy and data-protection requirements, including Kenya's Data Protection Act, 2019 where applicable. The specific lawful basis, processing purposes, retention periods, data-controller details and any cross-border processing must be confirmed against the actual services and operating arrangements.</p>
    </ContentSection>
    <ContentSection title="Public asset information"><p>Public asset passport information is intended to be limited to approved fields such as asset name, category, general status and general condition. Private serial numbers, custodian identity, precise location, financial information, private notes and internal audit history are not intended for public display. A QR code or passport token should not be treated as permission to access private information.</p></ContentSection>
    <ContentSection title="Contact about these terms or privacy"><p>For questions or privacy requests, contact AssetPass at <a href="mailto:assetpass.global@gmail.com">assetpass.global@gmail.com</a> or call <a href="tel:+254728812649">+254 728 812 649</a>.</p></ContentSection>
    <ContentSection title="Important publication note"><p>This is a general publication draft, not legal advice. Before treating it as a final binding policy, AssetPass should have it reviewed and completed with its legal operating entity, registered address, confirmed data-controller identity, processing purposes and lawful bases, retention schedule, data-subject request procedure, complaint/escalation details, applicable governing law and any required regulator information. The public website should be updated if actual data practices differ from this notice.</p></ContentSection>
  </PublicPage>;
}
