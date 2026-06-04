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
            Local review shows the intended application page layout. Final
            intake wiring should connect only after the approved process is set.
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
            <h2 className="h-display text-2xl">Local review only</h2>
            <p className="prose-lf mt-3 text-lf-slate">
              This build does not save application data or create fake backend
              confirmations. Use the program pages and member area to review
              the flow.
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
