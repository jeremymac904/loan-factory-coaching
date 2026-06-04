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

export type ProgramWeek = {
  week: number;
  theme: string;
  number: string;
  phase: string;
  actions: string[];
  win: string;
};

export type DownloadResource = {
  title: string;
  description: string;
  category: "Curriculum" | "Scripts" | "Trackers" | "Playbooks" | "Coach Tools";
  audience: "Member" | "Coach" | "Manager" | "All";
  pdf?: string;
  docx?: string;
};

export type ScriptResource = {
  title: string;
  category: string;
  useWhen: string;
  goal: string;
  script: string[];
  coachNote?: string;
};

export type TrackerDefinition = {
  slug: string;
  title: string;
  description: string;
  columns: string[];
  rows: string[][];
};

export type ScorecardMetric = {
  metric: string;
  goal: number;
  values: [number, number, number, number, number];
};

export type CommunityPost = {
  author: string;
  role: string;
  category: string;
  title: string;
  body: string;
  comments: string[];
  pinned?: boolean;
};

export const driveFolderUrl =
  "https://drive.google.com/drive/folders/1U-gNdeD9of90kkwsuzzzcqYH2rmVrR0j?usp=drive_link";

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
      "Loan officers ready for deeper review, stronger weekly planning, partner development, and business operating systems.",
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
    body: "Member profile, program view, goals, and review settings.",
    href: "/member-area/profile/",
  },
];

export const masteryWeeks: ProgramWeek[] = [
  {
    week: 1,
    theme: "Foundation & Commitment",
    number: "Time blocks honored",
    phase: "Foundation",
    actions: [
      "Set the 12-week goal and the daily number.",
      "Place the non-negotiable work block on the calendar.",
      "Complete the onboarding business plan.",
    ],
    win: "Goal set, plan written, calendar blocked.",
  },
  {
    week: 2,
    theme: "Own Your Time",
    number: "Daily blocks completed",
    phase: "Foundation",
    actions: [
      "Run the theme day every weekday.",
      "Protect the income-producing block before noon.",
      "Remove one recurring distraction from the morning.",
    ],
    win: "Five protected blocks completed.",
  },
  {
    week: 3,
    theme: "Own Your Database",
    number: "Database contacts loaded",
    phase: "Activity",
    actions: [
      "Load 100+ contacts into the CRM.",
      "Tag the top 25 relationship contacts.",
      "Make daily sphere calls using the check-in script.",
    ],
    win: "Database built and first calls made.",
  },
  {
    week: 4,
    theme: "Conversations That Convert",
    number: "Real conversations had",
    phase: "Activity",
    actions: [
      "Use FORD to open real conversations.",
      "Capture one useful detail after every conversation.",
      "Complete the first coach review checkpoint.",
    ],
    win: "Conversation target hit and plan adjusted.",
  },
  {
    week: 5,
    theme: "The Buyer Consultation",
    number: "Pre-approval appointments held",
    phase: "Conversion",
    actions: [
      "Run discovery before quoting or advising.",
      "Ask for payment, cash-to-close, timeline, and ownership goals.",
      "Set a clean next step after each consult.",
    ],
    win: "Consults held using the full framework.",
  },
  {
    week: 6,
    theme: "Objection Mastery",
    number: "Role-plays completed",
    phase: "Conversion",
    actions: [
      "Drill three objections per day.",
      "Use acknowledge, curiosity, reframe, move forward.",
      "Log objections heard in live conversations.",
    ],
    win: "Weakest objections drilled to reflex.",
  },
  {
    week: 7,
    theme: "Realtor Partner Outreach",
    number: "New agent contacts made",
    phase: "Partners",
    actions: [
      "Build a 25-agent target list.",
      "Make value-first daily agent contacts.",
      "Book at least one short meeting.",
    ],
    win: "Target list active and meeting booked.",
  },
  {
    week: 8,
    theme: "Winning the Realtor Relationship",
    number: "Agent meetings held",
    phase: "Partners",
    actions: [
      "Run discovery on the agent's business.",
      "Set one concrete next step after each meeting.",
      "Complete the second coach review checkpoint.",
    ],
    win: "Partnership next steps created.",
  },
  {
    week: 9,
    theme: "Pipeline Discipline & the Tuesday Call",
    number: "Tuesday status calls made",
    phase: "Systems",
    actions: [
      "Call every active file every Tuesday.",
      "Review every opportunity and stuck point.",
      "Communicate what is needed next.",
    ],
    win: "Pipeline reviewed and active files updated.",
  },
  {
    week: 10,
    theme: "Follow-Up That Closes",
    number: "Follow-up touches completed",
    phase: "Systems",
    actions: [
      "Work pre-approved and looking buyers.",
      "Re-engage quiet leads with value.",
      "Put every open opportunity on a next-action date.",
    ],
    win: "No warm opportunity left without a next step.",
  },
  {
    week: 11,
    theme: "Reviews, Referrals & Reputation",
    number: "Referrals and reviews requested",
    phase: "Growth",
    actions: [
      "Ask happy clients for reviews.",
      "Ask past clients and partners for introductions.",
      "Document a repeatable review request habit.",
    ],
    win: "Reputation activity becomes part of the weekly rhythm.",
  },
  {
    week: 12,
    theme: "The Next 12 Weeks",
    number: "Next plan completed",
    phase: "Growth",
    actions: [
      "Review the full 12-week cycle.",
      "Choose the next weekly number.",
      "Set the next cycle's schedule and accountability rhythm.",
    ],
    win: "Next 12-week plan ready.",
  },
];

