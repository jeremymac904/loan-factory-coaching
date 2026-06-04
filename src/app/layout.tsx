import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BetaPreviewBanner from "@/components/BetaPreviewBanner";
import HeyGenVideoWidget from "@/components/HeyGenVideoWidget";
import SuggestionModal from "@/components/SuggestionModal";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Loan Factory Paid Coaching Platform",
    template: "%s | Loan Factory Paid Coaching",
  },
  description:
    "Loan Factory paid coaching platform for LO Mastery, Loan Factory Alliance, weekly coaching, daily execution, scorecards, trackers, script books, theme days, and community.",
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
        <BetaPreviewBanner />
        <main>{children}</main>
        <SiteFooter />
        <HeyGenVideoWidget />
        <SuggestionModal
          triggerLabel="Send Feedback"
          triggerClassName="fixed bottom-3 right-3 z-40 max-w-[calc(100vw-1.5rem)] rounded-full bg-lf-orange px-3 py-2 text-xs font-bold text-white shadow-2xl transition hover:-translate-y-0.5 hover:bg-lf-orangeDark focus:outline-none focus:ring-2 focus:ring-lf-orange/30 sm:bottom-5 sm:right-5 sm:px-4 sm:py-3 sm:text-sm"
        />
      </body>
    </html>
  );
}
