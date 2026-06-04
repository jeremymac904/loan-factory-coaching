import { RoutePageView } from "@/components/CoachingCards";
import { managerPages } from "@/data/coachingPlatform";

export const metadata = { title: "Manager Dashboard" };

export default function ManagerDashboardPage() {
  return (
    <RoutePageView
      page={{
        eyebrow: "Manager dashboard",
        title: "Manager Dashboard",
        description:
          "Manager view for coaches, members, program status, and reporting across the paid coaching platform.",
        primaryHref: "/manager-dashboard/coaches/",
        primaryLabel: "Review coaches",
        secondaryHref: "/manager-dashboard/reporting/",
        secondaryLabel: "Open reporting",
        cards: Object.entries(managerPages).map(([slug, page]) => ({
          title: page.title,
          body: page.description,
          href: `/manager-dashboard/${slug}/`,
        })),
        sidebarTitle: "Manager view",
        sidebarItems: [
          "Coach assignments",
          "Member progress",
          "Program status",
          "Reporting",
        ],
      }}
    />
  );
}
