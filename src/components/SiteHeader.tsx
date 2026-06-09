import Link from "next/link";
import BrandImage from "./BrandImage";
import { brandAssets } from "@/data/brandAssets";

const primaryNav = [
  { label: "AI Advantage", href: "/ai-advantage/" },
  { label: "Elite Sales & Marketing", href: "/sales/" },
  { label: "Resources", href: "/resources/" },
  { label: "Replays", href: "/replays/" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-lf-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 w-full max-w-[1500px] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <div className="flex min-w-0 items-center justify-start lg:justify-end">
          <Link
            href="/"
            className="flex min-w-0 items-center"
            aria-label="Loan Factory training home"
          >
            <BrandImage
              asset={brandAssets["loan-factory"]}
              heightClass="h-10 sm:h-12"
            />
          </Link>
        </div>

        <details className="group lg:hidden">
          <summary className="btn-primary cursor-pointer list-none">
            Menu
          </summary>
          <nav className="fixed left-5 right-5 top-20 z-40 max-w-[calc(100vw-2.5rem)] rounded-xl border border-lf-line bg-white p-3 shadow-lift">
            <div className="grid gap-2">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-base font-semibold text-lf-charcoal hover:bg-lf-mist hover:text-lf-orange"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </details>

        <nav
          className="grid min-w-0 items-center justify-center gap-1 lg:flex lg:col-start-2"
          aria-label="Primary navigation"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-semibold text-lf-charcoal transition hover:bg-lf-mist hover:text-lf-orange xl:px-3 xl:text-[15px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="lg:col-start-3" />
      </div>
    </header>
  );
}
