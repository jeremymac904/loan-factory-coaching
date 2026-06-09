import { notFound } from "next/navigation";
import ModulePage from "@/components/ModulePage";
import { findModule, modules } from "@/data/modules";
import { audioTraining } from "@/data/audioTraining";

type Params = { level: string };

const audioMap: Record<string, string> = {
  "201-borrower-conversion": "psychological-judo-in-mortgage-sales",
  "301-referral-partner-growth": "earn-realtor-trust-with-closing-certainty",
  "401-content-and-marketing": "mortgage-sales-psychology-and-ai-systems",
  "501-pipeline-and-sales-systems": "elite-mortgage-sales-operating-system",
  "601-elite-execution": "loan-factory-training-blueprint",
};

export function generateStaticParams() {
  return modules.map((m) => ({ level: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { level } = await params;
  const mod = findModule(level);
  if (!mod) return { title: "Sales Module" };
  const shortTitle = mod.title.split(":")[0];
  return { title: `${mod.level} ${shortTitle}` };
}

export default async function SalesModulePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { level } = await params;
  const mod = findModule(level);
  if (!mod) notFound();

  const audioSlug = audioMap[level];
  const audioEntry = audioSlug
    ? audioTraining.find((a) => a.id === audioSlug)
    : undefined;

  return (
    <ModulePage
      module={mod}
      handoutHref={mod.handoutHref}
      handoutTitle={`${mod.level} handout`}
      handoutDescription="One page you can print, keep on your desk, and review before any call."
      handoutFormat="DOCX"
      audioSlug={audioSlug}
      audioEntry={audioEntry}
      extraCompliance={
        mod.level === "301"
          ? [
              {
                title: "RESPA Section 8 reminder",
                body:
                  "No things of value tied to referrals. No gift cards, paid subscriptions, or paid event tickets for sending business. Co marketing requires both parties to pay pro rata, documented at fair market value. Any new MSA structure requires corporate approval.",
              },
            ]
          : undefined
      }
    />
  );
}
