import { notFound } from "next/navigation";
import { MemberSection } from "@/components/CoachingPlatformViews";
import { getRoutePage, memberPages } from "@/data/coachingPlatform";

type Props = {
  params: Promise<{ section: string }> | { section: string };
};

export async function generateMetadata({ params }: Props) {
  const { section } = await params;
  const page = getRoutePage(memberPages, section);
  return { title: page?.title ?? "Member Area" };
}

export default async function MemberAreaSectionPage({ params }: Props) {
  const { section } = await params;
  const page = getRoutePage(memberPages, section);

  if (!page) {
    notFound();
  }

  const content = <MemberSection section={section} />;

  if (!content) {
    notFound();
  }

  return content;
}
