import Link from "next/link";
import { downloadResources, driveFolderUrl, platformFeatures } from "@/data/coachingPlatform";

export const metadata = { title: "Resources" };

const resources = [
  {
    title: "Script books",
    description:
      "First-call scripts, follow-up language, buyer conversation guides, and Realtor outreach scripts.",
    href: "/member-area/resources/",
  },
  {
    title: "Trackers",
    description:
      "Daily execution, Realtor relationships, deal flow, and follow-up trackers.",
    href: "/member-area/trackers/",
  },
  {
    title: "Scorecards",
    description:
      "Weekly accountability views for coaching review and member follow-through.",
    href: "/member-area/scorecards/",
  },
  {
    title: "Theme days",
    description:
      "Simple weekly rhythm that gives every day a job and reduces guessing.",
    href: "/member-area/classroom/",
  },
  {
    title: "Classroom",
    description:
      "Lessons, replays, assignments, and practice prompts for coaching members.",
    href: "/member-area/classroom/",
  },
  {
    title: "Community",
    description:
      "Member wins, questions, prompts, and accountability conversation.",
    href: "/member-area/community/",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-lf-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/media/dark-hero-background.png)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-black/72" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(242,106,31,0.26),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.94),rgba(17,17,17,0.64),rgba(0,0,0,0.9))]"
        />
        <div className="relative container-page py-16 md:py-20">
          <p className="text-xs font-bold uppercase tracking-wide text-lf-orange">
            Resources
          </p>
          <h1 className="metal-title-dark mt-5 max-w-4xl text-4xl md:text-5xl">
            Coaching resources, organized for execution.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">
            Scripts, scorecards, trackers, theme days, classroom material, and
            community links for the paid coaching platform.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/member-area/resources/" className="btn-primary w-full sm:w-auto">
              Open member resources
            </Link>
            <a
              href={driveFolderUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary w-full border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/20 sm:w-auto"
            >
              Open Drive folder
            </a>
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.href + resource.title} href={resource.href} className="card min-h-[190px] hover:shadow-lift">
              <h3 className="h-display text-lg">{resource.title}</h3>
              <p className="prose-lf mt-2 text-sm text-lf-slate">
                {resource.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-lf-mist">
        <div className="container-page py-14">
          <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
            Download library
          </p>
          <h2 className="h-display mt-2 text-3xl">Drive-backed coaching assets</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {downloadResources.map((resource) => (
              <article key={resource.title} className="card flex min-h-[230px] flex-col">
                <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                  {resource.category} / {resource.audience}
                </p>
                <h3 className="h-display mt-3 text-lg">{resource.title}</h3>
                <p className="prose-lf mt-2 text-sm text-lf-slate">
                  {resource.description}
                </p>
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
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <h2 className="h-display text-3xl">Core coaching tools</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((feature) => (
              <article key={feature.title} className="card min-h-[180px]">
                <h3 className="h-display text-lg">{feature.title}</h3>
                <p className="prose-lf mt-2 text-sm text-lf-slate">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
      </section>
    </>
  );
}
