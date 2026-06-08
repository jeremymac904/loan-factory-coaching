import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata = { title: "Community" };
export const dynamic = "force-dynamic";

const FALLBACK_CHANNELS = [
  {
    slug: "announcements",
    name: "Announcements",
    description: "Coaching call reminders, schedule changes, and platform updates.",
  },
  {
    slug: "q-a",
    name: "Q&A",
    description: "Ask a question. Get an answer from Jeremy, a coach, or a peer.",
  },
  {
    slug: "wins",
    name: "Wins",
    description: "Closed a deal. Hit a new high. Hired an LO. Tell the room.",
  },
];

type GroupRow = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
};

export default async function CommunityPage() {
  let groups: Array<{ slug: string; name: string; description: string; postCount: number }> = [];
  let supabaseReady = false;

  try {
    const supabase = await createServerSupabaseClient();
    if (supabase) {
      supabaseReady = true;
      const { data: rows } = await supabase
        .from("facegram_groups")
        .select("id,name,slug,description")
        .order("name");
      const { data: counts } = await supabase
        .from("facegram_posts")
        .select("group_id");
      const countByGroup: Record<string, number> = {};
      (counts ?? []).forEach((p: { group_id: string | null }) => {
        if (!p.group_id) return;
        countByGroup[p.group_id] = (countByGroup[p.group_id] ?? 0) + 1;
      });
      groups = ((rows ?? []) as GroupRow[]).map((g) => ({
        slug: g.slug,
        name: g.name,
        description: g.description ?? "",
        postCount: countByGroup[g.id] ?? 0,
      }));
    }
  } catch {
    supabaseReady = false;
  }

  if (groups.length === 0) {
    groups = FALLBACK_CHANNELS.map((c) => ({ ...c, postCount: 0 }));
  }

  return (
    <section className="container-page py-12">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
          Community
        </p>
        <h1 className="h-display mt-2 text-3xl">
          Announcements, Q&amp;A, and Wins.
        </h1>
        <p className="prose-lf mt-3 text-lf-slate">
          A simple place to ask, share, and stay in the loop. Read what your
          peers are working on. Drop a win. Ask a question. Stay connected.
        </p>
        {!supabaseReady && (
          <p className="prose-lf mt-3 text-sm italic text-lf-slate">
            Sign in to see live posts and add your own.
          </p>
        )}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {groups.map((c) => (
          <Link
            key={c.slug}
            href={`/community/${c.slug}/`}
            className="card flex min-h-[180px] flex-col gap-3 transition hover:-translate-y-0.5 hover:shadow-lift"
          >
            <h2 className="h-display text-xl">{c.name}</h2>
            <p className="prose-lf text-sm text-lf-slate">{c.description}</p>
            <p className="mt-auto text-xs text-lf-slate">
              {c.postCount} {c.postCount === 1 ? "post" : "posts"}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
