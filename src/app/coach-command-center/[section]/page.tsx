import { notFound } from "next/navigation";
import { CoachCommandSection } from "@/components/CoachingPlatformViews";
import { coachCommandPages, getRoutePage } from "@/data/coachingPlatform";

type Props = {
  params: Promise<{ section: string }> | { section: string };
};

export async function generateMetadata({ params }: Props) {
  const { section } = await params;
  const page = getRoutePage(coachCommandPages, section);
  return { title: page?.title ?? "Coach Command Center" };
}

export default async function CoachCommandSectionPage({ params }: Props) {
  const { section } = await params;
  const page = getRoutePage(coachCommandPages, section);

  if (!page) {
    notFound();
  }

  return <CoachCommandSection section={section} />;
}
