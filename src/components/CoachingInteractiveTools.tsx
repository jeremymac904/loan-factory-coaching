"use client";

import { useMemo, useState } from "react";
import type {
  CommunityPost,
  ScorecardMetric,
  TrackerDefinition,
} from "@/data/coachingPlatform";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export function WeeklyScorecardForm({
  metrics,
  title = "Weekly Scorecard",
}: {
  metrics: ScorecardMetric[];
  title?: string;
}) {
  const [values, setValues] = useState<Record<string, number[]>>(() =>
    Object.fromEntries(metrics.map((metric) => [metric.metric, metric.values])),
  );
  const [worked, setWorked] = useState("Protected the Power Block on the days it was scheduled.");
  const [stuck, setStuck] = useState("Follow-up slipped when appointments ran long.");
  const [focus, setFocus] = useState("Finish follow-up before opening reactive work.");
  const [copyState, setCopyState] = useState("Copy review summary");

  const totals = useMemo(
    () =>
      metrics.map((metric) => {
        const total = values[metric.metric]?.reduce((sum, value) => sum + value, 0) ?? 0;
        const percent = metric.goal > 0 ? Math.round((total / metric.goal) * 100) : 0;
        return { ...metric, total, percent };
      }),
    [metrics, values],
  );

  const overall = useMemo(() => {
    const totalPercent = totals.reduce((sum, metric) => sum + Math.min(metric.percent, 100), 0);
    return Math.round(totalPercent / totals.length);
  }, [totals]);

  function updateMetric(metric: string, dayIndex: number, nextValue: string) {
    const parsed = Number(nextValue);
    setValues((current) => {
      const row = [...(current[metric] ?? [0, 0, 0, 0, 0])];
      row[dayIndex] = Number.isFinite(parsed) ? parsed : 0;
      return { ...current, [metric]: row };
    });
  }

  async function copySummary() {
    const lines = [
      title,
      `Overall activity score: ${overall}%`,
      ...totals.map((metric) => `${metric.metric}: ${metric.total}/${metric.goal} (${metric.percent}%)`),
      `Worked: ${worked}`,
      `Stuck: ${stuck}`,
      `Next focus: ${focus}`,
    ];

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopyState("Copied");
      window.setTimeout(() => setCopyState("Copy review summary"), 1400);
    }
  }

  return (
    <section className="rounded-2xl border border-lf-line bg-white shadow-card">
      <div className="grid gap-4 border-b border-lf-line p-5 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            Native tool
          </p>
          <h2 className="h-display mt-2 text-2xl">{title}</h2>
          <p className="prose-lf mt-2 text-sm text-lf-slate">
            Fill daily, review weekly, and bring the numbers to coaching.
          </p>
        </div>
        <div className="rounded-xl bg-lf-navy p-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            Week pace
          </p>
          <p className="mt-2 text-4xl font-black">{overall}%</p>
          <p className="mt-1 text-xs text-white/65">Average capped at goal</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[790px] border-collapse text-left text-sm">
          <thead className="bg-lf-mist text-xs uppercase tracking-wide text-lf-slate">
            <tr>
              <th className="px-3 py-3">Metric</th>
              <th className="px-3 py-3">Goal</th>
              {days.map((day) => (
                <th key={day} className="px-3 py-3">
                  {day}
                </th>
              ))}
              <th className="px-3 py-3">Total</th>
              <th className="px-3 py-3">Pace</th>
            </tr>
          </thead>
          <tbody>
            {totals.map((metric) => (
              <tr key={metric.metric} className="border-t border-lf-line">
                <td className="px-3 py-3 font-semibold text-lf-navy">{metric.metric}</td>
                <td className="px-3 py-3 text-lf-slate">{metric.goal}</td>
                {days.map((day, dayIndex) => (
                  <td key={`${metric.metric}-${day}`} className="px-3 py-3">
                    <input
                      aria-label={`${metric.metric} ${day}`}
                      type="number"
                      min="0"
                      value={values[metric.metric]?.[dayIndex] ?? 0}
                      onChange={(event) => updateMetric(metric.metric, dayIndex, event.target.value)}
                      className="h-10 w-14 rounded-lg border border-lf-line bg-white px-2 text-sm font-semibold text-lf-navy outline-none focus:border-lf-orange"
                    />
                  </td>
                ))}
                <td className="px-3 py-3 font-bold text-lf-navy">{metric.total}</td>
                <td className="px-3 py-3">
                  <span className="rounded-full bg-lf-orangeSoft px-2 py-1 text-xs font-bold text-lf-orange">
                    {metric.percent}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 border-t border-lf-line p-5 lg:grid-cols-3">
        <label className="grid gap-2 text-sm font-semibold text-lf-navy">
          What worked this week
          <textarea
            value={worked}
            onChange={(event) => setWorked(event.target.value)}
            className="min-h-28 rounded-xl border border-lf-line p-3 text-sm font-normal text-lf-charcoal outline-none focus:border-lf-orange"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-lf-navy">
          What did not work
          <textarea
            value={stuck}
            onChange={(event) => setStuck(event.target.value)}
            className="min-h-28 rounded-xl border border-lf-line p-3 text-sm font-normal text-lf-charcoal outline-none focus:border-lf-orange"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-lf-navy">
          Next week's focus
          <textarea
            value={focus}
            onChange={(event) => setFocus(event.target.value)}
            className="min-h-28 rounded-xl border border-lf-line p-3 text-sm font-normal text-lf-charcoal outline-none focus:border-lf-orange"
          />
        </label>
      </div>

      <div className="flex flex-col gap-3 border-t border-lf-line p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-lf-slate">
          Browser review tool. Use the copied summary in coaching notes or email.
        </p>
        <button type="button" onClick={copySummary} className="btn-primary">
          {copyState}
        </button>
      </div>
    </section>
  );
}

export function TrackerWorkspace({ trackers }: { trackers: TrackerDefinition[] }) {
  const [activeSlug, setActiveSlug] = useState(trackers[0]?.slug ?? "");
  const [rowsByTracker, setRowsByTracker] = useState<Record<string, string[][]>>(() =>
    Object.fromEntries(trackers.map((tracker) => [tracker.slug, tracker.rows])),
  );
  const [copyState, setCopyState] = useState("Copy tracker snapshot");
  const active = trackers.find((tracker) => tracker.slug === activeSlug) ?? trackers[0];
  const rows = rowsByTracker[active.slug] ?? [];

  function updateCell(rowIndex: number, columnIndex: number, value: string) {
    setRowsByTracker((current) => {
      const nextRows = (current[active.slug] ?? []).map((row) => [...row]);
      nextRows[rowIndex][columnIndex] = value;
      return { ...current, [active.slug]: nextRows };
    });
  }

  async function copyTracker() {
    const lines = [
      active.title,
      active.columns.join(" | "),
      ...rows.map((row) => row.join(" | ")),
    ];

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopyState("Copied");
      window.setTimeout(() => setCopyState("Copy tracker snapshot"), 1400);
    }
  }

  return (
    <section className="rounded-2xl border border-lf-line bg-white shadow-card">
      <div className="border-b border-lf-line p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
          Native tools
        </p>
        <h2 className="h-display mt-2 text-2xl">Execution Trackers</h2>
        <p className="prose-lf mt-2 text-sm text-lf-slate">
          Move between daily execution, relationships, deal flow, theme days, time blocks, and greatness tracking.
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-[260px_minmax(0,1fr)]">
        <nav className="border-b border-lf-line bg-lf-mist p-3 lg:border-b-0 lg:border-r">
          <div className="grid gap-2">
            {trackers.map((tracker) => (
              <button
                key={tracker.slug}
                type="button"
                onClick={() => setActiveSlug(tracker.slug)}
                className={`rounded-xl px-3 py-3 text-left text-sm font-semibold transition ${
                  tracker.slug === active.slug
                    ? "bg-lf-orange text-white shadow-card"
                    : "bg-white text-lf-charcoal hover:bg-lf-orangeSoft hover:text-lf-orange"
                }`}
              >
                {tracker.title}
              </button>
            ))}
          </div>
        </nav>

        <div className="min-w-0 p-5">
          <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h3 className="h-display text-xl">{active.title}</h3>
              <p className="prose-lf mt-2 text-sm text-lf-slate">{active.description}</p>
            </div>
            <button type="button" onClick={copyTracker} className="btn-secondary">
              {copyState}
            </button>
          </div>
          <div className="overflow-x-auto rounded-xl border border-lf-line">
            <table className="w-full min-w-[840px] border-collapse text-left text-sm">
              <thead className="bg-lf-navy text-xs uppercase tracking-wide text-white/74">
                <tr>
                  {active.columns.map((column) => (
                    <th key={column} className="px-3 py-3">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={`${active.slug}-${rowIndex}`} className="border-t border-lf-line">
                    {row.map((cell, columnIndex) => (
                      <td key={`${active.slug}-${rowIndex}-${active.columns[columnIndex]}`} className="px-3 py-3 align-top">
                        <input
                          aria-label={`${active.title} ${rowIndex + 1} ${active.columns[columnIndex]}`}
                          value={cell}
                          onChange={(event) => updateCell(rowIndex, columnIndex, event.target.value)}
                          className="min-h-10 w-full min-w-28 rounded-lg border border-lf-line bg-white px-2 py-2 text-sm text-lf-charcoal outline-none focus:border-lf-orange"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CommunityExperience({
  posts,
  leaderboard,
}: {
  posts: CommunityPost[];
  leaderboard: string[][];
}) {
  const categories = ["All", "Pinned", "Wins", "Questions", "Scripts"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [localPosts, setLocalPosts] = useState(posts);
  const [composer, setComposer] = useState("");
  const visiblePosts = localPosts.filter(
    (post) => activeCategory === "All" || post.category === activeCategory,
  );

  function addPost() {
    const trimmed = composer.trim();
    if (!trimmed) {
      return;
    }

    setLocalPosts((current) => [
      {
        author: "Local Review Member",
        role: "Member",
        category: activeCategory === "All" ? "Questions" : activeCategory,
        title: trimmed.split("\n")[0].slice(0, 80),
        body: trimmed,
        comments: ["Local review discussion item."],
      },
      ...current,
    ]);
    setComposer("");
  }

  return (
    <section className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)_280px]">
      <aside className="rounded-2xl border border-lf-line bg-white p-4 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
          Categories
        </p>
        <nav className="mt-4 grid gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-lg px-3 py-2 text-left text-sm font-semibold ${
                activeCategory === category
                  ? "bg-lf-orange text-white"
                  : "bg-lf-mist text-lf-charcoal hover:bg-lf-orangeSoft hover:text-lf-orange"
              }`}
            >
              {category}
            </button>
          ))}
        </nav>
        <div className="mt-5 rounded-xl bg-lf-navy p-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            Weekly prompt
          </p>
          <p className="mt-2 text-sm leading-6 text-white/78">
            What follow-up needs a next action before the day ends?
          </p>
        </div>
      </aside>

      <main className="grid gap-5">
        <div className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
          <label className="grid gap-3 text-sm font-semibold text-lf-navy">
            Share a win, question, script example, or stuck point
            <textarea
              value={composer}
              onChange={(event) => setComposer(event.target.value)}
              className="min-h-28 rounded-xl border border-lf-line p-3 text-sm font-normal text-lf-charcoal outline-none focus:border-lf-orange"
              placeholder="Write the coaching conversation you want help with..."
            />
          </label>
          <div className="mt-4 flex justify-end">
            <button type="button" onClick={addPost} className="btn-primary">
              Add to local feed
            </button>
          </div>
        </div>

        {visiblePosts.map((post, index) => (
          <article key={`${post.title}-${index}`} className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-lf-orangeSoft px-2 py-1 text-xs font-bold text-lf-orange">
                    {post.category}
                  </span>
                  {post.pinned && (
                    <span className="rounded-full bg-lf-navy px-2 py-1 text-xs font-bold text-white">
                      Pinned
                    </span>
                  )}
                </div>
                <h2 className="h-display mt-3 text-xl">{post.title}</h2>
                <p className="mt-1 text-sm font-semibold text-lf-slate">
                  {post.author} · {post.role}
                </p>
              </div>
            </div>
            <p className="prose-lf mt-4 text-lf-charcoal">{post.body}</p>
            <div className="mt-5 grid gap-2">
              {post.comments.map((comment) => (
                <p key={comment} className="rounded-xl bg-lf-mist px-3 py-2 text-sm text-lf-slate">
                  {comment}
                </p>
              ))}
            </div>
          </article>
        ))}
      </main>

      <aside className="grid gap-5">
        <div className="rounded-2xl border border-lf-line bg-white p-4 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            Member sidebar
          </p>
          <div className="mt-4 grid gap-3">
            {["Scorecard due Friday", "Partner thread Wednesday", "Script practice open", "Coach notes ready"].map((item) => (
              <div key={item} className="rounded-xl bg-lf-mist p-3 text-sm font-semibold text-lf-charcoal">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-lf-line bg-white p-4 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            Leaderboard preview
          </p>
          <div className="mt-4 grid gap-3">
            {leaderboard.map((row, index) => (
              <div key={row[0]} className="rounded-xl border border-lf-line p-3">
                <p className="text-sm font-black text-lf-navy">
                  {index + 1}. {row[0]}
                </p>
                <p className="mt-1 text-xs text-lf-slate">{row.slice(1).join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}

export function CoachNotesWorkspace({
  notes,
  members,
}: {
  notes: { member: string; date: string; note: string; nextAction: string }[];
  members: string[];
}) {
  const [selectedMember, setSelectedMember] = useState(members[0] ?? "");
  const [note, setNote] = useState("Current obstacle: inconsistent follow-up after appointments.");
  const [nextAction, setNextAction] = useState("Use the follow-up tracker before the day ends.");
  const [localNotes, setLocalNotes] = useState(notes);

  function addNote() {
    setLocalNotes((current) => [
      {
        member: selectedMember,
        date: "Local review",
        note,
        nextAction,
      },
      ...current,
    ]);
  }

  return (
    <section className="grid gap-5 lg:grid-cols-[360px_minmax(0,1fr)]">
      <div className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
          Coach notes
        </p>
        <h2 className="h-display mt-2 text-2xl">Call Prep Note</h2>
        <div className="mt-5 grid gap-4">
          <label className="grid gap-2 text-sm font-semibold text-lf-navy">
            Member
            <select
              value={selectedMember}
              onChange={(event) => setSelectedMember(event.target.value)}
              className="h-11 rounded-lg border border-lf-line px-3 text-sm font-normal text-lf-charcoal outline-none focus:border-lf-orange"
            >
              {members.map((member) => (
                <option key={member}>{member}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-lf-navy">
            Current reality
            <textarea
              value={note}
              onChange={(event) => setNote(event.target.value)}
              className="min-h-28 rounded-xl border border-lf-line p-3 text-sm font-normal text-lf-charcoal outline-none focus:border-lf-orange"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-lf-navy">
            Next action
            <textarea
              value={nextAction}
              onChange={(event) => setNextAction(event.target.value)}
              className="min-h-24 rounded-xl border border-lf-line p-3 text-sm font-normal text-lf-charcoal outline-none focus:border-lf-orange"
            />
          </label>
          <button type="button" onClick={addNote} className="btn-primary">
            Add local note
          </button>
        </div>
      </div>
      <div className="grid gap-4">
        {localNotes.map((item, index) => (
          <article key={`${item.member}-${item.date}-${index}`} className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
              {item.date}
            </p>
            <h3 className="h-display mt-2 text-xl">{item.member}</h3>
            <p className="prose-lf mt-3 text-lf-charcoal">{item.note}</p>
            <p className="mt-4 rounded-xl bg-lf-orangeSoft p-3 text-sm font-semibold text-lf-orange">
              Next action: {item.nextAction}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
