import Link from "next/link";
import LoginPicker from "@/components/LoginPicker";
import { memberNav } from "@/data/coachingPlatform";

export const metadata = { title: "Member Area" };

const feedItems = [
  {
    label: "Pinned",
    title: "This week's coaching focus",
    body: "Protect your daily schedule, complete the weekly scorecard, and bring one stuck point to coaching.",
  },
  {
    label: "Coach prompt",
    title: "What needs follow-up today?",
    body: "Write down the borrowers, Realtors, and open opportunities that need a next action before the day ends.",
  },
  {
    label: "Community",
    title: "Share one win and one lesson",
    body: "Keep the member area focused on useful wins, questions, scripts, and execution examples.",
  },
];

export default function MemberAreaPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0b0b0b] text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/media/dark-hero-background.png)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-black/75" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.96),rgba(0,0,0,0.68),rgba(0,0,0,0.92))]"
        />
        <div className="relative container-page py-14 md:py-20">
          <p className="text-xs font-bold uppercase tracking-wide text-lf-orange">
            Member area
          </p>
          <h1 className="metal-title-dark mt-5 max-w-4xl text-4xl md:text-5xl">
            Coaching home for members.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/84">
            Program areas, resources, scorecards, trackers, community,
            classroom, calendar, and profile are organized inside the member area.
          </p>
        </div>
      </section>

      <section className="bg-lf-mist py-10">
        <div className="container-page grid gap-6 lg:grid-cols-[270px_minmax(0,1fr)_300px]">
          <aside className="rounded-xl border border-lf-line bg-white p-4 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
              Member navigation
            </p>
            <nav className="mt-4 grid gap-2">
              {memberNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href ?? "/member-area/"}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-lf-charcoal transition hover:bg-lf-orangeSoft hover:text-lf-orange"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </aside>

          <main className="grid gap-5">
            {feedItems.map((item) => (
              <article key={item.title} className="rounded-xl border border-lf-line bg-white p-6 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                  {item.label}
                </p>
                <h2 className="h-display mt-2 text-2xl">{item.title}</h2>
                <p className="prose-lf mt-3 text-lf-slate">{item.body}</p>
              </article>
            ))}
            <div className="grid gap-5 md:grid-cols-2">
              {memberNav.slice(0, 6).map((item) => (
                <Link
                  key={item.href}
                  href={item.href ?? "/member-area/"}
                  className="card min-h-[180px] transition hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <h3 className="h-display text-lg">{item.title}</h3>
                  <p className="prose-lf mt-2 text-sm text-lf-slate">
                    {item.body}
                  </p>
                </Link>
              ))}
            </div>
          </main>

          <aside className="grid gap-5">
            <div className="rounded-xl border border-lf-line bg-white p-5 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                Weekly scorecard
              </p>
              <h2 className="h-display mt-2 text-xl">Due before coaching review</h2>
              <p className="prose-lf mt-2 text-sm text-lf-slate">
                Complete activity, follow-up, partner touches, and next-step
                notes so coaching starts with clarity.
              </p>
              <Link href="/member-area/scorecards/" className="btn-primary mt-5">
                Open scorecards
              </Link>
            </div>
            <div className="rounded-xl border border-lf-line bg-white p-5 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                Review roles
              </p>
              <p className="prose-lf mt-2 text-sm text-lf-slate">
                Local role preview is available on the login page and does not
                change real accounts.
              </p>
              <Link href="/login/" className="btn-secondary mt-5">
                Switch local role
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <LoginPicker />
    </>
  );
}
