import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = { title: "Sign In" };

type SearchParams = Record<string, string | string[] | undefined>;

type Props = {
  searchParams?: Promise<SearchParams> | SearchParams;
};

export default async function LoginPage({ searchParams }: Props) {
  const params = searchParams ? await searchParams : {};
  const hasError = typeof params.error === "string" && params.error.length > 0;

  if (!hasError) {
    redirect("/auth/google/?next=/member-area/");
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-lf-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/media/dark-hero-background.png)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-black/76" />
        <div className="relative container-page py-16 md:py-20">
          <p className="text-xs font-bold uppercase tracking-wide text-lf-orange">
            Sign in
          </p>
          <h1 className="metal-title-dark mt-5 max-w-3xl text-4xl md:text-5xl">
            Google sign-in needs attention.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/85">
            The platform uses one Google sign-in action. The current environment
            could not start authorization, so review the auth configuration and
            try again.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/auth/google/?next=/member-area/" className="btn-primary w-full sm:w-auto">
              Try Google sign-in again
            </Link>
            <Link
              href="/"
              className="btn-secondary w-full border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/20 sm:w-auto"
            >
              Return home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
