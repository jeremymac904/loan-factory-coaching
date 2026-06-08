import Link from "next/link";
import BrandImage from "./BrandImage";
import { brandAssets } from "@/data/brandAssets";

const footerLinks = [
  { href: "/ai-advantage/", label: "AI Advantage" },
  { href: "/sales/", label: "Elite Sales & Marketing" },
  { href: "/resources/", label: "Resource Library" },
  { href: "/replays/", label: "Replay Library" },
  { href: "/ai-assistant/", label: "AI Assistant" },
  { href: "/community/", label: "Community" },
  { href: "/progress/", label: "Your Progress" },
  { href: "/onboarding/welcome/", label: "Onboarding" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-black bg-black text-white">
      <div className="container-page py-12">
        <div className="grid gap-8 border-b border-white/10 pb-8 lg:grid-cols-[1fr_1.15fr] lg:items-end">
          <div>
            <BrandImage
              asset={brandAssets["loan-factory"]}
              heightClass="h-9"
            />
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/70">
              Internal training portal for Loan Factory loan officers. Two
              academies — AI Advantage and Elite Sales &amp; Marketing —
              plus the resource library, replay library, AI assistant, and
              community that support them.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                Academies
              </p>
              <p className="mt-2 text-sm text-white/72">
                AI Advantage (101–601) and Elite Sales &amp; Marketing (101–601).
                Classes alternate every other week.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                Operating rhythm
              </p>
              <p className="mt-2 text-sm text-white/72">
                Replays, resources, AI assistant, and community — all built
                around the work loan officers actually do.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <p className="text-sm font-semibold text-white">
              Loan Factory AI Advantage Platform
            </p>
            <p className="mt-2 text-sm leading-6 text-white/64">
              Two academies. Six pillars. Built for LOs.
            </p>
          </div>
          <div className="grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
            {footerLinks.map((item) => (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className="text-white/72 hover:text-lf-orange"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            Internal use only. Not for external distribution. Not borrower-facing.
          </p>
          <p>
            Jeremy McDonald ·{" "}
            <a className="font-semibold text-white hover:text-lf-orange" href="tel:9044423213">
              904-442-3213
            </a>{" "}
            ·{" "}
            <a
              className="font-semibold text-white hover:text-lf-orange"
              href="mailto:jeremy.mcdonald@loanfactory.com"
            >
              jeremy.mcdonald@loanfactory.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
