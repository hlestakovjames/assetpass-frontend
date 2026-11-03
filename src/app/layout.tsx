import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AssetPass | Asset Management & Marketplace",
    template: "%s | AssetPass",
  },
  description:
    "AssetPass connects organizational asset lifecycle management with a dedicated marketplace experience, supporting asset visibility, custody accountability and asset-related discovery.",
  applicationName: "AssetPass",
  keywords: [
    "asset management",
    "asset lifecycle management",
    "asset custody",
    "QR asset tracking",
    "digital asset passport",
    "asset marketplace",
    "organizational asset management",
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
