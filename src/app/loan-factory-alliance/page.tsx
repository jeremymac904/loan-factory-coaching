import Link from "next/link";
import PageHero from "@/components/PageHero";
import { programs } from "@/data/coachingPlatform";

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
    </>
  );
}
