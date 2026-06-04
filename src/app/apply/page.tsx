import Link from "next/link";

export const metadata = { title: "Apply" };

export default function ApplyPage() {
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
            Coaching fit
          </p>
          <h1 className="metal-title-dark mt-5 max-w-4xl text-4xl md:text-5xl">
            Start with the right coaching path.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/84">
            Use this page to compare the paid coaching paths and choose the
            right starting point for weekly execution support.
          </p>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card">
            <h2 className="h-display text-2xl">What this page should collect</h2>
            <div className="mt-5 grid gap-3 text-sm text-lf-charcoal">
              {[
                "Which program fits the member best",
                "Current weekly schedule and accountability need",
                "Follow-up and Realtor relationship habits",
                "What the member wants coaching to help fix first",
              ].map((item) => (
                <div key={item} className="rounded-lg bg-lf-mist p-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <h2 className="h-display text-2xl">How to use this page</h2>
            <p className="prose-lf mt-3 text-lf-slate">
              This page routes members to program comparison and the coaching
              workspace. It does not create fake application confirmations.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/pricing/" className="btn-primary">
                Compare programs
              </Link>
              <Link href="/member-area/" className="btn-secondary">
                Review member area
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
