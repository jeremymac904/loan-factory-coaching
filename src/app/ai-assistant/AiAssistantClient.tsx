"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

type Message = { id: number; role: "user" | "assistant"; text: string };

type Persona = {
  key: "beginner" | "roleplay" | "script-builder" | "content";
  title: string;
  level: "Beginner" | "Intermediate";
  blurb: string;
  starter: string;
  system: string;
};

const PERSONAS: Persona[] = [
  {
    key: "beginner",
    title: "Beginner Coach",
    level: "Beginner",
    blurb: "Walks a brand-new LO through one daily action at a time. Plain English. No jargon. One thing, not three.",
    starter: "Help me with my first task today.",
    system:
      "You are a patient coach for a brand-new Loan Factory loan officer. Give one daily action at a time. Plain English. No jargon. Keep it short. End with the one next step.",
  },
  {
    key: "roleplay",
    title: "Roleplay Coach",
    level: "Intermediate",
    blurb: "Plays the borrower, realtor, or partner. Pushes back three times. Then gives rubric-scored feedback.",
    starter: "Roleplay a rate shopper. Push back three times.",
    system:
      "You are a roleplay partner for a Loan Factory loan officer. When they ask to roleplay, play the borrower, realtor, or partner they name. Push back three times. Then give rubric-scored feedback: opening, questions, talk to listen ratio (target 43:57), plan summary, dated next step.",
  },
  {
    key: "script-builder",
    title: "Script Builder",
    level: "Intermediate",
    blurb: "Personalizes the closest matching library script using the LO's context, the borrower's context, and the safe content rules.",
    starter: "Personalize the realtor first outreach for a new agent in my market.",
    system:
      "You are a script builder for a Loan Factory loan officer. When they ask for a draft, personalize the closest matching library script. Take the LO context and the borrower context they give you. Run the output through safe content rules: no specific rates, no competitor bashing, no guaranteed outcomes. End with a clear next step. The LO will edit. Suggest an edit, not a finished product.",
  },
  {
    key: "content",
    title: "Content Coach",
    level: "Intermediate",
    blurb: "Drafts social, short video, and GBP content. Runs every output through the safe content decision tree.",
    starter: "Draft a 60-second video script about the best-price guarantee.",
    system:
      "You are a content coach for a Loan Factory loan officer. Draft social, short video, and GBP content. Always end your draft with a 5-step safe content check: (1) any specific rate, payment, or fee? (2) competitor named? (3) guaranteed outcome? (4) NMLS ID included? (5) could a borrower read it as advice for their situation? The LO will edit and publish.",
  },
];