export const allianceWeeks: ProgramWeek[] = [
  {
    week: 1,
    theme: "Enterprise Audit & 12-Week Plan",
    number: "Plan and scorecard built",
    phase: "Diagnose",
    actions: [
      "Audit business sources, time, systems, and bottlenecks.",
      "Build the advanced weekly scorecard.",
      "Name the bottleneck that creates the most drag.",
    ],
    win: "Audit complete and growth plan focused.",
  },
  {
    week: 2,
    theme: "Production Systems & Workflows",
    number: "Workflows documented",
    phase: "Systems",
    actions: [
      "Document lead to consult workflow.",
      "Document application to close workflow.",
      "Standardize client communication cadence.",
    ],
    win: "Three core workflows written clearly.",
  },
  {
    week: 3,
    theme: "The Numbers That Run the Business",
    number: "Conversion ratios mapped",
    phase: "Systems",
    actions: [
      "Map touches to conversations to consults to applications.",
      "Find the weakest ratio.",
      "Set the weekly dashboard view.",
    ],
    win: "Business managed by ratios, not vibes.",
  },
  {
    week: 4,
    theme: "Database Reactivation Campaign",
    number: "Reactivation touches",
    phase: "Demand",
    actions: [
      "Segment past clients, partners, sphere, and dormant leads.",
      "Launch a personal multi-touch campaign.",
      "Complete the first review checkpoint.",
    ],
    win: "Priority segment worked with tracked responses.",
  },
  {
    week: 5,
    theme: "Marketing & Content Engine",
    number: "Content pieces shipped",
    phase: "Demand",
    actions: [
      "Define weekly cadence and repeatable formats.",
      "Batch one week of content.",
      "Tie content to database and partner strategy.",
    ],
    win: "Content rhythm defined and shipping.",
  },
  {
    week: 6,
    theme: "Assisted Marketing & Follow-Up",
    number: "Workflows live",
    phase: "Leverage",
    actions: [
      "Use tools to draft content and follow-up.",
      "Keep human review on client-facing work.",
      "Document the repeatable workflow.",
    ],
    win: "Two leverage workflows running with review.",
  },
  {
    week: 7,
    theme: "Advanced Agent Strategy",
    number: "Strategic agent touches",
    phase: "Partners",
    actions: [
      "Tier agent relationships by fit and opportunity.",
      "Build value plans for top agents.",
      "Work A-tier touches with intention.",
    ],
    win: "Top partner strategy is specific.",
  },
  {
    week: 8,
    theme: "Agent Mastermind & Co-Marketing",
    number: "Partner assets launched",
    phase: "Partners",
    actions: [
      "Plan a recurring agent touchpoint.",
      "Launch one co-marketing asset.",
      "Complete the second review checkpoint.",
    ],
    win: "Agent event or asset scheduled and launched.",
  },
  {
    week: 9,
    theme: "Building Leverage",
    number: "Role and SOP defined",
    phase: "People",
    actions: [
      "Separate only-me tasks from delegable work.",
      "Define the next support role.",
      "Tie role responsibilities to documented SOPs.",
    ],
    win: "Next leverage role is clear.",
  },
  {
    week: 10,
    theme: "Leading & Coaching Your People",
    number: "Standards and 1:1s set",
    phase: "People",
    actions: [
      "Set clear standards for the people you lead.",
      "Run a weekly one-on-one rhythm.",
      "Practice accountability with warmth and directness.",
    ],
    win: "Leadership rhythm installed.",
  },
  {
    week: 11,
    theme: "Production Growth Roadmap",
    number: "Roadmap built",
    phase: "Scale",
    actions: [
      "Build the next 12-month roadmap.",
      "Select the highest-leverage systems to improve.",
      "Assign owners and review points.",
    ],
    win: "Growth roadmap visible.",
  },
  {
    week: 12,
    theme: "Growth Plan & Recommitment",
    number: "Growth plan completed",
    phase: "Scale",
    actions: [
      "Review the full cycle.",
      "Recommit to the next growth sprint.",
      "Set the operating rhythm for the next cycle.",
    ],
    win: "Next cycle ready with owners and numbers.",
  },
];

