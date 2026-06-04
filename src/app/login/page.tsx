import Link from "next/link";
import LoginPicker from "@/components/LoginPicker";

export const metadata = { title: "Sign In" };

type SearchParams = Record<string, string | string[] | undefined>;

type Props = {
  searchParams?: Promise<SearchParams> | SearchParams;
};

export default async function LoginPage({ searchParams }: Props) {
  const params = searchParams ? await searchParams : {};
  const hasConfigError = params.error === "supabase-not-configured";

  return (
    <>
      <section className="relative isolate overflow-hidden bg-lf-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/media/dark-hero-background.png)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-black/72" />
        <div className="relative container-page py-14">
          <p className="text-xs font-bold uppercase tracking-wide text-lf-orange">
            Sign in
          </p>
          <h1 className="metal-title-dark mt-5 max-w-3xl text-4xl md:text-5xl">
            Sign in to paid coaching.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            The public Sign In button goes directly to the Google auth action.
            If local environment settings are missing, this page shows one
            clean fallback message.
          </p>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="card">
            <h2 className="h-display text-2xl">Google sign-in</h2>
            <p className="prose-lf mt-3 text-base text-lf-slate">
              Use Google sign-in for the real account flow when the environment
              is configured.
            </p>
            {hasConfigError && (
              <p className="mt-5 rounded-lg border border-lf-orange/30 bg-lf-orangeSoft px-4 py-3 text-sm font-semibold text-lf-orangeDark">
                Google sign-in is not configured for this local environment.
                Use local review mode below to inspect the platform.
              </p>
            )}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/auth/google/?next=/member-area/" className="btn-primary">
                Sign in with Google
              </Link>
              <Link href="/auth/preview/?next=/member-area/" className="btn-secondary">
                Local review only
              </Link>
            </div>
          </div>

          <div className="card">
            <h2 className="h-display text-xl">Local review roles</h2>
            <p className="prose-lf mt-3 text-base text-lf-slate">
              Local role selection lets the review team inspect pages without
              changing real users, permissions, or data.
            </p>
            <div className="mt-5 grid gap-3 text-sm text-lf-charcoal">
              {[
                "Master Admin",
                "Coaching Manager",
                "Coach",
                "LO Mastery Member",
                "Loan Factory Alliance Member",
              ].map((role) => (
                <div key={role} className="rounded-lg bg-lf-mist p-3">
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LoginPicker />
    </>
  );
}
