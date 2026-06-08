import Link from "next/link";
import { modules } from "@/data/modules";
import ModuleCard from "@/components/ModuleCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Elite Sales & Marketing",
};

export default function SalesAcademyPage() {
  return (
    <>
      <section className="container-page py-14">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            Sales Academy
          </p>
          <h1 className="h-display mt-2 text-4xl">
            Elite Sales &amp; Marketing, 101 to 601.
          </h1>
          <p className="prose-lf mt-4 text-lg text-lf-slate">
            Six modules. A 12-week rotation. The foundation course for every
            Loan Factory loan officer. Start with 101 if you are new. Pick up
            where you left off if you are not.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => {
            const isFuture = m.status !== "full";
            return (
              <ModuleCard
                key={m.slug}
                level={m.level}
                title={m.title.split(":")[0]}
                promise={m.corePromise}
                href={`/sales/${m.slug}/`}
                status={m.status}
              />
            );
          })}
        </div>
      </section>

      <section className="container-page py-12">
        <SectionHeading
          eyebrow="Current state"
          title="Sales 101 and 201 are live. Sales 301-601 are the future curriculum."
        />
        <p className="prose-lf mt-4 max-w-3xl text-lf-slate">
          Sales 101 (Foundation) and Sales 201 (Borrower Conversion) have the
          real training video, the handout, the scripts, the prompts, and the
          roleplays. Sales 301-601 are placeholders in the rotation — the topic
          and audience are real, the training content is not yet produced. The
          rotation calendar exists so the structure is ready when each module is
          recorded.
        </p>
      </section>

      <section className="container-page py-12">
        <SectionHeading
          eyebrow="The rotation"
          title="One new module every other week."
          description="Classes alternate every other week with AI Advantage. Plan your calendar so the assignment and the Friday review land on the same week."
        />
        <ol className="prose-lf mt-6 grid gap-3 text-base md:grid-cols-2">
          {[
            { week: "Week 1", label: "Sales 101 — Foundation. Daily rhythm + first follow-ups." },
            { week: "Week 3", label: "Sales 201 — Borrower Conversion. First call structure." },
            { week: "Week 5", label: "Sales 301 — Referral Partner Growth. Realtor engine." },
            { week: "Week 7", label: "Sales 401 — Content and Marketing. Local authority." },
            { week: "Week 9", label: "Sales 501 — Pipeline and Sales Systems. Friday review." },
            { week: "Week 11", label: "Sales 601 — Elite Execution. 12 week plan + AI routine." },
          ].map((row) => (
            <li key={row.week} className="card">
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                {row.week}
              </p>
              <p className="mt-1 font-semibold text-lf-navy">{row.label}</p>
            </li>
          ))}
        </ol>
        <p className="prose-lf mt-6 text-sm text-lf-slate">
          <Link href="/ai-advantage/" className="font-semibold text-lf-orange">
            See the AI Advantage rotation →
          </Link>
        </p>
      </section>
    </>
  );
}
