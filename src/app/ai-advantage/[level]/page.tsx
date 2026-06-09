import { notFound } from "next/navigation";
import ModulePage from "@/components/ModulePage";
import { aiAdvantageModules, findAiAdvantageModule, getAiAdvantageVideosForModule } from "@/data/aiAdvantageModules";
import AiAdvantageVideoCard from "@/components/AiAdvantageVideoCard";
import SectionHeading from "@/components/SectionHeading";
import { prompts } from "@/data/prompts";
import PromptCard from "@/components/PromptCard";
type Params = { level: string };

const moduleToAcadPrefix: Record<string, string> = {
  "101-foundations": "ai-101",
  "201-twin-setup": "ai-201",
  "301-client-communication": "ai-301",
  "401-marketing-content": "ai-401",
  "501-apps-automation": "ai-501",
  "601-elite-execution": "ai-601",
};

export function generateStaticParams() {
  return aiAdvantageModules.map((m) => ({ level: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { level } = await params;
  const module = findAiAdvantageModule(level);
  if (!module) return { title: "AI Module" };
  const shortTitle = module.title.split(":")[0];
  return { title: `${module.level} ${shortTitle}` };
}

export default async function AiAdvantageModulePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { level } = await params;
  const mod = findAiAdvantageModule(level);
  if (!mod) notFound();

  const videos = getAiAdvantageVideosForModule(level);
  const modulePrompts = prompts.filter(
    (p) => p.module === moduleToAcadPrefix[level],
  );

  // Adapt to ModuleSummary shape
  const moduleSummary = {
    level: mod.level,
    slug: mod.slug,
    href: mod.href,
    title: mod.title,
    theme: mod.theme,
    corePromise: mod.corePromise,
    audience: mod.audience,
    status: "full" as const,
    levels: mod.levels,
    doThisToday: mod.doThisToday,
    outcomes: mod.outcomes,
    topics: mod.topics,
    assignment: mod.assignment,
    trackerMetrics: mod.trackerMetrics,
    coachNotes: mod.coachNotes,
    teamLeaderNotes: mod.teamLeaderNotes,
    complianceWatchOuts: mod.complianceWatchOuts,
    behaviorChange: mod.behaviorChange,
    handoutHref: mod.handoutHref,
  };

  return (
    <ModulePage
      module={moduleSummary}
      handoutHref={mod.handoutHref}
      handoutTitle={`${mod.level} handout`}
      handoutDescription="One page you can print, keep on your desk, and review before any AI-assisted task."
      handoutFormat="DOCX"
      backHref="/ai-advantage/"
      backLabel="AI Academy"
    >
      {videos.length > 0 && (
        <section className="container-page py-6">
          <SectionHeading
            eyebrow="AI Advantage videos"
            title={`Watch the ${videos.length} clips that ship with this module.`}
            description="Each clip is short. Watch the first one before you start the assignment."
          />
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <AiAdvantageVideoCard key={v.rowId} video={v} />
            ))}
          </div>
        </section>
      )}

      {modulePrompts.length > 0 && (
        <section className="container-page py-6">
          <SectionHeading
            eyebrow="AI prompts for this module"
            title="Open in AI Assistant with one click."
            description="Each prompt is pre-filled. Edit the result. Send."
          />
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {modulePrompts.map((p) => (
              <PromptCard key={p.id} prompt={p} />
            ))}
          </div>
        </section>
      )}
    </ModulePage>
  );
}
