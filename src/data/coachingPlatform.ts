export type CardItem = {
  title: string;
  body: string;
  href?: string;
  meta?: string;
};

export type RoutePage = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  cards: CardItem[];
  sidebarTitle?: string;
  sidebarItems?: string[];
};

export const programs = [
  {
    name: "LO Mastery",
    href: "/lo-mastery-coaching/",
    price: "$249",
    rhythm: "Biweekly group coaching with daily execution support.",
    bestFor:
      "Loan officers who need structure, follow-up rhythm, scripts, trackers, and weekly accountability.",
    includes: [
      "Weekly execution plan",
      "Daily time blocking",
      "Theme days",
      "Script books",
      "Scorecards",
      "Trackers",
      "Member resources",
      "Community",
    ],
  },
  {
    name: "Loan Factory Alliance",
    href: "/loan-factory-alliance/",
    price: "$449",
    rhythm: "Advanced coaching rhythm with tighter accountability.",
    bestFor:
      "Loan officers ready for deeper review, stronger weekly planning, and more consistent partner development.",
    includes: [
      "Everything in LO Mastery",
      "Weekly coaching",
      "Advanced planning",
      "Partner strategy",
      "Priority review",
      "Leadership rhythm",
      "Execution scorecards",
      "Community",
    ],
  },
];

export const platformFeatures: CardItem[] = [
  {
    title: "Weekly coaching",
    body: "Clear calls, practical coaching notes, and one next step for the week.",
    href: "/member-area/calendar/",
  },
  {
    title: "Daily execution",
    body: "Time blocks, theme days, and simple habits that make the week visible.",
    href: "/member-area/trackers/",
  },
  {
    title: "Scorecards",
    body: "A lightweight view of activity, follow-up, partner work, and consistency.",
    href: "/member-area/scorecards/",
  },
  {
    title: "Trackers",
    body: "Pipeline, Realtor relationships, follow-up, and daily action in one place.",
    href: "/member-area/trackers/",
  },
  {
    title: "Script books",
    body: "Plain-language scripts for first calls, follow-up, buyer conversations, and partner outreach.",
    href: "/member-area/resources/",
  },
  {
    title: "Community",
    body: "A focused member area for wins, questions, coaching prompts, and accountability.",
    href: "/member-area/community/",
  },
];

export const memberNav: CardItem[] = [
  {
    title: "LO Mastery",
    body: "Program home, weekly rhythm, resources, and execution focus.",
    href: "/member-area/lo-mastery/",
  },
  {
    title: "Alliance",
    body: "Advanced coaching path, partner strategy, and weekly accountability.",
    href: "/member-area/alliance/",
  },
  {
    title: "Resources",
    body: "Scripts, handouts, recordings, playbooks, and coaching references.",
    href: "/member-area/resources/",
  },
  {
    title: "Scorecards",
    body: "Weekly accountability scorecards for activity and consistency.",
    href: "/member-area/scorecards/",
  },
  {
    title: "Trackers",
    body: "Daily execution, deal flow, Realtor relationships, and follow-up trackers.",
    href: "/member-area/trackers/",
  },
  {
    title: "Community",
    body: "Member discussion, wins, questions, and coaching prompts.",
    href: "/member-area/community/",
  },
  {
    title: "Classroom",
    body: "Lessons, call replays, assignments, and practice material.",
    href: "/member-area/classroom/",
  },
  {
    title: "Calendar",
    body: "Coaching calls, office hours, review sessions, and weekly planning.",
    href: "/member-area/calendar/",
  },
  {
    title: "Profile",
    body: "Member profile, program view, goals, and local review role.",
    href: "/member-area/profile/",
  },
];

