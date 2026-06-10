import { CommunityFeedView } from "@/components/CoachingPlatformViews";

export const metadata = { title: "Alliance Member Feed" };

export default function AllianceMemberAreaHome() {
  return <CommunityFeedView program="alliance" />;
}
