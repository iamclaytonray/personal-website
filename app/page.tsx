import Image from "next/image";
import Link from "next/link";
import { BoardboxMark, RaftMark, WithCoachMark } from "./marks";
import raftPings from "@/public/products/raft-pings.png";
import muayThai from "@/public/products/withcoach-muay-thai.png";

const EMAIL = "hello@withcoach.me";

export default function Home() {
  return (
    <>
      <header className="frame flex items-center justify-between gap-6 pt-6 md:pt-8">
        <Link href="/" className="t-small font-semibold text-ink no-underline">
          Clayton
        </Link>
        <nav className="t-small flex items-center gap-6" aria-label="Site">
          <Link href="/vision" className="nav-link">
            The vision
          </Link>
          <a href={`mailto:${EMAIL}`} className="nav-link">
            Email
          </a>
        </nav>
      </header>

      <main>
        <section className="frame pb-20 pt-20 md:pb-28 md:pt-32">
          <h1 className="t-hero max-w-[15em]">
            I&rsquo;m Clayton, a founder in Bangkok. I&rsquo;m building{" "}
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
              <RaftMark className="hero-mark" />
              Raft
            </a>
            .
          </h1>
          <p className="t-lede mt-8 text-ink-2 md:mt-10">
            Three companies, built in order, each one making the next
            possible. Before this I cofounded TeachMe.To and grew it from
            nothing to profitability and a $2M Series A.
          </p>
        </section>

        <ProductPanel
          id="boardbox"
          className="panel-boardbox"
          name="Boardbox"
          status="Out now for Mac"
          lede="A Mac app for founders running the whole company. Describe what you're launching, and it designs the screens, builds the code, writes the outreach and cuts the video."
          role="I'm building it with my cofounder, Jeremy. It's the business that pays for everything that comes after it."
          links={[{ href: "https://tryboardbox.com", label: "tryboardbox.com" }]}
          visual={
            <BoardboxMark className="app-icon h-auto w-40 md:w-56" />
          }
        />

        <ProductPanel
          id="withcoach"
          className="panel-withcoach"
          name="WithCoach"
          status="Launching in Bangkok"
          lede="The app for finding a local coach: a sport, a language, an instrument. Coaches join free and keep everything they charge."
          role="It brings in Raft's first people: real users who already meet face to face around something they care about. So Raft launches into a crowd instead of an empty room."
          links={[{ href: "https://withcoach.me", label: "withcoach.me" }]}
          visual={
            <Image
              src={muayThai}
              alt="A Muay Thai coach holding pads for a student at a gym in Thailand"
              sizes="(min-width: 768px) 340px, 70vw"
              className="photo h-auto w-[70vw] max-w-[340px]"
              placeholder="blur"
            />
          }
        />

        <ProductPanel
          id="raft"
          className="panel-raft"
          name="Raft"
          status="Live on iOS and Android"
          lede="Plans with people nearby. Someone posts what they're doing, you tap I'm in, and you go. Live translation is built in, so language is never the barrier."
          role="This is the one everything else exists for. The long-term version is Raft Cities: real neighborhoods built so daily life pulls people together instead of apart."
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
            <h2 className="t-h2">Why these three</h2>
            <p className="t-body mt-6 text-ink-2">
              Each one refuses something its industry treats as normal. Most
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
            <p className="t-body mt-8">
              <Link href="/vision" className="link font-medium text-ink">
                Read the whole plan, from Boardbox to Raft Cities
              </Link>
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
          <p className="t-small text-mute">Bangkok, Thailand</p>
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
  role: string;
  links: { href: string; label: string }[];
  visual: React.ReactNode;
};

function ProductPanel({
  id,
  className,
  name,
  status,
  lede,
  role,
  links,
  visual,
}: ProductPanelProps) {
  return (
    <section id={id} className={`panel ${className}`} aria-labelledby={`${id}-name`}>
      <div className="frame grid items-center gap-14 py-20 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:gap-10 md:py-28">
        <div>
          <p className="t-small font-medium">
            <span className="status-dot" aria-hidden />
            {status}
          </p>
          <h2 id={`${id}-name`} className="t-product mt-5 md:mt-6">
            {name}
          </h2>
          <p className="t-lede mt-8 md:mt-10">{lede}</p>
          <p className="t-body panel-quiet mt-5">{role}</p>
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
        <div className="flex justify-center md:justify-end">{visual}</div>
      </div>
    </section>
  );
}