export const memberPages: Record<string, RoutePage> = {
  "lo-mastery": {
    eyebrow: "Member area",
    title: "LO Mastery",
    description:
      "A structured member view for daily execution, weekly coaching, scripts, scorecards, and habit consistency.",
    primaryHref: "/member-area/trackers/",
    primaryLabel: "Open trackers",
    secondaryHref: "/member-area/resources/",
    secondaryLabel: "Open resources",
    cards: [
      {
        title: "Daily schedule",
        body: "Protect the work blocks that create conversations, follow-up, and partner touches.",
      },
      {
        title: "Theme days",
        body: "Use simple daily themes so the week has a visible rhythm.",
      },
      {
        title: "Scorecard review",
        body: "Bring activity, follow-up, and pipeline clarity into coaching.",
      },
    ],
    sidebarTitle: "LO Mastery focus",
    sidebarItems: [
      "Daily time blocking",
      "Follow-up habit",
      "Script practice",
      "Weekly accountability",
    ],
  },
  alliance: {
    eyebrow: "Member area",
    title: "Loan Factory Alliance",
    description:
      "Advanced coaching for members who need sharper planning, partner strategy, and consistent accountability.",
    primaryHref: "/member-area/scorecards/",
    primaryLabel: "Open scorecards",
    secondaryHref: "/member-area/community/",
    secondaryLabel: "Open community",
    cards: [
      {
        title: "Partner strategy",
        body: "Plan Realtor conversations, relationship touches, and follow-up with intention.",
      },
      {
        title: "Weekly review",
        body: "Use a stronger accountability rhythm to inspect the work and choose the next move.",
      },
      {
        title: "Leadership habits",
        body: "Build a repeatable operating rhythm around execution, communication, and consistency.",
      },
    ],
    sidebarTitle: "Alliance focus",
    sidebarItems: [
      "Advanced weekly planning",
      "Partner relationship strategy",
      "Pipeline inspection",
      "Priority accountability",
    ],
  },
  resources: {
    eyebrow: "Member area",
    title: "Resources",
    description:
      "A coaching library for scripts, playbooks, recordings, trackers, worksheets, and lesson references.",
    cards: [
      {
        title: "Script books",
        body: "First-call scripts, follow-up scripts, buyer conversation guides, and Realtor outreach language.",
      },
      {
        title: "Playbooks",
        body: "Theme days, weekly rhythm, scorecard review, and relationship-building references.",
      },
      {
        title: "Recordings",
        body: "Call replays and coaching lessons organized for quick review.",
      },
    ],
  },
  scorecards: {
    eyebrow: "Member area",
    title: "Scorecards",
    description:
      "Weekly accountability views for activity, conversations, partner work, pipeline review, and consistency.",
    cards: [
      {
        title: "Weekly activity",
        body: "Track calls, appointments, follow-up touches, and completed coaching actions.",
      },
      {
        title: "Pipeline clarity",
        body: "See what moved, what stalled, and what needs attention this week.",
      },
      {
        title: "Coach notes",
        body: "Keep the weekly conversation focused on what happened and what changes next.",
      },
    ],
  },
  trackers: {
    eyebrow: "Member area",
    title: "Trackers",
    description:
      "Simple working tools for daily habits, Realtor relationships, deal flow, and follow-up discipline.",
    cards: [
      {
        title: "Daily execution tracker",
        body: "Track time blocks, outreach, follow-up, and practice reps.",
      },
      {
        title: "Realtor relationship tracker",
        body: "Track meetings, touches, notes, and next steps with referral partners.",
      },
      {
        title: "Deal flow tracker",
        body: "Track opportunities, next actions, follow-up dates, and stuck points.",
      },
    ],
  },
  community: {
    eyebrow: "Member area",
    title: "Community",
    description:
      "A focused member space for coaching prompts, questions, wins, and accountability conversation.",
    cards: [
      {
        title: "Wins",
        body: "Share execution wins, lessons learned, and useful conversation examples.",
      },
      {
        title: "Questions",
        body: "Bring practical questions for coaching, scripts, follow-up, or partner development.",
      },
      {
        title: "Accountability prompts",
        body: "Use weekly prompts to keep action visible between calls.",
      },
    ],
  },
  classroom: {
    eyebrow: "Member area",
    title: "Classroom",
    description:
      "Lessons, replays, practice prompts, and assignments for the paid coaching programs.",
    cards: [
      {
        title: "Lessons",
        body: "Short coaching lessons tied to execution, follow-up, and communication.",
      },
      {
        title: "Practice",
        body: "Roleplay prompts and script reps for better conversations.",
      },
      {
        title: "Assignments",
        body: "Simple weekly work that connects the lesson to real activity.",
      },
    ],
  },
  calendar: {
    eyebrow: "Member area",
    title: "Calendar",
    description:
      "Coaching calls, planning windows, review sessions, and key member rhythm dates.",
    cards: [
      {
        title: "Group coaching",
        body: "Member coaching calls organized around execution, questions, and accountability.",
      },
      {
        title: "Planning window",
        body: "Weekly planning time for schedules, partner touches, and pipeline review.",
      },
      {
        title: "Review sessions",
        body: "Dedicated time to inspect scorecards, trackers, and next steps.",
      },
    ],
  },
  profile: {
    eyebrow: "Member area",
    title: "Profile",
    description:
      "Local review view for program role, goals, current focus, and member settings.",
    cards: [
      {
        title: "Program view",
        body: "Switch local review between Master Admin, Coaching Manager, Coach, LO Mastery Member, and Alliance Member.",
      },
      {
        title: "Weekly focus",
        body: "Keep the current coaching priority clear for review.",
      },
      {
        title: "Member goals",
        body: "Use plain goals tied to activity, follow-up, and partner relationships.",
      },
    ],
  },
};

