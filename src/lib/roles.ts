export type RoleId =
  | "master-admin"
  | "coaching-manager"
  | "coach"
  | "lo-mastery-member"
  | "alliance-member";

export type Role = {
  id: RoleId;
  name: string;
  group:
    | "Master Admin"
    | "Coaching Manager"
    | "Coach"
    | "LO Mastery Member"
    | "Loan Factory Alliance Member";
  description: string;
  dashboardHref: string;
  highlights: string[];
};

export const roles: Role[] = [
  {
    id: "master-admin",
    name: "Master Admin",
    group: "Master Admin",
    description:
      "Full local review view across public pages, member area, coach command center, manager dashboard, and admin.",
    dashboardHref: "/admin/",
    highlights: [
      "All coaching pages",
      "Role and user review",
      "Program settings",
      "Reporting visibility",
    ],
  },
  {
    id: "coaching-manager",
    name: "Coaching Manager",
    group: "Coaching Manager",
    description:
      "Manager view for coaches, members, program status, and executive reporting.",
    dashboardHref: "/manager-dashboard/",
    highlights: [
      "Coach activity",
      "Member progress",
      "Program status",
      "Reporting",
    ],
  },
  {
    id: "coach",
    name: "Coach",
    group: "Coach",
    description:
      "Coach command center view for members, scorecards, trackers, notes, and community.",
    dashboardHref: "/coach-command-center/",
    highlights: [
      "Member roster",
      "Scorecard review",
      "Tracker review",
      "Coach notes",
    ],
  },
  {
    id: "lo-mastery-member",
    name: "LO Mastery Member",
    group: "LO Mastery Member",
    description:
      "Member view for LO Mastery resources, weekly coaching, daily execution, and scorecards.",
    dashboardHref: "/member-area/lo-mastery/",
    highlights: [
      "LO Mastery home",
      "Scorecards",
      "Trackers",
      "Resources",
    ],
  },
  {
    id: "alliance-member",
    name: "Loan Factory Alliance Member",
    group: "Loan Factory Alliance Member",
    description:
      "Member view for Alliance coaching, advanced planning, partner strategy, and accountability.",
    dashboardHref: "/member-area/alliance/",
    highlights: [
      "Alliance home",
      "Weekly review",
      "Partner strategy",
      "Community",
    ],
  },
];

const COACH_GUIDE_ACCESS: RoleId[] = [
  "master-admin",
  "coaching-manager",
  "coach",
];

const TEAM_LEADER_GUIDE_ACCESS: RoleId[] = [
  "master-admin",
  "coaching-manager",
  "coach",
];

export type GatedSurface = "coach-guide" | "team-leader-guide";

const accessByGate: Record<GatedSurface, RoleId[]> = {
  "coach-guide": COACH_GUIDE_ACCESS,
  "team-leader-guide": TEAM_LEADER_GUIDE_ACCESS,
};

export function isAllowed(gate: GatedSurface, role: RoleId | null): boolean {
  if (!role) return false;
  return accessByGate[gate].includes(role);
}

export function findRole(id: RoleId | null): Role | undefined {
  if (!id) return undefined;
  return roles.find((r) => r.id === id);
}

export function isRoleId(value: string | null): value is RoleId {
  return roles.some((role) => role.id === value);
}

export const ROLE_STORAGE_KEY = "lf_role_preview";

export const ROLE_PREVIEW_DISCLAIMER =
  "This is a local review role for this browser. It does not change real users, roles, or production security.";