export const coachingRails = [
  "Theme days give each weekday a job.",
  "Daily time blocks protect income-producing activity before the day gets loud.",
  "One tracked number per week keeps coaching grounded in reality.",
  "Scripts make hard conversations repeatable.",
  "Coach review turns activity into learning and next steps.",
];

export const themeDays = [
  {
    day: "Monday",
    mastery: "Database & past clients",
    alliance: "Database reactivation plus systems and SOPs",
  },
  {
    day: "Tuesday",
    mastery: "Pipeline & client care",
    alliance: "Pipeline experience plus content batching",
  },
  {
    day: "Wednesday",
    mastery: "Realtor partners",
    alliance: "A-tier agent strategy plus tool workflows",
  },
  {
    day: "Thursday",
    mastery: "Lead conversion & follow-up",
    alliance: "Conversion plus partner production",
  },
  {
    day: "Friday",
    mastery: "Reviews, referrals & plan",
    alliance: "Numbers, roadmap and people review",
  },
];

export const scorecardMetrics: ScorecardMetric[] = [
  { metric: "Power blocks honored", goal: 5, values: [1, 1, 1, 0, 1] },
  { metric: "Calls / touches", goal: 50, values: [12, 8, 10, 7, 9] },
  { metric: "Real conversations", goal: 20, values: [4, 3, 5, 2, 4] },
  { metric: "Appointments set", goal: 5, values: [1, 1, 2, 0, 1] },
  { metric: "Appointments held", goal: 3, values: [0, 1, 1, 0, 1] },
  { metric: "Applications taken", goal: 3, values: [1, 0, 1, 0, 1] },
  { metric: "Pre-approvals", goal: 2, values: [0, 1, 0, 0, 1] },
  { metric: "Referrals / reviews asked", goal: 5, values: [1, 0, 1, 1, 1] },
];

export const allianceScorecardMetrics: ScorecardMetric[] = [
  { metric: "Revenue blocks honored", goal: 5, values: [1, 1, 1, 1, 1] },
  { metric: "Leverage blocks honored", goal: 5, values: [1, 0, 1, 1, 0] },
  { metric: "A-tier agent touches", goal: 15, values: [3, 2, 4, 3, 2] },
  { metric: "Strategic meetings", goal: 4, values: [1, 0, 1, 1, 0] },
  { metric: "Applications", goal: 4, values: [1, 1, 0, 1, 1] },
  { metric: "Content shipped", goal: 5, values: [1, 1, 1, 1, 1] },
  { metric: "Systems improved", goal: 2, values: [0, 1, 0, 1, 0] },
  { metric: "Reactivation touches", goal: 25, values: [5, 6, 4, 5, 3] },
];

