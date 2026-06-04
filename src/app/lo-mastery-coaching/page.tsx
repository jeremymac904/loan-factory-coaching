import Link from "next/link";
import PageHero from "@/components/PageHero";
import { coachingRails, masteryWeeks, programs, themeDays } from "@/data/coachingPlatform";

export const metadata = { title: "LO Mastery Coaching" };

const program = programs[0];

export default function LoMasteryCoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="LO Mastery"
        title="Loan Factory LO Mastery Coaching"
        body={
          <p>
            LO Mastery is paid coaching for loan officers who need structure,
            daily schedule discipline, follow-up rhythm, scripts, trackers,
            scorecards, and weekly accountability.
          </p>
        }
        backgroundImage="/media/dark-hero-background.png"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/member-area/lo-mastery/" className="btn-primary w-full sm:w-auto">
            Open LO Mastery Area
          </Link>
          <Link
            href="/loan-factory-alliance/"
            className="btn-secondary w-full border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/20 sm:w-auto"
          >
            Compare Alliance
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
              A simple coaching rhythm for better weekly execution.
            </h2>
            <p className="prose-lf mt-3 text-lf-slate">{program.bestFor}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {program.includes.map((item) => (
              <article key={item} className="card min-h-[130px]">
                <h3 className="h-display text-lg">{item}</h3>
                <p className="prose-lf mt-2 text-sm text-lf-slate">
                  Built to support consistent action between coaching calls.
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
                Operating system
              </p>
              <h2 className="h-display mt-2 text-3xl">
                Five rails that make the week visible.
              </h2>
              <p className="prose-lf mt-3 text-lf-slate">
                LO Mastery is not a loose library of videos. It is a weekly
                execution rhythm built from the curriculum source.
              </p>
            </div>
            <div className="grid gap-3">
              {coachingRails.map((rail) => (
                <div key={rail} className="rounded-xl border border-lf-line bg-white p-4 text-sm font-semibold text-lf-charcoal shadow-card">
                  {rail}
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
        <h2 className="h-display mt-2 text-3xl">The LO Mastery path.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {masteryWeeks.map((week) => (
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
            Every weekday has a job.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {themeDays.map((day) => (
              <div key={day.day} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm font-black text-lf-orange">{day.day}</p>
                <p className="mt-2 text-sm leading-6 text-white/76">{day.mastery}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
