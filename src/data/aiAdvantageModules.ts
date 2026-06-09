import type { AiAdvantagePublishedVideo } from "./aiAdvantagePublishedVideos";
import { aiAdvantagePublishedVideos } from "./aiAdvantagePublishedVideos";

export type AiAdvantageModule = {
  level: "101" | "201" | "301" | "401" | "501" | "601";
  slug: string;
  href: string;
  title: string;
  theme: string;
  corePromise: string;
  audience: string;
  status: "full" | "summary" | "coming-soon";
  levels: ("Beginner" | "Intermediate" | "Advanced")[];
  doThisToday: string[];
  outcomes: string[];
  videoIds: string[];
  topics: string[];
  assignment: string[];
  trackerMetrics: string[];
  coachNotes: string[];
  teamLeaderNotes: string[];
  complianceWatchOuts: string[];
  behaviorChange: string;
  handoutHref?: string;
};

export const aiAdvantageModules: AiAdvantageModule[] = [
  {
    level: "101",
    slug: "101-foundations",
    href: "/ai-advantage/101-foundations/",
    title: "101 Foundations: Set Up Your AI Twin and Your Safety Rules",
    theme: "AI foundations and safety",
    corePromise:
      "By Friday, you have a working AI Twin and you understand what to never paste into it.",
    audience:
      "Any Loan Officer who has not built an AI Twin yet, or who wants a clean refresher on the safety rules.",
    status: "full",
    levels: ["Beginner"],
    videoIds: ["AIADV-001", "AIADV-002"],
    doThisToday: [
      "Open Google AI Studio and create a Gem named after you.",
      "Read the safety rules — what to never paste into an AI tool.",
      "Run your first three drafts: one borrower email, one realtor text, one social post.",
    ],
    outcomes: [
      "Explain the AI Twin concept in plain English.",
      "Build a working AI Twin in Google AI Studio (Gemini Gem).",
      "Name the three things you never paste into AI (NPI, borrower SSN, internal Loan Factory docs).",
      "Run a draft in your Twin, edit it until it sounds like you, and use it.",
      "Run the safe content decision tree before anything goes public.",
    ],
    topics: [
      "What an AI Twin is and what it is not",
      "Google AI Studio and Gemini Gem basics",
      "Your safety rules (no NPI, no SSN, no internal docs)",
      "Your first three drafts (borrower email, realtor text, social post)",
      "The safe content decision tree",
      "How to edit AI output until it sounds like you",
    ],
    assignment: [
      "Build your AI Twin in Google AI Studio.",
      "Produce 3 outputs: 1 borrower email, 1 realtor text, 1 social post.",
      "Edit each draft until it sounds like you.",
      "Mark this module complete.",
    ],
    trackerMetrics: [
      "AI Twin created (yes or no)",
      "Drafts produced this week",
      "Drafts edited before sending (count)",
      "Drafts run through safe content decision tree (count)",
    ],
    coachNotes: [
      "Reinforce the safety rules before the speed tips.",
      "Watch for LOs who paste borrower info directly — coach them to use placeholders.",
      "Celebrate first drafts, even rough ones. Behavior change beats polish.",
    ],
    teamLeaderNotes: [
      "Pair every new LO with someone who has used an AI Twin for 30+ days.",
      "Review the first 5 drafts from each new LO before they go out.",
    ],
    complianceWatchOuts: [
      "Never paste borrower NPI, SSN, DOB, or account numbers into any AI tool.",
      "Never paste internal Loan Factory documents (rate sheets, comp matrices) into AI.",
      "All AI output is a draft. The LO reviews and owns the final message.",
    ],
    behaviorChange:
      "LO has a working AI Twin and a clear list of what to never paste into it.",
    handoutHref: "/downloads/ai-advantage/101-foundations-handout.docx",
  },
  {
    level: "201",
    slug: "201-twin-setup",
    href: "/ai-advantage/201-twin-setup/",
    title: "201 Twin Setup: Connect Your Sources and Your Voice",
    theme: "AI Twin personalization",
    corePromise:
      "Connect your AI Twin to your scripts, past client list, and bio doc so drafts sound like you.",
    audience:
      "LO with a working Gemini Gem, ready to personalize it with their own content.",
    status: "summary",
    levels: ["Beginner", "Intermediate"],
    videoIds: [],
    doThisToday: [],
    outcomes: [],
    topics: [
      "Finalizing your Gemini Gem setup",
      "Why custom Gems beat generic AI",
      "Bio docs and tone control",
      "Connecting Google Drive folders",
      "Connecting Gmail and Workspace",
      "The Twin persona prompt",
    ],
    assignment: [],
    trackerMetrics: [],
    coachNotes: [],
    teamLeaderNotes: [],
    complianceWatchOuts: [],
    behaviorChange:
      "Behavior change pending — module content not yet produced.",
    handoutHref: "/downloads/ai-advantage/201-twin-setup-handout.docx",
  },
  {
    level: "301",
    slug: "301-client-communication",
    href: "/ai-advantage/301-client-communication/",
    title: "301 Client Communication: First Touches in Under 60 Seconds",
    theme: "AI for borrower and partner messaging",
    corePromise:
      "Use your AI Twin to draft every first-touch message in under 60 seconds.",
    audience:
      "LO with a personalized Twin, ready to put it in the daily communication loop.",
    status: "summary",
    levels: ["Intermediate"],
    videoIds: [],
    doThisToday: [],
    outcomes: [],
    topics: [
      "Drafting client emails in Gmail",
      "AI powered loan status updates",
      "Borrower first touch (text, email, call script)",
      "Realtor follow up sequence",
      "Past client check in",
      "Edit and review rules",
    ],
    assignment: [],
    trackerMetrics: [],
    coachNotes: [],
    teamLeaderNotes: [],
    complianceWatchOuts: [],
    behaviorChange:
      "Behavior change pending — module content not yet produced.",
    handoutHref: "/downloads/ai-advantage/301-client-communication-handout.docx",
  },
  {
    level: "401",
    slug: "401-marketing-content",
    href: "/ai-advantage/401-marketing-content/",
    title: "401 Marketing and Content: Publish 3 Pieces a Week, Compliance Checked",
    theme: "AI for marketing and content",
    corePromise:
      "Publish 3 pieces of content a week, AI assisted, compliance checked.",
    audience: "LO ready to be visible in their market.",
    status: "summary",
    levels: ["Intermediate", "Advanced"],
    videoIds: [],
    doThisToday: [],
    outcomes: [],
    topics: [
      "Automating your daily market updates",
      "Dominating your local market with AI",
      "Multi language content strategy",
      "GBP posts and SEO",
      "Short video scripts and hooks",
      "The safe content decision tree",
    ],
    assignment: [],
    trackerMetrics: [],
    coachNotes: [],
    teamLeaderNotes: [],
    complianceWatchOuts: [],
    behaviorChange:
      "Behavior change pending — module content not yet produced.",
    handoutHref: "/downloads/ai-advantage/401-marketing-content-handout.docx",
  },
  {
    level: "501",
    slug: "501-apps-automation",
    href: "/ai-advantage/501-apps-automation/",
    title: "501 Apps and Automation: Connect 2 Tools, Stop Losing Deals to Mess",
    theme: "AI tools and automation",
    corePromise:
      "Connect 2 AI tools to your pipeline and stop losing deals to mess.",
    audience: "Producer or experienced LO with a steady borrower process.",
    status: "summary",
    levels: ["Intermediate", "Advanced"],
    videoIds: [],
    doThisToday: [],
    outcomes: [],
    topics: [
      "Reactivation sequences with AI",
      "Status update templates",
      "Lead routing with AI",
      "Documenting prompt chains",
      "The review step in every automation",
    ],
    assignment: [],
    trackerMetrics: [],
    coachNotes: [],
    teamLeaderNotes: [],
    complianceWatchOuts: [],
    behaviorChange:
      "Behavior change pending — module content not yet produced.",
    handoutHref: "/downloads/ai-advantage/501-apps-automation-handout.docx",
  },
  {
    level: "601",
    slug: "601-elite-execution",
    href: "/ai-advantage/601-elite-execution/",
    title: "601 Elite Execution: Your 12 Week AI Plan",
    theme: "AI elite execution and 12 week plan",
    corePromise:
      "Graduate with a written AI workflow and a measurable 12 week plan.",
    audience: "Producer, team leader, or corporate coach.",
    status: "summary",
    levels: ["Advanced"],
    videoIds: [],
    doThisToday: [],
    outcomes: [],
    topics: [
      "Your 12 week AI plan",
      "The 3 workflows that compound",
      "Success metrics and review cadence",
      "Quarterly AI plan review",
    ],
    assignment: [],
    trackerMetrics: [],
    coachNotes: [],
    teamLeaderNotes: [],
    complianceWatchOuts: [],
    behaviorChange:
      "Behavior change pending — module content not yet produced.",
    handoutHref: "/downloads/ai-advantage/601-elite-execution-handout.docx",
  },
];

export type AiAdvantageModuleSummary = AiAdvantageModule;

export function findAiAdvantageModule(slug: string): AiAdvantageModule | undefined {
  return aiAdvantageModules.find((m) => m.slug === slug);
}

export function getAiAdvantageVideosForModule(
  slug: string,
): AiAdvantagePublishedVideo[] {
  const m = findAiAdvantageModule(slug);
  if (!m) return [];
  return m.videoIds
    .map((id) => aiAdvantagePublishedVideos.find((v) => v.rowId === id))
    .filter((v): v is AiAdvantagePublishedVideo => Boolean(v));
}
