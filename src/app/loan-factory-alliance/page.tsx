import Link from "next/link";
import PageHero from "@/components/PageHero";
import { allianceWeeks, programs, themeDays } from "@/data/coachingPlatform";

export const metadata = { title: "Loan Factory Alliance" };

const program = programs[1];

export default function LoanFactoryAlliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Loan Factory Alliance"
        title="Loan Factory Alliance"
        body={
          <p>
            Alliance is the advanced paid coaching program for members who want
            stronger weekly planning, partner strategy, pipeline review, and a
            tighter accountability rhythm.
          </p>
        }
        backgroundImage="/media/dark-hero-background.png"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/member-area/alliance/" className="btn-primary w-full sm:w-auto">
            Open Alliance Area
          </Link>
          <Link
            href="/lo-mastery-coaching/"
            className="btn-secondary w-full border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/20 sm:w-auto"
          >
            Compare LO Mastery
          </Link>
        </div>
      </PageHero>

      <section className="container-page py-14">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
              {program.price} per month
            </p>
            <h2 className="h-display mt-2 text-3xl">
              Advanced coaching rhythm for stronger accountability.
            </h2>
            <p className="prose-lf mt-3 text-lf-slate">{program.bestFor}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {program.includes.map((item) => (
              <article key={item} className="card min-h-[130px]">
                <h3 className="h-display text-lg">{item}</h3>
                <p className="prose-lf mt-2 text-sm text-lf-slate">
                  Designed for consistent review, planning, and follow-through.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lf-mist">
        <div className="container-page py-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                Advanced operating system
              </p>
              <h2 className="h-display mt-2 text-3xl">
                Alliance adds systems, ratios, partners, and leverage.
              </h2>
              <p className="prose-lf mt-3 text-lf-slate">
                Alliance assumes the fundamentals are already in motion, then
                adds business planning, documented workflows, partner strategy,
                and leadership rhythm.
              </p>
            </div>
            <div className="grid gap-3">
              {[
                "Production systems and documented workflows",
                "Marketing and database reactivation rhythm",
                "Strategic Realtor partner development",
                "People, leadership, and weekly accountability",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-lf-line bg-white p-4 text-sm font-semibold text-lf-charcoal shadow-card">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
          12-week curriculum
        </p>
        <h2 className="h-display mt-2 text-3xl">The Alliance path.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {allianceWeeks.map((week) => (
            <article key={week.week} className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
              <p className="text-xs font-black uppercase tracking-wide text-lf-orange">
                Week {week.week}
              </p>
              <h3 className="h-display mt-2 text-xl">{week.theme}</h3>
              <p className="mt-2 text-sm font-semibold text-lf-slate">
                Track: {week.number}
              </p>
              <p className="prose-lf mt-3 text-sm text-lf-slate">{week.win}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-lf-navy text-white">
        <div className="container-page py-14">
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            Theme days
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold">
            Revenue rhythm plus leverage focus.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {themeDays.map((day) => (
              <div key={day.day} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm font-black text-lf-orange">{day.day}</p>
                <p className="mt-2 text-sm leading-6 text-white/76">{day.alliance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