export default function AiAssistantClient() {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const modeParam = sp.get("mode");
  const starterParam = sp.get("starter");

  const [mode, setMode] = useState<Persona["key"]>(
    (PERSONAS.find((p) => p.key === modeParam)?.key ?? "beginner"),
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const idRef = useRef(0);

  const persona = useMemo(
    () => PERSONAS.find((p) => p.key === mode) ?? PERSONAS[0],
    [mode],
  );

  // Defer initialization of input from URL until after first render.
  const [pendingStarter, setPendingStarter] = useState<string | null>(starterParam);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    if (pendingStarter && !messages.length) {
      setInput(pendingStarter);
      setPendingStarter(null);
    }
  }, [pendingStarter, messages.length]);

  useEffect(() => {
    const newMode = PERSONAS.find((p) => p.key === modeParam)?.key;
    if (newMode && newMode !== mode) {
      // Use rAF to defer setState out of the effect body.
      const id = requestAnimationFrame(() => {
        setMode(newMode);
        setMessages([]);
      });
      return () => cancelAnimationFrame(id);
    }
  }, [modeParam, mode]);

  function switchPersona(next: Persona["key"]) {
    setMode(next);
    setMessages([]);
    setError(null);
    const params = new URLSearchParams();
    params.set("mode", next);
    router.replace(`${pathname}?${params.toString()}`);
  }

  async function send() {
    const text = input.trim();
    if (!text || submitting) return;
    setInput("");
    setError(null);

    const userMsg: Message = { id: ++idRef.current, role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setSubmitting(true);

    try {
      const res = await fetch("/api/ai/assistant", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "system", content: persona.system },
            ...messages.map((m) => ({
              role: m.role,
              content: m.text,
            })),
            { role: "user", content: text },
          ],
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message ?? data.error ?? `Request failed (${res.status})`);
      }
      const data = await res.json();
      const reply =
        data?.reply ??
        data?.message ??
        data?.choices?.[0]?.message?.content ??
        data?.content ??
        "";
      setMessages((m) => [
        ...m,
        { id: ++idRef.current, role: "assistant", text: String(reply) },
      ]);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Unknown error";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="container-page py-12">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-lf-orange">
          AI Assistant
        </p>
        <h1 className="h-display mt-2 text-3xl">Four personas. One job: help you ship the work.</h1>
        <p className="prose-lf mt-3 text-lf-slate">
          Pick the persona that matches the task. Send a message. Get a
          draft, a roleplay, a script, or a coach's next step.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {PERSONAS.map((p) => {
          const active = p.key === mode;
          return (
            <button
              key={p.key}
              type="button"
              onClick={() => switchPersona(p.key)}
              className={
                "card flex flex-col gap-2 text-left transition " +
                (active
                  ? "border-lf-orange bg-lf-orangeSoft"
                  : "hover:-translate-y-0.5 hover:shadow-lift")
              }
            >
              <div className="flex items-center justify-between">
                <h2 className="h-display text-base">{p.title}</h2>
                <span className="rounded-full bg-lf-mist px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-lf-charcoal">
                  {p.level}
                </span>
              </div>
              <p className="text-xs text-lf-slate">{p.blurb}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="card flex min-h-[480px] flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="h-display text-xl">{persona.title}</h2>
            <span className="rounded-full bg-lf-orangeSoft px-3 py-1 text-xs font-semibold text-lf-orange">
              {persona.level}
            </span>
          </div>
          <p className="text-sm text-lf-slate">{persona.blurb}</p>

          <div className="mt-2 flex-1 overflow-y-auto rounded-xl border border-lf-line bg-lf-mist p-4">
            {messages.length === 0 ? (
              <p className="text-sm italic text-lf-slate">
                Try: "{persona.starter}"
              </p>
            ) : (
              <ol className="space-y-3">
                {messages.map((m) => (
                  <li
                    key={m.id}
                    className={
                      "rounded-lg p-3 text-sm " +
                      (m.role === "user"
                        ? "bg-white text-lf-charcoal"
                        : "bg-lf-orangeSoft text-lf-charcoal")
                    }
                  >
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-lf-slate">
                      {m.role === "user" ? "You" : persona.title}
                    </p>
                    <p className="whitespace-pre-wrap">{m.text}</p>
                  </li>
                ))}
              </ol>
            )}
            {submitting && (
              <p className="mt-3 text-xs italic text-lf-slate">
                {persona.title} is thinking…
              </p>
            )}
            {error && (
              <p className="mt-3 rounded-lg border border-lf-orange/40 bg-lf-orangeSoft p-3 text-sm text-lf-orange">
                {error}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder={`Message ${persona.title}…`}
              disabled={submitting}
              className="flex-1 rounded-lg border border-lf-line bg-white px-4 py-3 text-sm focus:border-lf-orange focus:outline-none focus:ring-2 focus:ring-lf-orange/30 disabled:opacity-60"
            />
            <button
              type="button"
              onClick={send}
              disabled={submitting || !input.trim()}
              className="rounded-lg bg-lf-orange px-6 py-3 text-sm font-bold text-white shadow transition hover:-translate-y-0.5 hover:bg-lf-orangeDark disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send"}
            </button>
          </div>
        </div>

        <aside className="card flex flex-col gap-3">
          <h3 className="h-display text-base">Quick starts</h3>
          <p className="text-xs text-lf-slate">
            One-tap starters for {persona.title}. Click to load.
          </p>
          <div className="flex flex-col gap-2">
            {[
              persona.starter,
              persona.key === "beginner" && "What should I do in my first hour today?",
              persona.key === "beginner" && "Walk me through the daily activity standard.",
              persona.key === "roleplay" && "Roleplay a nervous first-time buyer.",
              persona.key === "roleplay" && "Roleplay a Realtor who only works with one lender.",
              persona.key === "script-builder" &&
                "Draft a past client check-in for someone who closed 18 months ago.",
              persona.key === "script-builder" &&
                "Draft a first text to a new lead from Zillow.",
              persona.key === "content" && "Draft a Google Business Profile post about local rates.",
              persona.key === "content" && "Draft a 60 second video script on the first-time buyer down payment myth.",
            ]
              .filter((s): s is string => Boolean(s))
              .map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setInput(s)}
                  className="rounded-lg border border-lf-line bg-lf-mist px-3 py-2 text-left text-sm text-lf-charcoal transition hover:border-lf-orange hover:text-lf-orange"
                >
                  {s}
                </button>
              ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
