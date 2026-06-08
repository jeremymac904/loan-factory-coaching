export default function OnboardingWelcomePage() {
  return (
    <section className="container-page py-14">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
          Welcome
        </p>
        <h1 className="h-display mt-2 text-3xl">
          Welcome to Loan Factory AI Advantage.
        </h1>
        <p className="prose-lf mt-3 text-lf-slate">
          The training portal, the resource library, the replay library,
          the AI assistant, and the community — all in one place. Two
          academies. Six pillars. Built for LOs.
        </p>
        <p className="prose-lf mt-6 text-lf-slate">
          The welcome video will live here. For now, head straight to the
          academy that's up this week.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href="/onboarding/personality/" className="btn-primary w-full sm:w-auto">
            Start the Coaching Personality Quiz
          </a>
          <a
            href="/onboarding/aptitude/"
            className="btn-secondary w-full sm:w-auto"
          >
            Start the New LO Aptitude Quiz
          </a>
        </div>
      </div>
    </section>
  );
}