export const trackerDefinitions: TrackerDefinition[] = [
  {
    slug: "daily-execution",
    title: "Daily Execution Tracker",
    description:
      "The working daily list for calls, follow-up, appointments, script reps, and the one priority that must not slip.",
    columns: ["Day", "Theme", "Power block", "Call list", "Follow-up", "Script reps", "Done"],
    rows: [
      ["Monday", "Database", "8:30-10:30", "Top 25 SOI", "Past clients", "Database check-in", "yes"],
      ["Tuesday", "Pipeline", "8:30-10:30", "Active files", "Tuesday updates", "Status call", "yes"],
      ["Wednesday", "Realtors", "8:30-10:30", "Agent targets", "Coffee invites", "First call", "no"],
      ["Thursday", "Follow-up", "8:30-10:30", "Warm leads", "Quiet leads", "Objections", "no"],
      ["Friday", "Plan", "8:30-10:00", "Reviews", "Referrals", "Review ask", "yes"],
    ],
  },
  {
    slug: "realtor-relationships",
    title: "Realtor Relationship Tracker",
    description:
      "Track partner tier, last useful touch, next promised value, and the next meeting action.",
    columns: ["Agent", "Tier", "Last touch", "Next value", "Meeting", "Next action", "Status"],
    rows: [
      ["M. Rivera", "A", "Tuesday update example", "Buyer seminar outline", "Friday", "Send agenda", "active"],
      ["K. Nguyen", "B", "Coffee invite", "Loan Factory IQ demo", "Open", "Book 15 minutes", "needs touch"],
      ["A. Patel", "A", "Offer strategy call", "Co-marketing idea", "Wednesday", "Draft post angle", "active"],
      ["J. Smith", "C", "Market check-in", "Open house script", "Open", "Follow up next week", "watch"],
    ],
  },
  {
    slug: "deal-flow",
    title: "Deal Flow Tracker",
    description:
      "A pipeline view that forces every borrower and partner opportunity to have a next action date.",
    columns: ["Opportunity", "Stage", "Owner", "Next action", "Due", "Stuck point", "Priority"],
    rows: [
      ["Garcia purchase", "Pre-approved", "Jeremy", "Check home search", "Today", "Waiting on house", "High"],
      ["Davis refi question", "Discovery", "Jeremy", "Review current goals", "Tomorrow", "Needs docs", "Medium"],
      ["Lee buyer", "Consult booked", "Jeremy", "Prep buyer questions", "Wednesday", "Payment range", "High"],
      ["Agent seminar lead", "Partner", "Jeremy", "Confirm agenda", "Friday", "Agent invite list", "Medium"],
    ],
  },
  {
    slug: "theme-day-planner",
    title: "Theme Day Planner",
    description:
      "Plan each weekday around one revenue theme and one concrete action list.",
    columns: ["Day", "Theme", "Primary list", "Prepared night before", "Number to track", "Recovery plan", "Done"],
    rows: [
      ["Monday", "Database", "Top 25 plus past clients", "yes", "Calls completed", "Move leftover calls to Thursday", "yes"],
      ["Tuesday", "Pipeline", "All active files", "yes", "Status calls", "Finish before lunch", "yes"],
      ["Wednesday", "Realtors", "A/B agent targets", "no", "New contacts", "Book from CRM list", "no"],
      ["Thursday", "Follow-up", "Warm leads and quiet leads", "yes", "Touches", "Use 45-minute second block", "no"],
      ["Friday", "Plan", "Reviews and next week", "no", "Scorecard complete", "Complete after coaching", "yes"],
    ],
  },
  {
    slug: "daily-time-blocker",
    title: "Daily Time Blocker",
    description:
      "Protect the Power Block first, then put appointments, admin, and review work where they belong.",
    columns: ["Block", "Time", "Purpose", "Rules", "Current focus", "Status"],
    rows: [
      ["Win the morning", "8:00-8:30", "Plan and prep", "No inbox first", "Build call list", "done"],
      ["Power block", "8:30-10:30", "Income-producing activity", "Phone on, email off", "Calls and meetings", "active"],
      ["Appointment block", "10:30-12:00", "Consults and partners", "Discovery first", "Buyer consults", "queued"],
      ["Admin block", "1:00-3:00", "Files and follow-up", "Batch reactive work", "Docs and updates", "queued"],
      ["Review block", "4:30-5:00", "Scorecard and tomorrow", "Log the number", "Tomorrow prep", "queued"],
    ],
  },
  {
    slug: "greatness-tracker",
    title: "Greatness Tracker",
    description:
      "A simple accountability view for commitment, mindset, action, and follow-through.",
    columns: ["Area", "Question", "Today", "Evidence", "Next step"],
    rows: [
      ["Commitment", "Did I protect the work I said mattered?", "yes", "Power block completed", "Repeat tomorrow"],
      ["Mindset", "Did I stay curious when I hit resistance?", "yes", "Used question before advice", "Write the best line"],
      ["Action", "Did I make the important calls?", "partial", "18 touches", "Finish 7 more before 5"],
      ["Follow-through", "Did every open item get a next step?", "no", "Two files missing date", "Assign dates now"],
    ],
  },
];

export const scriptLibrary: ScriptResource[] = [
  {
    title: "Realtor First Call Script",
    category: "Realtor",
    useWhen: "First contact with an agent.",
    goal: "Earn a meeting, not diagnose their business on the first call.",
    script: [
      "Hi [Agent], this is [Your Name] with Loan Factory. I will be quick.",
      "I am not calling to ask for business today. I am reaching out because I am trying to learn more about what local agents are seeing in the market and where financing is helping or hurting deals right now.",
      "How has business been for you this year?",
      "Are you working mostly with buyers, sellers, or a mix?",
      "What are you seeing most in your market right now?",
      "That is helpful. I appreciate you sharing that.",
      "The reason I ask is because I work with buyers and agents every day, and I am always looking for ways to make financing smoother, faster, and less frustrating for everyone involved.",
      "Would you be open to grabbing coffee for 15 minutes this week so I can learn more about your business and see if there are any ways I can be a useful resource?",
      "If they say yes: Perfect. What does your schedule look like later this week?",
      "If they say no or not now: No problem at all. I appreciate you taking the call. I will send over my contact info, and if you ever have a tough financing question or a buyer who needs a second look, I am happy to help.",
    ],
    coachNote:
      "The first call is about curiosity, trust, and earning the meeting. Do not assume the agent has a problem before they tell you what is going on.",
  },
  {
    title: "Database Quarterly Check-In",
    category: "Database",
    useWhen: "Touching sphere of influence and past relationship contacts.",
    goal: "Strengthen the relationship and open the door to referrals.",
    script: [
      "Hey [Name], it is [Your Name] at Loan Factory. How are you?",
      "I was just calling to check in. You are one of my favorite people, and I reach out to my favorite people every quarter to catch up and see if there is anything I can do for you.",
      "I am also looking to help more people like you. If you ever hear of anyone looking to buy, refinance, or invest, I would love the chance to take great care of them.",
      "Anything I can do for you or your family right now?",
    ],
    coachNote: "Use FORD. Make it about them before making any ask.",
  },
  {
    title: "Buyer Rate Question",
    category: "Buyer",
    useWhen: "A borrower asks for rates before you know the file.",
    goal: "Turn a price question into a useful consultation.",
    script: [
      "Great question. The honest answer is your rate depends on credit, down payment, property type, and your goals.",
      "At Loan Factory I am not limited to one lender's pricing. I can shop multiple lenders and build a real answer around your situation.",
      "Let us grab 20 minutes so I can understand your payment goal, cash-to-close goal, timeline, and what you are trying to accomplish.",
      "I have [time] or [time]. Which is better?",
    ],
    coachNote: "Discovery first. Do not win a call with a teaser number.",
  },
  {
    title: "Quiet Lead Re-Engagement",
    category: "Follow-Up",
    useWhen: "A warm lead has gone quiet.",
    goal: "Restart the conversation without sounding pushy.",
    script: [
      "Hey [Name], no agenda. I was thinking about your home plans and wanted to check in.",
      "Where are you at with everything right now?",
      "If timing changed, no problem. If you still want clarity on numbers or next steps, I am happy to help.",
    ],
    coachNote: "A useful touch beats a pressure touch.",
  },
  {
    title: "Tuesday Status Call",
    category: "Client Care",
    useWhen: "Every active file, every Tuesday.",
    goal: "Keep clients and partners out of the dark.",
    script: [
      "Hey [Name], it is [Your Name] with your Tuesday update.",
      "Here is where we are right now: [status].",
      "Here is what I need next: [item or nothing needed].",
      "Here is whether we are tracking on time: [on track or risk].",
      "Any questions for me today?",
    ],
    coachNote: "No news is still news. Predictable communication builds trust.",
  },
];

