import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AssetPass | The Asset Ecosystem Platform",
    template: "%s | AssetPass",
  },
  description:
    "Manage assets. Extend their value. Keep every transition accountable. AssetPass connects asset lifecycle management with a dedicated Marketplace experience.",
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
