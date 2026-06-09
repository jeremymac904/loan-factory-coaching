import { modules } from "@/data/modules";
import ModuleCard from "@/components/ModuleCard";

export const metadata = { title: "Elite Sales & Marketing" };

export default function SalesAcademyPage() {
  return (
    <section className="container-page py-14">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
          Elite Sales &amp; Marketing
        </p>
        <h1 className="h-display mt-2 text-4xl">
          Sales training for loan officers.
        </h1>
        <p className="prose-lf mt-4 text-lg text-lf-slate">
          Training videos, handouts, scripts, prompts, and roleplays for
          every module.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => (
          <ModuleCard
            key={m.slug}
            level={m.level}
            title={m.title.split(":")[0]}
            promise={m.corePromise}
            href={`/sales/${m.slug}/`}
            status={m.status}
          />
        ))}
      </div>
    </section>
  );
}
