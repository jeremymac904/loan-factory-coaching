import { CommunityFeedView } from "@/components/CoachingPlatformViews";

export const metadata = { title: "Alliance Community" };

export default function AllianceMemberAreaHome() {
  return <CommunityFeedView program="alliance" />;
}
