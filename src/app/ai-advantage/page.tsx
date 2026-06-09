import Link from "next/link";
import { aiAdvantageModules } from "@/data/aiAdvantageModules";

export const metadata = { title: "AI Advantage" };

export default function AiAdvantagePage() {
  return (
    <>
      <section className="container-page py-14">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            AI Advantage
          </p>
          <h1 className="h-display mt-2 text-4xl">
            AI training for loan officers.
          </h1>
          <p className="prose-lf mt-4 text-lg text-lf-slate">
            Training videos, handouts, and audio companions for every module.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {aiAdvantageModules.map((m) => (
            <Link
              key={m.slug}
              href={m.href}
              className="card group flex h-full flex-col gap-3 transition hover:shadow-lift"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                {m.level}
              </span>
              <h3 className="h-display text-xl">{m.title.split(":")[0]}</h3>
              <p className="prose-lf text-sm text-lf-slate">{m.corePromise}</p>
              <span className="mt-auto inline-flex items-center text-sm font-semibold text-lf-navy group-hover:text-lf-orange">
                View resources
                <span aria-hidden className="ml-1 transition group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
