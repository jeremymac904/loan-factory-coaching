import Link from "next/link";
import AiAdvantageVideoCard from "@/components/AiAdvantageVideoCard";
import { aiAdvantagePublishedVideos } from "@/data/aiAdvantagePublishedVideos";
import { aiTrainingVideos } from "@/data/aiTrainingVideos";
import SectionHeading from "@/components/SectionHeading";

type SearchParams = Record<string, string | string[] | undefined>;
type Props = { searchParams?: Promise<SearchParams> | SearchParams };

const TABS = [
  { key: "ai-advantage", label: "AI Advantage" },
  { key: "sales", label: "Elite Sales & Marketing" },
  { key: "training", label: "Training Sessions" },
];

export const metadata = { title: "Replays" };

async function resolveTab(params: SearchParams): Promise<string> {
  const p = params ? await params : {};
  const t = typeof p.tab === "string" ? p.tab : "ai-advantage";
  return TABS.some((x) => x.key === t) ? t : "ai-advantage";
}

export default async function ReplaysPage({ searchParams }: Props) {
  const resolved = searchParams ? await searchParams : {};
  const tab = await resolveTab(resolved);

  return (
    <section className="container-page py-12">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
          Replays
        </p>
        <h1 className="h-display mt-2 text-3xl">Video library.</h1>
        <p className="prose-lf mt-3 text-lf-slate">
          AI Advantage videos, training sessions, and on-demand recordings.
        </p>
      </div>

      <nav className="mt-8 flex flex-wrap gap-2 border-b border-lf-line" aria-label="Replay tabs">
        {TABS.map((t) => {
          const active = t.key === tab;
          return (
            <Link
              key={t.key}
              href={`/replays/?tab=${t.key}`}
              className={
                "rounded-t-lg px-4 py-2 text-sm font-semibold transition " +
                (active
                  ? "border-b-2 border-lf-orange text-lf-orange"
                  : "text-lf-slate hover:text-lf-charcoal")
              }
            >
              {t.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-8">
        {tab === "ai-advantage" && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {aiAdvantagePublishedVideos.map((v) => (
              <AiAdvantageVideoCard key={v.rowId} video={v} />
            ))}
          </div>
        )}
        {tab === "sales" && (
          <div className="space-y-10">
            <div className="card">
              <SectionHeading
                eyebrow="Elite Sales &amp; Marketing · 201 Borrower Conversion"
                title="Official Full Training."
                description="Elite Sales &amp; Marketing 201 focuses on borrower conversion, communication, follow up, sales process improvement, and helping Loan Factory loan officers improve conversion from lead to application and from application to closed loan."
              />
              <div className="mt-6 aspect-video w-full max-w-[900px] overflow-hidden rounded-xl border border-lf-line bg-black">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/oqbJU2Szcs0"
                  title="Elite Sales & Marketing 201 Official Full Training"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <a
                href="https://youtu.be/oqbJU2Szcs0"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center text-sm font-semibold text-lf-orange hover:underline"
              >
                Watch On YouTube →
              </a>
            </div>
            <SectionHeading
              eyebrow="More Training Videos"
              title="Additional modules."
              description="Additional training videos will be added as they are recorded."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                { module: "101 Foundation", id: "fdqe2poMc98" },
              ].map((v) => (
                <div key={v.module} className="card flex flex-col gap-3">
                  <h3 className="h-display text-lg">{v.module}</h3>
                  <p className="prose-lf text-sm text-lf-slate">
                    Training video for {v.module}.
                  </p>
                  <a
                    href={`https://www.youtube.com/watch?v=${v.id}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm font-semibold text-lf-orange"
                  >
                    Watch on YouTube →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
        {tab === "training" && (
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Training Sessions"
              title="Long-form recordings."
              description="Complete training sessions with timestamps and topics."
            />
            {aiTrainingVideos.slice(0, 8).map((v) => (
              <article key={v.id} className="card flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="h-display text-lg">{v.title}</h3>
                  <span className="text-xs text-lf-slate">{v.duration}</span>
                </div>
                <p className="prose-lf text-sm text-lf-slate">{v.topic}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
