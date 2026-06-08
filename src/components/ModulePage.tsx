import Link from "next/link";
import ModuleHero from "./ModuleHero";
import ModuleSummarySections from "./ModuleSummarySections";
import DoThisToday from "./DoThisToday";
import RecordingCard from "./RecordingCard";
import DownloadCard from "./DownloadCard";
import AudioTrainingCard from "./AudioTrainingCard";
import ComplianceCallout from "./ComplianceCallout";
import SectionHeading from "./SectionHeading";
import MarkCompleteButton from "./MarkCompleteButton";
import type { ModuleSummary } from "@/data/modules";
import { audioTraining } from "@/data/audioTraining";

type Props = {
  module: ModuleSummary;
  /** Optional handbook/title for the handout card. */
  handoutTitle?: string;
  handoutDescription?: string;
  /** Path to a downloadable handout (markdown or pdf). */
  handoutHref?: string;
  handoutFormat?: "MD" | "PDF" | "Word" | "PPTX";
  /** Optional audio slug to look up in audioTraining data. */
  audioSlug?: string;
  /** Optional pre-resolved audio entry (skips the lookup). */
  audioEntry?: ReturnType<typeof import("@/data/audioTraining")["audioTraining"]["find"]>;
  /** Compliance callout extras for specific modules. */
  extraCompliance?: { title: string; body: string }[];
  /** Children to render after the standard sections (for module-specific extras). */
  children?: React.ReactNode;
  /** Where the back-link points. */
  backHref?: string;
  backLabel?: string;
};

export default function ModulePage({
  module,
  handoutTitle,
  handoutDescription,
  handoutHref,
  handoutFormat = "MD",
  audioSlug,
  audioEntry: passedAudioEntry,
  extraCompliance,
  children,
  backHref = "/sales/",
  backLabel = "Sales Academy",
}: Props) {
  const audioEntry =
    passedAudioEntry ??
    (audioSlug
      ? audioTraining.find((a) => a.id === audioSlug)
      : undefined);
  const moduleId = `${module.slug}`;

  return (
    <>
      <ModuleHero
        level={module.level}
        title={module.title}
        promise={module.corePromise}
        audience={module.audience}
        status={module.status}
        outcomes={module.outcomes}
        levels={module.levels}
        backgroundImage="/media/dark-hero-background.png"
      />

      <section className="container-page pt-10">
        <DoThisToday items={module.doThisToday} />
      </section>

      <section className="container-page py-6">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-lf-slate">
            Module ID:{" "}
            <code className="rounded bg-lf-mist px-1.5 py-0.5 text-xs">
              {moduleId}
            </code>
          </p>
          {module.status === "full" ? (
            <MarkCompleteButton moduleId={moduleId} />
          ) : (
            <span className="rounded-lg border border-lf-orange/40 bg-lf-orangeSoft px-4 py-2 text-sm font-semibold text-lf-orange">
              {module.status === "summary" ? "Future module — coming soon" : "Coming soon"}
            </span>
          )}
        </div>
      </section>

      {module.status === "summary" && (
        <section className="container-page py-6">
          <div className="card border-lf-line bg-lf-mist">
            <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
              Future curriculum
            </p>
            <p className="prose-lf mt-2 text-base text-lf-charcoal">
              This module is in the future curriculum. The topic, audience, and
              topics list are placeholder content for the structural rotation.
              The training video, handout, and assignment will be produced when
              the module is recorded.
            </p>
          </div>
        </section>
      )}

      {module.trainingVideo && (
        <section className="container-page py-6">
          <SectionHeading
            eyebrow="Training"
            title="Watch the lesson."
            description={
              module.trainingVideo.description ??
              "Watch this first, then complete the assignment below."
            }
          />
          <div className="mt-6 max-w-3xl">
            <RecordingCard
              level={module.level}
              title={module.trainingVideo.title}
              description={module.trainingVideo.description}
              videoSrc={module.trainingVideo.embedUrl}
              videoTitle={module.trainingVideo.title}
            />
          </div>
        </section>
      )}

      {audioEntry && (
        <section className="container-page py-6">
          <SectionHeading
            eyebrow="Training audio"
            title="Listen on the way to a listing appointment."
            description="Audio companion for this module. Use it while driving, walking, or preparing for a call."
          />
          <div className="mt-6 max-w-3xl">
            <AudioTrainingCard item={audioEntry} />
          </div>
        </section>
      )}

      {handoutHref && (
        <section className="container-page py-6">
          <SectionHeading
            eyebrow="Handout"
            title="Download the lesson handout."
            description={
              handoutDescription ??
              "One page you can print, keep on your desk, and review before any call."
            }
          />
          <div className="mt-6 max-w-3xl">
            <DownloadCard
              title={handoutTitle ?? `${module.level} handout`}
              format={handoutFormat}
              description={handoutDescription ?? ""}
              downloadHref={handoutHref}
            />
          </div>
        </section>
      )}

      <ModuleSummarySections module={module} />

      {extraCompliance?.map((c) => (
        <section key={c.title} className="container-page pb-6">
          <ComplianceCallout title={c.title} variant="warning">
            <p>{c.body}</p>
          </ComplianceCallout>
        </section>
      ))}

      {children}

      {module.behaviorChange && (
        <section className="container-page pb-16">
          <div className="card border-lf-orange/40 bg-lf-orangeSoft">
            <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
              Behavior change
            </p>
            <p className="prose-lf mt-2 text-base text-lf-charcoal">
              {module.behaviorChange}
            </p>
          </div>
        </section>
      )}

      <section className="container-page pb-16">
        <p className="max-w-3xl text-sm leading-6 text-lf-slate">
          <Link href={backHref} className="font-semibold text-lf-orange">
            ← Back to {backLabel}
          </Link>
        </p>
      </section>
    </>
  );
}
