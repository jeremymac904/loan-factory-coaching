import Link from "next/link";
import PromptCard from "@/components/PromptCard";
import ScriptCard from "@/components/ScriptCard";
import AudioTrainingCard from "@/components/AudioTrainingCard";
import { prompts } from "@/data/prompts";
import { scripts } from "@/data/scripts";
import { audioTraining } from "@/data/audioTraining";
import { trackerDefinitions } from "@/data/coachingPlatform";
import { playbookLibrary } from "@/data/coachingPlatform";
import { recommendedChannelCategories } from "@/data/recommendedChannels";
import SectionHeading from "@/components/SectionHeading";

type SearchParams = Record<string, string | string[] | undefined>;
type Props = { searchParams?: Promise<SearchParams> | SearchParams };

const TABS = [
  { key: "prompts", label: "Prompts" },
  { key: "scripts", label: "Scripts" },
  { key: "audio", label: "Audio" },
  { key: "trackers", label: "Trackers" },
  { key: "playbooks", label: "Playbooks" },
  { key: "channels", label: "YouTube Channels" },
];

export const metadata = { title: "Resources" };

async function resolveTab(params: SearchParams): Promise<string> {
  const p = params ? await params : {};
  const t = typeof p.tab === "string" ? p.tab : "prompts";
  return TABS.some((x) => x.key === t) ? t : "prompts";
}

export default async function ResourcesPage({ searchParams }: Props) {
  const resolved = searchParams ? await searchParams : {};
  const tab = await resolveTab(resolved);

  return (
    <section className="container-page py-12">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
          Resources
        </p>
        <h1 className="h-display mt-2 text-3xl">Content library.</h1>
        <p className="prose-lf mt-3 text-lf-slate">
          Prompts, scripts, audio, trackers, playbooks, and
          YouTube channels. Everything an LO needs to do the work.
        </p>
      </div>

      <nav className="mt-8 flex flex-wrap gap-2 border-b border-lf-line" aria-label="Resource tabs">
        {TABS.map((t) => {
          const active = t.key === tab;
          return (
            <Link
              key={t.key}
              href={`/resources/?tab=${t.key}`}
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
        {tab === "prompts" && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {prompts.map((p) => <PromptCard key={p.id} prompt={p} />)}
          </div>
        )}
        {tab === "scripts" && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {scripts.map((s) => <ScriptCard key={s.id} script={s} />)}
          </div>
        )}
        {tab === "audio" && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {audioTraining.map((a) => <AudioTrainingCard key={a.id} item={a} />)}
          </div>
        )}
        {tab === "trackers" && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {trackerDefinitions.map((t) => (
              <article key={t.slug} className="card flex flex-col gap-3">
                <h3 className="h-display text-lg">{t.title}</h3>
                <p className="prose-lf text-sm text-lf-slate">{t.description}</p>
              </article>
            ))}
          </div>
        )}
        {tab === "playbooks" && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {playbookLibrary.map((p) => (
              <article key={p.title} className="card flex flex-col gap-3">
                <h3 className="h-display text-lg">{p.title}</h3>
                <p className="prose-lf text-sm text-lf-slate">{p.purpose}</p>
              </article>
            ))}
          </div>
        )}
        {tab === "channels" && (
          <div className="space-y-8">
            {recommendedChannelCategories.map((cat) => (
              <section key={cat.id}>
                <h2 className="h-display text-xl">{cat.title}</h2>
                <p className="prose-lf mt-1 text-sm text-lf-slate">{cat.description}</p>
                <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {cat.channels.filter((c) => c.urlType === "YouTube").map((c) => (
                    <a
                      key={c.name}
                      href={c.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="card flex flex-col gap-2 transition hover:-translate-y-0.5 hover:shadow-lift"
                    >
                      <h3 className="h-display text-lg">{c.name}</h3>
                      <p className="prose-lf text-sm text-lf-slate">{c.whatItIs}</p>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
