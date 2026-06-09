import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Loan Factory Training",
    template: "%s | Loan Factory Training",
  },
  description:
    "Internal training portal for Loan Factory loan officers. Two academies (AI Advantage 101-601 and Elite Sales & Marketing 101-601) plus the resource library and replay library that support them.",
  manifest: "/manifest.webmanifest",
  robots: { index: false, follow: false },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
