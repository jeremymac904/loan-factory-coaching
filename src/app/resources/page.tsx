import Link from "next/link";
import PromptCard from "@/components/PromptCard";
import ScriptCard from "@/components/ScriptCard";
import RoleplayCard from "@/components/RoleplayCard";
import AudioTrainingCard from "@/components/AudioTrainingCard";
import { prompts } from "@/data/prompts";
import { scripts } from "@/data/scripts";
import { roleplays } from "@/data/roleplays";
import { audioTraining } from "@/data/audioTraining";
import { trackerDefinitions } from "@/data/coachingPlatform";
import { playbookLibrary } from "@/data/coachingPlatform";
import { recommendedChannelCategories } from "@/data/recommendedChannels";
import { aiTwinProfiles } from "@/data/aiTwins";
import SectionHeading from "@/components/SectionHeading";

type SearchParams = Record<string, string | string[] | undefined>;
type Props = {
  searchParams?: Promise<SearchParams> | SearchParams;
};

const TABS = [
  { key: "prompts", label: "Prompts", count: () => prompts.length },
  { key: "scripts", label: "Scripts", count: () => scripts.length },
  { key: "roleplays", label: "Roleplays", count: () => roleplays.length },
  { key: "audio", label: "Audio", count: () => audioTraining.length },
  { key: "trackers", label: "Trackers", count: () => trackerDefinitions.length },
  { key: "playbooks", label: "Playbooks", count: () => playbookLibrary.length },
  { key: "channels", label: "Channels", count: () =>
    recommendedChannelCategories.reduce((n, c) => n + c.channels.length, 0) },
  { key: "twins", label: "AI Twins", count: () => aiTwinProfiles.length },
];