export const coachCommandPages: Record<string, RoutePage> = {
  members: {
    eyebrow: "Coach command center",
    title: "Members",
    description:
      "Coach-facing view of member progress, current focus, scorecard completion, and next coaching actions.",
    cards: [
      {
        title: "Member roster",
        body: "Review program, current focus, last coaching touch, and next action.",
      },
      {
        title: "At-risk rhythm",
        body: "Spot missing scorecards, stalled follow-up, and members who need a clearer plan.",
      },
      {
        title: "Coach preparation",
        body: "Prepare call notes before the next review conversation.",
      },
    ],
  },
  scorecards: {
    eyebrow: "Coach command center",
    title: "Scorecards",
    description:
      "Review member scorecards before coaching so the conversation starts with facts and action.",
    cards: [
      {
        title: "Submitted this week",
        body: "See scorecards ready for coach review.",
      },
      {
        title: "Needs follow-up",
        body: "Flag missing or incomplete scorecards for a coaching touch.",
      },
      {
        title: "Trend review",
        body: "Look for consistency patterns before giving advice.",
      },
    ],
  },
  trackers: {
    eyebrow: "Coach command center",
    title: "Trackers",
    description:
      "Review daily execution, pipeline movement, partner touches, and follow-up activity.",
    cards: [
      {
        title: "Daily habits",
        body: "Inspect member rhythm without turning coaching into busywork.",
      },
      {
        title: "Partner touches",
        body: "Look for relationship activity and missed next steps.",
      },
      {
        title: "Pipeline review",
        body: "Identify stuck opportunities and needed follow-up.",
      },
    ],
  },
  notes: {
    eyebrow: "Coach command center",
    title: "Notes",
    description:
      "Coach notes for weekly calls, follow-up items, member obstacles, and next-step accountability.",
    cards: [
      {
        title: "Call prep",
        body: "Capture the member's current reality before the coaching conversation.",
      },
      {
        title: "Action commitments",
        body: "Write the next action plainly so follow-up is easy.",
      },
      {
        title: "Review history",
        body: "Keep a clean trail of what was discussed and what changed.",
      },
    ],
  },
  community: {
    eyebrow: "Coach command center",
    title: "Community",
    description:
      "Coach-facing view of community prompts, unanswered questions, and member wins.",
    cards: [
      {
        title: "Member questions",
        body: "Find questions that need a coach response.",
      },
      {
        title: "Wins to highlight",
        body: "Identify useful examples that can help the broader group.",
      },
      {
        title: "Weekly prompts",
        body: "Keep the community focused on action, not noise.",
      },
    ],
  },
};

