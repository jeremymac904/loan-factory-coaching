import Link from "next/link";
import type { CardItem, RoutePage } from "@/data/coachingPlatform";

export function FeatureCard({ item }: { item: CardItem }) {
  const content = (
    <>
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lf-orangeSoft text-sm font-black text-lf-orange">
        {item.title.slice(0, 1)}
      </div>
      <div>
        {item.meta && (
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            {item.meta}
          </p>
        )}
        <h3 className="h-display text-lg">{item.title}</h3>
        <p className="prose-lf mt-2 text-sm text-lf-slate">{item.body}</p>
      </div>
      {item.href && (
        <span className="mt-auto text-sm font-semibold text-lf-orange">
          Open page <span aria-hidden>&rarr;</span>
        </span>
      )}
    </>
  );

  if (item.href) {
    return (
      <Link
        href={item.href}
        className="card flex min-h-[210px] flex-col gap-4 transition hover:-translate-y-0.5 hover:shadow-lift"
      >
        {content}
      </Link>
    );
  }

  return <article className="card flex min-h-[210px] flex-col gap-4">{content}</article>;
}

export function RoutePageView({
  page,
  children,
}: {
  page: RoutePage;
  children?: React.ReactNode;
}) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-lf-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/media/dark-hero-background.png)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-black/72" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(242,106,31,0.28),transparent_32%),linear-gradient(90deg,rgba(0,0,0,0.94),rgba(15,15,15,0.66),rgba(0,0,0,0.9))]"
        />
        <div className="relative container-page grid gap-8 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-wide text-lf-orange">
              {page.eyebrow}
            </p>
            <h1 className="metal-title-dark mt-5 max-w-4xl text-4xl md:text-5xl">
              {page.title}
            </h1>
            <p className="mt-5 max-w-3xl break-words text-lg leading-8 text-white/84">
              {page.description}
            </p>
            {(page.primaryHref || page.secondaryHref) && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {page.primaryHref && page.primaryLabel && (
                  <Link href={page.primaryHref} className="btn-primary w-full sm:w-auto">
                    {page.primaryLabel}
                  </Link>
                )}
                {page.secondaryHref && page.secondaryLabel && (
                  <Link
                    href={page.secondaryHref}
                    className="btn-secondary w-full border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/20 sm:w-auto"
                  >
                    {page.secondaryLabel}
                  </Link>
                )}
              </div>
            )}
          </div>

          <aside className="min-w-0 rounded-xl border border-white/15 bg-black/44 p-5 shadow-2xl backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
              Local review
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold text-white">
              {page.sidebarTitle ?? "Review mode is open"}
            </h2>
            <ul className="mt-4 grid gap-2 text-sm text-white/76">
              {(page.sidebarItems ?? [
                "No login required locally",
                "Role views stay browser-only",
                "No backend changes are saved",
              ]).map((item) => (
                <li key={item} className="border-l-2 border-lf-orange/80 pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="container-page py-14">
        {children}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {page.cards.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
