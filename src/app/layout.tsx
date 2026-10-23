import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AssetPass | Secure Every Asset",
    template: "%s | AssetPass",
  },
  description:
    "AssetPass helps organizations identify assets, manage custody, track condition and maintain visibility throughout the asset lifecycle.",
  applicationName: "AssetPass",
  keywords: [
    "asset management",
    "asset lifecycle management",
    "asset custody",
    "QR asset tracking",
    "digital asset passport",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
