"use client";

import Link from "next/link";
import type { ProgramKey } from "@/data/coachingPlatform";

type Props = {
  program: ProgramKey;
};

const programName: Record<ProgramKey, string> = {
  mastery: "LO Mastery",
  alliance: "Loan Factory Alliance",
};

const programTheme: Record<ProgramKey, { focus: string; weekly: string; today: string }> = {
  mastery: {
    focus: "Protect the Power Block",
    weekly: "10 Realtor conversations",
    today: "Build the call list, run the block before reactive work, and log the numbers before the day ends.",
  },
  alliance: {
    focus: "Inspect the business system",
    weekly: "15 strategic partner touches",
    today: "Review partner activity, database reactivation, content rhythm, and the system that needs coach feedback.",
  },
};

const quickLinks: { title: string; body: string; href: string }[] = [
  {
    title: "Community feed",
    body: "Posts, comments, pinned coach notes, scripts, wins.",
    href: "/member-area/community/",
  },
  {
    title: "Weekly scorecard",
    body: "Fill daily, save the draft, submit to coach on Friday.",
    href: "/member-area/scorecards/",
  },
  {
    title: "Execution trackers",
    body: "Daily execution, Realtor relationships, deal flow, follow-up.",
    href: "/member-area/trackers/",
  },
  {
    title: "Script library",
    body: "Search, filter, and copy scripts for live calls.",
    href: "/member-area/scripts/",
  },
  {
    title: "Playbooks",
    body: "Open, read, and mark steps complete.",
    href: "/member-area/playbooks/",
  },
  {
    title: "Classroom",
    body: "Twelve weekly modules with lessons and assignments.",
    href: "/member-area/classroom/",
  },
  {
    title: "Calendar",
    body: "Calls, planning windows, theme-day rhythm.",
    href: "/member-area/calendar/",
  },
  {
    title: "Resources",
    body: "Program-filtered Drive downloads.",
    href: "/member-area/resources/",
  },
  {
    title: "Profile",
    body: "Goals, current focus, account access.",
    href: "/member-area/profile/",
  },
];

export default function MemberDashboard({ program }: Props) {
  const theme = programTheme[program];
  return (
    <div className="grid gap-8">
      <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-lf-line bg-white p-6 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            {programName[program]} dashboard
          </p>
          <h2 className="h-display mt-2 text-3xl">{theme.focus}</h2>
          <p className="prose-lf mt-3 text-lf-slate">{theme.today}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/member-area/${program === "alliance" ? "alliance-scorecard" : "scorecards"}/`}
              className="btn-primary"
            >
              Open scorecard
            </Link>
            <Link
              href={`/member-area/${program === "alliance" ? "alliance-trackers" : "trackers"}/`}
              className="btn-secondary"
            >
              Open trackers
            </Link>
            <Link href="/member-area/community/" className="btn-secondary">
              Open community
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-lf-navy bg-lf-navy p-6 text-white shadow-card">
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            Weekly goal
          </p>
          <p className="mt-2 text-4xl font-black">{theme.weekly.split(" ")[0]}</p>
          <p className="mt-2 text-sm leading-6 text-white/72">
            {theme.weekly.split(" ").slice(1).join(" ")}.
          </p>
          <div className="mt-6 border-t border-white/10 pt-4 text-sm text-white/72">
            <p>Bring the scorecard, the tracker, the stuck point, and the next action to coaching.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="h-display text-2xl">Open the workspace</h2>
        <p className="prose-lf mt-2 text-lf-slate">
          Each link opens a real working tool, not a placeholder.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {quickLinks.map((link) => {
            const href =
              program === "alliance" && link.href.startsWith("/member-area/")
                ? link.href
                    .replace("/member-area/scorecards", "/member-area/alliance-scorecard")
                    .replace("/member-area/trackers", "/member-area/alliance-trackers")
                    .replace("/member-area/scripts", "/member-area/alliance-scripts")
                    .replace("/member-area/playbooks", "/member-area/alliance-playbooks")
                    .replace("/member-area/classroom", "/member-area/alliance-classroom")
                    .replace("/member-area/calendar", "/member-area/alliance-calendar")
                    .replace("/member-area/resources", "/member-area/alliance-resources")
                    .replace("/member-area/profile", "/member-area/alliance-profile")
                : link.href;
            return (
              <Link
                key={link.href}
                href={href}
                className="group flex h-full flex-col gap-2 rounded-2xl border border-lf-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-lf-orange hover:shadow-card"
              >
                <p className="text-base font-black text-lf-navy group-hover:text-lf-orange">
                  {link.title}
                </p>
                <p className="text-sm leading-6 text-lf-slate">{link.body}</p>
                <span className="mt-auto text-xs font-bold uppercase tracking-wide text-lf-orange">
                  Open <span aria-hidden>&rarr;</span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
