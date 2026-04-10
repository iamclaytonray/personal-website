import { BangkokClock } from "./bangkok-clock";
import { FieldMap } from "./field-map";

export default function Home() {
  return (
    <>
      {/* ─────────────────────────────────────────
          TOP BAR — survey strip
          ───────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[color:var(--color-ink)] bg-[color:var(--color-paper)]/92 backdrop-blur-md">
        <div className="frame flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 28 28"
              className="shrink-0"
              aria-hidden
            >
              <circle
                cx="14"
                cy="14"
                r="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line x1="14" y1="1" x2="14" y2="27" stroke="currentColor" strokeWidth="0.8" />
              <line x1="1" y1="14" x2="27" y2="14" stroke="currentColor" strokeWidth="0.8" />
              <polygon points="14,3 12,13 16,13" fill="var(--color-red)" />
            </svg>
            <span className="label">Clayton — Field Notebook</span>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <span className="label-mute">13°45′N · 100°28′E</span>
            <span className="label-mute">
              BKK <BangkokClock /> ICT
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="dot-live" aria-hidden />
            <span className="label">In the field</span>
          </div>
        </div>
      </header>

      <main>
        {/* ═════════════════════════════════════════
            PLATE I — THE OPERATOR
            ═════════════════════════════════════════ */}
        <section className="border-b border-[color:var(--color-ink)]">
          <div className="frame pb-20 pt-14 md:pb-28 md:pt-16">
            <div className="plate-header">
              <span className="num">PL. I</span>
              <span className="title">The Operator · Subject Record</span>
              <span className="coords">N 13°45′ · E 100°28′</span>
            </div>

            {/* Headline */}
            <h1 className="display mt-6 text-[clamp(3.25rem,12vw,12rem)] text-[color:var(--color-ink)]">
              <span className="block">I build</span>
              <span className="block">
                software from
              </span>
              <span className="block">
                the{" "}
                <span className="italic" style={{ color: "var(--color-red)" }}>
                  field.
                </span>
              </span>
            </h1>

            {/* Sub-lede + specimen data */}
            <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-20 md:gap-x-10">
              <div className="col-span-12 md:col-span-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="label">Abstract</span>
                  <div className="hl" />
                </div>
                <p className="body-lg">
                  I&apos;m a full-stack engineer and founder based in Bangkok.
                  Ten years of TypeScript. One previous exit — zero to
                  profitability to a{" "}
                  <span
                    className="font-semibold"
                    style={{ color: "var(--color-red)" }}
                  >
                    $2M Series A
                  </span>{" "}
                  at TeachMe.To. I&apos;m now shipping two products for the
                  markets I actually live in, not the ones I&apos;ve read
                  about.
                </p>
                <p className="body mt-5 max-w-[48ch]">
                  This site is a field notebook, not a portfolio. Everything
                  on it is something I&apos;m building right now or have
                  already finished paying for in scar tissue.
                </p>
              </div>

              <div className="col-span-12 md:col-span-5 md:col-start-8">
                <div className="mb-3 flex items-center gap-3">
                  <span className="label">Subject · Specimen</span>
                  <div className="hl" />
                </div>
                <dl className="spec">
                  <div>
                    <dt>Station</dt>
                    <dd>Bangkok, Thailand (HQ)</dd>
                  </div>
                  <div>
                    <dt>Discipline</dt>
                    <dd>Full-stack · Founder</dd>
                  </div>
                  <div>
                    <dt>Language</dt>
                    <dd>TypeScript, 10+ yrs</dd>
                  </div>
                  <div>
                    <dt>Deployed</dt>
                    <dd>WithCoach · Raft</dd>
                  </div>
                  <div>
                    <dt>Prior Expedition</dt>
                    <dd>TeachMe.To · 0 → Series A</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>In the field · Bangkok</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════
            PLATE II — FIELD MAP
            ═════════════════════════════════════════ */}
        <section className="border-b border-[color:var(--color-ink)]">
          <div className="frame pb-20 pt-16 md:pb-28 md:pt-20">
            <div className="plate-header">
              <span className="num">PL. II</span>
              <span className="title">Field Map · Operating Region</span>
              <span className="coords">85°E → 135°E</span>
            </div>

            <div className="grid grid-cols-12 gap-x-6 gap-y-8 md:gap-x-10">
              <div className="col-span-12 md:col-span-4 md:row-start-1">
                <div className="mb-3 flex items-center gap-3">
                  <span className="label">Orientation</span>
                  <div className="hl" />
                </div>
                <p className="body">
                  Southeast Asia is not one market. It&apos;s a dozen cities
                  that share the same geography and none of the same
                  assumptions. I moved here because the best way to build for
                  a place is to live in it.
                </p>
                <p className="body mt-4">
                  Bangkok is my primary station. Tampa — where Raft&apos;s
                  first beta lives — is fifteen thousand kilometers off the
                  edge of this plate.
                </p>

                <dl className="mt-8">
                  <div className="leader">
                    <span className="k">Primary</span>
                    <span className="dots" />
                    <span className="v">BKK</span>
                  </div>
                  <div className="leader">
                    <span className="k">Beta</span>
                    <span className="dots" />
                    <span className="v">TPA</span>
                  </div>
                  <div className="leader">
                    <span className="k">Next</span>
                    <span className="dots" />
                    <span className="v">SGN · KUL · SGP</span>
                  </div>
                </dl>
              </div>

              <div className="col-span-12 md:col-span-8 md:row-start-1">
                <div className="map-frame">
                  <FieldMap />
                  <div className="map-caption">
                    <span>
                      Pl. II — Fabricated equirectangular, not for navigation.
                    </span>
                    <span>ST-001 · BKK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════
            PLATE III — FIELD STATIONS
            ═════════════════════════════════════════ */}
        <section className="border-b border-[color:var(--color-ink)]">
          <div className="frame pb-20 pt-16 md:pb-32 md:pt-20">
            <div className="plate-header">
              <span className="num">PL. III</span>
              <span className="title">Field Stations · Currently Shipping</span>
              <span className="coords">02 deployed</span>
            </div>

            <div className="mb-14 grid grid-cols-12 gap-x-6 gap-y-6 md:mb-20 md:gap-x-10">
              <h2 className="display-md col-span-12 text-[clamp(2.25rem,6vw,5.25rem)] md:col-span-9">
                Two products. One unified platform for real-life connection in
                Southeast Asia.
              </h2>
              <p className="body-lg col-span-12 md:col-span-8 md:col-start-4">
                Coaching here lives inside Instagram DMs and LINE groups. No
                unified discovery. No booking layer. No reason for anyone who
                does show up to come back for anything else. I&apos;m building
                both halves.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
              {/* ST-001 · WITHCOACH */}
              <article className="station">
                <div className="station-head">
                  <span className="pin">ST-001 · Acquisition</span>
                  <span>withcoach.me</span>
                </div>
                <div className="station-body">
                  <div>
                    <div className="station-url">N 13°45′ / E 100°28′</div>
                    <div className="station-name mt-2">WithCoach</div>
                  </div>

                  <p className="station-lede">
                    A coaching marketplace for Southeast Asia.{" "}
                    <span className="station-mark">Coaches keep 100%.</span>{" "}
                    Students pay a platform fee. I handle booking, payments,
                    and multi-language out of the box.
                  </p>

                  <dl className="spec">
                    <div>
                      <dt>Payout</dt>
                      <dd>100% to the coach</dd>
                    </div>
                    <div>
                      <dt>Revenue</dt>
                      <dd>Student-paid platform fee</dd>
                    </div>
                    <div>
                      <dt>Stack</dt>
                      <dd>Stripe · i18n · Booking</dd>
                    </div>
                    <div>
                      <dt>Market</dt>
                      <dd>SEA — Thailand first</dd>
                    </div>
                    <div>
                      <dt>GTM</dt>
                      <dd>Ghost-list → broker → convert</dd>
                    </div>
                  </dl>

                  <p className="body text-[0.95rem]">
                    Go-to-market mirrors what worked at TeachMe.To: ghost-list
                    coaches from public data, broker bookings by hand, then
                    convert them once they see the value. I&apos;ve run this
                    playbook before.
                  </p>

                  <a
                    href="https://withcoach.me"
                    target="_blank"
                    rel="noreferrer"
                    className="link-arrow"
                  >
                    Visit withcoach.me <span className="a">↗</span>
                  </a>
                </div>
              </article>

              {/* ST-002 · RAFT */}
              <article className="station">
                <div className="station-head">
                  <span className="pin">ST-002 · Retention</span>
                  <span>raft.social</span>
                </div>
                <div className="station-body">
                  <div>
                    <div className="station-url">N 27°56′ / W 82°27′ · BETA</div>
                    <div className="station-name mt-2">Raft</div>
                  </div>

                  <p className="station-lede">
                    Real-life connection with real-time multilingual
                    translation.{" "}
                    <span className="station-mark">
                      Your city doesn&apos;t speak one language.
                    </span>{" "}
                    Neither does Raft.
                  </p>

                  <dl className="spec">
                    <div>
                      <dt>Pings</dt>
                      <dd>Spontaneous invitations</dd>
                    </div>
                    <div>
                      <dt>Harbors</dt>
                      <dd>Community containers</dd>
                    </div>
                    <div>
                      <dt>Dating</dt>
                      <dd>Layered, optional</dd>
                    </div>
                    <div>
                      <dt>Translation</dt>
                      <dd>Real-time, multilingual</dd>
                    </div>
                    <div>
                      <dt>Status</dt>
                      <dd>Church beta · Tampa · ~100 users</dd>
                    </div>
                  </dl>

                  <p className="body text-[0.95rem]">
                    I&apos;m solving cold start by layering on top of
                    WithCoach&apos;s user base. Activity-proven users
                    discovered through coaching become the seed network for
                    broader connection.
                  </p>

                  <a
                    href="https://raft.social"
                    target="_blank"
                    rel="noreferrer"
                    className="link-arrow"
                  >
                    Visit raft.social <span className="a">↗</span>
                  </a>
                </div>
              </article>
            </div>

            {/* Thesis */}
            <div className="mt-20 md:mt-28">
              <div className="mb-6 flex items-center gap-4">
                <span className="label">Thesis</span>
                <div className="hl" />
                <span className="label-mute">One platform, two halves</span>
              </div>
              <blockquote className="display-md max-w-[20ch] text-[clamp(2rem,5.25vw,4.5rem)]">
                WithCoach is how I bring users in.{" "}
                <span style={{ color: "var(--color-red)" }}>
                  Raft is why they stay.
                </span>
              </blockquote>
              <div className="mt-8 grid grid-cols-12 gap-x-6 md:gap-x-10">
                <p className="body col-span-12 md:col-span-7">
                  One is the acquisition engine — transactional, useful, a
                  marketplace that gives people a reason to show up. The other
                  is the retention engine — ambient, social, the reason they
                  stick around. Same platform. Two halves of the same problem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════
            PLATE IV — PRIOR EXPEDITION
            ═════════════════════════════════════════ */}
        <section className="border-b border-[color:var(--color-ink)]">
          <div className="frame pb-20 pt-16 md:pb-28 md:pt-20">
            <div className="plate-header">
              <span className="num">PL. IV</span>
              <span className="title">Prior Expedition · Field Record</span>
              <span className="coords">2019 — 2024</span>
            </div>

            <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-x-10">
              <div className="col-span-12 md:col-span-5">
                <div className="label-mute mb-3">Expedition.01</div>
                <h3 className="display text-[clamp(2.5rem,6.5vw,5.5rem)]">
                  Teach
                  <span style={{ color: "var(--color-red)" }}>Me</span>.To
                </h3>
                <div className="label-mute mt-4">
                  Cofounder · Sole engineer
                </div>

                {/* Arc diagram */}
                <svg
                  viewBox="0 0 300 90"
                  className="mt-8 h-auto w-full max-w-[360px]"
                  aria-hidden
                >
                  <line
                    x1="10"
                    y1="70"
                    x2="290"
                    y2="70"
                    stroke="var(--color-ink)"
                    strokeWidth="0.8"
                  />
                  {[10, 80, 150, 220, 290].map((x) => (
                    <line
                      key={x}
                      x1={x}
                      y1="66"
                      x2={x}
                      y2="74"
                      stroke="var(--color-ink)"
                      strokeWidth="1"
                    />
                  ))}
                  <path
                    d="M 10 68 Q 150 -5 290 40"
                    fill="none"
                    stroke="var(--color-red)"
                    strokeWidth="1.5"
                  />
                  <circle cx="10" cy="68" r="3" fill="var(--color-ink)" />
                  <circle
                    cx="290"
                    cy="40"
                    r="4"
                    fill="var(--color-red)"
                    stroke="var(--color-paper)"
                    strokeWidth="1"
                  />
                  <text
                    x="10"
                    y="86"
                    fontFamily="var(--font-mono)"
                    fontSize="8"
                    fill="var(--color-mute)"
                    letterSpacing="0.6"
                  >
                    ZERO
                  </text>
                  <text
                    x="150"
                    y="86"
                    textAnchor="middle"
                    fontFamily="var(--font-mono)"
                    fontSize="8"
                    fill="var(--color-mute)"
                    letterSpacing="0.6"
                  >
                    PROFITABLE
                  </text>
                  <text
                    x="290"
                    y="86"
                    textAnchor="end"
                    fontFamily="var(--font-mono)"
                    fontSize="8"
                    fill="var(--color-red)"
                    letterSpacing="0.6"
                    fontWeight={600}
                  >
                    $2M SERIES A
                  </text>
                </svg>
              </div>

              <div className="col-span-12 md:col-span-6 md:col-start-7">
                <p className="body-lg">
                  I built the platform from zero to profitability and a{" "}
                  <span
                    className="font-semibold"
                    style={{ color: "var(--color-red)" }}
                  >
                    $2M Series A
                  </span>
                  . Sole engineer on a two-sided marketplace that shipped to
                  real users paying real money. I learned how marketplace
                  liquidity actually works by doing it, not by reading about
                  it.
                </p>

                <dl className="spec mt-8">
                  <div>
                    <dt>Role</dt>
                    <dd>Cofounder · Sole engineer</dd>
                  </div>
                  <div>
                    <dt>Arc</dt>
                    <dd>Zero → profitable → $2M Series A</dd>
                  </div>
                  <div>
                    <dt>Stack</dt>
                    <dd>TypeScript, end to end</dd>
                  </div>
                  <div>
                    <dt>Shape</dt>
                    <dd>Two-sided marketplace</dd>
                  </div>
                  <div>
                    <dt>Takeaway</dt>
                    <dd>The playbook I&apos;m running again now</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════
            PLATE V — FORWARDING ADDRESS
            ═════════════════════════════════════════ */}
        <section className="border-b border-[color:var(--color-ink)]">
          <div className="frame pb-20 pt-16 md:pb-28 md:pt-20">
            <div className="plate-header">
              <span className="num">PL. V</span>
              <span className="title">Forwarding Address · Signal</span>
              <span className="coords">Reply received</span>
            </div>

            <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-x-10">
              <div className="col-span-12 md:col-span-7">
                <h2 className="display text-[clamp(2.5rem,6.5vw,5.5rem)]">
                  If you&apos;re building in{" "}
                  <span style={{ color: "var(--color-red)" }}>
                    Southeast Asia
                  </span>
                  , I&apos;d like to hear from you.
                </h2>
                <p className="body-lg mt-8">
                  Investors, coaches, community leaders, and founders passing
                  through Bangkok — open to conversation. I read everything.
                  Signal over noise.
                </p>
              </div>

              <div className="col-span-12 md:col-span-5 md:col-start-8">
                <div className="border border-[color:var(--color-ink)] bg-[color:var(--color-paper-2)]/60">
                  <div
                    className="flex items-center justify-between border-b border-[color:var(--color-ink)] px-4 py-2"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.66rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    }}
                  >
                    <span>Dispatch Window</span>
                    <span style={{ color: "var(--color-mute)" }}>OPEN</span>
                  </div>
                  <div className="px-5 py-6 md:px-6 md:py-7">
                    <div className="label-mute mb-2">Direct</div>
                    <a
                      href="mailto:hello@withcoach.me"
                      className="link-u block break-all text-[1.4rem] font-semibold md:text-[1.6rem]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      hello@withcoach.me
                    </a>

                    <div className="mt-6 border-t border-dashed border-[color:var(--color-ink)]/40 pt-5">
                      <div className="label-mute mb-3">Stations</div>
                      <ul className="space-y-2">
                        <li className="leader">
                          <span className="k">ST-001</span>
                          <span className="dots" />
                          <a
                            href="https://withcoach.me"
                            target="_blank"
                            rel="noreferrer"
                            className="v link-u"
                          >
                            withcoach.me ↗
                          </a>
                        </li>
                        <li className="leader">
                          <span className="k">ST-002</span>
                          <span className="dots" />
                          <a
                            href="https://raft.social"
                            target="_blank"
                            rel="noreferrer"
                            className="v link-u"
                          >
                            raft.social ↗
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═════════════════════════════════════════
          COLOPHON
          ═════════════════════════════════════════ */}
      <footer className="border-b border-[color:var(--color-ink)]">
        <div className="frame py-10">
          <div className="grid grid-cols-12 gap-x-6 gap-y-6 md:gap-x-10">
            <div className="col-span-12 md:col-span-4">
              <div className="label-mute mb-2">Colophon</div>
              <p className="meta leading-relaxed">
                Field Notebook, Plate I — V.
                <br />
                Set in Hanken Grotesk &amp; JetBrains Mono.
                <br />
                Projection: fabricated equirectangular.
                <br />
                Compiled by hand in Bangkok.
              </p>
            </div>

            <div className="col-span-6 md:col-span-3">
              <div className="label-mute mb-2">Key</div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[0.7rem]">
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: "var(--color-red)" }}
                  />
                  <span className="meta">Primary station</span>
                </li>
                <li className="flex items-center gap-2 text-[0.7rem]">
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: "var(--color-ink)" }}
                  />
                  <span className="meta">Deployed product</span>
                </li>
                <li className="flex items-center gap-2 text-[0.7rem]">
                  <span
                    className="inline-block h-2 w-2 rounded-full border"
                    style={{ borderColor: "var(--color-mute)" }}
                  />
                  <span className="meta">Reference marker</span>
                </li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-3">
              <div className="label-mute mb-2">Coordinates</div>
              <p className="meta leading-relaxed">
                13°45′12″N
                <br />
                100°29′02″E
                <br />
                +07:00 ICT
              </p>
            </div>

            <div className="col-span-12 md:col-span-2 md:text-right">
              <div className="label-mute mb-2">Status</div>
              <div className="meta flex items-center gap-2 md:justify-end">
                <span className="dot-live" aria-hidden />
                <span>
                  BKK <BangkokClock />
                </span>
              </div>
              <div className="meta mt-4">
                © {new Date().getFullYear()} Clayton
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
