import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type ProgressRow = {
  status: string;
  updated_at: string;
};

async function getSupabase() {
  try {
    return await createServerSupabaseClient();
  } catch {
    return null;
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const moduleId = url.searchParams.get("moduleId");
  if (!moduleId) {
    return NextResponse.json({ error: "moduleId required" }, { status: 400 });
  }

  const supabase = await getSupabase();
  if (!supabase) {
    return NextResponse.json({ status: "not-configured" }, { status: 503 });
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ status: "signed-out" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("training_progress")
    .select("status,updated_at")
    .eq("user_id", user.id)
    .eq("module_id", moduleId)
    .maybeSingle<ProgressRow>();

  if (error) {
    return NextResponse.json({ status: "error", error: error.message }, { status: 500 });
  }

  if (!data) {
    return NextResponse.json({ status: "not-started" });
  }

  return NextResponse.json({
    status: data.status,
    completedAt: data.updated_at,
  });
}

export async function POST(req: Request) {
  let body: { moduleId?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const moduleId = typeof body.moduleId === "string" ? body.moduleId.trim() : "";
  if (!moduleId) {
    return NextResponse.json({ error: "moduleId required" }, { status: 400 });
  }

  const supabase = await getSupabase();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase not configured" },
      { status: 503 },
    );
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }

  const completedAt = new Date().toISOString();

  const { data, error } = await supabase
    .from("training_progress")
    .upsert(
      {
        user_id: user.id,
        module_id: moduleId,
        status: "complete",
        updated_at: completedAt,
      },
      { onConflict: "user_id,module_id" },
    )
    .select("status,updated_at")
    .single<ProgressRow>();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    status: data?.status ?? "complete",
    completedAt: data?.updated_at ?? completedAt,
  });
}