export const metadata = { title: "Resource Library" };

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
          Resource Library
        </p>
        <h1 className="h-display mt-2 text-3xl">Everything you need to do the work.</h1>
        <p className="prose-lf mt-3 text-lf-slate">
          Prompts, scripts, roleplays, audio, trackers, playbooks, channels,
          and AI Twin examples. All in one place.
        </p>
      </div>

      <nav
        className="mt-8 flex flex-wrap gap-2 border-b border-lf-line"
        aria-label="Resource tabs"
      >
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
              <span className="ml-2 text-xs text-lf-slate">{t.count()}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-8">
        {tab === "prompts" && (
          <>
            <SectionHeading
              eyebrow={`${prompts.length} prompts`}
              title="AI prompts. Edit every output before you send it."
              description="Grouped by category. Each prompt is a starting point — your context and your edit make it useful."
            />
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {prompts.map((p) => (
                <PromptCard key={p.id} prompt={p} />
              ))}
            </div>
          </>
        )}

        {tab === "scripts" && (
          <>
            <SectionHeading
              eyebrow={`${scripts.length} scripts`}
              title="Scripts. Always NMLS ID, never specific rates in cold outreach."
              description="Use these as starting points. Add your own context. Always edit before sending."
            />
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {scripts.map((s) => (
                <ScriptCard key={s.id} script={s} />
              ))}
            </div>
          </>
        )}

        {tab === "roleplays" && (
          <>
            <SectionHeading
              eyebrow={`${roleplays.length} roleplays`}
              title="Roleplays. Practice with a partner, score with a rubric."
              description="Each scenario has a setup, a goal, a duration, and watch-outs."
            />
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {roleplays.map((r) => (
                <RoleplayCard key={r.id} roleplay={r} />
              ))}
            </div>
          </>
        )}

        {tab === "audio" && (
          <>
            <SectionHeading
              eyebrow={`${audioTraining.length} audio sessions`}
              title="Audio training. Listen on the way to a listing appointment."
              description="Use while driving, walking, or preparing for a call. All audio includes key takeaways and a transcript."
            />
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {audioTraining.map((a) => (
                <AudioTrainingCard key={a.id} item={a} />
              ))}
            </div>
          </>
        )}

        {tab === "trackers" && (
          <>
            <SectionHeading
              eyebrow={`${trackerDefinitions.length} trackers`}
              title="Trackers. The weekly rhythm, in a spreadsheet."
              description="Each tracker has fields and a fill cadence. Pick 1 or 2. Run them every week."
            />
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {trackerDefinitions.map((t) => (
                <article key={t.slug} className="card flex flex-col gap-3">
                  <h3 className="h-display text-lg">{t.title}</h3>
                  <p className="prose-lf text-sm text-lf-slate">{t.description}</p>
                  {t.columns && t.columns.length > 0 && (
                    <details className="text-sm">
                      <summary className="cursor-pointer text-lf-orange">
                        {t.columns.length} columns
                      </summary>
                      <ul className="prose-lf mt-2 list-disc space-y-1 pl-5">
                        {t.columns.slice(0, 8).map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </details>
                  )}
                </article>
              ))}
            </div>
          </>
        )}

        {tab === "playbooks" && (
          <>
            <SectionHeading
              eyebrow={`${playbookLibrary.length} playbooks`}
              title="Playbooks. The system, written down."
              description="Each playbook is a repeatable flow. Use them as a coach with your team or with yourself."
            />
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {playbookLibrary.map((p) => (
                <article key={p.title} className="card flex flex-col gap-3">
                  <h3 className="h-display text-lg">{p.title}</h3>
                  <p className="prose-lf text-sm text-lf-slate">{p.purpose}</p>
                  {p.steps && p.steps.length > 0 && (
                    <details className="text-sm">
                      <summary className="cursor-pointer text-lf-orange">
                        {p.steps.length} steps
                      </summary>
                      <ol className="prose-lf mt-2 list-decimal space-y-1 pl-5">
                        {p.steps.slice(0, 6).map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ol>
                    </details>
                  )}
                </article>
              ))}
            </div>
          </>
        )}

        {tab === "channels" && (
          <>
            <SectionHeading
              eyebrow={`${recommendedChannelCategories.reduce(
                (n, c) => n + c.channels.length,
                0,
              )} channels`}
              title="Recommended channels. Educational only."
              description="External YouTube channels and websites. Not affiliated with Loan Factory. Watch, learn, do not copy verbatim."
            />
            <div className="mt-8 space-y-8">
              {recommendedChannelCategories.map((cat) => (
                <section key={cat.id}>
                  <h2 className="h-display text-xl">{cat.title}</h2>
                  <p className="prose-lf mt-1 text-sm text-lf-slate">
                    {cat.description}
                  </p>
                  <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {cat.channels.map((c) => (
                      <a
                        key={c.name}
                        href={c.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="card flex flex-col gap-2 transition hover:-translate-y-0.5 hover:shadow-lift"
                      >
                        <h3 className="h-display text-lg">{c.name}</h3>
                        <p className="prose-lf text-sm text-lf-slate">
                          {c.whatItIs}
                        </p>
                        {c.whyItHelps && (
                          <p className="prose-lf text-xs text-lf-slate">
                            <span className="font-semibold">Why it helps:</span>{" "}
                            {c.whyItHelps}
                          </p>
                        )}
                        <p className="mt-auto text-xs text-lf-orange">
                          Open {c.urlType ?? "link"} →
                        </p>
                      </a>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </>
        )}

        {tab === "twins" && (
          <>
            <SectionHeading
              eyebrow={`${aiTwinProfiles.length} example twins`}
              title="AI Twin examples. Use as a starting point."
              description="These are example Twin configurations for different roles. Fork them, edit, and save as your own."
            />
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {aiTwinProfiles.map((t) => (
                <article key={t.id} className="card flex flex-col gap-3">
                  <h3 className="h-display text-lg">{t.displayName}</h3>
                  <p className="prose-lf text-sm text-lf-slate">{t.summary}</p>
                  {t.helpsWith && t.helpsWith.length > 0 && (
                    <details className="text-sm">
                      <summary className="cursor-pointer text-lf-orange">
                        {t.helpsWith.length} capabilities
                      </summary>
                      <ul className="prose-lf mt-2 list-disc space-y-1 pl-5">
                        {t.helpsWith.slice(0, 6).map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </details>
                  )}
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
