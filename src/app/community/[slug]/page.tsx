import Link from "next/link";
import { notFound } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import CommunityFeed from "@/components/CommunityFeed";

const FALLBACK_CHANNELS: Record<string, { slug: string; name: string; description: string }> = {
  announcements: {
    slug: "announcements",
    name: "Announcements",
    description: "Coaching call reminders, schedule changes, and platform updates.",
  },
  "q-a": {
    slug: "q-a",
    name: "Q&A",
    description: "Ask a question. Get an answer from Jeremy, a coach, or a peer.",
  },
  wins: {
    slug: "wins",
    name: "Wins",
    description: "Closed a deal. Hit a new high. Hired an LO. Tell the room.",
  },
};

type Params = { slug: string };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  return { title: `${FALLBACK_CHANNELS[slug]?.name ?? "Channel"} — Community` };
}

export default async function CommunityChannelPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  let channel: { id: string; slug: string; name: string; description: string } | null =
    (FALLBACK_CHANNELS[slug]
      ? { id: "", ...FALLBACK_CHANNELS[slug] }
      : null);
  let posts: Array<{
    id: string;
    body: string;
    created_at: string;
    author_name: string | null;
  }> = [];
  let supabaseReady = false;

  try {
    const supabase = await createServerSupabaseClient();
    if (supabase) {
      supabaseReady = true;
      const { data: row } = await supabase
        .from("facegram_groups")
        .select("id,name,slug,description")
        .eq("slug", slug)
        .maybeSingle();
      if (row) {
        channel = {
          id: row.id,
          slug: row.slug,
          name: row.name,
          description: row.description ?? "",
        };

        const { data: postRows } = await supabase
          .from("facegram_posts")
          .select("id,body,created_at,user_id")
          .eq("group_id", row.id)
          .order("created_at", { ascending: false })
          .limit(50);

        const userIds = Array.from(
          new Set(
            (postRows ?? [])
              .map((p: { user_id: string | null }) => p.user_id)
              .filter((id): id is string => Boolean(id)),
          ),
        );
        let profileMap: Record<string, string> = {};
        if (userIds.length > 0) {
          const { data: profiles } = await supabase
            .from("profiles")
            .select("id,full_name,email")
            .in("id", userIds);
          profileMap = Object.fromEntries(
            (profiles ?? []).map((p: { id: string; full_name: string | null; email: string | null }) => [
              p.id,
              p.full_name ?? p.email ?? "Anonymous",
            ]),
          );
        }

        posts = (postRows ?? []).map(
          (p: { id: string; body: string; created_at: string; user_id: string | null }) => ({
            id: p.id,
            body: p.body,
            created_at: p.created_at,
            author_name: p.user_id ? profileMap[p.user_id] ?? "Anonymous" : "Anonymous",
          }),
        );
      }
    }
  } catch {
    supabaseReady = false;
  }

  if (!channel) notFound();

  return (
    <section className="container-page py-12">
      <p className="text-sm text-lf-slate">
        <Link href="/community/" className="font-semibold text-lf-orange">
          ← All channels
        </Link>
      </p>
      <div className="mt-3 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
          Community
        </p>
        <h1 className="h-display mt-2 text-3xl">{channel.name}</h1>
        <p className="prose-lf mt-2 text-lf-slate">{channel.description}</p>
      </div>

      <div className="mt-8">
        <CommunityFeed
          slug={channel.slug}
          channelName={channel.name}
          groupId={channel.id}
          supabaseReady={supabaseReady}
          initialPosts={posts}
        />
      </div>
    </section>
  );
}
