import Link from "next/link";
import {
  allianceScorecardMetrics,
  allianceWeeks,
  adminPages,
  adminUserRows,
  calendarItems,
  coachCommandPages,
  coachNotes,
  communityPosts,
  downloadResources,
  driveFolderUrl,
  leaderboardRows,
  managerCoachRows,
  managerPages,
  masteryWeeks,
  memberNav,
  memberPages,
  memberProgressRows,
  playbookLibrary,
  programStatusRows,
  programs,
  scorecardMetrics,
  scriptLibrary,
  themeDays,
  trackerDefinitions,
  type DownloadResource,
  type ProgramKey,
  type ProgramWeek,
} from "@/data/coachingPlatform";
import {
  CommunityExperience,
  WeeklyScorecardForm,
  ScriptLibraryWorkspace,
  PlaybookWorkspace,
  TrackerWorkspace,
  CoachNotesWorkspace,
} from "./CoachingInteractiveTools";
import CommunityFeed from "./CommunityFeed";
import ClassroomClient from "./ClassroomClient";

function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: { href: string; label: string; variant?: "primary" | "secondary" }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-lf-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/media/dark-hero-background.png)" }}
      />
      <div aria-hidden className="absolute inset-0 bg-black/76" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(242,106,31,0.28),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.96),rgba(15,15,15,0.66),rgba(0,0,0,0.92))]"
      />
      <div className="relative container-page py-10 md:py-12">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wide text-lf-orange">
            {eyebrow}
          </p>
          <h1 className="metal-title-dark mt-4 max-w-5xl text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/84">
            {description}
          </p>
          {actions && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {actions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={
                    action.variant === "secondary"
                      ? "btn-secondary w-full border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/20 sm:w-auto"
                      : "btn-primary w-full sm:w-auto"
                  }
                >
                  {action.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
        {label}
      </p>
      <h2 className="h-display mt-2 text-3xl">{title}</h2>
      {description && <p className="prose-lf mt-3 max-w-3xl text-lf-slate">{description}</p>}
    </div>
  );
}

function programName(program: ProgramKey) {
  return program === "mastery" ? "LO Mastery" : "Loan Factory Alliance";
}

function programWeeks(program: ProgramKey) {
  return program === "mastery" ? masteryWeeks : allianceWeeks;
}

function programScripts(program: ProgramKey) {
  return scriptLibrary.filter((script) =>
    (script.programs ?? ["mastery", "alliance"]).includes(program),
  );
}

function programPlaybooks(program: ProgramKey) {
  return playbookLibrary.filter((playbook) =>
    playbook.programs.some((scope) => scope === "shared" || scope === program),
  );
}

function programResources(program: ProgramKey) {
  return downloadResources.filter((resource) => {
    if (resource.category === "Coach Tools" || resource.audience === "Coach") {
      return false;
    }
    return (resource.programs ?? ["mastery", "alliance"]).includes(program);
  });
}

function programTrackerSet(program: ProgramKey) {
  return trackerDefinitions.filter((tracker) =>
    (tracker.programs ?? ["mastery", "alliance"]).includes(program),
  );
}

function programCommunityPosts(program: ProgramKey) {
  const filter = program === "alliance" ? "Alliance" : "LO Mastery";
  return communityPosts.filter((p) => p.role === filter || p.role === "Coach" || p.role === "Member");
}

function programLeaderboard(program: ProgramKey) {
  return leaderboardRows;
}

const memberRoutes: Record<string, { mastery: string; alliance: string }> = {
  Dashboard: { mastery: "/member-area/", alliance: "/member-area/alliance/" },
  Scorecard: { mastery: "/member-area/scorecards/", alliance: "/member-area/alliance-scorecard/" },
  Trackers: { mastery: "/member-area/trackers/", alliance: "/member-area/alliance-trackers/" },
  Scripts: { mastery: "/member-area/scripts/", alliance: "/member-area/alliance-scripts/" },
  Playbooks: { mastery: "/member-area/playbooks/", alliance: "/member-area/alliance-playbooks/" },
  Classroom: { mastery: "/member-area/classroom/", alliance: "/member-area/alliance-classroom/" },
  Community: { mastery: "/member-area/community/", alliance: "/member-area/community/" },
  Calendar: { mastery: "/member-area/calendar/", alliance: "/member-area/alliance-calendar/" },
  Resources: { mastery: "/member-area/resources/", alliance: "/member-area/alliance-resources/" },
  Profile: { mastery: "/member-area/profile/", alliance: "/member-area/alliance-profile/" },
};

const memberNavItems = [
  "Dashboard",
  "Community",
  "Scorecard",
  "Trackers",
  "Scripts",
  "Playbooks",
  "Classroom",
  "Calendar",
  "Resources",
  "Profile",
] as const;

function MemberSidebar({ program, active }: { program: ProgramKey; active: string }) {
  return (
    <aside className="border-r border-lf-line bg-white xl:sticky xl:top-28 xl:self-start">
      <div className="border-b border-lf-line p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
          {programName(program)} member
        </p>
        <p className="mt-1 text-sm text-lf-slate">Program workspace</p>
      </div>
      <nav className="grid gap-1 p-3">
        {memberNavItems.map((item) => {
          const href = memberRoutes[item][program];
          const isActive = item === active;
          return (
            <Link
              key={item}
              href={href}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                isActive
                  ? "bg-lf-orange text-white"
                  : "text-lf-charcoal hover:bg-lf-orangeSoft hover:text-lf-orange"
              }`}
            >
              {item}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-lf-line p-5">
        <Link
          href="/coach-command-center/"
          className="text-sm font-semibold text-lf-orange hover:text-lf-orangeDark"
        >
          Coach Command Center
        </Link>
      </div>
    </aside>
  );
}

function MemberLayout({
  program,
  active,
  children,
}: {
  program: ProgramKey;
  active: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-lf-mist">
      <div className="grid w-full grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)]">
        <MemberSidebar program={program} active={active} />
        <div className="min-w-0 p-5 md:p-8">{children}</div>
      </div>
    </div>
  );
}


export function ScorecardWorkspace({ program }: { program: ProgramKey }) {
  const isMastery = program === "mastery";
  const metrics = isMastery ? scorecardMetrics : allianceScorecardMetrics;
  return (
    <>
      <PageHero
        eyebrow={`${programName(program)} scorecard`}
        title="Weekly scorecard."
        description={isMastery
          ? "Daily activity, Realtor relationships, follow-up, applications, and weekly reflection for LO Mastery."
          : "Advanced activity, partner strategy, pipeline movement, systems bottlenecks, and weekly coach review for Alliance."}
      />
      <MemberLayout program={program} active="Scorecard">
        <WeeklyScorecardForm
          metrics={metrics}
          title={`${programName(program)} Weekly Scorecard`}
          programLabel={programName(program)}
        />
      </MemberLayout>
    </>
  );
}

export function TrackerWorkspaceView({ program }: { program: ProgramKey }) {
  return (
    <>
      <PageHero
        eyebrow={`${programName(program)} trackers`}
        title="Execution trackers."
        description="Real editable trackers with local save, summary, and coach review readiness."
      />
      <MemberLayout program={program} active="Trackers">
        <TrackerWorkspace trackers={programTrackerSet(program)} />
      </MemberLayout>
    </>
  );
}

export function ScriptsLibrary({ program }: { program: ProgramKey }) {
  return (
    <>
      <PageHero
        eyebrow={`${programName(program)} scripts`}
        title="Script library."
        description="Search, filter, and copy scripts. Each script includes a use-when note, a goal, and a practice prompt."
      />
      <MemberLayout program={program} active="Scripts">
        <ScriptLibraryWorkspace scripts={programScripts(program)} />
      </MemberLayout>
    </>
  );
}

export function PlaybooksLibrary({ program }: { program: ProgramKey }) {
  return (
    <>
      <PageHero
        eyebrow={`${programName(program)} playbooks`}
        title="Playbooks."
        description="Step-by-step execution playbooks. Open one, work it, and mark steps complete as you go."
      />
      <MemberLayout program={program} active="Playbooks">
        <PlaybookWorkspace playbooks={programPlaybooks(program)} />
      </MemberLayout>
    </>
  );
}

export function ClassroomView({ program }: { program: ProgramKey }) {
  return (
    <>
      <PageHero
        eyebrow={`${programName(program)} classroom`}
        title="Classroom."
        description="Twelve weekly modules with lessons, assignments, tracked numbers, and win conditions."
      />
      <MemberLayout program={program} active="Classroom">
        <ClassroomClient weeks={programWeeks(program)} program={program} storageKey={`lf-classroom-${program}-progress`} />
      </MemberLayout>
    </>
  );
}

export function CalendarView({ program }: { program: ProgramKey }) {
  return (
    <>
      <PageHero
        eyebrow={`${programName(program)} calendar`}
        title="Weekly calendar."
        description="Calls, planning windows, review sessions, and the daily theme-day rhythm."
      />
      <MemberLayout program={program} active="Calendar">
        <CalendarBoard program={program} />
      </MemberLayout>
    </>
  );
}

export function ResourcesLibrary({ program }: { program: ProgramKey }) {
  const resources = programResources(program);
  return (
    <>
      <PageHero
        eyebrow={`${programName(program)} resources`}
        title="Resource library."
        description="Source Drive folder plus program-filtered PDFs and DOCX files."
        actions={[{ href: driveFolderUrl, label: "Open source Drive folder" }]}
      />
      <MemberLayout program={program} active="Resources">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((r) => (
            <ResourceCard key={r.title} resource={r} />
          ))}
        </div>
      </MemberLayout>
    </>
  );
}

export function ProfileView({ program }: { program: ProgramKey }) {
  const isMastery = program === "mastery";
  return (
    <>
      <PageHero
        eyebrow={`${programName(program)} profile`}
        title="Profile."
        description="Member goals, current focus, coaching alignment, and account access."
      />
      <MemberLayout program={program} active="Profile">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_330px]">
          <section className="rounded-2xl border border-lf-line bg-white p-6 shadow-card">
            <SectionTitle label="Member plan" title="Current 12-week goal" />
            <dl className="grid gap-4 md:grid-cols-2">
              {[
                ["Program", programName(program)],
                ["Current week", isMastery ? "Week 7: Realtor Partner Outreach" : "Week 3: The Numbers That Run the Business"],
                ["Daily number", isMastery ? "New agent contacts made" : "Conversion ratios mapped"],
                ["Coach focus", isMastery ? "Book meetings without pitching too early" : "Find the weakest handoff and document the fix"],
              ].map(([label, value]) => (
                <div key={label} className="border-l-2 border-lf-orange bg-lf-mist p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-lf-orange">{label}</dt>
                  <dd className="mt-2 text-lg font-black text-lf-navy">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
          <aside className="rounded-2xl border border-lf-line bg-white p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">Account access</p>
            <p className="prose-lf mt-3 text-sm text-lf-slate">
              Production sign-in uses the single Google authorization flow. Local review keeps pages visible without blocking review.
            </p>
            <Link href="/auth/google/?next=/member-area/" className="btn-secondary mt-5">
              Sign in with Google
            </Link>
          </aside>
        </div>
      </MemberLayout>
    </>
  );
}

function ResourceCard({ resource }: { resource: DownloadResource }) {
  return (
    <article className="flex min-h-[230px] flex-col rounded-2xl border border-lf-line bg-white p-5 shadow-card">
      <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
        {resource.category}
      </p>
      <h3 className="h-display mt-3 text-xl">{resource.title}</h3>
      <p className="prose-lf mt-2 text-sm text-lf-slate">{resource.description}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {resource.pdf && (
          <a href={resource.pdf} target="_blank" rel="noreferrer" className="btn-primary">
            Open PDF
          </a>
        )}
        {resource.docx && (
          <a href={resource.docx} target="_blank" rel="noreferrer" className="btn-secondary">
            Open DOCX
          </a>
        )}
      </div>
    </article>
  );
}

function CalendarBoard({ program }: { program: ProgramKey }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      <section className="grid gap-4">
        {calendarItems.map((item) => (
          <article key={item.day} className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
              {item.day} · {item.time}
            </p>
            <h2 className="h-display mt-2 text-2xl">{item.title}</h2>
            <p className="prose-lf mt-3 text-lf-slate">{item.focus}</p>
          </article>
        ))}
      </section>
      <aside className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">Theme days</p>
        <div className="mt-4 grid gap-3 text-sm leading-6 text-lf-charcoal">
          {themeDays.map((day) => (
            <div key={day.day} className="border-l-2 border-lf-orange pl-3">
              <p className="font-black text-lf-navy">{day.day}</p>
              <p>{program === "mastery" ? day.mastery : day.alliance}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

export function CommunityFeedView({ program }: { program: ProgramKey }) {
  const posts = programCommunityPosts(program);
  const leaderboard = programLeaderboard(program);
  return (
    <>
      <section className="relative isolate overflow-hidden bg-lf-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/media/dark-hero-background.png)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-black/72" />
        <div className="relative w-full px-5 py-10 md:px-10 md:py-12">
          <p className="text-xs font-bold uppercase tracking-wide text-lf-orange">
            {programName(program)} community
          </p>
          <h1 className="metal-title-dark mt-4 text-4xl md:text-5xl">
            Member feed.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/84">
            Posts, comments, pinned coach notes, scripts, and wins. The community is the homepage.
          </p>
        </div>
      </section>
      <div className="w-full bg-lf-mist px-5 py-8 md:px-10">
        <CommunityFeed posts={posts} leaderboard={leaderboard} />
      </div>
    </>
  );
}

export function MemberHome() {
  return <CommunityFeedView program="mastery" />;
}

export function MemberSection({ section }: { section: string }) {
  const map: Record<string, () => React.ReactElement> = {
    "lo-mastery": () => <CommunityFeedView program="mastery" />,
    alliance: () => <CommunityFeedView program="alliance" />,
    community: () => <CommunityFeedView program="mastery" />,
    scorecards: () => <ScorecardWorkspace program="mastery" />,
    "alliance-scorecard": () => <ScorecardWorkspace program="alliance" />,
    trackers: () => <TrackerWorkspaceView program="mastery" />,
    "alliance-trackers": () => <TrackerWorkspaceView program="alliance" />,
    scripts: () => <ScriptsLibrary program="mastery" />,
    "alliance-scripts": () => <ScriptsLibrary program="alliance" />,
    playbooks: () => <PlaybooksLibrary program="mastery" />,
    "alliance-playbooks": () => <PlaybooksLibrary program="alliance" />,
    classroom: () => <ClassroomView program="mastery" />,
    "alliance-classroom": () => <ClassroomView program="alliance" />,
    calendar: () => <CalendarView program="mastery" />,
    "alliance-calendar": () => <CalendarView program="alliance" />,
    resources: () => <ResourcesLibrary program="mastery" />,
    "alliance-resources": () => <ResourcesLibrary program="alliance" />,
    profile: () => <ProfileView program="mastery" />,
    "alliance-profile": () => <ProfileView program="alliance" />,
  };
  const Component = map[section];
  if (!Component) return null;
  return <Component />;
}

function PortalLayout({
  kind,
  pages,
  base,
  children,
}: {
  kind: string;
  pages: Record<string, { title: string }>;
  base: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-lf-mist py-10">
      <div className="container-page grid gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="self-start rounded-2xl border border-lf-line bg-white p-4 shadow-card lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">{kind}</p>
          <nav className="mt-4 grid gap-2">
            <Link href={`${base}/`} className="rounded-lg px-3 py-2 text-sm font-semibold text-lf-charcoal transition hover:bg-lf-orangeSoft hover:text-lf-orange">
              Overview
            </Link>
            {Object.entries(pages).map(([slug, page]) => (
              <Link
                key={slug}
                href={`${base}/${slug}/`}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-lf-charcoal transition hover:bg-lf-orangeSoft hover:text-lf-orange"
              >
                {page.title}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

function ProgressTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-lf-line bg-white shadow-card">
      <table className="w-full min-w-[780px] table-fixed text-left text-sm">
        <thead className="bg-lf-navy text-xs uppercase tracking-wide text-white/72">
          <tr>
            {["Member", "Program", "Week", "Focus", "Scorecard", "Next action", "Status"].map((heading) => (
              <th key={heading} className="px-4 py-3">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {memberProgressRows.map((row) => (
            <tr key={row.member} className="border-t border-lf-line">
              <td className="break-words px-4 py-4 font-bold text-lf-navy">{row.member}</td>
              <td className="break-words px-4 py-4 text-lf-slate">{row.program}</td>
              <td className="break-words px-4 py-4 text-lf-slate">{row.week}</td>
              <td className="break-words px-4 py-4 text-lf-charcoal">{row.focus}</td>
              <td className="break-words px-4 py-4 text-lf-slate">{row.scorecard}</td>
              <td className="break-words px-4 py-4 text-lf-charcoal">{row.nextAction}</td>
              <td className="px-4 py-4 text-xs font-bold uppercase tracking-wide text-lf-orange">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CoachCommandHome() {
  return (
    <>
      <PageHero
        eyebrow="Coach command center"
        title="Coach operating dashboard."
        description="Coach-facing workspace for member progress, weekly scorecards, tracker review, notes, and community response."
        actions={[
          { href: "/coach-command-center/members/", label: "Review members" },
          { href: "/coach-command-center/notes/", label: "Open notes", variant: "secondary" },
        ]}
      />
      <PortalLayout kind="Coach navigation" pages={coachCommandPages} base="/coach-command-center">
        <div className="grid gap-8">
          <ProgressTable />
          <CoachNotesWorkspace notes={coachNotes} members={memberProgressRows.map((row) => row.member)} />
        </div>
      </PortalLayout>
    </>
  );
}

export function CoachCommandSection({ section }: { section: string }) {
  const page = coachCommandPages[section];
  if (!page) return null;
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <PortalLayout kind="Coach navigation" pages={coachCommandPages} base="/coach-command-center">
        {section === "members" && (
          <div className="grid gap-6">
            <SectionTitle label="Member progress" title="Member Progress View" />
            <ProgressTable />
          </div>
        )}
        {section === "scorecards" && <WeeklyScorecardForm metrics={scorecardMetrics} title="Coach Scorecard Review" />}
        {section === "trackers" && <TrackerWorkspace trackers={trackerDefinitions} />}
        {section === "notes" && <CoachNotesWorkspace notes={coachNotes} members={memberProgressRows.map((row) => row.member)} />}
        {section === "community" && <CommunityExperience posts={communityPosts} leaderboard={leaderboardRows.map((row) => [row.name, row.metric, row.detail])} />}
      </PortalLayout>
    </>
  );
}

export function ManagerHome() {
  return (
    <>
      <PageHero
        eyebrow="Manager dashboard"
        title="Program management dashboard."
        description="Manager view for coaches, members, program status, and weekly execution reporting across the paid coaching platform."
        actions={[
          { href: "/manager-dashboard/reporting/", label: "Open reporting" },
          { href: "/manager-dashboard/program-status/", label: "Program status", variant: "secondary" },
        ]}
      />
      <PortalLayout kind="Manager navigation" pages={managerPages} base="/manager-dashboard">
        <div className="grid gap-8">
          <CoachLoadTable />
          <ProgramStatusGrid />
        </div>
      </PortalLayout>
    </>
  );
}

function CoachLoadTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-lf-line bg-white shadow-card">
      <table className="w-full min-w-[780px] text-left text-sm">
        <thead className="bg-lf-navy text-xs uppercase tracking-wide text-white/72">
          <tr>
            {["Coach", "Members", "Reviews due", "Scorecards ready", "Support need"].map((heading) => (
              <th key={heading} className="px-4 py-3">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {managerCoachRows.map((row) => (
            <tr key={row.coach} className="border-t border-lf-line">
              <td className="px-4 py-4 font-bold text-lf-navy">{row.coach}</td>
              <td className="px-4 py-4 text-lf-charcoal">{row.members}</td>
              <td className="px-4 py-4 text-lf-charcoal">{row.reviewsDue}</td>
              <td className="px-4 py-4 text-lf-charcoal">{row.scorecardsReady}</td>
              <td className="px-4 py-4 text-lf-slate">{row.supportNeed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProgramStatusGrid() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {programStatusRows.map((row) => (
        <article key={row.program} className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            {row.members} members
          </p>
          <h3 className="h-display mt-2 text-2xl">{row.program}</h3>
          <p className="prose-lf mt-3 text-lf-slate">{row.weeklyFocus}</p>
          <div className="mt-4 grid gap-3">
            <p className="rounded-xl bg-lf-orangeSoft p-3 text-sm font-semibold text-lf-orange">
              Health: {row.health}
            </p>
            <p className="rounded-xl bg-lf-mist p-3 text-sm text-lf-slate">
              Watch: {row.watch}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ManagerSection({ section }: { section: string }) {
  const page = managerPages[section];
  if (!page) return null;
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <PortalLayout kind="Manager navigation" pages={managerPages} base="/manager-dashboard">
        {section === "coaches" && (
          <div className="grid gap-6">
            <SectionTitle label="Coaches" title="Coach load and review needs" />
            <CoachLoadTable />
          </div>
        )}
        {section === "members" && (
          <div className="grid gap-6">
            <SectionTitle label="Members" title="Program-level member view" />
            <ProgressTable />
          </div>
        )}
        {section === "program-status" && <ProgramStatusGrid />}
        {section === "reporting" && (
          <div className="grid gap-6">
            <SectionTitle
              label="Reporting"
              title="Executive reporting surface"
              description="No fake production claims. This view reports coaching activity, scorecard rhythm, and visible execution indicators."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {[
                ["Scorecards ready", "28", "Members with a current weekly review item."],
                ["Coach reviews due", "12", "Review conversations scheduled this week."],
                ["Resources opened", `${downloadResources.length}`, "Drive-backed resource buttons available."],
              ].map(([label, value, body]) => (
                <div key={label} className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">{label}</p>
                  <p className="mt-3 text-4xl font-black text-lf-navy">{value}</p>
                  <p className="prose-lf mt-2 text-sm text-lf-slate">{body}</p>
                </div>
              ))}
            </div>
            <ProgramStatusGrid />
          </div>
        )}
      </PortalLayout>
    </>
  );
}

export function AdminHome() {
  return (
    <>
      <PageHero
        eyebrow="Admin"
        title="Platform administration."
        description="Administration for users, roles, programs, resources, and settings across the paid coaching platform."
        actions={[
          { href: "/admin/users/", label: "Review users" },
          { href: "/admin/resources/", label: "Review resources", variant: "secondary" },
        ]}
      />
      <PortalLayout kind="Admin navigation" pages={adminPages} base="/admin">
        <div className="grid gap-8">
          <AdminUsersTable />
          <AdminPrograms />
        </div>
      </PortalLayout>
    </>
  );
}

function AdminUsersTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-lf-line bg-white shadow-card">
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead className="bg-lf-navy text-xs uppercase tracking-wide text-white/72">
          <tr>
            {["Name", "Access", "Program", "Status"].map((heading) => (
              <th key={heading} className="px-4 py-3">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {adminUserRows.map((row) => (
            <tr key={row.name} className="border-t border-lf-line">
              <td className="px-4 py-4 font-bold text-lf-navy">{row.name}</td>
              <td className="px-4 py-4 text-lf-charcoal">{row.access}</td>
              <td className="px-4 py-4 text-lf-slate">{row.program}</td>
              <td className="px-4 py-4">
                <span className="text-xs font-bold uppercase tracking-wide text-lf-orange">
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AdminPrograms() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {programs.map((program) => (
        <article key={program.name} className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            {program.price} monthly display
          </p>
          <h3 className="h-display mt-2 text-2xl">{program.name}</h3>
          <p className="prose-lf mt-3 text-lf-slate">{program.bestFor}</p>
          <div className="mt-4 grid gap-2">
            {program.includes.map((item) => (
              <p key={item} className="rounded-xl bg-lf-mist px-3 py-2 text-sm font-semibold text-lf-charcoal">
                {item}
              </p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export function AdminSection({ section }: { section: string }) {
  const page = adminPages[section];
  if (!page) return null;
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <PortalLayout kind="Admin navigation" pages={adminPages} base="/admin">
        {section === "users" && <AdminUsersTable />}
        {section === "roles" && (
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Platform owner", "Full visibility across all coaching surfaces."],
              ["Coaching manager", "Manager dashboard, reporting, program status, coach load, and member progress."],
              ["Coach", "Coach command center, assigned members, scorecards, trackers, notes, and community."],
              ["Member", "Program dashboard, resources, scorecards, trackers, community, classroom, calendar, and profile."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
                <h3 className="h-display text-xl">{title}</h3>
                <p className="prose-lf mt-2 text-lf-slate">{body}</p>
              </article>
            ))}
          </div>
        )}
        {section === "programs" && <AdminPrograms />}
        {section === "resources" && (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {downloadResources.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        )}
        {section === "settings" && (
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Review access", "Requested coaching routes remain available for internal review without changing real records."],
              ["Google sign-in", "Public sign-in uses the Google auth route when environment settings are available."],
              ["Visible language", "The platform stays focused on paid coaching, weekly execution, scorecards, trackers, scripts, and community."],
              ["Download source", "Resource buttons use the approved Drive folder and file-level links where available."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
                <h3 className="h-display text-xl">{title}</h3>
                <p className="prose-lf mt-2 text-lf-slate">{body}</p>
              </article>
            ))}
          </div>
        )}
      </PortalLayout>
    </>
  );
}
