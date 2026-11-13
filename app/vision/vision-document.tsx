import Link from "next/link";
import type { ReactNode } from "react";

export type VisionMessages = {
  meta: { machineNote: string };
  eyebrows: {
    vision: string;
    background: string;
    belief: string;
    work: string;
    raftCities: string;
    connect: string;
  };
  opening: { thesis: string; lead: string };
  background: { p1: string; p2: string };
  belief: { p1: string; p2: string; p3: string };
  work: { heading: string; intro: string };
  projects: Record<
    "boardbox" | "withcoach" | "raft",
    { role: string; name: string; p1: string; p2: string }
  >;
  raftCities: {
    heading: string;
    lead: string;
    intro: string;
    ladder: {
      heading: string;
      intro: string;
      rungs: { name: string; desc: string }[];
      outro: string;
    };
    sharedLife: { heading: string; p1: string; p2: string };
    restart: { heading: string; p1: string };
    replicate: { heading: string; p1: string; p2: string };
  };
  connect: { cadence: string[]; p1: string; closing: string };
  signoff: { name: string };
};

export type Locale = "en" | "zh" | "th" | "ka";

const LOCALES: { code: Locale; label: string; href: string; htmlLang: string }[] =
  [
    { code: "en", label: "EN", href: "/vision", htmlLang: "en" },
    { code: "zh", label: "中文", href: "/vision/zh", htmlLang: "zh-Hans" },
    { code: "th", label: "ไทย", href: "/vision/th", htmlLang: "th" },
    { code: "ka", label: "ქართული", href: "/vision/ka", htmlLang: "ka" },
  ];

/** Split «marked» phrases into red accent spans. No-op when no markers
 *  are present (translated locales render as clean prose). */
