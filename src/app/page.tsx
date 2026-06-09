import Link from "next/link";
import { redirect } from "next/navigation";

type SearchParams = Record<string, string | string[] | undefined>;

type Props = {
  searchParams?: Promise<SearchParams> | SearchParams;
};

function buildCallbackQuery(params: SearchParams) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => query.append(key, item));
      return;
    }
    if (typeof value === "string") query.set(key, value);
  });
  return query.toString();
}

export default async function HomePage({ searchParams }: Props) {
  const params = searchParams ? await searchParams : {};

  if (typeof params.code === "string" && params.code) {
    const query = buildCallbackQuery(params);
    redirect(`/auth/callback/${query ? `?${query}` : ""}`);
  }

  return (
    <>
      <section className="border-b border-black bg-lf-navy text-white">
        <div className="container-page py-10 md:py-14">
          <p className="text-xs font-bold uppercase tracking-widest text-lf-orange">
            Loan Factory Training
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-5">
            <Link
              href="/ai-advantage/"
              className="inline-flex items-baseline gap-2 text-2xl font-bold text-white hover:text-lf-orange md:text-3xl"
            >
              AI Advantage
              <span className="text-sm font-normal text-white/50">101–601</span>
            </Link>
            <span className="text-lg text-white/30 hidden sm:inline">⋅</span>
            <Link
              href="/sales/"
              className="inline-flex items-baseline gap-2 text-2xl font-bold text-white hover:text-lf-orange md:text-3xl"
            >
              Elite Sales &amp; Marketing
              <span className="text-sm font-normal text-white/50">101–601</span>
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60">
            Internal resource portal for Loan Factory loan officers. Training
            videos, slide decks, handouts, scripts, and replays — organized
            across two academies, the resource library, and the replay
            library.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Link href="/ai-advantage/" className="btn-primary">
              AI Advantage
            </Link>
            <Link
              href="/sales/"
              className="btn-secondary border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/20"
            >
              Elite Sales &amp; Marketing
            </Link>
            <Link
              href="/resources/"
              className="btn-secondary border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/20"
            >
              Resources
            </Link>
            <Link
              href="/replays/"
              className="btn-secondary border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/20"
            >
              Replays
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-10 md:py-12">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-lf-orange">
            Welcome Message From Jeremy
          </p>
          <p className="prose-lf mt-3 max-w-2xl mx-auto text-sm text-lf-slate">
            Watch this quick overview to learn how to use the AI Advantage
            &amp; Elite Sales &amp; Marketing Resource Hub, where to find
            replays, handouts, scripts, prompts, audio resources, playbooks,
            trackers, and recommended YouTube channels.
          </p>
          <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl border border-lf-line bg-black">
            <iframe
              width="560"
              height="315"
              src="https://app.heygen.com/embeds/eeed69d0af7a4fd0b343e806183d0e93"
              title="Welcome AI Advantage &amp; Elite Sales &amp; Marketing 101-601"
              className="h-full w-full"
              allow="encrypted-media; fullscreen;"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="container-page grid gap-5 py-10 md:grid-cols-2 md:py-14">
        <Link
          href="/ai-advantage/"
          className="group card flex min-h-[220px] flex-col gap-4 border-lf-line bg-white transition hover:-translate-y-0.5 hover:border-lf-orange hover:shadow-lift"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-lf-orange">
            101–601
          </span>
          <h2 className="h-display text-2xl">AI Advantage</h2>
          <p className="prose-lf flex-1 text-sm text-lf-slate leading-relaxed">
            AI Twin setup, client communication, marketing, automation,
            elite execution. Training videos, handouts, and audio
            companions for each module.
          </p>
          <span className="text-sm font-semibold text-lf-orange group-hover:underline">
            AI Advantage 101–601
          </span>
        </Link>
        <Link
          href="/sales/"
          className="group card flex min-h-[220px] flex-col gap-4 border-lf-line bg-white transition hover:-translate-y-0.5 hover:border-lf-orange hover:shadow-lift"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-lf-orange">
            101–601
          </span>
          <h2 className="h-display text-2xl">Elite Sales &amp; Marketing</h2>
          <p className="prose-lf flex-1 text-sm text-lf-slate leading-relaxed">
            Foundation, borrower conversion, referral partners, content,
            pipeline, elite execution. Training videos, handouts, scripts,
            prompts, and roleplays for each module.
          </p>
          <span className="text-sm font-semibold text-lf-orange group-hover:underline">
            Elite Sales &amp; Marketing 101–601
          </span>
        </Link>
      </section>

      <section className="border-t border-lf-line bg-lf-mist">
        <div className="container-page grid gap-5 py-10 md:grid-cols-2 md:py-12">
          <Link
            href="/resources/"
            className="group card flex min-h-[140px] flex-col gap-3 border-lf-line bg-white transition hover:-translate-y-0.5 hover:border-lf-orange hover:shadow-lift"
          >
            <h3 className="h-display text-lg">Resource Library</h3>
            <p className="prose-lf text-sm text-lf-slate">
              Prompts, scripts, roleplays, audio, trackers, and playbooks.
            </p>
            <span className="mt-auto text-sm font-semibold text-lf-orange group-hover:underline">
              Resource Library
            </span>
          </Link>
          <Link
            href="/replays/"
            className="group card flex min-h-[140px] flex-col gap-3 border-lf-line bg-white transition hover:-translate-y-0.5 hover:border-lf-orange hover:shadow-lift"
          >
            <h3 className="h-display text-lg">Replay Library</h3>
            <p className="prose-lf text-sm text-lf-slate">
              AI Advantage videos, AI training deep dives, and audio
              companions.
            </p>
            <span className="mt-auto text-sm font-semibold text-lf-orange group-hover:underline">
              Replay Library
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
