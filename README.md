# AssetPass Public Website

**Repository:** hlestakovjames/assetpass-frontend  
**Application responsibility:** Public AssetPass website, product information, public QR/passport entry points and visitor guidance.  
**Marketplace boundary:** The Marketplace is a separate application. Public-site Marketplace navigation hands visitors to `https://assetpass-app.vercel.app/marketplace`; the public website does not host Marketplace application routes.  
**Implementation status:** Public presentation and QR scanning foundation; Marketplace listing data, passport lookup, Public AI Assistant, developer portal and contact/legal operations must not be described as live until verified and approved.

## Responsibility boundary

This repository owns the public-facing website experience:

- Public AssetPass homepage and Core/Marketplace product information.
- About, developer information, resources and support guidance.
- Public organisation and use-case information.
- How-it-works and approved security information.
- QR scanning and public passport landing routes.
- Entry links to the separate Marketplace and authenticated AssetPass application.
- Contact and legal information pages only when their content, owners and destinations are approved.

It does not own authenticated workspace operations, Marketplace listing or transaction state, authoritative asset records, organisation permissions or backend persistence. Those responsibilities belong to the separate applications and backend services.

## Public route map

| Route | Purpose | Status |
|---|---|---|
| / | Public homepage explaining Core and Marketplace | Redesigned presentation |
| /platform | Core asset-management information | Presentation route |
| /marketplace | Redirect to the separate Marketplace application | Application handoff |
| /organizations | Organization use cases | Presentation route |
| /how-it-works | Public product journey | Presentation route |
| /security | Approved public security information | Presentation route; claims must match verified controls |
| /about | AssetPass product overview and positioning | Public information page |
| /developers | Developer ecosystem information | Explains future developer portal; no public API access is claimed |
| /resources | Public guides and product resources | Curated links to available public pages |
| /support | Visitor guidance and existing support paths | Guidance page; no unsupported support channel is claimed |
| /contact | Contact information and enquiry destination | Pending approved contact channel |
| /legal | Legal notices and policy documents | Pending approved legal content and publication |
| /scan | Browser QR scanner and manual token entry | Scanner interaction implemented |
| /p/[token] | Public asset passport | Token-format validation exists; backend passport lookup is not connected |

A route existing does not mean its underlying backend capability is implemented. Contact and legal pages must not be published as operational destinations until approved contact details and legal documents are supplied.

## Marketplace application handoff

The Marketplace is a separate application. Public-site links and the legacy `/marketplace` route lead to its application entry point at `https://assetpass-app.vercel.app/marketplace`. The Marketplace route in the authenticated app is currently an application foundation; public listings, search, filters and listing details are not yet implemented there. The handoff must not be described as proof that live Marketplace discovery is available.

## Public AI Assistant boundary

The **Public AI Assistant is the only AI assistant intended for unauthenticated public website visitors**. Its interface and protected backend integration are not currently verified. Do not display a non-functional chat control as live.

It must use approved public content and public discovery APIs only. It must not access private workspaces, private asset records, evidence, custody identities, exact private locations, internal notes, reviewer decisions or internal intelligence capabilities.

## Public QR and privacy boundary

The approved public passport allowlist is asset name, category, general status and general condition. Serial numbers, custodian identity, precise location, financial information, private notes, internal maintenance/disposal details and audit history are not public fields. A passport token is a lookup reference, not an authorization credential.

## Technology and local development

- Next.js 16.4.6
- React 19
- TypeScript
- Tailwind CSS 4

Requires Node.js 22 and npm.

```bash
npm ci
npm run dev
npm run lint
npm run build
```

Open http://localhost:3000.

## Integration and content rules

- Login and registration hand off to the authenticated AssetPass application.
- Marketplace navigation hands off to the separate Marketplace application.
- Do not hard-code an unconfirmed custom production domain.
- Do not invent contact details, support channels, legal terms or privacy-policy wording.
- Contact and Legal pages require approved content and real destinations before publication.
- Do not claim public API access or developer integrations until the developer portal and API access policy are implemented.
- Static or illustrative content must be labelled accurately.
- Keep the public website usable if Marketplace, workspace or assistant services are unavailable.

## Source of truth

Product scope, public boundaries and application architecture are maintained in [assetpass-docs](https://github.com/hlestakovjames/assetpass-docs), especially [Public Website Architecture](https://github.com/hlestakovjames/assetpass-docs/blob/main/architecture/public-website-architecture.md) and [AssetPass Release 1 Redesign Brief](https://github.com/hlestakovjames/assetpass-docs/blob/main/ux/assetpass-release-1-frontend-redesign-brief.md).
