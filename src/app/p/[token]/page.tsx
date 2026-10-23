import Link from "next/link";

export const instant = false;

type PassportPageProps = {
  params: Promise<{ token: string }>;
};

export default async function PublicPassportPage({
  params,
}: PassportPageProps) {
  const { token } = await params;
  const validToken = /^[A-Za-z0-9._~-]{1,512}$/.test(token);

  return (
    <main className="public-tool-page">
      <header className="public-tool-header">
        <Link href="/" className="public-tool-brand" aria-label="AssetPass home">
          <span className="public-tool-brand-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none">
              <path
                d="M20 3.5 34 9v10.4c0 8.4-5.7 13.8-14 17.1C11.7 33.2 6 27.8 6 19.4V9l14-5.5Z"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              <path
                d="m13.5 20.2 4.2 4.1 9-9.2"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>AssetPass</span>
        </Link>
        <Link href="/scan" className="public-tool-home-link">
          Scan another asset
        </Link>
      </header>

      <section className="passport-content">
        <div className="passport-symbol" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none">
            <path
              d="M32 5 53 13v16c0 13-8.6 21.7-21 30C19.6 50.7 11 42 11 29V13l21-8Z"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinejoin="round"
            />
            <path
              d="m22 31 7 7 14-15"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="passport-eyebrow">PUBLIC ASSET PASSPORT</div>

        <h1>
          {validToken
            ? "Passport lookup is not connected yet"
            : "Invalid passport link"}
        </h1>

        <p className="passport-description">
          {validToken
            ? "The public passport page is in place, but asset records are not connected to the AssetPass backend yet. No asset details can be verified or displayed at this stage."
            : "The supplied passport token is not in a supported format. Check the QR code or link and try again."}
        </p>

        <div className="passport-status-card">
          <span className="passport-status-indicator" />
          <div>
            <strong>
              {validToken
                ? "Awaiting backend integration"
                : "Link could not be validated"}
            </strong>
            <p>
              {validToken
                ? "No asset record has been retrieved. This does not indicate whether the asset exists or is active."
                : "No asset information has been loaded."}
            </p>
          </div>
        </div>

        <div className="passport-actions">
          <Link href="/scan" className="scanner-primary-button">
            Return to scanner
          </Link>
          <Link href="/" className="passport-back-link">
            Visit AssetPass home
          </Link>
        </div>

        <p className="passport-privacy-note">
          AssetPass public pages are designed to disclose only approved asset
          information. Access to confidential asset and custody records must be
          enforced by the backend and requires appropriate authorisation.
        </p>
      </section>

      <footer className="public-tool-footer">
        <span>AssetPass · Secure Every Asset. Track Every Transition.</span>
        <span>© 2026 AssetPass</span>
      </footer>
    </main>
  );
}
