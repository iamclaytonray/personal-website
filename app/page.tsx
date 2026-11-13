import Image from "next/image";
import Link from "next/link";
import { BoardboxMark, RaftMark, WithCoachMark } from "./marks";
import raftPings from "@/public/products/raft-pings.png";
import boardboxApp from "@/public/products/boardbox-app.png";
import withcoachApp from "@/public/products/withcoach-app.png";

const EMAIL = "hello@withcoach.me";

export default function Home() {
  return (
    <>
      <header className="frame flex items-center justify-between gap-6 pt-6 md:pt-8">
        <Link href="/" className="t-small font-semibold text-ink no-underline">
          Clayton
        </Link>
        <nav className="t-small flex items-center gap-6" aria-label="Site">
          <a href={`mailto:${EMAIL}`} className="nav-link">
            Email
          </a>
        </nav>
      </header>

      <main>
        <section className="frame pb-20 pt-20 md:pb-28 md:pt-32">
          <h1 className="t-hero max-w-[15em]">
            I&rsquo;m Clayton, a founder in Asia. I&rsquo;m building{" "}
            <a href="#boardbox" className="hero-product">
              <BoardboxMark className="hero-mark" />
              Boardbox
            </a>
            ,{" "}
            <a href="#withcoach" className="hero-product">
              <WithCoachMark className="hero-mark text-withcoach-ink" />
              WithCoach
            </a>{" "}
            and{" "}
            <a href="#raft" className="hero-product">
              <RaftMark className="hero-mark text-raft" />
              Raft
            </a>
            .
          </h1>
          <p className="t-lede mt-8 text-ink-2 md:mt-10">
            Before this, I cofounded TeachMe.To and grew it from nothing to
            profitability and a $2M Series A.
          </p>
        </section>

        <ProductPanel
          id="boardbox"
          className="panel-boardbox"
          name="Boardbox"
          status="Out now for Mac"
          lede="A Mac app for founders running the whole company. Describe what you're launching, and it designs the screens, builds the code, writes the outreach and cuts the video."
          detail="It already knows your company, so every launch starts from what you've decided before. It runs on the Claude Code or Codex plan you already pay for."
          links={[{ href: "https://tryboardbox.com", label: "tryboardbox.com" }]}
          wide
          visual={
            <Image
              src={boardboxApp}
              alt="Boardbox on a Mac: an Initiative planning a product launch, with the plan split into lifecycle, spec and implementation documents"
              sizes="(min-width: 1200px) 1120px, (min-width: 768px) calc(100vw - 80px), 170vw"
              className="window h-auto w-[170%] max-w-none md:w-full"
              placeholder="blur"
            />
          }
        />

        <ProductPanel
          id="withcoach"
          className="panel-withcoach"
          name="WithCoach"
          status="Launching in Bangkok"
          lede="The app for finding a local coach, from tennis to Thai. Browse coaches by skill and book a time that's actually free."
          detail="Coaches join free and keep everything they charge. Reviews stay sealed until both sides write one, so they're honest."
          links={[{ href: "https://withcoach.me", label: "withcoach.me" }]}
          visual={
            <Image
              src={withcoachApp}
              alt="WithCoach's welcome screen: “The right coach, close by,” with photos of a Muay Thai session and a tennis player"
              sizes="(min-width: 768px) 290px, 62vw"
              className="phone h-auto w-[62vw] max-w-[290px]"
              placeholder="blur"
            />
          }
        />

        <ProductPanel
          id="raft"
          className="panel-raft"
          name="Raft"
          status="Live on iOS and Android"
          lede="Plans with people nearby. Someone posts what they're doing, you tap I'm in, and you go."
          detail="Live translation is built in, so language is never the barrier. After a few times, they're not strangers anymore."
          links={[
            { href: "https://raft.social", label: "raft.social" },
            {
              href: "https://apps.apple.com/app/raft-social/id6791878812",
              label: "App Store",
            },
            {
              href: "https://play.google.com/store/apps/details?id=social.raft.app",
              label: "Google Play",
            },
          ]}
          visual={
            <Image
              src={raftPings}
              alt="Raft's home screen listing plans nearby in Bangkok: a language exchange tonight, a riverside drink, and a morning run at Lumpini Park"
              sizes="(min-width: 768px) 290px, 62vw"
              className="phone h-auto w-[62vw] max-w-[290px]"
              placeholder="blur"
            />
          }
        />

        <section className="frame py-24 md:py-36">
          <div className="max-w-[40rem]">
            <h2 className="t-h2">What I believe</h2>
            <p className="t-body mt-6 text-ink-2">
              Every product I build refuses something its industry treats as
              normal. Most
              marketplaces take a cut of relationships they didn&rsquo;t
              create. Most social apps make money from your attention and
              your loneliness. I&rsquo;d rather build the other version: tools
              that do real work, marketplaces that pay the people doing it,
              and apps that put you in a room with other people.
            </p>
            <p className="t-body mt-5 text-ink-2">
              Underneath all of it is one conviction: a person is an end, not
              a resource to be optimized.
            </p>
          </div>
        </section>
      </main>

      <footer className="frame pb-12 md:pb-16">
        <div className="flex flex-col gap-6 border-t border-line pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="t-small text-mute">The best way to reach me</p>
            <a
              href={`mailto:${EMAIL}`}
              className="link t-h2 mt-2 inline-block text-ink"
            >
              {EMAIL}
            </a>
          </div>
          <p className="t-small text-mute">Based in Asia</p>
        </div>
      </footer>
    </>
  );
}

type ProductPanelProps = {
  id: string;
  className: string;
  name: string;
  status: string;
  lede: string;
  detail: string;
  links: { href: string; label: string }[];
  visual: React.ReactNode;
  /** Landscape visuals (a desktop app) run full width under the text
   *  instead of sitting beside it. */
  wide?: boolean;
};

function ProductPanel({
  id,
  className,
  name,
  status,
  lede,
  detail,
  links,
  visual,
  wide = false,
}: ProductPanelProps) {
  const text = (
    <div>
      <p className="t-small font-medium">
        <span className="status-dot" aria-hidden />
        {status}
      </p>
      <h2 id={`${id}-name`} className="t-product mt-5 md:mt-6">
        {name}
      </h2>
      <p className="t-lede mt-8 md:mt-10">{lede}</p>
      <p className="t-body panel-quiet mt-5">{detail}</p>
      <ul className="t-body mt-8 flex flex-wrap gap-x-6 gap-y-2 font-medium">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="link" target="_blank" rel="noreferrer">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id={id} className={`panel ${className}`} aria-labelledby={`${id}-name`}>
      {wide ? (
        <div className="frame py-20 md:py-28">
          {text}
          {/* On phones the screenshot runs off the right edge at a
              readable size; the padding leaves room for its shadow. */}
          <div className="-mx-5 mt-8 overflow-hidden px-5 pb-12 pt-6 md:mx-0 md:mt-14 md:overflow-visible md:p-0 md:pt-6">
            {visual}
          </div>
        </div>
      ) : (
        <div className="frame grid items-center gap-14 py-20 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:gap-10 md:py-28">
          {text}
          <div className="flex justify-center md:justify-end">{visual}</div>
        </div>
      )}
    </section>
  );
}
