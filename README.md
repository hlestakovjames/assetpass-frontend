# AssetPass Public Website

**Repository:** `hlestakovjames/assetpass-frontend`  
**Application responsibility:** Public AssetPass website and public-facing discovery/identification entry points.  
**Implementation status:** Early public-web foundation; some experiences are illustrative or awaiting backend integration.

## Responsibility boundary

This repository owns the public-facing website experience:
- Public AssetPass homepage and product/platform information.
- Public organisation and solution information.
- How-it-works and security information.
- Public marketplace discovery presentation.
- QR scanning and public passport landing routes.
- Entry links to the authenticated AssetPass application.

It does not own authenticated workspace operations, platform administration, authoritative asset records, organisation permissions, marketplace transaction state or backend persistence. Those responsibilities belong to `assetpass-app` and `assetpass-backend` according to the documented domain boundaries.

## Current routes

| Route | Purpose | Current status |
|---|---|---|
| `/` | Public homepage | Implemented presentation |
| `/platform` | Public platform information | Presentation route |
| `/marketplace` | Public marketplace discovery | Presentation prototype; listing examples are illustrative/static |
| `/organizations` | Public organisation information | Presentation route |
| `/how-it-works` | Public product explanation | Presentation route |
| `/security` | Public security information | Presentation route |
| `/scan` | Browser QR scanner and manual token entry | Scanner interaction implemented |
| `/p/[token]` | Public asset passport | Route and token-format validation exist; backend passport lookup is not yet connected |

A route existing does not mean its underlying backend capability is implemented. The public passport page currently states that no asset record is retrieved.

## Technology

- Next.js 16.4.2
- React 19.3.0
- TypeScript 5
- Tailwind CSS 4
- `html5-qrcode` for browser QR scanning

## Local development

Requires Node.js 22 (align with the backend/app CI runtime) and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Available scripts:

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Integration rules

- Public data must come from approved public backend contracts.
- Never expose private asset fields, custodian information, exact private locations, evidence, internal notes or organisation-only records through public routes.
- Public marketplace discovery must consume the authoritative Marketplace domain; static examples must remain clearly labelled as illustrative.
- A public passport token is a lookup reference, not an authorization credential.
- Public routes must not require AI or workspace services to be available merely to render core website content.
- Sign-in and registration should link to the authenticated app rather than duplicating authentication state here.

## Development status and next alignment work

1. Add CI for dependency installation, lint and production build.
2. Replace starter README and keep route status accurate.
3. Define public API client and approved-public-data contracts before connecting marketplace or passport data.
4. Connect public passport lookup only after backend token resolution, disclosure policy and abuse controls are defined.
5. Reconcile public Marketplace deployment boundaries with the shared Marketplace domain and the authenticated app.
6. Add automated tests for token parsing, URL allow-listing and public/private disclosure.

## Source of truth

The expanded product and technical architecture, requirements, API boundaries and acceptance criteria are maintained in [assetpass-docs](https://github.com/hlestakovjames/assetpass-docs).
