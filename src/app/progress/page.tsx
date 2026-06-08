import { createServerSupabaseClient } from "@/lib/supabase/server";
import { aiAdvantageModules } from "@/data/aiAdvantageModules";
import { modules } from "@/data/modules";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata = { title: "Your Progress" };
export const dynamic = "force-dynamic";

type ProgressRow = {
  module_id: string;
  status: string;
  updated_at: string;
};

const aiModuleSlugs = new Set(aiAdvantageModules.map((m) => m.slug));
const salesModuleSlugs = new Set(modules.map((m) => m.slug));

export default async function ProgressPage() {
  let progressByModule: Record<string, { status: string; updated_at: string }> = {};
  let signedIn = false;
  let displayName: string | null = null;

  try {
    const supabase = await createServerSupabaseClient();
    if (supabase) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        signedIn = true;
        const { data: profile } = await supabase
          .from("profiles")
          .select("full_name,email")
          .eq("id", user.id)
          .maybeSingle<{ full_name: string | null; email: string | null }>();
        displayName = profile?.full_name ?? profile?.email ?? user.email ?? null;

        const { data: rows } = await supabase
          .from("training_progress")
          .select("module_id,status,updated_at")
          .eq("user_id", user.id);
        progressByModule = Object.fromEntries(
          (rows ?? []).map((r: ProgressRow) => [r.module_id, r]),
        );
      }
    }
  } catch {
    signedIn = false;
  }

  const aiComplete = aiAdvantageModules.filter(
    (m) => progressByModule[m.slug]?.status === "complete",
  ).length;
  const salesComplete = modules.filter(
    (m) => progressByModule[m.slug]?.status === "complete",
  ).length;
  const total = aiAdvantageModules.length + modules.length;
  const totalComplete = aiComplete + salesComplete;
  const percent = total > 0 ? Math.round((totalComplete / total) * 100) : 0;

  return (
    <section className="container-page py-12">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
          Your Progress
        </p>
        <h1 className="h-display mt-2 text-3xl">
          What you have done. What is next.
        </h1>
        <p className="prose-lf mt-3 text-lf-slate">
          Your module completion across both academies. Only modules marked
          Live are eligible to be marked complete — future curriculum modules
          show their planned topic and audience.
        </p>
      </div>

      {!signedIn && (
        <div className="mt-6 card">
          <p className="prose-lf text-lf-slate">
            Sign in to see your progress. If you are new, start with{" "}
            <Link href="/sales/101-foundation/" className="font-semibold text-lf-orange">
              Sales 101 Foundation
            </Link>{" "}
            or{" "}
            <Link href="/sales/201-borrower-conversion/" className="font-semibold text-lf-orange">
              Sales 201 Borrower Conversion
            </Link>
            . AI 101 Foundations is in progress.
          </p>
        </div>
      )}

      {signedIn && (
        <>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                Overall
              </p>
              <p className="mt-2 text-3xl font-bold text-lf-navy">
                {totalComplete} / {total}
              </p>
              <p className="prose-lf text-sm text-lf-slate">{percent}% complete</p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                AI Academy
              </p>
              <p className="mt-2 text-3xl font-bold text-lf-navy">
                {aiComplete} / {aiAdvantageModules.length}
              </p>
              <Link href="/ai-advantage/" className="prose-lf text-sm text-lf-orange">
                Open AI Academy →
              </Link>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
                Sales Academy
              </p>
              <p className="mt-2 text-3xl font-bold text-lf-navy">
                {salesComplete} / {modules.length}
              </p>
              <Link href="/sales/" className="prose-lf text-sm text-lf-orange">
                Open Sales Academy →
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <SectionHeading
              eyebrow="AI Academy"
              title="Six modules. One new every other week."
            />
            <ul className="mt-4 space-y-2">
              {aiAdvantageModules.map((m) => {
                const status = progressByModule[m.slug]?.status;
                const isComplete = status === "complete";
                return (
                  <li key={m.slug} className="card flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-lf-navy">
                        <span className="text-lf-orange">{m.level}</span> ·{" "}
                        {m.title.split(":")[0]}
                      </p>
                      <p className="prose-lf text-sm text-lf-slate">
                        {m.corePromise}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {isComplete ? (
                        <span className="rounded-full bg-lf-orangeSoft px-3 py-1 text-xs font-semibold text-lf-orange">
                          ✓ Complete
                        </span>
                      ) : (
                        <span className="rounded-full bg-lf-mist px-3 py-1 text-xs font-semibold text-lf-slate">
                          Not yet
                        </span>
                      )}
                      <Link
                        href={m.href}
                        className="text-sm font-semibold text-lf-orange hover:underline"
                      >
                        Open →
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-12">
            <SectionHeading
              eyebrow="Sales Academy"
              title="Six modules. One new every other week."
            />
            <ul className="mt-4 space-y-2">
              {modules.map((m) => {
                const status = progressByModule[m.slug]?.status;
                const isComplete = status === "complete";
                return (
                  <li key={m.slug} className="card flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-lf-navy">
                        <span className="text-lf-orange">{m.level}</span> ·{" "}
                        {m.title.split(":")[0]}
                      </p>
                      <p className="prose-lf text-sm text-lf-slate">
                        {m.corePromise}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {isComplete ? (
                        <span className="rounded-full bg-lf-orangeSoft px-3 py-1 text-xs font-semibold text-lf-orange">
                          ✓ Complete
                        </span>
                      ) : (
                        <span className="rounded-full bg-lf-mist px-3 py-1 text-xs font-semibold text-lf-slate">
                          Not yet
                        </span>
                      )}
                      <Link
                        href={`/sales/${m.slug}/`}
                        className="text-sm font-semibold text-lf-orange hover:underline"
                      >
                        Open →
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}
