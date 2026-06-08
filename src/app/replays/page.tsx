import Link from "next/link";
import AiAdvantageVideoCard from "@/components/AiAdvantageVideoCard";
import { aiAdvantagePublishedVideos } from "@/data/aiAdvantagePublishedVideos";
import { aiTrainingVideos } from "@/data/aiTrainingVideos";
import AudioCompanionCard from "@/components/audio/AudioCompanionCard";
import { audioCompanions } from "@/data/audioCompanions";
import { audioTraining } from "@/data/audioTraining";
import SectionHeading from "@/components/SectionHeading";

type SearchParams = Record<string, string | string[] | undefined>;
type Props = {
  searchParams?: Promise<SearchParams> | SearchParams;
};

const TABS = [
  { key: "ai-advantage", label: "AI Advantage Videos" },
  { key: "ai-training", label: "AI Training Deep Dives" },
  { key: "audio", label: "Audio Companions" },
  { key: "recordings", label: "Live Recordings" },
];

export const metadata = { title: "Replay Library" };

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
          Replay Library
        </p>
        <h1 className="h-display mt-2 text-3xl">Watch and re-watch what works.</h1>
        <p className="prose-lf mt-3 text-lf-slate">
          The full library of AI Advantage videos, AI training deep dives,
          audio companions, and live coaching recordings.
        </p>
      </div>

      <nav
        className="mt-8 flex flex-wrap gap-2 border-b border-lf-line"
        aria-label="Replay tabs"
      >
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
          <>
            <SectionHeading
              eyebrow={`${aiAdvantagePublishedVideos.length} videos`}
              title="AI Advantage published videos."
              description="The full AI Advantage library. Each video is short and ships with a suggested lesson page."
            />
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {aiAdvantagePublishedVideos.map((v) => (
                <AiAdvantageVideoCard key={v.rowId} video={v} />
              ))}
            </div>
          </>
        )}

        {tab === "ai-training" && (
          <>
            <SectionHeading
              eyebrow={`${aiTrainingVideos.length} deep dives`}
              title="AI training long-form sessions."
              description="Long-form recordings with segments, best clips, and micro-lesson suggestions. Use for deep study."
            />
            <div className="mt-6 space-y-5">
              {aiTrainingVideos.slice(0, 8).map((v) => (
                <article key={v.id} className="card flex flex-col gap-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="h-display text-lg">{v.title}</h3>
                    <span className="text-xs text-lf-slate">
                      {v.duration} · {v.speaker}
                    </span>
                  </div>
                  <p className="prose-lf text-sm text-lf-slate">{v.topic}</p>
                  <p className="text-xs text-lf-slate">
                    <span className="font-semibold">Use for:</span> {v.recommendedUse}
                  </p>
                  {v.bestClipsToCutFirst && v.bestClipsToCutFirst.length > 0 && (
                    <details className="text-sm">
                      <summary className="cursor-pointer text-lf-orange">
                        {v.bestClipsToCutFirst.length} best clips to cut
                      </summary>
                      <ul className="prose-lf mt-2 list-disc space-y-1 pl-5">
                        {v.bestClipsToCutFirst.slice(0, 5).map((c) => (
                          <li key={c.segmentId}>
                            <span className="font-semibold">{c.clipTitle}</span>
                            <span className="text-lf-slate"> · {c.start}–{c.end}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </article>
              ))}
            </div>
          </>
        )}

        {tab === "audio" && (
          <>
            <SectionHeading
              eyebrow={`${audioCompanions.length + audioTraining.length} audio sessions`}
              title="Audio companions and training."
              description="Short-form audio for the commute, plus the full training audio library."
            />
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {audioCompanions.slice(0, 9).map((c) => (
                <AudioCompanionCard key={c.id} companion={c} />
              ))}
            </div>
            {audioTraining.length > 0 && (
              <details className="mt-8">
                <summary className="cursor-pointer text-sm font-semibold text-lf-orange">
                  Show full training audio library ({audioTraining.length})
                </summary>
                <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {audioTraining.map((a) => (
                    <article key={a.id} className="card flex flex-col gap-2">
                      <h4 className="h-display text-base">{a.title}</h4>
                      <p className="prose-lf text-sm text-lf-slate">{a.description}</p>
                      <p className="text-xs text-lf-slate">{a.duration}</p>
                    </article>
                  ))}
                </div>
              </details>
            )}
          </>
        )}

        {tab === "recordings" && (
          <>
            <SectionHeading
              eyebrow="Live recordings"
              title="Weekly AI training and live coaching."
              description="Recordings of live training sessions. Use for review or to catch up."
            />
            <div className="mt-6 card">
              <p className="prose-lf text-lf-slate">
                Live recordings will appear here as they're produced. The
                first batch covers the AI training meetings from
                February through May 2026 and the on-demand sessions from
                the Loans On Demand library.
              </p>
              <p className="prose-lf mt-3 text-sm text-lf-slate">
                To upload a new recording, drop the file in the team's
                shared Drive folder, then link it from the relevant
                module page in the academy.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
