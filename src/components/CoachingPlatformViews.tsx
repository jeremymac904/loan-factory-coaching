import Link from "next/link";
import {
  allianceScorecardMetrics,
  allianceWeeks,
  adminPages,
  adminUserRows,
  calendarItems,
  coachingRails,
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
  programStatusRows,
  programs,
  scorecardMetrics,
  scriptLibrary,
  themeDays,
  trackerDefinitions,
  type DownloadResource,
  type ProgramWeek,
} from "@/data/coachingPlatform";
import {
  CoachNotesWorkspace,
  CommunityExperience,
  TrackerWorkspace,
  WeeklyScorecardForm,
} from "./CoachingInteractiveTools";

function PageHero({
  eyebrow,
  title,
  description,
  actions,
  stats,
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
      <div className="relative container-page grid gap-8 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-end">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wide text-lf-orange">
            {eyebrow}
          </p>
          <h1 className="metal-title-dark mt-5 max-w-4xl text-4xl md:text-5xl">
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

        <aside className="rounded-2xl border border-white/15 bg-black/48 p-5 shadow-2xl backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            Platform rhythm
          </p>
          <div className="mt-4 grid gap-3">
            {(stats ?? ["Daily execution", "Weekly scorecards", "Coach review"]).map((stat) => (
              <div key={stat} className="rounded-xl border border-white/10 bg-white/[0.05] p-3 text-sm font-semibold text-white/82">
                {stat}
              </div>
            ))}
          </div>
        </aside>
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

function MemberLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-lf-mist py-10">
      <div className="container-page grid gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="self-start rounded-2xl border border-lf-line bg-white p-4 shadow-card lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            Member navigation
          </p>
          <nav className="mt-4 grid gap-2">
            {memberNav.map((item) => (
              <Link
                key={item.href}
                href={item.href ?? "/member-area/"}
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
              <td className="px-4 py-4">
                <span className="rounded-full bg-lf-orangeSoft px-2 py-1 text-xs font-bold text-lf-orange">
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

function ProgramWeekGrid({ weeks }: { weeks: ProgramWeek[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {weeks.map((week) => (
        <article key={week.week} className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
          <div className="flex items-start justify-between gap-3">
            <p className="text-xs font-black uppercase tracking-wide text-lf-orange">
              Week {week.week}
            </p>
            <span className="rounded-full bg-lf-mist px-2 py-1 text-xs font-bold text-lf-slate">
              {week.phase}
            </span>
          </div>
          <h3 className="h-display mt-3 text-xl">{week.theme}</h3>
          <p className="mt-2 text-sm font-semibold text-lf-slate">
            Number: {week.number}
          </p>
          <ul className="mt-4 grid gap-2 text-sm leading-6 text-lf-charcoal">
            {week.actions.map((action) => (
              <li key={action} className="border-l-2 border-lf-orange pl-3">
                {action}
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-xl bg-lf-orangeSoft p-3 text-sm font-semibold text-lf-orange">
            Win: {week.win}
          </p>
        </article>
      ))}
    </div>
  );
}

function ResourceCard({ resource }: { resource: DownloadResource }) {
  return (
    <article className="flex min-h-[230px] flex-col rounded-2xl border border-lf-line bg-white p-5 shadow-card">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-lf-orangeSoft px-2 py-1 text-xs font-bold text-lf-orange">
          {resource.category}
        </span>
        <span className="rounded-full bg-lf-mist px-2 py-1 text-xs font-bold text-lf-slate">
          {resource.audience}
        </span>
      </div>
      <h3 className="h-display mt-4 text-xl">{resource.title}</h3>
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

export function MemberHome() {
  return (
    <>
      <PageHero
        eyebrow="Member area"
        title="Your weekly coaching operating system."
        description="This is the member workspace for the week: coaching feed, program dashboards, native scorecard, execution trackers, classroom, resources, and calendar."
        actions={[
          { href: "/member-area/scorecards/", label: "Open weekly scorecard" },
          { href: "/member-area/trackers/", label: "Open trackers", variant: "secondary" },
        ]}
        stats={["Power Block first", "Scorecard by Friday", "Bring one stuck point"]}
      />
      <MemberLayout>
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_310px]">
          <main className="grid gap-5">
            <section className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                    Pinned coaching focus
                  </p>
                  <h2 className="h-display mt-2 text-2xl">Protect the Power Block before the day gets loud.</h2>
                  <p className="prose-lf mt-3 text-lf-slate">
                    Complete the scorecard, update the tracker, and bring one specific stuck point to coaching.
                  </p>
                </div>
                <Link href="/member-area/community/" className="btn-primary shrink-0">
                  Open community
                </Link>
              </div>
            </section>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                ["LO Mastery Dashboard", "Daily time blocking, scripts, and the 12-week execution path.", "/member-area/lo-mastery/"],
                ["Alliance Dashboard", "Advanced planning, partner strategy, systems, and review rhythm.", "/member-area/alliance/"],
                ["Resource Library", "Script books, playbooks, trackers, PDFs, and coach tools.", "/member-area/resources/"],
                ["Classroom", "Lesson modules, assignments, and practice prompts by program.", "/member-area/classroom/"],
              ].map(([title, body, href]) => (
                <Link key={title} href={href} className="rounded-2xl border border-lf-line bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift">
                  <h3 className="h-display text-xl">{title}</h3>
                  <p className="prose-lf mt-2 text-sm text-lf-slate">{body}</p>
                  <span className="mt-5 inline-flex text-sm font-bold text-lf-orange">Open page</span>
                </Link>
              ))}
            </div>

            <section>
              <SectionTitle
                label="Member progress"
                title="Current coaching review queue"
                description="The member homepage shows real operating signals: week, focus, scorecard state, next action, and status."
              />
              <ProgressTable />
            </section>
          </main>

          <aside className="grid gap-5 self-start">
            <div className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                Today's execution
              </p>
              <div className="mt-4 grid gap-3">
                {["Build call list", "Run Power Block", "Update deal flow", "Log scorecard", "Prep tomorrow"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-lf-mist p-3">
                    <span className="h-3 w-3 rounded-full bg-lf-orange" />
                    <span className="text-sm font-semibold text-lf-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-lf-line bg-lf-navy p-5 text-white shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                This week
              </p>
              <p className="mt-3 text-4xl font-black">5</p>
              <p className="mt-2 text-sm leading-6 text-white/72">
                Protected work blocks is the baseline target before any other coaching review.
              </p>
            </div>
          </aside>
        </div>
      </MemberLayout>
    </>
  );
}

export function MemberSection({ section }: { section: string }) {
  if (section === "lo-mastery") {
    return <ProgramDashboard program="mastery" />;
  }
  if (section === "alliance") {
    return <ProgramDashboard program="alliance" />;
  }
  if (section === "resources") {
    return <ResourceLibrary />;
  }
  if (section === "scorecards") {
    return <ScorecardsPage />;
  }
  if (section === "trackers") {
    return <TrackersPage />;
  }
  if (section === "community") {
    return <CommunityPage />;
  }
  if (section === "classroom") {
    return <ClassroomPage />;
  }
  if (section === "calendar") {
    return <CalendarPage />;
  }
  if (section === "profile") {
    return <ProfilePage />;
  }
  return null;
}

function ProgramDashboard({ program }: { program: "mastery" | "alliance" }) {
  const isMastery = program === "mastery";
  const title = isMastery ? "LO Mastery Dashboard" : "Loan Factory Alliance Dashboard";
  const weeks = isMastery ? masteryWeeks : allianceWeeks;
  const focus = isMastery
    ? "Build the discipline: theme days, time blocks, scripts, scorecards, and coach review."
    : "Build the operating engine: systems, ratios, partner strategy, leadership, and advanced review.";

  return (
    <>
      <PageHero
        eyebrow="Member program"
        title={title}
        description={focus}
        actions={[
          { href: "/member-area/scorecards/", label: "Open scorecard" },
          { href: "/member-area/resources/", label: "Open resources", variant: "secondary" },
        ]}
        stats={isMastery ? ["5 rails", "12-week sprint", "Daily number"] : ["Advanced scorecard", "Partner strategy", "Leverage systems"]}
      />
      <MemberLayout>
        <div className="grid gap-8">
          <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_330px]">
            <div className="rounded-2xl border border-lf-line bg-white p-6 shadow-card">
              <SectionTitle
                label="Operating rails"
                title={isMastery ? "The five rails under LO Mastery" : "Alliance builds on the five rails"}
                description="The source curriculum keeps the program simple: visible activity, protected time, scripts, tracking, and coach review."
              />
              <div className="grid gap-3">
                {coachingRails.map((rail) => (
                  <div key={rail} className="rounded-xl bg-lf-mist p-3 text-sm font-semibold text-lf-charcoal">
                    {rail}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-lf-line bg-white p-6 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                Current week card
              </p>
              <h2 className="h-display mt-2 text-2xl">{weeks[0].theme}</h2>
              <p className="prose-lf mt-3 text-sm text-lf-slate">{weeks[0].actions.join(" ")}</p>
              <p className="mt-4 rounded-xl bg-lf-orangeSoft p-3 text-sm font-semibold text-lf-orange">
                Track: {weeks[0].number}
              </p>
            </div>
          </section>

          <section>
            <SectionTitle
              label="12-week curriculum"
              title={isMastery ? "LO Mastery lesson modules" : "Alliance lesson modules"}
              description="Each module has the week's theme, tracked number, daily actions, and win condition."
            />
            <ProgramWeekGrid weeks={weeks} />
          </section>
        </div>
      </MemberLayout>
    </>
  );
}

function ResourceLibrary() {
  const categories = ["Curriculum", "Scripts", "Trackers", "Playbooks", "Coach Tools"];

  return (
    <>
      <PageHero
        eyebrow="Member resources"
        title="Download resource library."
        description="Real coaching assets from the final Drive folder: curriculum packets, script book, scorecard, trackers, time blockers, playbooks, and coach tools."
        actions={[{ href: driveFolderUrl, label: "Open Drive folder" }]}
        stats={["PDF and DOCX links", "Member tools", "Coach packets"]}
      />
      <MemberLayout>
        <div className="grid gap-8">
          {categories.map((category) => {
            const resources = downloadResources.filter((resource) => resource.category === category);
            return (
              <section key={category}>
                <SectionTitle label="Library" title={category} />
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {resources.map((resource) => (
                    <ResourceCard key={resource.title} resource={resource} />
                  ))}
                </div>
              </section>
            );
          })}
          <ScriptLibrarySection />
        </div>
      </MemberLayout>
    </>
  );
}

function ScriptLibrarySection() {
  return (
    <section>
      <SectionTitle
        label="Script library"
        title="Core scripts inside the platform"
        description="The resource PDF contains the full script book. These native cards expose the scripts members need most often."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {scriptLibrary.map((script) => (
          <article key={script.title} className="rounded-2xl border border-lf-line bg-white p-5 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
              {script.category}
            </p>
            <h3 className="h-display mt-2 text-2xl">{script.title}</h3>
            <div className="mt-4 grid gap-3 text-sm">
              <p><strong className="text-lf-navy">Use when:</strong> {script.useWhen}</p>
              <p><strong className="text-lf-navy">Goal:</strong> {script.goal}</p>
            </div>
            <div className="mt-4 grid gap-2 rounded-xl bg-lf-mist p-4 text-sm leading-6 text-lf-charcoal">
              {script.script.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            {script.coachNote && (
              <p className="mt-4 rounded-xl bg-lf-orangeSoft p-3 text-sm font-semibold text-lf-orange">
                Coach note: {script.coachNote}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function ScorecardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Member scorecards"
        title="Weekly accountability scorecard."
        description="One page. Five to eight numbers. Filled daily and reviewed weekly with the coach."
        stats={["Leading activity", "Reflection", "Coach review"]}
      />
      <MemberLayout>
        <div className="grid gap-8">
          <WeeklyScorecardForm metrics={scorecardMetrics} title="LO Mastery Weekly Scorecard" />
          <WeeklyScorecardForm metrics={allianceScorecardMetrics} title="Alliance Weekly Scorecard" />
        </div>
      </MemberLayout>
    </>
  );
}

function TrackersPage() {
  return (
    <>
      <PageHero
        eyebrow="Member trackers"
        title="Daily execution tools."
        description="Native trackers for the work that creates coaching accountability: execution, partners, deal flow, theme days, time blocking, and greatness."
        stats={["Editable tables", "Copy snapshots", "No empty cards"]}
      />
      <MemberLayout>
        <TrackerWorkspace trackers={trackerDefinitions} />
      </MemberLayout>
    </>
  );
}

function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Member community"
        title="Coaching community feed."
        description="A focused Skool-style space for pinned prompts, wins, questions, scripts, comments, member sidebar, and leaderboard preview."
        stats={["Pinned posts", "Categories", "Leaderboard"]}
      />
      <MemberLayout>
        <CommunityExperience posts={communityPosts} leaderboard={leaderboardRows} />
      </MemberLayout>
    </>
  );
}

function ClassroomPage() {
  return (
    <>
      <PageHero
        eyebrow="Member classroom"
        title="Lesson modules by program."
        description="LO Mastery and Alliance lesson modules pulled from the coaching curriculum source files."
        stats={["12 LO Mastery lessons", "12 Alliance lessons", "Practice prompts"]}
      />
      <MemberLayout>
        <div className="grid gap-10">
          <section>
            <SectionTitle label="LO Mastery" title="Foundational execution modules" />
            <ProgramWeekGrid weeks={masteryWeeks} />
          </section>
          <section>
            <SectionTitle label="Loan Factory Alliance" title="Advanced operating modules" />
            <ProgramWeekGrid weeks={allianceWeeks} />
          </section>
        </div>
      </MemberLayout>
    </>
  );
}

function CalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Member calendar"
        title="Weekly coaching rhythm."
        description="The calendar page turns theme days into a practical review schedule for members and coaches."
        stats={["Theme days", "Review windows", "Coaching prep"]}
      />
      <MemberLayout>
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
            <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
              Theme day cheat sheet
            </p>
            <div className="mt-4 grid gap-3">
              {themeDays.map((day) => (
                <div key={day.day} className="rounded-xl bg-lf-mist p-3">
                  <p className="text-sm font-black text-lf-navy">{day.day}</p>
                  <p className="mt-1 text-xs text-lf-slate">Mastery: {day.mastery}</p>
                  <p className="mt-1 text-xs text-lf-slate">Alliance: {day.alliance}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </MemberLayout>
    </>
  );
}

function ProfilePage() {
  return (
    <>
      <PageHero
        eyebrow="Member profile"
        title="Goals, focus, and accountability settings."
        description="The profile view keeps member goals and weekly focus visible without turning the member homepage into a role selector."
        stats={["12-week goal", "Current focus", "Coach alignment"]}
      />
      <MemberLayout>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_330px]">
          <section className="rounded-2xl border border-lf-line bg-white p-6 shadow-card">
            <SectionTitle label="Member plan" title="Current 12-week goal" />
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["Program", "LO Mastery"],
                ["Current week", "Week 7: Realtor Partner Outreach"],
                ["Daily number", "New agent contacts made"],
                ["Coach focus", "Book meetings without pitching too early"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-lf-mist p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">{label}</p>
                  <p className="mt-2 text-lg font-black text-lf-navy">{value}</p>
                </div>
              ))}
            </div>
          </section>
          <aside className="rounded-2xl border border-lf-line bg-white p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
              Local review
            </p>
            <p className="prose-lf mt-3 text-sm text-lf-slate">
              Local review access is controlled outside the member dashboard. Member pages stay focused on coaching work.
            </p>
            <Link href="/login/" className="btn-secondary mt-5">
              Review login options
            </Link>
          </aside>
        </div>
      </MemberLayout>
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
        description="Local review administration for users, roles, programs, resources, and settings without changing real systems."
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
                <span className="rounded-full bg-lf-orangeSoft px-2 py-1 text-xs font-bold text-lf-orange">
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
              ["Platform owner", "Full local review of all coaching surfaces."],
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
              ["Local review mode", "All requested coaching routes are open locally without login."],
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