export const downloadResources: DownloadResource[] = [
  {
    title: "LO Mastery 12-Week Curriculum",
    description: "The foundational weekly program map, actions, coaching notes, and asset index.",
    category: "Curriculum",
    audience: "Member",
    pdf: "https://drive.google.com/file/d/1aqhM_KfgJn00ll78z5HpWxeT_0bX85xm/view?usp=drivesdk",
    docx: "https://docs.google.com/document/d/1sqJSCvbsrjSDa7LhFFPvoE2HwbQ0VZQl/edit?usp=drivesdk&ouid=110305764628203153224&rtpof=true&sd=true",
  },
  {
    title: "Loan Factory Alliance 12-Week Curriculum",
    description: "Advanced weekly program map for systems, partners, leadership, and leverage.",
    category: "Curriculum",
    audience: "Member",
    pdf: "https://drive.google.com/file/d/1Q-70umaSW3fgaAM9Bt_dYV0IPhyfTcyQ/view?usp=drivesdk",
    docx: "https://docs.google.com/document/d/1OKREYevozajWHfZ_aInHiZQa84_l_gdM/edit?usp=drivesdk&ouid=110305764628203153224&rtpof=true&sd=true",
  },
  {
    title: "Script Book",
    description: "Realtor, borrower, follow-up, database, objection, and client-care scripts.",
    category: "Scripts",
    audience: "All",
    pdf: "https://drive.google.com/file/d/1zA44f6JzhyA4RqpM-cZf46ojA08dLwTJ/view?usp=drivesdk",
    docx: "https://docs.google.com/document/d/1DPMFVz1DF9wQbJVrDolk_eJF3NPF_OtS/edit?usp=drivesdk&ouid=110305764628203153224&rtpof=true&sd=true",
  },
  {
    title: "Weekly Scorecard",
    description: "One-page weekly scorecard for leading activity, reflection, and coach review.",
    category: "Trackers",
    audience: "All",
    pdf: "https://drive.google.com/file/d/1UQLx7O4idAeQxYF045beP9Twgq2XsB67/view?usp=drivesdk",
    docx: "https://docs.google.com/document/d/1c8xYdMBClpgNaBLE0bXb1cJDulFgupDz/edit?usp=drivesdk&ouid=110305764628203153224&rtpof=true&sd=true",
  },
  {
    title: "Member Accountability Tracker",
    description: "12-week coach-and-member shared view for commitments, weekly numbers, and on-track status.",
    category: "Trackers",
    audience: "All",
    pdf: "https://drive.google.com/file/d/1KJaUPWQ8dFwa193wWH5r-_Vtk36VTfoP/view?usp=drivesdk",
    docx: "https://docs.google.com/document/d/1Yjz7W8CUfCmGW3r46AFIfqnrYj3jlIQp/edit?usp=drivesdk&ouid=110305764628203153224&rtpof=true&sd=true",
  },
  {
    title: "Daily Time Blockers",
    description: "Daily planning templates for protected Power Blocks, appointments, admin, and review.",
    category: "Trackers",
    audience: "Member",
    pdf: "https://drive.google.com/file/d/1PxpN74w-IK3frRR2ympGC5K3mJOXbrbd/view?usp=drivesdk",
    docx: "https://docs.google.com/document/d/1Q-_uYd4I9PtpQWERJMIG5lpmPy77KAMA/edit?usp=drivesdk&ouid=110305764628203153224&rtpof=true&sd=true",
  },
  {
    title: "Greatness Tracker",
    description: "Daily accountability tracker for commitment, mindset, action, and follow-through.",
    category: "Trackers",
    audience: "Member",
    pdf: "https://drive.google.com/file/d/1r4w7CMj99uh6tnD8Zl7kp-yzSfqvjbFD/view?usp=drivesdk",
    docx: "https://docs.google.com/document/d/16it2AjTKgxtnL0gnzuJMR1IHYC5uqsKZ/edit?usp=drivesdk&ouid=110305764628203153224&rtpof=true&sd=true",
  },
  {
    title: "Theme Days Playbook",
    description: "The weekday operating rhythm for database, pipeline, partners, follow-up, and planning.",
    category: "Playbooks",
    audience: "All",
    pdf: "https://drive.google.com/file/d/1RnHBUW58Q83jyvOFYhnRC-gbsVY2_6Um/view?usp=drivesdk",
    docx: "https://docs.google.com/document/d/1DTQcRuNnEVLivNDeZyGfbvEXB6SVHlf9/edit?usp=drivesdk&ouid=110305764628203153224&rtpof=true&sd=true",
  },
  {
    title: "Follow Up System",
    description: "Follow-up rhythm for pre-approved buyers, quiet leads, past clients, and next-action discipline.",
    category: "Playbooks",
    audience: "All",
    pdf: "https://drive.google.com/file/d/1XK_2bg8PvpJYP8PJNVwnOYwH1sVuKF8A/view?usp=drivesdk",
    docx: "https://docs.google.com/document/d/1NaGl_kTosVKENRqwrr7EOzRY_IHLJRYh/edit?usp=drivesdk&ouid=110305764628203153224&rtpof=true&sd=true",
  },
  {
    title: "Realtor Growth System",
    description: "Partner development system for agent outreach, useful value, meetings, and relationship follow-through.",
    category: "Playbooks",
    audience: "All",
    pdf: "https://drive.google.com/file/d/1PxMVznSC2VDg6VA6NIXoo9mIMvsu8soc/view?usp=drivesdk",
    docx: "https://docs.google.com/document/d/1OgJ1Kiz98YdRhixf3OSnBTXXxpNi9NFb/edit?usp=drivesdk&ouid=110305764628203153224&rtpof=true&sd=true",
  },
  {
    title: "Coach Playbook",
    description: "Coach-facing operating guide for member review, coaching rhythm, feedback, and accountability.",
    category: "Coach Tools",
    audience: "Coach",
    pdf: "https://drive.google.com/file/d/1EGRpITWSboNDXo4_-tj1DePOJSjsVeY3/view?usp=drivesdk",
    docx: "https://docs.google.com/document/d/1QVBbH2uXqqK1bNvcLHF03OgWcBEF1IIz/edit?usp=drivesdk&ouid=110305764628203153224&rtpof=true&sd=true",
  },
  {
    title: "Coach Review Worksheet",
    description: "Call-prep and review worksheet for checkpoints, member obstacles, and next actions.",
    category: "Coach Tools",
    audience: "Coach",
    pdf: "https://drive.google.com/file/d/1xEP6u29mBwLeX1vDV_1mWpwL3Xhp1AuK/view?usp=drivesdk",
    docx: "https://docs.google.com/document/d/13J6yiS0eVakTnlrockFwHFZU9KUcBoTb/edit?usp=drivesdk&ouid=110305764628203153224&rtpof=true&sd=true",
  },
  {
    title: "Complete Paid Coaching Program",
    description: "Full program reference packet for leaders, coaches, and review stakeholders.",
    category: "Playbooks",
    audience: "All",
    pdf: "https://drive.google.com/file/d/1Jm9dQPGPUAI5Q_e_EvE114ugXqzq7CLI/view?usp=drivesdk",
    docx: "https://docs.google.com/document/d/1CodlNMOr5ps6DrKYSPWd76lMbBipiTcR/edit?usp=drivesdk&ouid=110305764628203153224&rtpof=true&sd=true",
  },
];

