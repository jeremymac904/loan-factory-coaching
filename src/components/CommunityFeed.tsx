"use client";

import { useEffect, useState } from "react";

type Post = {
  id: string;
  body: string;
  created_at: string;
  author_name: string | null;
};

type Props = {
  slug: string;
  channelName: string;
  groupId?: string;
  supabaseReady: boolean;
  initialPosts: Post[];
};

type Comment = {
  id: string;
  body: string;
  created_at: string;
  author_name: string | null;
};

export default function CommunityFeed({
  slug,
  channelName,
  supabaseReady,
  initialPosts,
}: Props) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [draft, setDraft] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openComments, setOpenComments] = useState<Record<string, Comment[]>>({});

  async function submitPost() {
    const body = draft.trim();
    if (!body || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/community/posts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ slug, body }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message ?? data.error ?? `Request failed (${res.status})`);
      }
      const data = await res.json();
      setPosts((p) => [data.post, ...p]);
      setDraft("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setSubmitting(false);
    }
  }

  async function loadComments(postId: string) {
    if (openComments[postId]) {
      setOpenComments((s) => {
        const next = { ...s };
        delete next[postId];
        return next;
      });
      return;
    }
    try {
      const res = await fetch(`/api/community/comments?postId=${postId}`);
      if (!res.ok) {
        setOpenComments((s) => ({ ...s, [postId]: [] }));
        return;
      }
      const data = await res.json();
      setOpenComments((s) => ({ ...s, [postId]: data.comments ?? [] }));
    } catch {
      setOpenComments((s) => ({ ...s, [postId]: [] }));
    }
  }

  return (
    <>
      <div className="card flex flex-col gap-3">
        <h2 className="h-display text-lg">Post to {channelName}</h2>
        {supabaseReady ? (
          <>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Share an update, ask a question, drop a win…"
              rows={3}
              className="w-full rounded-lg border border-lf-line bg-white p-3 text-sm focus:border-lf-orange focus:outline-none focus:ring-2 focus:ring-lf-orange/30"
            />
            <div className="flex items-center justify-between">
              <p className="text-xs text-lf-slate">
                Plain text. Compliance safe — no specific rates, no competitor bashing.
              </p>
              <button
                type="button"
                onClick={submitPost}
                disabled={submitting || !draft.trim()}
                className="rounded-lg bg-lf-orange px-4 py-2 text-sm font-bold text-white shadow transition hover:-translate-y-0.5 hover:bg-lf-orangeDark disabled:opacity-60"
              >
                {submitting ? "Posting…" : "Post"}
              </button>
            </div>
            {error && (
              <p className="rounded-lg border border-lf-orange/40 bg-lf-orangeSoft p-2 text-sm text-lf-orange">
                {error}
              </p>
            )}
          </>
        ) : (
          <p className="text-sm italic text-lf-slate">
            Sign in to post.
          </p>
        )}
      </div>

      <div className="mt-8 space-y-4">
        {posts.length === 0 ? (
          <div className="card">
            <p className="text-sm italic text-lf-slate">
              No posts yet. Be the first to post.
            </p>
          </div>
        ) : (
          posts.map((p) => (
            <article key={p.id} className="card flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-lf-navy">
                  {p.author_name ?? "Anonymous"}
                </p>
                <p className="text-xs text-lf-slate">
                  {new Date(p.created_at).toLocaleString()}
                </p>
              </div>
              <p className="prose-lf whitespace-pre-wrap text-lf-charcoal">{p.body}</p>
              <div>
                <button
                  type="button"
                  onClick={() => loadComments(p.id)}
                  className="text-xs font-semibold text-lf-orange hover:underline"
                >
                  {openComments[p.id] ? "Hide comments" : "Show comments"}
                </button>
                {openComments[p.id] && (
                  <div className="mt-3 space-y-2 border-t border-lf-line pt-3">
                    {openComments[p.id].length === 0 ? (
                      <p className="text-xs italic text-lf-slate">No comments yet.</p>
                    ) : (
                      openComments[p.id].map((c) => (
                        <div key={c.id} className="rounded-lg bg-lf-mist p-3">
                          <p className="text-xs font-semibold text-lf-navy">
                            {c.author_name ?? "Anonymous"}
                          </p>
                          <p className="text-xs text-lf-slate">
                            {new Date(c.created_at).toLocaleString()}
                          </p>
                          <p className="prose-lf mt-1 whitespace-pre-wrap text-sm text-lf-charcoal">
                            {c.body}
                          </p>
                        </div>
                      ))
                    )}
                    <CommentForm postId={p.id} />
                  </div>
                )}
              </div>
            </article>
          ))
        )}
      </div>
    </>
  );
}

function CommentForm({ postId }: { postId: string }) {
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit() {
    const text = body.trim();
    if (!text || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/community/comments", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ postId, body: text }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message ?? data.error ?? `Request failed (${res.status})`);
      }
      const data = await res.json();
      setBody("");
      // Reload comments by reloading page or appending.
      window.location.reload();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mt-2 flex flex-col gap-2">
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Add a comment…"
        className="w-full rounded-lg border border-lf-line bg-white p-2 text-sm focus:border-lf-orange focus:outline-none focus:ring-2 focus:ring-lf-orange/30"
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            submit();
          }
        }}
      />
      {error && <p className="text-xs text-lf-orange">{error}</p>}
      <button
        type="button"
        onClick={submit}
        disabled={submitting || !body.trim()}
        className="self-end rounded-lg bg-lf-charcoal px-3 py-1.5 text-xs font-semibold text-white hover:bg-black disabled:opacity-60"
      >
        {submitting ? "Posting…" : "Comment"}
      </button>
    </div>
  );
}
