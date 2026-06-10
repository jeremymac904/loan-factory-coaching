import { CommunityFeedView } from "@/components/CoachingPlatformViews";

export const metadata = { title: "Member Feed" };

export default function MemberAreaHome() {
  return <CommunityFeedView program="mastery" />;
}