export const communityPosts: CommunityPost[] = [
  {
    author: "Jeremy McDonald",
    role: "Coach",
    category: "Pinned",
    title: "This week's focus: protect the Power Block",
    body: "Before coaching, complete the weekly scorecard and bring one place where your schedule broke. We are not guessing this week. We are looking at the calendar, the calls, and the next action.",
    comments: ["Bring the number and the obstacle.", "Post one adjustment that protects tomorrow morning."],
    pinned: true,
  },
  {
    author: "Maria R.",
    role: "LO Mastery",
    category: "Wins",
    title: "Booked two agent coffees using the softer first call",
    body: "The discovery version felt better. I asked what agents were seeing instead of pitching, and the conversation opened up.",
    comments: ["Drop the line that worked best.", "Good example of earning the meeting first."],
  },
  {
    author: "Andre L.",
    role: "Alliance",
    category: "Questions",
    title: "How are you tiering agents this week?",
    body: "I have ten active Realtor relationships but only three feel like A-tier. What criteria are you using besides production?",
    comments: ["Fit, response speed, buyer quality, and willingness to co-build.", "Bring this into the Wednesday partner thread."],
  },
  {
    author: "Leslie P.",
    role: "Coach",
    category: "Scripts",
    title: "Buyer consultation reminder",
    body: "Payment, cash-to-close, timeline, and ownership goal must come before advice. If you skip discovery, the call becomes rate shopping.",
    comments: ["Use the consultation planner before the call.", "Record one practice rep this week."],
  },
];

