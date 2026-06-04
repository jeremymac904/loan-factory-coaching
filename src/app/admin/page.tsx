import { RoutePageView } from "@/components/CoachingCards";
import { adminPages } from "@/data/coachingPlatform";

export const metadata = { title: "Admin" };

export default function AdminPage() {
  return (
    <RoutePageView
      page={{
        eyebrow: "Admin",
        title: "Admin",
        description:
          "Local review admin surface for users, roles, programs, resources, and settings. No real backend changes are saved from these pages.",
        primaryHref: "/admin/users/",
        primaryLabel: "Review users",
        secondaryHref: "/admin/settings/",
        secondaryLabel: "Review settings",
        cards: Object.entries(adminPages).map(([slug, page]) => ({
          title: page.title,
          body: page.description,
          href: `/admin/${slug}/`,
        })),
        sidebarTitle: "Admin review",
        sidebarItems: [
          "Master Admin",
          "Coaching Manager",
          "Coach",
          "LO Mastery Member",
          "Alliance Member",
        ],
      }}
    />
  );
}
