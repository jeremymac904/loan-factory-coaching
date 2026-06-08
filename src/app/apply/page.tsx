import Link from "next/link";
import PageHero from "@/components/PageHero";
import { programs } from "@/data/coachingPlatform";

export const metadata = { title: "Apply" };

const fitQuestions = [
  {
    title: "What program fits best",
    body: "LO Mastery for daily execution rhythm. Loan Factory Alliance for advanced systems, partner strategy, and tighter review.",
  },
  {
    title: "Current weekly schedule",
    body: "Your real availability for the daily Power Block, Tuesday pipeline review, and Friday scorecard.",
  },
  {
    title: "Follow-up and partner habits",
    body: "What you are already doing for follow-up, Realtor relationships, and database reactivation.",
  },
  {
    title: "What coaching should fix first",
    body: "The single stuck point you want a coach to help you clear in the first 30 days.",
  },
];

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Coaching fit"
        title="Start with the right coaching path."
        body={
          <p>
            Use this page to compare the paid coaching paths and choose the
            right starting point for weekly execution support.
          </p>
        }
        backgroundImage="/media/dark-hero-background.png"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/lo-mastery-coaching/" className="btn-primary w-full sm:w-auto">
            Review LO Mastery
          </Link>
          <Link
            href="/loan-factory-alliance/"
            className="btn-secondary w-full border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/20 sm:w-auto"
          >
            Review Alliance
          </Link>
        </div>
      </PageHero>

      <section className="container-page py-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
              Fit assessment
            </p>
            <h2 className="h-display mt-2 text-3xl">
              What this page collects.
            </h2>
            <p className="prose-lf mt-3 text-lf-slate">
              The four questions below shape the first coaching conversation.
              Bring honest answers and the work you already have in motion.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {fitQuestions.map((item) => (
              <article key={item.title} className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
                <h3 className="h-display text-lg">{item.title}</h3>
                <p className="prose-lf mt-2 text-sm text-lf-slate">{item.body}</p>
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
                Side-by-side
              </p>
              <h2 className="h-display mt-2 text-3xl">
                Compare LO Mastery and Loan Factory Alliance.
              </h2>
              <p className="prose-lf mt-3 text-lf-slate">
                Both programs run on the same coaching rhythm. Alliance adds
                weekly review, advanced systems, partner strategy, and a tighter
                accountability cadence.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {programs.map((program) => (
                <article key={program.name} className="card flex h-full flex-col">
                  <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                    {program.price} per month
                  </p>
                  <h3 className="h-display mt-2 text-2xl">{program.name}</h3>
                  <p className="prose-lf mt-3 text-sm text-lf-slate">
                    {program.bestFor}
                  </p>
                  <Link
                    href={program.href}
                    className="mt-5 inline-flex items-center text-sm font-bold text-lf-orange hover:text-lf-orangeDark"
                  >
                    Open program page
                    <span aria-hidden className="ml-2">
                      &rarr;
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-lf-navy bg-lf-navy p-6 text-white shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
              What happens next
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold">
              Three steps after you apply.
            </h2>
            <ol className="mt-5 grid gap-3 text-sm leading-6 text-white/82">
              <li className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <strong className="text-white">1. Fit review.</strong>{" "}
                We confirm the program matches your schedule, current activity,
                and accountability need.
              </li>
              <li className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <strong className="text-white">2. Onboarding call.</strong>{" "}
                We walk through theme days, scorecards, and the first week so
                the rhythm is in place before billing.
              </li>
              <li className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <strong className="text-white">3. Member area access.</strong>{" "}
                Sign in with Google and the dashboards, scripts, trackers, and
                community feed open the same day.
              </li>
            </ol>
          </article>
          <article className="rounded-2xl border border-lf-line bg-white p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
              Open the workspace
            </p>
            <h2 className="h-display mt-2 text-2xl">
              See the member area before you commit.
            </h2>
            <p className="prose-lf mt-3 text-lf-slate">
              Every program route links into a real member workspace: LO
              Mastery area, Alliance area, scorecards, trackers, classroom, and
              community.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/member-area/" className="btn-primary w-full sm:w-auto">
                Open LO Mastery area
              </Link>
              <Link
                href="/member-area/alliance/"
                className="btn-secondary w-full sm:w-auto"
              >
                Open Alliance area
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
