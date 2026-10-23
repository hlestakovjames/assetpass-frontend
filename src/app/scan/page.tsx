"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Html5Qrcode as Html5QrcodeType } from "html5-qrcode";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ScanPage() {
  const router = useRouter();
  const scannerRef = useRef<Html5QrcodeType | null>(null);
  const startingRef = useRef(false);

  const [cameraActive, setCameraActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [manualValue, setManualValue] = useState("");
  const [error, setError] = useState("");

  const stopScanner = useCallback(async () => {
    const scanner = scannerRef.current;
    scannerRef.current = null;

    if (scanner) {
      try {
        if (scanner.isScanning) await scanner.stop();
      } catch {
        // The camera may already have stopped.
      }

      try {
        scanner.clear();
      } catch {
        // The scanner may already be cleared.
      }
    }

    setCameraActive(false);
    startingRef.current = false;
  }, []);

  const openPassport = useCallback(
    (rawValue: string) => {
      const value = rawValue.trim();

      if (!value) {
        setError("Enter a QR code value or passport link first.");
        return;
      }

      let token = value;

      try {
        if (value.startsWith("/") && !value.startsWith("//")) {
          const parsed = new URL(value, window.location.origin);

          if (!parsed.pathname.startsWith("/p/")) {
            setError("This link is not an AssetPass passport link.");
            return;
          }

          token = parsed.pathname.slice(3).split("/")[0];
        } else if (/^https?:\/\//i.test(value)) {
          const parsed = new URL(value);
          const host = parsed.hostname.toLowerCase();
          const allowedHosts = [
            "assetpass.com",
            "www.assetpass.com",
            window.location.hostname.toLowerCase(),
          ];

          if (!allowedHosts.includes(host)) {
            setError("This QR code links to an unrecognised website.");
            return;
          }

          if (!parsed.pathname.startsWith("/p/")) {
            setError("This link is not an AssetPass passport link.");
            return;
          }

          token = parsed.pathname.slice(3).split("/")[0];
        } else if (value.includes("/") || value.includes("\\")) {
          setError("Enter a valid AssetPass passport link or token.");
          return;
        }
      } catch {
        setError("That QR code or link is not valid.");
        return;
      }

      try {
        token = decodeURIComponent(token);
      } catch {
        setError("The passport token is malformed.");
        return;
      }

      if (!/^[A-Za-z0-9._~-]{1,512}$/.test(token)) {
        setError("The passport token contains unsupported characters.");
        return;
      }

      setError("");
      void stopScanner();
      router.push(`/p/${encodeURIComponent(token)}`);
    },
    [router, stopScanner],
  );

  const startScanner = async () => {
    if (startingRef.current || scannerRef.current) return;

    startingRef.current = true;
    setLoading(true);
    setError("");

    try {
      const { Html5Qrcode } = await import("html5-qrcode");
      const scanner = new Html5Qrcode("assetpass-qr-reader");
      scannerRef.current = scanner;

      await scanner.start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: { width: 220, height: 220 },
          aspectRatio: 1,
        },
        (decodedText) => openPassport(decodedText),
        () => {
          // Ignore frames without a readable QR code.
        },
      );

      setCameraActive(true);
    } catch {
      scannerRef.current = null;
      setCameraActive(false);
      setError(
        "Camera access failed. Allow camera permission and use HTTPS or localhost, or enter the QR value manually.",
      );
    } finally {
      startingRef.current = false;
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      const scanner = scannerRef.current;
      scannerRef.current = null;

      if (scanner) {
        void (async () => {
          try {
            if (scanner.isScanning) await scanner.stop();
          } catch {
            // Ignore cleanup errors when leaving the page.
          }

          try {
            scanner.clear();
          } catch {
            // Ignore cleanup errors.
          }
        })();
      }
    };
  }, []);

  return (
    <main className="public-tool-page scan-page">
      <header className="public-tool-header scan-header">
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
          <span className="scan-brand-copy">
            <span>AssetPass</span>
            <small>ASSET IDENTIFICATION</small>
          </span>
        </Link>

        <div className="scan-header-right">
          <span className="scan-public-label">
            <span />
            Public access
          </span>
          <Link href="/" className="public-tool-home-link">
            Home
          </Link>
        </div>
      </header>

      <section className="scan-workspace">
        <div className="scan-heading">
          <div className="scanner-eyebrow">
            <span className="scanner-eyebrow-dot" />
            ASSET LOOKUP
          </div>
          <h1>Find an asset</h1>
          <p>Scan an asset&apos;s QR code or enter its passport link.</p>
        </div>

        <div className="scan-options-grid">
          <section className="scan-option-card" aria-labelledby="scan-camera-title">
            <div className="scan-option-heading">
              <span className="scan-option-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 8h3v3H8zM15 8h1v1h-1zM14 14h3v3h-3zM8 14h2v3H8z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h2 id="scan-camera-title">Scan QR code</h2>
                <p>Use your device camera</p>
              </div>
            </div>

            <div className="scan-camera-stage">
              <div id="assetpass-qr-reader" className="scanner-reader" />

              {!cameraActive && (
                <div className="scan-camera-placeholder">
                  <div className="scan-qr-illustration" aria-hidden="true">
                    <svg viewBox="0 0 72 72" fill="none">
                      <rect
                        x="8"
                        y="8"
                        width="20"
                        height="20"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <rect
                        x="44"
                        y="8"
                        width="20"
                        height="20"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <rect
                        x="8"
                        y="44"
                        width="20"
                        height="20"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <path
                        d="M45 45h8v8h-8zM57 57h7v7h-7zM57 43v5M44 58h5M53 17h-5M17 49v7"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <strong>Ready to scan</strong>
                  <span>Your camera preview appears here.</span>
                </div>
              )}
            </div>

            <p className="scan-camera-hint">
              Position the QR code inside the camera view and keep your device
              steady.
            </p>

            <div className="scan-camera-actions">
              {!cameraActive ? (
                <button
                  type="button"
                  className="scanner-primary-button scan-action-button"
                  onClick={startScanner}
                  disabled={loading}
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 8V5h4M16 5h4v4M20 16v3h-4M8 19H4v-4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <rect
                      x="8"
                      y="8"
                      width="8"
                      height="8"
                      rx="1.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                  </svg>
                  {loading ? "Starting camera…" : "Open camera"}
                </button>
              ) : (
                <button
                  type="button"
                  className="scanner-secondary-button scan-action-button"
                  onClick={() => void stopScanner()}
                >
                  Stop camera
                </button>
              )}
            </div>
          </section>

          <section
            className="scan-option-card scan-manual-card"
            aria-labelledby="scan-manual-title"
          >
            <div className="scan-option-heading">
              <span className="scan-option-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M7 9h.01M10 9h.01M13 9h.01M16 9h.01M7 12h.01M10 12h.01M13 12h.01M16 12h.01M8 15h8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div>
                <h2 id="scan-manual-title">Enter manually</h2>
                <p>Have a passport link or token?</p>
              </div>
            </div>

            <div className="scan-manual-content">
              <div className="scan-manual-instructions">
                <span className="scan-step-number">01</span>
                <div>
                  <strong>Enter the passport details</strong>
                  <p>
                    Paste the link encoded in the QR code, or enter its token
                    directly.
                  </p>
                </div>
              </div>

              <form
                className="scanner-manual-form scan-manual-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  openPassport(manualValue);
                }}
              >
                <label htmlFor="assetpass-manual-code">
                  Passport link or token
                </label>
                <input
                  id="assetpass-manual-code"
                  type="text"
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="Paste link or enter token"
                  value={manualValue}
                  onChange={(event) => setManualValue(event.target.value)}
                />
                <button type="submit" className="scanner-primary-button scan-action-button">
                  Open passport
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12h14m-6-6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>

              <div className="scan-manual-footnote">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M12 11v5m0-8h.01"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                <span>No camera access needed for manual entry.</span>
              </div>
            </div>
          </section>
        </div>

        {error && (
          <div className="scanner-error scan-page-error" role="alert">
            <span aria-hidden="true">!</span>
            {error}
          </div>
        )}

        <aside className="scan-privacy-strip">
          <span className="scan-privacy-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3 20 6v5.5c0 4.6-3.2 7.6-8 9.5-4.8-1.9-8-4.9-8-9.5V6l8-3Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path
                d="m8.5 12 2.3 2.3 4.7-4.8"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>
            <strong>Your privacy matters</strong>
            <p>
              Public passports are intended to show only approved asset
              information. Restricted custody and operational records require
              authorised access.
            </p>
          </div>
        </aside>
      </section>

      <footer className="public-tool-footer scan-footer">
        <span>AssetPass · Secure Every Asset. Track Every Transition.</span>
        <span>© 2026 AssetPass</span>
      </footer>
    </main>
  );
}
