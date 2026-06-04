import Link from "next/link";
import PageHero from "@/components/PageHero";
import { programs } from "@/data/coachingPlatform";

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
    </>
  );
}