export const leaderboardRows = [
  ["Maria R.", "5 blocks", "22 conversations", "100% scorecard"],
  ["Andre L.", "14 partner touches", "3 meetings", "2 systems improved"],
  ["Sam T.", "48 calls", "6 consults", "Scorecard complete"],
  ["Leslie P.", "Coach responses", "8 notes", "4 reviews ready"],
];

export const calendarItems = [
  {
    day: "Monday",
    title: "LO Mastery planning block",
    time: "8:30 AM",
    focus: "Database list, weekly number, Power Block setup.",
  },
  {
    day: "Tuesday",
    title: "Pipeline status rhythm",
    time: "10:00 AM",
    focus: "Every active file gets a clear update.",
  },
  {
    day: "Wednesday",
    title: "Partner growth lab",
    time: "1:00 PM",
    focus: "Agent outreach, meeting prep, relationship tracker review.",
  },
  {
    day: "Thursday",
    title: "Follow-up and conversion review",
    time: "11:00 AM",
    focus: "Warm leads, quiet leads, objection practice.",
  },
  {
    day: "Friday",
    title: "Scorecard and next week plan",
    time: "3:00 PM",
    focus: "Scorecard, reflection, next week's number.",
  },
];

export const memberProgressRows = [
  {
    member: "Maria R.",
    program: "LO Mastery",
    week: "Week 7",
    focus: "Realtor outreach",
    scorecard: "Complete",
    nextAction: "Book two coffee meetings",
    status: "On pace",
  },
  {
    member: "Andre L.",
    program: "Loan Factory Alliance",
    week: "Week 3",
    focus: "Conversion ratios",
    scorecard: "Ready for review",
    nextAction: "Map weakest funnel ratio",
    status: "Needs review",
  },
  {
    member: "Sam T.",
    program: "LO Mastery",
    week: "Week 4",
    focus: "Real conversations",
    scorecard: "Partial",
    nextAction: "Clarify what counts as a conversation",
    status: "Watch",
  },
  {
    member: "Nina K.",
    program: "Loan Factory Alliance",
    week: "Week 8",
    focus: "Co-marketing asset",
    scorecard: "Complete",
    nextAction: "Launch agent lunch invite",
    status: "On pace",
  },
];

export const coachNotes = [
  {
    member: "Maria R.",
    date: "June 3",
    note: "Good schedule discipline. Needs more direct meeting asks after agent discovery.",
    nextAction: "Use the Realtor first call script twice daily through Friday.",
  },
  {
    member: "Andre L.",
    date: "June 2",
    note: "Knows the business well but is still carrying too many tasks personally.",
    nextAction: "Document lead-to-consult SOP before next review.",
  },
  {
    member: "Sam T.",
    date: "June 1",
    note: "Counting activity accurately now. Confidence drops at objections.",
    nextAction: "Record three objection role-play reps.",
  },
];

export const managerCoachRows = [
  {
    coach: "Jeremy McDonald",
    members: 18,
    reviewsDue: 5,
    scorecardsReady: 11,
    supportNeed: "Prioritize new member onboarding rhythm.",
  },
  {
    coach: "Leslie P.",
    members: 14,
    reviewsDue: 3,
    scorecardsReady: 9,
    supportNeed: "Needs updated script practice queue.",
  },
  {
    coach: "Andre L.",
    members: 12,
    reviewsDue: 4,
    scorecardsReady: 8,
    supportNeed: "Review Alliance partner strategy examples.",
  },
];

export const programStatusRows = [
  {
    program: "LO Mastery",
    members: 44,
    weeklyFocus: "Theme days, Power Blocks, scorecard completion.",
    health: "Strong adoption",
    watch: "New members need faster schedule setup.",
  },
  {
    program: "Loan Factory Alliance",
    members: 27,
    weeklyFocus: "Conversion ratios, agent strategy, documented workflows.",
    health: "Healthy activity",
    watch: "Partner strategy requires coach review consistency.",
  },
];