export const managerPages: Record<string, RoutePage> = {
  coaches: {
    eyebrow: "Manager dashboard",
    title: "Coaches",
    description:
      "Manager view for coach assignments, review rhythm, member load, and follow-up visibility.",
    cards: [
      {
        title: "Coach load",
        body: "See member count, upcoming reviews, and follow-up needs by coach.",
      },
      {
        title: "Call rhythm",
        body: "Check that coaching calls and review sessions are happening consistently.",
      },
      {
        title: "Support needs",
        body: "Identify where coaches need assets, clarity, or escalation.",
      },
    ],
  },
  members: {
    eyebrow: "Manager dashboard",
    title: "Members",
    description:
      "Program-level view of members, active program, scorecard rhythm, and coaching engagement.",
    cards: [
      {
        title: "Program view",
        body: "See LO Mastery and Alliance members in one management view.",
      },
      {
        title: "Engagement",
        body: "Review scorecard rhythm, resource use, and coaching participation.",
      },
      {
        title: "Follow-up queue",
        body: "Make member follow-up visible for managers and coaches.",
      },
    ],
  },
  "program-status": {
    eyebrow: "Manager dashboard",
    title: "Program Status",
    description:
      "Executive-friendly program view for what is working, what needs attention, and what should be reviewed next.",
    cards: [
      {
        title: "LO Mastery",
        body: "Review member activity, coaching rhythm, and weekly execution progress.",
      },
      {
        title: "Loan Factory Alliance",
        body: "Review advanced member activity, coach touches, and accountability rhythm.",
      },
      {
        title: "Build needs",
        body: "Track missing assets, unclear workflows, and manager decisions.",
      },
    ],
  },
  reporting: {
    eyebrow: "Manager dashboard",
    title: "Reporting",
    description:
      "Simple reporting surface for coaching activity, scorecard completion, and member execution indicators.",
    cards: [
      {
        title: "Weekly summary",
        body: "Review what happened this week without fake production claims.",
      },
      {
        title: "Completion",
        body: "See which members completed scorecards and trackers.",
      },
      {
        title: "Coach notes",
        body: "Summarize coaching themes and blockers for leadership review.",
      },
    ],
  },
};

export const adminPages: Record<string, RoutePage> = {
  users: {
    eyebrow: "Admin",
    title: "Users",
    description:
      "Admin review page for members, coaches, managers, and local role visibility.",
    cards: [
      {
        title: "User list",
        body: "Local review placeholder for the user table layout.",
      },
      {
        title: "Program assignment",
        body: "Review how LO Mastery and Alliance assignment will display.",
      },
      {
        title: "Status",
        body: "Show account status plainly without saving fake backend changes.",
      },
    ],
  },
  roles: {
    eyebrow: "Admin",
    title: "Roles",
    description:
      "Role model for Master Admin, Coaching Manager, Coach, LO Mastery Member, and Alliance Member.",
    cards: [
      {
        title: "Master Admin",
        body: "Full review visibility across the platform.",
      },
      {
        title: "Coaching Manager",
        body: "Manager dashboard, coaches, members, program status, and reporting.",
      },
      {
        title: "Coach and members",
        body: "Coach command center and member-area program views.",
      },
    ],
  },
  programs: {
    eyebrow: "Admin",
    title: "Programs",
    description:
      "Admin page for LO Mastery and Loan Factory Alliance configuration review.",
    cards: [
      {
        title: "LO Mastery",
        body: "Review program name, member path, price display, and included assets.",
      },
      {
        title: "Loan Factory Alliance",
        body: "Review advanced program path, coaching rhythm, and member assets.",
      },
      {
        title: "Publishing status",
        body: "Local review only. No real program changes are saved from this page.",
      },
    ],
  },
  resources: {
    eyebrow: "Admin",
    title: "Resources",
    description:
      "Admin view for organizing script books, trackers, scorecards, PDFs, and lesson assets.",
    cards: [
      {
        title: "Resource library",
        body: "Review how assets will be grouped for members and coaches.",
      },
      {
        title: "Program placement",
        body: "Keep LO Mastery and Alliance resources organized without clutter.",
      },
      {
        title: "Review status",
        body: "Show whether an asset is draft, ready, or needs review.",
      },
    ],
  },
  settings: {
    eyebrow: "Admin",
    title: "Settings",
    description:
      "Admin settings review page for local environment, program labels, and visible platform language.",
    cards: [
      {
        title: "Local review mode",
        body: "Open the platform locally without requiring account login.",
      },
      {
        title: "Google sign-in",
        body: "Use the real Google auth route when environment settings are available.",
      },
      {
        title: "Visible language",
        body: "Keep the platform focused on paid coaching, weekly execution, and accountability.",
      },
    ],
  },
};

export function getRoutePage(
  pages: Record<string, RoutePage>,
  section: string,
) {
  return pages[section] ?? null;
}
