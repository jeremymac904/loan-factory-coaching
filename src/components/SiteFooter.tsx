import Link from "next/link";
import BrandImage from "./BrandImage";
import { brandAssets } from "@/data/brandAssets";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/lo-mastery-coaching/", label: "LO Mastery" },
  { href: "/loan-factory-alliance/", label: "Loan Factory Alliance" },
  { href: "/apply/", label: "Apply" },
  { href: "/member-area/", label: "Member Area" },
  { href: "/coach-command-center/", label: "Coach Command Center" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-lf-line bg-lf-mist text-lf-charcoal">
      <div className="w-full px-5 py-12 md:px-10">
        <div className="grid gap-10 border-b border-lf-line/80 pb-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Link href="/" aria-label="Loan Factory home" className="inline-flex">
              <BrandImage asset={brandAssets["loan-factory"]} heightClass="h-12" />
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-6 text-lf-slate">
              Paid coaching for Loan Factory loan officers who want structure,
              weekly accountability, daily execution, and better follow-through.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-lf-orange">
              Simple structure. Clear accountability. Better weekly execution.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {footerLinks.map((item) => (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className="font-semibold text-lf-charcoal hover:text-lf-orange"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-sm text-lf-slate md:flex-row md:items-center md:justify-between">
          <p>Internal coaching platform review build.</p>
          <p>
            Jeremy McDonald ·{" "}
            <a className="font-semibold text-lf-charcoal hover:text-lf-orange" href="tel:9044423213">
              904-442-3213
            </a>{" "}
            ·{" "}
            <a
              className="font-semibold text-lf-charcoal hover:text-lf-orange"
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