export const adminUserRows = [
  {
    name: "Jeremy McDonald",
    access: "Full platform review",
    program: "All programs",
    status: "Active",
  },
  {
    name: "Coach Review User",
    access: "Coach command center",
    program: "Assigned members",
    status: "Active",
  },
  {
    name: "LO Mastery Review User",
    access: "Member area",
    program: "LO Mastery",
    status: "Active",
  },
  {
    name: "Alliance Review User",
    access: "Member area",
    program: "Loan Factory Alliance",
    status: "Active",
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
    cards: [],
    sidebarTitle: "LO Mastery focus",
    sidebarItems: ["Daily time blocking", "Follow-up habit", "Script practice", "Weekly accountability"],
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
    cards: [],
    sidebarTitle: "Alliance focus",
    sidebarItems: ["Advanced weekly planning", "Partner strategy", "Pipeline inspection", "Priority accountability"],
  },
  resources: {
    eyebrow: "Member area",
    title: "Resources",
    description: "Script books, playbooks, trackers, worksheets, and coaching references.",
    cards: [],
  },
  scorecards: {
    eyebrow: "Member area",
    title: "Scorecards",
    description: "Weekly accountability form for activity, partner work, pipeline review, and consistency.",
    cards: [],
  },
  trackers: {
    eyebrow: "Member area",
    title: "Trackers",
    description: "Working tools for daily habits, Realtor relationships, deal flow, theme days, time blocks, and greatness tracking.",
    cards: [],
  },
  community: {
    eyebrow: "Member area",
    title: "Community",
    description: "A focused member space for coaching prompts, questions, wins, scripts, and accountability conversation.",
    cards: [],
  },
  classroom: {
    eyebrow: "Member area",
    title: "Classroom",
    description: "Lessons, practice prompts, and assignments for LO Mastery and Loan Factory Alliance.",
    cards: [],
  },
  calendar: {
    eyebrow: "Member area",
    title: "Calendar",
    description: "Coaching calls, planning windows, review sessions, and key member rhythm dates.",
    cards: [],
  },
  profile: {
    eyebrow: "Member area",
    title: "Profile",
    description: "Member goals, program path, current focus, and review settings.",
    cards: [],
  },
};

export const coachCommandPages: Record<string, RoutePage> = {
  members: {
    eyebrow: "Coach command center",
    title: "Members",
    description: "Coach-facing view of member progress, current focus, scorecard completion, and next coaching actions.",
    cards: [],
  },
  scorecards: {
    eyebrow: "Coach command center",
    title: "Scorecards",
    description: "Review member scorecards before coaching so the conversation starts with facts and action.",
    cards: [],
  },
  trackers: {
    eyebrow: "Coach command center",
    title: "Trackers",
    description: "Review daily execution, pipeline movement, partner touches, and follow-up activity.",
    cards: [],
  },
  notes: {
    eyebrow: "Coach command center",
    title: "Notes",
    description: "Coach notes for weekly calls, follow-up items, member obstacles, and next-step accountability.",
    cards: [],
  },
  community: {
    eyebrow: "Coach command center",
    title: "Community",
    description: "Coach-facing view of community prompts, unanswered questions, and member wins.",
    cards: [],
  },
};

export const managerPages: Record<string, RoutePage> = {
  coaches: {
    eyebrow: "Manager dashboard",
    title: "Coaches",
    description: "Manager view for coach assignments, review rhythm, member load, and follow-up visibility.",
    cards: [],
  },
  members: {
    eyebrow: "Manager dashboard",
    title: "Members",
    description: "Program-level view of members, active program, scorecard rhythm, and coaching engagement.",
    cards: [],
  },
  "program-status": {
    eyebrow: "Manager dashboard",
    title: "Program Status",
    description: "Executive-friendly program view for what is working, what needs attention, and what should be reviewed next.",
    cards: [],
  },
  reporting: {
    eyebrow: "Manager dashboard",
    title: "Reporting",
    description: "Simple reporting surface for coaching activity, scorecard completion, and member execution indicators.",
    cards: [],
  },
};

export const adminPages: Record<string, RoutePage> = {
  users: {
    eyebrow: "Admin",
    title: "Users",
    description: "Admin review page for members, coaches, managers, and local role visibility.",
    cards: [],
  },
  roles: {
    eyebrow: "Admin",
    title: "Roles",
    description: "Role model for platform review access, coaching operations, and member views.",
    cards: [],
  },
  programs: {
    eyebrow: "Admin",
    title: "Programs",
    description: "Admin page for LO Mastery and Loan Factory Alliance configuration review.",
    cards: [],
  },
  resources: {
    eyebrow: "Admin",
    title: "Resources",
    description: "Admin view for organizing script books, trackers, scorecards, PDFs, and lesson assets.",
    cards: [],
  },
  settings: {
    eyebrow: "Admin",
    title: "Settings",
    description: "Admin settings review page for local environment, program labels, and visible platform language.",
    cards: [],
  },
};

export function getRoutePage(
  pages: Record<string, RoutePage>,
  section: string,
) {
  return pages[section] ?? null;
}
