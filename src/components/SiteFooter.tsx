import Link from "next/link";
import BrandImage from "./BrandImage";
import { brandAssets } from "@/data/brandAssets";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/lo-mastery-coaching/", label: "LO Mastery" },
  { href: "/loan-factory-alliance/", label: "Loan Factory Alliance" },
  { href: "/member-area/", label: "Member Area" },
  { href: "/coach-command-center/", label: "Coach Command Center" },
  { href: "/manager-dashboard/", label: "Manager Dashboard" },
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
              Paid coaching for Loan Factory loan officers who want structure,
              weekly accountability, daily execution, and better follow-through.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                Programs
              </p>
              <p className="mt-2 text-sm text-white/72">
                LO Mastery and Loan Factory Alliance.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                Operating rhythm
              </p>
              <p className="mt-2 text-sm text-white/72">
                Coaching, scorecards, trackers, scripts, and community.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <p className="text-sm font-semibold text-white">
              Loan Factory Paid Coaching Platform
            </p>
            <p className="mt-2 text-sm leading-6 text-white/64">
              Simple structure. Clear accountability. Better weekly execution.
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
            Internal coaching platform review build.
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
