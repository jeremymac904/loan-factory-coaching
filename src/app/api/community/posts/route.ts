import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type GroupRow = { id: string; slug: string };

type PostRow = {
  id: string;
  body: string;
  created_at: string;
  user_id: string | null;
};

export async function GET(req: Request) {
  const url = new URL(req.url);
  const slug = url.searchParams.get("slug");
  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ posts: [] });
  }
  let query = supabase
    .from("facegram_posts")
    .select("id,body,created_at,user_id,group_id")
    .order("created_at", { ascending: false })
    .limit(50);
  if (slug) {
    const { data: group } = await supabase
      .from("facegram_groups")
      .select("id,slug")
      .eq("slug", slug)
      .maybeSingle<GroupRow>();
    if (!group) return NextResponse.json({ posts: [] });
    query = query.eq("group_id", group.id);
  }
  const { data: rows, error } = await query;
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  const userIds = Array.from(
    new Set(
      (rows ?? [])
        .map((p: PostRow) => p.user_id)
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
  const posts = (rows ?? []).map((p: PostRow) => ({
    id: p.id,
    body: p.body,
    created_at: p.created_at,
    author_name: p.user_id ? profileMap[p.user_id] ?? "Anonymous" : "Anonymous",
  }));
  return NextResponse.json({ posts });
}

export async function POST(req: Request) {
  let body: { slug?: string; body?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const slug = typeof body.slug === "string" ? body.slug.trim() : "";
  const text = typeof body.body === "string" ? body.body.trim() : "";
  if (!slug || !text) {
    return NextResponse.json(
      { error: "slug and body required" },
      { status: 400 },
    );
  }
  if (text.length > 4000) {
    return NextResponse.json(
      { error: "Body too long (max 4000 chars)" },
      { status: 400 },
    );
  }

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 503 });
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }

  const { data: group } = await supabase
    .from("facegram_groups")
    .select("id,slug")
    .eq("slug", slug)
    .maybeSingle<GroupRow>();
  if (!group) {
    return NextResponse.json({ error: "Channel not found" }, { status: 404 });
  }

  const { data: inserted, error } = await supabase
    .from("facegram_posts")
    .insert({
      user_id: user.id,
      group_id: group.id,
      body: text,
      post_type: "text",
      status: "internal_published",
    })
    .select("id,body,created_at,user_id")
    .single<PostRow>();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  let authorName = "Anonymous";
  if (inserted?.user_id) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name,email")
      .eq("id", inserted.user_id)
      .maybeSingle<{ full_name: string | null; email: string | null }>();
    authorName = profile?.full_name ?? profile?.email ?? authorName;
  }

  return NextResponse.json({
    post: {
      id: inserted!.id,
      body: inserted!.body,
      created_at: inserted!.created_at,
      author_name: authorName,
    },
  });
}
