import { RoutePageView } from "@/components/CoachingCards";
import { coachCommandPages } from "@/data/coachingPlatform";

export const metadata = { title: "Coach Command Center" };

export default function CoachCommandCenterPage() {
  return (
    <RoutePageView
      page={{
        eyebrow: "Coach command center",
        title: "Coach Command Center",
        description:
          "Coach-facing operating view for members, scorecards, trackers, notes, and community questions.",
        primaryHref: "/coach-command-center/members/",
        primaryLabel: "Review members",
        secondaryHref: "/coach-command-center/scorecards/",
        secondaryLabel: "Review scorecards",
        cards: Object.entries(coachCommandPages).map(([slug, page]) => ({
          title: page.title,
          body: page.description,
          href: `/coach-command-center/${slug}/`,
        })),
        sidebarTitle: "Coach view",
        sidebarItems: [
          "Member progress",
          "Scorecard review",
          "Tracker review",
          "Coach notes",
        ],
      }}
    />
  );
}
