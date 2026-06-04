import { notFound } from "next/navigation";
import { AdminSection } from "@/components/CoachingPlatformViews";
import { adminPages, getRoutePage } from "@/data/coachingPlatform";

type Props = {
  params: Promise<{ section: string }> | { section: string };
};

export async function generateMetadata({ params }: Props) {
  const { section } = await params;
  const page = getRoutePage(adminPages, section);
  return { title: page?.title ?? "Admin" };
}

export default async function AdminSectionPage({ params }: Props) {
  const { section } = await params;
  const page = getRoutePage(adminPages, section);

  if (!page) {
    notFound();
  }

  return <AdminSection section={section} />;
}
