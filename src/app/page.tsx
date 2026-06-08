import Link from "next/link";
import { redirect } from "next/navigation";

type SearchParams = Record<string, string | string[] | undefined>;

type Props = {
  searchParams?: Promise<SearchParams> | SearchParams;
};

function buildCallbackQuery(params: SearchParams) {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => query.append(key, item));
      return;
    }

    if (typeof value === "string") {
      query.set(key, value);
    }
  });

  return query.toString();
}

const pillars = [
  {
    title: "AI Advantage",
    href: "/ai-advantage/",
    blurb: "Six modules. AI Twin setup, client communication, marketing, automation, elite execution.",
    cta: "Open AI Advantage",
  },
  {
    title: "Elite Sales & Marketing",
    href: "/sales/",
    blurb: "Six modules. Foundation, borrower conversion, referral partners, content, pipeline, elite execution.",
    cta: "Open Sales Academy",
  },
  {
    title: "Resource Library",
    href: "/resources/",
    blurb: "Prompts, scripts, roleplays, audio, trackers, playbooks, channels, AI Twin examples.",
    cta: "Open Resources",
  },
  {
    title: "Replay Library",
    href: "/replays/",
    blurb: "AI Advantage videos, AI training deep dives, audio companions, live recordings.",
    cta: "Open Replays",
  },
  {
    title: "AI Assistant",
    href: "/ai-assistant/",
    blurb: "Four personas: Beginner Coach, Roleplay Coach, Script Builder, Content Coach.",
    cta: "Open AI Assistant",
  },
  {
    title: "Community",
    href: "/community/",
    blurb: "Announcements, Q&A, and wins. Read, post, comment.",
    cta: "Open Community",
  },
];

export default async function HomePage({ searchParams }: Props) {
  const params = searchParams ? await searchParams : {};

  if (typeof params.code === "string" && params.code) {
    const query = buildCallbackQuery(params);
    redirect(`/auth/callback/${query ? `?${query}` : ""}`);
  }

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-black bg-lf-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/media/dark-hero-background.png)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-black/74" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(242,106,31,0.24),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.62)_52%,rgba(0,0,0,0.92)_100%)]"
        />
        <div className="relative container-page grid gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.54fr)] lg:items-center">
          <div className="min-w-0 max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-wide text-lf-orange">
              Loan Factory AI Advantage Platform
            </p>
            <h1 className="metal-title-dark mt-5 text-4xl md:text-6xl">
              Two academies. Six pillars. Built for LOs.
            </h1>
            <p className="mt-6 max-w-3xl break-words text-lg leading-8 text-white/84 md:text-xl">
              A 12-week rotating training portal. AI Advantage 101–601
              alternates with Elite Sales &amp; Marketing 101–601 every
              other week. Plus the resource library, replay library, AI
              assistant, and community that support the work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/ai-advantage/" className="btn-primary w-full sm:w-auto">
                Start AI Advantage
              </Link>
              <Link
                href="/sales/"
                className="btn-secondary w-full border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/20 sm:w-auto"
              >
                Start Sales Academy
              </Link>
              <Link
                href="/progress/"
                className="btn-secondary w-full border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/20 sm:w-auto"
              >
                Your Progress
              </Link>
            </div>
          </div>

          <aside className="relative min-w-0 overflow-hidden rounded-xl border border-white/15 bg-black/60 shadow-2xl">
            <div
              aria-hidden
              className="absolute inset-0 bg-cover bg-center opacity-35"
              style={{ backgroundImage: "url(/media/dark-hero-background.png)" }}
            />
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(160deg,rgba(0,0,0,0.94),rgba(0,0,0,0.72),rgba(242,106,31,0.20))]" />
            <div className="relative p-6">
              <div className="mb-6 h-1 w-16 bg-lf-orange" />
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                The cadence
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                12-week rotation. One new module every other week.
              </h2>
              <p className="mt-3 text-sm text-white/70">
                Sales 101 and 201 are live. AI 101 is in progress. The other
                9 modules are the future curriculum — the structure exists
                so the rotation is ready when each module is produced.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  { label: "Week 1: Sales 101 — Foundation", state: "Live" },
                  { label: "Week 3: Sales 201 — Borrower Conversion", state: "Live" },
                  { label: "Week 5: AI 101 — Foundations", state: "In progress" },
                  { label: "Week 7: Sales 301 — Future curriculum", state: "Future" },
                  { label: "Week 9: AI 201 — Future curriculum", state: "Future" },
                  { label: "Week 11: Sales 401 — Future curriculum", state: "Future" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.07] p-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 bg-lf-orange" />
                      <span className="text-sm font-semibold text-white/86">
                        {row.label}
                      </span>
                    </div>
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/70">
                      {row.state}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            Six pillars
          </p>
          <h2 className="h-display mt-2 text-3xl">
            The training portal, without the clutter.
          </h2>
          <p className="prose-lf mt-3 text-lf-slate">
            Two academies. The resource library. The replay library. The AI
            assistant. The community. Everything in one place, built around
            the work loan officers actually do.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="card flex min-h-[210px] flex-col gap-4 transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lf-orangeSoft text-sm font-black text-lf-orange">
                {p.title.slice(0, 1)}
              </div>
              <h3 className="h-display text-xl">{p.title}</h3>
              <p className="prose-lf text-sm text-lf-slate">{p.blurb}</p>
              <span className="mt-auto text-sm font-semibold text-lf-orange">
                {p.cta} <span aria-hidden>&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
