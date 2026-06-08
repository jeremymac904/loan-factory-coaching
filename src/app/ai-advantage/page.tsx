import Link from "next/link";
import { aiAdvantageModules } from "@/data/aiAdvantageModules";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "AI Advantage",
};

export default function AiAdvantagePage() {
  return (
    <>
      <section className="container-page py-14">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            AI Academy
          </p>
          <h1 className="h-display mt-2 text-4xl">
            AI Advantage, 101 to 601.
          </h1>
          <p className="prose-lf mt-4 text-lg text-lf-slate">
            Six modules. The other half of the 12 week rotation. Build
            your AI Twin, put it in your daily loop, publish content,
            automate the boring parts, and graduate with a written 12
            week plan.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {aiAdvantageModules.map((m) => {
            const isFuture = m.status === "summary";
            return (
              <Link
                key={m.slug}
                href={m.href}
                className="card group flex h-full flex-col gap-3 transition hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                    {m.level}
                  </span>
                  <span
                    className={
                      "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide " +
                      (isFuture
                        ? "bg-lf-mist text-lf-slate"
                        : "bg-lf-orangeSoft text-lf-orange")
                    }
                  >
                    {isFuture ? "Future" : "In Progress"}
                  </span>
                </div>
                <h3 className="h-display text-xl">{m.title.split(":")[0]}</h3>
                <p className="prose-lf text-sm text-lf-slate">{m.corePromise}</p>
                <span className="mt-auto inline-flex items-center text-sm font-semibold text-lf-navy group-hover:text-lf-orange">
                  {isFuture ? "Preview structure" : "Start lesson"}
                  <span aria-hidden className="ml-1 transition group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container-page py-12">
        <SectionHeading
          eyebrow="Current state"
          title="AI 101 is in progress. AI 201-601 are the future curriculum."
        />
        <p className="prose-lf mt-4 max-w-3xl text-lf-slate">
          AI 101 has the real training video, the handout, and the do-this-today
          assignments. AI 201-601 are placeholders in the rotation — the topic
          and audience are real, the training content is not yet produced. The
          rotation calendar exists so the structure is ready when each module is
          recorded.
        </p>
      </section>

      <section className="container-page py-12">
        <SectionHeading
          eyebrow="The rotation"
          title="One new AI module every other week."
          description="Classes alternate every other week with Elite Sales & Marketing. Plan your calendar so the assignment and the Friday review land on the same week."
        />
        <ol className="prose-lf mt-6 grid gap-3 text-base md:grid-cols-2">
          {[
            { week: "Week 1", label: "AI 101 — Foundations. Set up your AI Twin and your safety rules." },
            { week: "Week 3", label: "AI 201 — Twin Setup. Connect 3 sources. Bio doc uploaded." },
            { week: "Week 5", label: "AI 301 — Client Communication. 5 first touches drafted, edited, sent." },
            { week: "Week 7", label: "AI 401 — Marketing and Content. 3 pieces published." },
            { week: "Week 9", label: "AI 501 — Apps and Automation. 2 automations live and documented." },
            { week: "Week 11", label: "AI 601 — Elite Execution. 12 week plan submitted. Workflows measured." },
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
          <Link href="/sales/" className="font-semibold text-lf-orange">
            See the Sales Academy rotation →
          </Link>
        </p>
      </section>
    </>
  );
}
