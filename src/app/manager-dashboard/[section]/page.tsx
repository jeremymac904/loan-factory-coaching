import { notFound } from "next/navigation";
import { ManagerSection } from "@/components/CoachingPlatformViews";
import { getRoutePage, managerPages } from "@/data/coachingPlatform";

type Props = {
  params: Promise<{ section: string }> | { section: string };
};

export async function generateMetadata({ params }: Props) {
  const { section } = await params;
  const page = getRoutePage(managerPages, section);
  return { title: page?.title ?? "Manager Dashboard" };
}

export default async function ManagerSectionPage({ params }: Props) {
  const { section } = await params;
  const page = getRoutePage(managerPages, section);

  if (!page) {
    notFound();
  }

  return <ManagerSection section={section} />;
}
