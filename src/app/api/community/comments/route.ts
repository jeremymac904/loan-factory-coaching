import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type CommentRow = {
  id: string;
  post_id: string;
  body: string;
  created_at: string;
  user_id: string | null;
};

export async function GET(req: Request) {
  const url = new URL(req.url);
  const postId = url.searchParams.get("postId");
  if (!postId) {
    return NextResponse.json({ error: "postId required" }, { status: 400 });
  }
  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ comments: [] });
  }
  const { data: rows, error } = await supabase
    .from("facegram_comments")
    .select("id,post_id,body,created_at,user_id")
    .eq("post_id", postId)
    .order("created_at", { ascending: true });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  const userIds = Array.from(
    new Set(
      (rows ?? [])
        .map((c: CommentRow) => c.user_id)
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
  const comments = (rows ?? []).map((c: CommentRow) => ({
    id: c.id,
    post_id: c.post_id,
    body: c.body,
    created_at: c.created_at,
    author_name: c.user_id ? profileMap[c.user_id] ?? "Anonymous" : "Anonymous",
  }));
  return NextResponse.json({ comments });
}

export async function POST(req: Request) {
  let body: { postId?: string; body?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const postId = typeof body.postId === "string" ? body.postId.trim() : "";
  const text = typeof body.body === "string" ? body.body.trim() : "";
  if (!postId || !text) {
    return NextResponse.json(
      { error: "postId and body required" },
      { status: 400 },
    );
  }
  if (text.length > 2000) {
    return NextResponse.json(
      { error: "Body too long (max 2000 chars)" },
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

  const { data: inserted, error } = await supabase
    .from("facegram_comments")
    .insert({
      post_id: postId,
      user_id: user.id,
      body: text,
      status: "internal_published",
    })
    .select("id,post_id,body,created_at,user_id")
    .single<CommentRow>();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    comment: {
      id: inserted!.id,
      post_id: inserted!.post_id,
      body: inserted!.body,
      created_at: inserted!.created_at,
      author_name: user.user_metadata?.full_name ?? user.email ?? "Anonymous",
    },
  });
}
