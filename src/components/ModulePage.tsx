import Link from "next/link";
import ModuleHero from "./ModuleHero";
import RecordingCard from "./RecordingCard";
import DownloadCard from "./DownloadCard";
import AudioTrainingCard from "./AudioTrainingCard";
import ComplianceCallout from "./ComplianceCallout";
import SectionHeading from "./SectionHeading";
import type { ModuleSummary } from "@/data/modules";
import { audioTraining } from "@/data/audioTraining";

type Props = {
  module: ModuleSummary;
  handoutTitle?: string;
  handoutDescription?: string;
  handoutHref?: string;
  handoutFormat?: "MD" | "PDF" | "Word" | "PPTX" | "DOCX";
  audioSlug?: string;
  audioEntry?: ReturnType<typeof audioTraining.find>;
  extraCompliance?: { title: string; body: string }[];
  children?: React.ReactNode;
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
  backLabel = "Elite Sales & Marketing",
}: Props) {
  const audioEntry =
    passedAudioEntry ??
    (audioSlug ? audioTraining.find((a) => a.id === audioSlug) : undefined);

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

      {module.trainingVideo && (
        <section className="container-page py-8">
          <SectionHeading
            eyebrow="Training"
            title="Watch the lesson."
            description={
              module.trainingVideo.description ??
              "Watch this first, then review the handout below."
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

      {handoutHref && (
        <section className="container-page py-6">
          <SectionHeading
            eyebrow="Handout"
            title="Download the lesson handout."
            description={
              handoutDescription ??
              "One page you can print and keep on your desk."
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

      {audioEntry && (
        <section className="container-page py-6">
          <SectionHeading
            eyebrow="Training audio"
            title="Listen on the way to a listing appointment."
            description="Audio companion for this module."
          />
          <div className="mt-6 max-w-3xl">
            <AudioTrainingCard item={audioEntry} />
          </div>
        </section>
      )}

      {extraCompliance?.map((c) => (
        <section key={c.title} className="container-page pb-6">
          <ComplianceCallout title={c.title} variant="warning">
            <p>{c.body}</p>
          </ComplianceCallout>
        </section>
      ))}

      {children}

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
