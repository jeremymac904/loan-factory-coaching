import Link from "next/link";
import { programs } from "@/data/coachingPlatform";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-lf-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/media/dark-hero-background.png)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-black/72" />
        <div className="relative container-page py-16 md:py-20">
          <p className="text-xs font-bold uppercase tracking-wide text-lf-orange">
            Pricing
          </p>
          <h1 className="metal-title-dark mt-5 max-w-4xl text-4xl md:text-5xl">
            Two paid coaching paths.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/84">
            Choose the coaching rhythm that fits the member&apos;s current need:
            structure and consistency, or advanced planning and accountability.
          </p>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <article key={program.name} className="card flex min-h-[520px] flex-col gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                  Paid coaching
                </p>
                <h2 className="h-display mt-2 text-3xl">{program.name}</h2>
                <p className="prose-lf mt-3 text-lf-slate">{program.bestFor}</p>
              </div>
              <div>
                <span className="font-display text-5xl font-semibold text-lf-navy">
                  {program.price}
                </span>
                <span className="ml-2 text-sm font-medium text-lf-slate">
                  per month
                </span>
              </div>
              <ul className="grid gap-2 text-sm text-lf-charcoal">
                {program.includes.map((item) => (
                  <li key={item} className="flex gap-3 rounded-lg bg-lf-mist p-3">
                    <span className="mt-1 h-2 w-2 bg-lf-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={program.href} className="btn-primary mt-auto">
                View {program.name}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
