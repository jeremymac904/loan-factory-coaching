"use client";

import { useEffect, useState } from "react";

type Props = {
  moduleId: string;
};

type ProgressState = "loading" | "not-started" | "complete" | "error";

export default function MarkCompleteButton({ moduleId }: Props) {
  const [state, setState] = useState<ProgressState>("loading");
  const [completedAt, setCompletedAt] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch(`/api/progress?moduleId=${encodeURIComponent(moduleId)}`);
        if (!res.ok) {
          if (!cancelled) setState("not-started");
          return;
        }
        const data = await res.json();
        if (cancelled) return;
        if (data?.status === "complete") {
          setState("complete");
          setCompletedAt(data.completedAt ?? null);
        } else {
          setState("not-started");
        }
      } catch {
        if (!cancelled) setState("not-started");
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [moduleId]);

  async function handleClick() {
    if (state === "complete" || submitting) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/progress", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ moduleId }),
      });
      if (!res.ok) {
        setState("error");
        setSubmitting(false);
        return;
      }
      const data = await res.json();
      setState("complete");
      setCompletedAt(data.completedAt ?? new Date().toISOString());
    } catch {
      setState("error");
    } finally {
      setSubmitting(false);
    }
  }

  if (state === "loading") {
    return (
      <button
        type="button"
        disabled
        className="rounded-lg border border-lf-line bg-lf-mist px-4 py-2 text-sm font-semibold text-lf-slate"
      >
        Loading…
      </button>
    );
  }

  if (state === "complete") {
    const formatted = completedAt
      ? new Date(completedAt).toLocaleDateString()
      : "—";
    return (
      <span className="inline-flex items-center gap-2 rounded-lg border border-lf-orange/40 bg-lf-orangeSoft px-4 py-2 text-sm font-semibold text-lf-orange">
        <span aria-hidden>✓</span> Completed · {formatted}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={submitting}
      className="rounded-lg bg-lf-orange px-4 py-2 text-sm font-bold text-white shadow transition hover:-translate-y-0.5 hover:bg-lf-orangeDark disabled:opacity-60"
    >
      {submitting ? "Marking…" : state === "error" ? "Retry" : "Mark module complete"}
    </button>
  );
}
