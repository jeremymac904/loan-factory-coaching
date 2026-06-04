import Link from "next/link";
import { redirect } from "next/navigation";
import { platformFeatures, programs } from "@/data/coachingPlatform";

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
              Loan Factory Paid Coaching Platform
            </p>
            <h1 className="metal-title-dark mt-5 text-4xl md:text-6xl">
              Simple structure. Clear accountability. Better weekly execution.
            </h1>
            <p className="mt-6 max-w-3xl break-words text-lg leading-8 text-white/84 md:text-xl">
              A focused coaching platform for LO Mastery and Loan Factory
              Alliance members: weekly coaching, daily execution, scorecards,
              trackers, script books, theme days, and community.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/lo-mastery-coaching/" className="btn-primary w-full sm:w-auto">
                Explore LO Mastery
              </Link>
              <Link
                href="/loan-factory-alliance/"
                className="btn-secondary w-full border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/20 sm:w-auto"
              >
                Explore Alliance
              </Link>
              <Link
                href="/member-area/"
                className="btn-secondary w-full border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/20 sm:w-auto"
              >
                Open Member Area
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
                Coaching operating system
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                Built around the work loan officers actually need to repeat.
              </h2>
              <div className="mt-6 grid gap-3">
                {[
                  "Plan the week",
                  "Run the daily schedule",
                  "Track the scorecard",
                  "Review with a coach",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.07] p-3"
                  >
                    <span className="h-2.5 w-2.5 bg-lf-orange" />
                    <span className="text-sm font-semibold text-white/86">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
              Two programs
            </p>
            <h2 className="h-display mt-2 text-3xl">
              Coaching paths without the clutter.
            </h2>
            <p className="prose-lf mt-3 text-lf-slate">
              The homepage points directly to the paid coaching platform:
              LO Mastery, Loan Factory Alliance, member resources, and the
              weekly execution tools that support the coaching rhythm.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {programs.map((program) => (
              <Link
                key={program.name}
                href={program.href}
                className="card flex min-h-[250px] flex-col gap-4 border-lf-line transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                    {program.price} per month
                  </p>
                  <h3 className="h-display mt-2 text-2xl">{program.name}</h3>
                  <p className="prose-lf mt-2 text-sm text-lf-slate">
                    {program.bestFor}
                  </p>
                </div>
                <span className="mt-auto text-sm font-semibold text-lf-orange">
                  View program <span aria-hidden>&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lf-mist">
        <div className="container-page py-14">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
              What members use
            </p>
            <h2 className="h-display mt-2 text-3xl">
              A clean weekly operating rhythm.
            </h2>
            <p className="prose-lf mt-3 text-lf-slate">
              Each block has a job. The layout stays clean, direct, and
              built around the tools members actually use.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href ?? "/member-area/"}
                className="card flex min-h-[210px] flex-col gap-4 transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lf-orangeSoft text-sm font-black text-lf-orange">
                  {feature.title.slice(0, 1)}
                </div>
                <h3 className="h-display text-xl">{feature.title}</h3>
                <p className="prose-lf text-sm text-lf-slate">{feature.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
