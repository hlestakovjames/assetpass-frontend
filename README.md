# AssetPass Public Website

**Repository:** hlestakovjames/assetpass-frontend  
**Application responsibility:** Public AssetPass website, public Marketplace discovery presentation, QR/passport entry points and public visitor assistance.  
**Implementation status:** Public presentation and QR scanning foundation; Marketplace listing data, passport lookup and the Public AI Assistant are tracked separately and must not be described as live until verified.

## Responsibility boundary

This repository owns the public-facing website experience:

- Public AssetPass homepage and Core/Marketplace product information.
- Public organisation and use-case information.
- How-it-works and approved security information.
- Public Marketplace discovery presentation.
- QR scanning and public passport landing routes.
- Entry links to the authenticated AssetPass application.
- The public-facing AI Assistant interface when its approved integration is implemented.

It does not own authenticated workspace operations, platform administration, authoritative asset records, organisation permissions, Marketplace transaction state or backend persistence. Those responsibilities belong to assetpass-app and assetpass-backend according to the documented domain boundaries.

## Public AI Assistant boundary

The **Public AI Assistant is the only AI assistant exposed to unauthenticated public website visitors**.

Its permitted public role is to answer questions using approved public AssetPass content and explicitly public discovery services, explain the public Core and Marketplace experiences, help visitors navigate the website and direct them to registration, login or support journeys.

It must not:

- Access private individual or organisation workspaces or private asset records.
- Reveal evidence, custody identities, exact private locations, internal notes, reviewer decisions or non-public organisation data.
- Expose internal intelligence findings, specialist intelligence domains, internal assistant interfaces, platform configuration, security details, prompts or model configuration.
- Claim that illustrative, planned or unverified capabilities are live.
- Perform account administration, approve applications, verify legal ownership, change permissions or execute consequential actions.

The public website must remain usable if the assistant service is unavailable. The assistant must use a protected server-side integration; model-provider secrets must never be placed in browser code.

**Implementation status:** The reviewed public website main source does not currently contain a verified, working Public AI Assistant interface or backend integration. Treat the assistant as an architectural/product requirement until its implementation, API contract, privacy controls, abuse protections and tests are present and verified. Do not display a non-functional chat control as if it were live.

Internal assistants belong to their authenticated application contexts and are not exposed through this public website.

## Current routes

| Route | Purpose | Current status |
|---|---|---|
| / | Public homepage | Implemented presentation |
| /platform | Public Core asset-management information | Presentation route |
| /marketplace | Public Marketplace discovery | Presentation prototype; listing examples are illustrative/static |
| /organizations | Public organisation information | Presentation route |
| /how-it-works | Public product explanation | Presentation route |
| /security | Public security information | Presentation route; statements must match verified controls |
| /scan | Browser QR scanner and manual token entry | Scanner interaction implemented |
| /p/[token] | Public asset passport | Route and token-format validation exist; backend passport lookup is not connected |

A route existing does not mean its underlying backend capability is implemented. The public passport page currently states that no asset record is retrieved.

## Release 1 public scope

The public website communicates two connected product pillars:

1. **AssetPass Core:** structured asset records, identification, custody/accountability and supported lifecycle activity.
2. **AssetPass Marketplace:** public discovery and controlled circulation of eligible assets through capabilities actually released.

Do not create public Intelligence product pages or disclose internal intelligence architecture. The Public AI Assistant is the only visitor-facing AI interface and must remain limited to approved public information.

## Technology

- Next.js 16.4.2
- React 19.3.0
- TypeScript 5
- Tailwind CSS 4
- html5-qrcode for browser QR scanning

## Local development

Requires Node.js 22 (align with the backend/app CI runtime) and npm.

~~~bash
npm ci
npm run dev
~~~

Open [http://localhost:3000](http://localhost:3000).

Available scripts:

~~~bash
npm run dev
npm run lint
npm run build
npm run start
~~~

## Integration rules

- Public data must come from approved public backend contracts.
- Never expose private asset fields, custodian information, exact private locations, evidence, internal notes or organisation-only records through public routes.
- Public Marketplace discovery must consume the authoritative Marketplace domain; static examples must remain clearly labelled as illustrative.
- A public passport token is a lookup reference, not an authorization credential.
- Public passport responses must enforce the approved four-field allowlist: asset name, category, general status and general condition.
- Public routes must not require AI or workspace services to be available merely to render core website content.
- The Public AI Assistant may use only approved public content and public discovery APIs.
- Sign-in and registration should link to the authenticated app rather than duplicating authentication state here.
- Do not hard-code an unconfirmed custom production domain; use verified deployment URLs and environment-specific configuration.

## Development status and next alignment work

1. Add/maintain CI for dependency installation, lint and production build.
2. Define the public API client and approved-public-data contracts before connecting Marketplace or passport data.
3. Connect public passport lookup only after backend token resolution, disclosure policy and abuse controls are defined.
4. Implement the Public AI Assistant only after its backend API contract, approved knowledge sources, safety/abuse controls, privacy behavior and tests are agreed.
5. Reconcile public Marketplace deployment boundaries with the shared Marketplace domain and the authenticated app.
6. Add automated tests for token parsing, URL allow-listing, public/private disclosure and assistant source restrictions.

## Documentation and README maintenance

Every public website implementation change must update this README in the same pull request when it changes routes, capabilities, setup, environment variables, integration contracts or known limitations. Update the corresponding architecture/API/acceptance documentation in assetpass-docs as part of the same coordinated delivery.

Track planned, in-development, implemented, tested, deployed and enabled as separate states. A mockup, route or README entry is not evidence of a working capability.

## Source of truth

The architecture, product scope, requirements, API boundaries and acceptance criteria are maintained in [assetpass-docs](https://github.com/hlestakovjames/assetpass-docs), especially [Public Website Architecture](https://github.com/hlestakovjames/assetpass-docs/blob/main/architecture/public-website-architecture.md).
