import Link from "next/link";
import BrandImage from "./BrandImage";
import { brandAssets } from "@/data/brandAssets";

const links = [
  { href: "/ai-advantage/", label: "AI Advantage" },
  { href: "/sales/", label: "Elite Sales & Marketing" },
  { href: "/resources/", label: "Resources" },
  { href: "/replays/", label: "Replays" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-black bg-black text-white">
      <div className="container-page flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/55">
          {links.map((item, i) => (
            <span key={item.href} className="flex items-center gap-3">
              {i > 0 && <span className="text-white/20">·</span>}
              <Link href={item.href} className="hover:text-lf-orange">
                {item.label}
              </Link>
            </span>
          ))}
          <span className="text-white/20">·</span>
        </div>
        <p className="text-xs text-white/30">
          Internal use only.{" "}
          <a className="hover:text-lf-orange" href="mailto:jeremy.mcdonald@loanfactory.com">
            jeremy.mcdonald@loanfactory.com
          </a>
        </p>
      </div>
    </footer>
  );
}
