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
  CoachNotesWorkspace,
  CommunityExperience,
  PlaybookWorkspace,
  ScriptLibraryWorkspace,
  TrackerWorkspace,
  WeeklyScorecardForm,
} from "./CoachingInteractiveTools";

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
  stats?: string[];
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

function memberHref(title: string, program: ProgramKey) {
  if (program === "mastery") {
    return memberNav.find((item) => item.title === title)?.href ?? "/member-area/";
  }

  const allianceRoutes: Record<string, string> = {
    Dashboard: "/member-area/alliance/",
    Scorecard: "/member-area/alliance-scorecard/",
    Trackers: "/member-area/alliance-trackers/",
    Scripts: "/member-area/alliance-scripts/",
    Playbooks: "/member-area/alliance-playbooks/",
    Classroom: "/member-area/alliance-classroom/",
    Community: "/member-area/community/",
    Calendar: "/member-area/alliance-calendar/",
    Resources: "/member-area/alliance-resources/",
    Profile: "/member-area/alliance-profile/",
  };

  return allianceRoutes[title] ?? "/member-area/alliance/";
}

function MemberLayout({
  children,
  program = "mastery",
}: {
  children: React.ReactNode;
  program?: ProgramKey;
}) {
  return (
    <section className="bg-lf-mist py-8">
      <div className="container-page grid gap-6 xl:grid-cols-[230px_minmax(0,1fr)]">
        <aside className="self-start border border-lf-line bg-white p-4 shadow-card xl:sticky xl:top-28">
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            Member navigation
          </p>
          <nav className="mt-4 grid gap-2">
            {memberNav.map((item) => (
              <Link
                key={item.href}
                href={memberHref(item.title, program)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-lf-charcoal transition hover:bg-lf-orangeSoft hover:text-lf-orange"
              >
                {item.title}
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
              <th key={heading} className="px-4 py-3">
                {heading}
              </th>
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
              <td className="px-4 py-4 text-xs font-bold uppercase tracking-wide text-lf-orange">
                {row.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProgramWeekGrid({ weeks }: { weeks: ProgramWeek[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {weeks.map((week) => (
        <details key={week.week} className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
          <summary className="cursor-pointer list-none">
            <p className="text-xs font-black uppercase tracking-wide text-lf-orange">
              Week {week.week}
            </p>
            <h3 className="h-display mt-3 text-xl">{week.theme}</h3>
            <p className="mt-2 text-sm font-semibold text-lf-slate">
              Number: {week.number}
            </p>
            <p className="mt-3 text-sm font-bold text-lf-orange">Open lesson</p>
          </summary>
          <div className="mt-5 border-t border-lf-line pt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-lf-slate">
              Phase: {week.phase}
            </p>
            <p className="prose-lf mt-3 text-sm text-lf-slate">
              Lesson goal: complete the week's activity, document the tracked number, and bring the result to coaching.
            </p>
            <p className="mt-4 text-sm font-semibold text-lf-navy">Assignment</p>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-lf-charcoal">
            {week.actions.map((action) => (
              <li key={action} className="border-l-2 border-lf-orange pl-3">
                {action}
              </li>
            ))}
            </ul>
            <p className="mt-4 border-l-2 border-lf-orange bg-lf-mist p-3 text-sm font-semibold text-lf-charcoal">
              Win condition: {week.win}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}

function ResourceCard({ resource }: { resource: DownloadResource }) {
  return (
    <article className="flex min-h-[230px] flex-col rounded-2xl border border-lf-line bg-white p-5 shadow-card">
      <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
        {resource.category} / {resource.audience}
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

function programName(program: ProgramKey) {
  return program === "mastery" ? "LO Mastery" : "Loan Factory Alliance";
}

function programWeeks(program: ProgramKey) {
  return program === "mastery" ? masteryWeeks : allianceWeeks;
}

function programScripts(program: ProgramKey) {
  return scriptLibrary.filter((script) =>
    (script.programs ?? ["shared"]).some((scope) => scope === "shared" || scope === program),
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

    return (resource.programs ?? ["shared"]).some((scope) => scope === "shared" || scope === program);
  });
}

function programTrackerSet(program: ProgramKey) {
  const allowed = program === "mastery"
    ? ["daily-execution", "realtor-relationships", "deal-flow", "follow-up", "theme-day-planner", "daily-time-blocker", "greatness-tracker"]
    : ["daily-execution", "realtor-relationships", "deal-flow", "follow-up", "theme-day-planner", "daily-time-blocker", "greatness-tracker"];

  return trackerDefinitions.filter((tracker) => allowed.includes(tracker.slug));
}

function ProgramShell({
  program,
  children,
}: {
  program: ProgramKey;
  children: React.ReactNode;
}) {
  return <MemberLayout program={program}>{children}</MemberLayout>;
}

export function MemberHome() {
  return <ProgramDashboard program="mastery" dashboardTitle="Your LO Mastery operating system." />;
}

export function MemberSection({ section }: { section: string }) {
  if (section === "lo-mastery") return <ProgramDashboard program="mastery" />;
  if (section === "alliance") return <ProgramDashboard program="alliance" />;
  if (section === "resources") return <ResourceLibrary program="mastery" />;
  if (section === "alliance-resources") return <ResourceLibrary program="alliance" />;
  if (section === "scorecards") return <ScorecardsPage program="mastery" />;
  if (section === "alliance-scorecard") return <ScorecardsPage program="alliance" />;
  if (section === "trackers") return <TrackersPage program="mastery" />;
  if (section === "alliance-trackers") return <TrackersPage program="alliance" />;
  if (section === "scripts") return <ScriptsPage program="mastery" />;
  if (section === "alliance-scripts") return <ScriptsPage program="alliance" />;
  if (section === "playbooks") return <PlaybooksPage program="mastery" />;
  if (section === "alliance-playbooks") return <PlaybooksPage program="alliance" />;
  if (section === "community") return <CommunityPage />;
  if (section === "classroom") return <ClassroomPage program="mastery" />;
  if (section === "alliance-classroom") return <ClassroomPage program="alliance" />;
  if (section === "calendar") return <CalendarPage program="mastery" />;
  if (section === "alliance-calendar") return <CalendarPage program="alliance" />;
  if (section === "profile") return <ProfilePage program="mastery" />;
  if (section === "alliance-profile") return <ProfilePage program="alliance" />;
  return null;
}

function ProgramDashboard({
  program,
  dashboardTitle,
}: {
  program: ProgramKey;
  dashboardTitle?: string;
}) {
  const isMastery = program === "mastery";
  const weeks = programWeeks(program);
  const currentWeek = isMastery ? weeks[6] : weeks[2];
  const title = dashboardTitle ?? `${programName(program)} operating dashboard.`;
  const description = isMastery
    ? "Daily execution, current week training, scorecard status, coach note, scripts, trackers, and next call in one workspace."
    : "Advanced planning, partner strategy, database reactivation, content rhythm, weekly coach review, and business growth systems in one workspace.";
  const nextAction = isMastery
    ? "Book two Realtor meetings from the current agent contact list."
    : "Update the conversion ratio map and identify the weakest business handoff.";
  const coachNote = isMastery
    ? "Lead with curiosity on the first Realtor call. Earn the meeting before offering solutions."
    : "Bring the ratio, the bottleneck, and the one system you will document before next review.";
  const scorecardHref = memberHref("Scorecard", program);
  const trackerHref = memberHref("Trackers", program);
  const scriptsHref = memberHref("Scripts", program);
  const classroomHref = memberHref("Classroom", program);

  return (
    <>
      <PageHero eyebrow="Member area" title={title} description={description} />
      <ProgramShell program={program}>
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_330px]">
          <main className="grid gap-5">
            <section className="rounded-2xl border border-lf-line bg-white p-6 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">Today focus</p>
              <h2 className="h-display mt-2 text-3xl">{isMastery ? "Protect the Power Block." : "Inspect the business system."}</h2>
              <p className="prose-lf mt-3 text-lf-slate">
                {isMastery
                  ? "Build the call list, run the block before reactive work, and log the numbers before the end of the day."
                  : "Review partner activity, database reactivation, content rhythm, and the system that needs coach feedback."}
              </p>
            </section>

            <section className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">Current week training</p>
                <h3 className="h-display mt-2 text-2xl">Week {currentWeek.week}: {currentWeek.theme}</h3>
                <p className="mt-3 text-sm font-semibold text-lf-slate">Tracked number: {currentWeek.number}</p>
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-lf-charcoal">
                  {currentWeek.actions.map((action) => (
                    <li key={action} className="border-l-2 border-lf-orange pl-3">{action}</li>
                  ))}
                </ul>
                <Link href={classroomHref} className="btn-secondary mt-5">Open lesson</Link>
              </article>

              <article className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">Weekly scorecard status</p>
                <h3 className="h-display mt-2 text-2xl">{isMastery ? "4 of 5 work blocks logged." : "Ratios mapped, review pending."}</h3>
                <p className="prose-lf mt-3 text-sm text-lf-slate">
                  {isMastery
                    ? "Finish Friday review, add the biggest stuck point, and submit to coach."
                    : "Submit the advanced scorecard after updating conversations, applications, contracts, and system bottleneck."}
                </p>
                <Link href={scorecardHref} className="btn-primary mt-5">Open scorecard</Link>
              </article>
            </section>

            <section className="grid gap-5 lg:grid-cols-3">
              <article className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">Next action</p>
                <p className="mt-3 text-lg font-semibold leading-7 text-lf-charcoal">{nextAction}</p>
                <Link href={trackerHref} className="mt-5 inline-flex text-sm font-bold text-lf-orange">Open tracker</Link>
              </article>
              <article className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">Coach note</p>
                <p className="mt-3 text-lg font-semibold leading-7 text-lf-charcoal">{coachNote}</p>
              </article>
              <article className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">Script for the week</p>
                <p className="mt-3 text-lg font-semibold leading-7 text-lf-charcoal">
                  {isMastery ? "Realtor First Call Script" : "Database Reactivation Script"}
                </p>
                <Link href={scriptsHref} className="mt-5 inline-flex text-sm font-bold text-lf-orange">Open scripts</Link>
              </article>
            </section>
          </main>

          <aside className="grid gap-5 self-start">
            <div className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">Upcoming call</p>
              <h3 className="h-display mt-2 text-xl">{isMastery ? "Friday scorecard review" : "Wednesday advanced review"}</h3>
              <p className="prose-lf mt-2 text-sm text-lf-slate">Bring scorecard, tracker, stuck point, and next action.</p>
            </div>
            <div className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">Theme day</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-lf-charcoal">
                {isMastery ? themeDays[2].mastery : themeDays[2].alliance}
              </p>
            </div>
            <div className="rounded-2xl border border-lf-line bg-lf-navy p-5 text-white shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">Weekly goal</p>
              <p className="mt-3 text-4xl font-black">{isMastery ? "10" : "15"}</p>
              <p className="mt-2 text-sm leading-6 text-white/72">{isMastery ? "Realtor conversations." : "Strategic partner touches."}</p>
            </div>
            <div className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">Leaderboard</p>
              <ol className="mt-4 grid gap-3 text-sm text-lf-slate">
                {leaderboardRows.slice(0, 3).map((row, index) => (
                  <li key={row[0]}><strong className="text-lf-navy">{index + 1}. {row[0]}</strong> - {row.slice(1).join(" / ")}</li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </ProgramShell>
    </>
  );
}

function ResourceLibrary({ program }: { program: ProgramKey }) {
  const resources = programResources(program);
  const categories = ["Curriculum", "Scripts", "Trackers", "Playbooks"] as const;

  return (
    <>
      <PageHero
        eyebrow="Member resources"
        title={`${programName(program)} resources.`}
        description="Program-filtered Drive downloads. Coach-only tools are kept out of the member resource library."
        actions={[{ href: driveFolderUrl, label: "Open source Drive folder" }]}
      />
      <ProgramShell program={program}>
        <div className="grid gap-6">
          {categories.map((category) => {
            const categoryResources = resources.filter((resource) => resource.category === category);
            if (categoryResources.length === 0) return null;

            return (
              <details key={category} className="rounded-2xl border border-lf-line bg-white p-5 shadow-card" open>
                <summary className="cursor-pointer font-display text-2xl font-semibold text-lf-navy">{category}</summary>
                <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {categoryResources.map((resource) => (
                    <ResourceCard key={resource.title} resource={resource} />
                  ))}
                </div>
              </details>
            );
          })}
        </div>
      </ProgramShell>
    </>
  );
}

function ScorecardsPage({ program }: { program: ProgramKey }) {
  const isMastery = program === "mastery";

  return (
    <>
      <PageHero
        eyebrow="Member scorecard"
        title={`${programName(program)} weekly scorecard.`}
        description={isMastery
          ? "Daily activity, Realtor relationships, follow-up, applications, and weekly reflection for LO Mastery."
          : "Advanced activity, partner strategy, pipeline movement, systems bottlenecks, and weekly coach review for Alliance."}
      />
      <ProgramShell program={program}>
        <WeeklyScorecardForm
          metrics={isMastery ? scorecardMetrics : allianceScorecardMetrics}
          title={`${programName(program)} Weekly Scorecard`}
          programLabel={programName(program)}
        />
      </ProgramShell>
    </>
  );
}

function TrackersPage({ program }: { program: ProgramKey }) {
  return (
    <>
      <PageHero
        eyebrow="Member trackers"
        title={`${programName(program)} execution trackers.`}
        description="Editable native trackers with local save, summary, and coach review readiness."
      />
      <ProgramShell program={program}>
        <TrackerWorkspace trackers={programTrackerSet(program)} />
      </ProgramShell>
    </>
  );
}

function ScriptsPage({ program }: { program: ProgramKey }) {
  return (
    <>
      <PageHero
        eyebrow="Member scripts"
        title={`${programName(program)} script library.`}
        description="Scripts are grouped by situation with copy buttons, usage notes, and practice prompts."
      />
      <ProgramShell program={program}>
        <ScriptLibraryWorkspace scripts={programScripts(program)} />
      </ProgramShell>
    </>
  );
}

function PlaybooksPage({ program }: { program: ProgramKey }) {
  return (
    <>
      <PageHero
        eyebrow="Member playbooks"
        title={`${programName(program)} playbooks.`}
        description="Execution playbooks with practical steps and completion tracking."
      />
      <ProgramShell program={program}>
        <PlaybookWorkspace playbooks={programPlaybooks(program)} />
      </ProgramShell>
    </>
  );
}

function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Member community"
        title="Coaching community feed."
        description="The feed is the page: composer, pinned posts, comments, category filters, leaderboard, and call context."
      />
      <ProgramShell program="mastery">
        <CommunityExperience posts={communityPosts} leaderboard={leaderboardRows} />
      </ProgramShell>
    </>
  );
}

function ClassroomPage({ program }: { program: ProgramKey }) {
  return (
    <>
      <PageHero
        eyebrow="Member classroom"
        title={`${programName(program)} classroom.`}
        description="Program-specific modules with lesson details, practice assignments, tracked numbers, and resource links."
      />
      <ProgramShell program={program}>
        <ProgramWeekGrid weeks={programWeeks(program)} />
      </ProgramShell>
    </>
  );
}

function CalendarPage({ program }: { program: ProgramKey }) {
  return (
    <>
      <PageHero
        eyebrow="Member calendar"
        title={`${programName(program)} weekly rhythm.`}
        description="Coaching calls, planning windows, review sessions, and theme-day execution."
      />
      <ProgramShell program={program}>
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
      </ProgramShell>
    </>
  );
}

function ProfilePage({ program }: { program: ProgramKey }) {
  const isMastery = program === "mastery";

  return (
    <>
      <PageHero
        eyebrow="Member profile"
        title={`${programName(program)} profile.`}
        description="Member goals, current focus, coaching alignment, and account access."
      />
      <ProgramShell program={program}>
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
      </ProgramShell>
    </>
  );
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
        stats={["Member progress", "Scorecard review", "Coach notes"]}
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
        {section === "community" && <CommunityExperience posts={communityPosts} leaderboard={leaderboardRows} />}
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
        stats={["Coach load", "Member progress", "Program health"]}
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
        stats={["Users", "Programs", "Resources"]}
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