function accent(text: string): ReactNode {
  const parts = text.split(/«([^»]+)»/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="v-accent">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

function Switcher({ current }: { current: Locale }) {
  return (
    <nav className="v-switch" aria-label="Language">
      {LOCALES.map((l, i) => (
        <span key={l.code} className="contents">
          {i > 0 && (
            <span className="sep" aria-hidden>
              ·
            </span>
          )}
          {l.code === current ? (
            <span className="current" aria-current="true">
              {l.label}
            </span>
          ) : (
            <Link href={l.href} hrefLang={l.htmlLang}>
              {l.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}

export function VisionDocument({
  lang,
  messages: m,
}: {
  lang: Locale;
  messages: VisionMessages;
}) {
  const htmlLang = LOCALES.find((l) => l.code === lang)?.htmlLang ?? "en";
  const projectOrder = ["boardbox", "withcoach", "raft"] as const;

  return (
    <main className="vision" lang={htmlLang}>
      <div className="vision-frame">
        {/* A quiet way home + language switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-10 md:pt-12">
          <Link href="/" className="v-back">
            <span className="arr">←</span>
            <span>Home</span>
          </Link>
          <Switcher current={lang} />
        </div>
        {lang !== "en" && <p className="v-note mt-6">{m.meta.machineNote}</p>}

        {/* ── Opening ─────────────────────────────── */}
        <section className="pt-12 md:pt-20">
          <p className="v-eyebrow mb-7">{m.eyebrows.vision}</p>
          <h1 className="v-thesis">{accent(m.opening.thesis)}</h1>
          <p className="v-lead mt-9">{m.opening.lead}</p>
        </section>

        {/* ── Who I am ────────────────────────────── */}
        <section className="pt-20 md:pt-28">
          <p className="v-eyebrow mb-6">{m.eyebrows.background}</p>
          <p className="v-body">{m.background.p1}</p>
          <p className="v-body">{m.background.p2}</p>
        </section>

        {/* ── The conviction ──────────────────────── */}
        <section className="pt-20 md:pt-28">
          <p className="v-eyebrow mb-6">{m.eyebrows.belief}</p>
          <p className="v-body">{m.belief.p1}</p>
          <p className="v-body">{m.belief.p2}</p>
          <p className="v-body">{accent(m.belief.p3)}</p>
        </section>

        {/* ── The work — a sequence ───────────────── */}
        <section className="pt-20 md:pt-28">
          <p className="v-eyebrow mb-6">{m.eyebrows.work}</p>
          <h2 className="v-h2">{m.work.heading}</h2>
          <p className="v-body mt-7">{m.work.intro}</p>

          <div className="v-spine mt-16">
            {projectOrder.map((key) => {
              const p = m.projects[key];
              return (
                <div key={key} className="v-node">
                  <p className="v-role">{p.role}</p>
                  <p className="v-project">{p.name}</p>
                  <p className="v-body mt-5">{p.p1}</p>
                  <p className="v-body">{p.p2}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Raft Cities — the life's work ───────── */}
        <section className="pt-24 md:pt-32">
          <p className="v-eyebrow mb-6">{m.eyebrows.raftCities}</p>
          <h2 className="v-h2">{m.raftCities.heading}</h2>
          <p className="v-lead mt-7">{m.raftCities.lead}</p>
          <p className="v-body mt-7">{m.raftCities.intro}</p>

          {/* Housing ladder */}
          <div className="pt-14">
            <h3 className="v-h3">{m.raftCities.ladder.heading}</h3>
            <p className="v-body mt-4">{m.raftCities.ladder.intro}</p>

            <div className="v-ladder">
              {m.raftCities.ladder.rungs.map((rung, i) => (
                <div
                  key={i}
                  className={
                    i === m.raftCities.ladder.rungs.length - 1
                      ? "v-rung v-rung--end"
                      : "v-rung"
                  }
                >
                  <span className="v-rung-step">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="v-rung-name">{rung.name}</span>
                  <p className="v-rung-desc">{rung.desc}</p>
                </div>
              ))}
            </div>

            <p className="v-body mt-8">{m.raftCities.ladder.outro}</p>
          </div>

          {/* Shared life */}
          <div className="pt-14">
            <h3 className="v-h3">{m.raftCities.sharedLife.heading}</h3>
            <p className="v-body mt-4">{m.raftCities.sharedLife.p1}</p>
            <p className="v-body">{m.raftCities.sharedLife.p2}</p>
          </div>

          {/* The restart */}
          <div className="pt-14">
            <h3 className="v-h3">{m.raftCities.restart.heading}</h3>
            <p className="v-body mt-4">{m.raftCities.restart.p1}</p>
          </div>

          {/* City on a hill */}
          <div className="pt-14">
            <h3 className="v-h3">{m.raftCities.replicate.heading}</h3>
            <p className="v-body mt-4">{m.raftCities.replicate.p1}</p>
            <p className="v-body">{m.raftCities.replicate.p2}</p>
          </div>
        </section>

        {/* ── How it all connects ─────────────────── */}
        <section className="pt-24 md:pt-32">
          <p className="v-eyebrow mb-7">{m.eyebrows.connect}</p>
          <p className="v-cadence">
            {m.connect.cadence.map((line, i) => (
              <span key={i}>{accent(line)}</span>
            ))}
          </p>
          <p className="v-body mt-9">{m.connect.p1}</p>
          <p className="v-lead mt-7">{m.connect.closing}</p>
        </section>

        {/* ── Sign-off ────────────────────────────── */}
        <footer className="pt-20 md:pt-28">
          <div className="v-rule" />
          <p className="v-signoff-name mt-8">{m.signoff.name}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">
            <a
              href="https://tryboardbox.com"
              target="_blank"
              rel="noreferrer"
              className="link-arrow"
            >
              tryboardbox.com <span className="a">↗</span>
            </a>
            <span className="v-sep" aria-hidden>
              |
            </span>
            <a
              href="https://withcoach.me"
              target="_blank"
              rel="noreferrer"
              className="link-arrow"
            >
              withcoach.me <span className="a">↗</span>
            </a>
            <span className="v-sep" aria-hidden>
              |
            </span>
            <a
              href="https://raft.social"
              target="_blank"
              rel="noreferrer"
              className="link-arrow"
            >
              raft.social <span className="a">↗</span>
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
