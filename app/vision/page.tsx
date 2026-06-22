import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Vision — Clayton",
  description:
    "The thesis behind what I'm building: technology that helps people become more truthful, more connected, and more present to one another. Boardbox, WithCoach, Raft — and Raft Cities, the life's work underneath it all.",
};

export default function Vision() {
  return (
    <main className="vision">
      <div className="vision-frame">
        {/* A quiet way home */}
        <div className="pt-10 md:pt-12">
          <Link href="/" className="v-back">
            <span className="arr">←</span>
            <span>Field Notebook</span>
          </Link>
        </div>

        {/* ── Opening ─────────────────────────────── */}
        <section className="pt-16 md:pt-24">
          <p className="v-eyebrow mb-7">The Vision</p>
          <h1 className="v-thesis">
            I build technology that helps people become more truthful, more
            connected, and more present to one another — rather than{" "}
            <span className="v-accent">less.</span>
          </h1>
          <p className="v-lead mt-9">
            If you’re reading this, you probably know me — and you’ve maybe
            wondered what I’m actually building, or why I left a comfortable
            path to do it. This is the honest version. The end goal isn’t an
            app. It’s a place.
          </p>
        </section>

        {/* ── Who I am ────────────────────────────── */}
        <section className="pt-20 md:pt-28">
          <p className="v-eyebrow mb-6">Where I’m coming from</p>
          <p className="v-body">
            I’m a software engineer and a founder. I previously co-founded
            TeachMe.To, where I was the only engineer, and built it from
            nothing to profitability and a $2M Series A. Today I build under
            OtterHalf, mostly from Bangkok, focused on Southeast Asia — because
            the best way to build for a place is to live in it.
          </p>
          <p className="v-body">
            I ship fast, and I lean hard on the new generation of AI tooling to
            move at a speed that wasn’t possible even a couple of years ago.
            That speed matters, because what I’m trying to build is big, and I’d
            like to see it finished in my lifetime.
          </p>
        </section>

        {/* ── The conviction ──────────────────────── */}
        <section className="pt-20 md:pt-28">
          <p className="v-eyebrow mb-6">What I believe</p>
          <p className="v-body">
            Every product I build refuses something its industry treats as
            normal. Most AI is built to flatter you and keep you hooked. Most
            marketplaces take a cut of relationships they didn’t create. Most
            social and dating apps make money from your attention and your
            loneliness.
          </p>
          <p className="v-body">
            I build the other version of each — AI that’s honest with you,
            marketplaces that pay the people doing the actual work, and products
            made for real presence instead of endless engagement.
          </p>
          <p className="v-body">
            Underneath all of it is one conviction:{" "}
            <span className="v-accent">
              a person is an end, not a resource to be optimized.
            </span>{" "}
            Truth over flattery. Dignity over extraction. Communion over
            engagement. That conviction comes from my faith, and it’s the
            standard I hold my own work to — including when it costs me.
          </p>
        </section>

        {/* ── The work — a sequence ───────────────── */}
        <section className="pt-20 md:pt-28">
          <p className="v-eyebrow mb-6">The work</p>
          <h2 className="v-h2">Three products, built in order.</h2>
          <p className="v-body mt-7">
            They’re sequential. Each one funds, seeds, or makes the next one
            possible. None of them is the destination — they’re the path to it.
          </p>

          <div className="v-spine mt-16">
            {/* Boardbox */}
            <div className="v-node">
              <p className="v-role">The engine</p>
              <p className="v-project">Boardbox</p>
              <p className="v-body mt-5">
                A workspace assistant for people who do serious knowledge work.
                Unlike most AI tools, it’s built to be honest with you instead
                of just agreeable, and it actually remembers who you are and
                what you’re working on. It helps you think and get real work
                done rather than keeping you entertained.
              </p>
              <p className="v-body">
                Its job in the plan: pay the bills. Boardbox is what I’m
                building right now with my cofounder, Jeremy. If it works, it
                buys us the freedom to build everything downstream without
                needing anyone’s permission.
              </p>
            </div>

            {/* WithCoach */}
            <div className="v-node">
              <p className="v-role">The seed</p>
              <p className="v-project">WithCoach</p>
              <p className="v-body mt-5">
                A marketplace for finding and booking coaches and tutors —
                language, fitness, music, anything. The teacher keeps everything
                they charge; the student pays a small platform fee. It connects
                people around real things they’re doing together, in the real
                world.
              </p>
              <p className="v-body">
                Its job in the plan: solve the cold-start problem. Social
                networks usually die because the first people show up and find
                no one there. WithCoach produces real, verified users who
                already share interests and already meet in person — so what
                comes next launches warm instead of empty.
              </p>
            </div>

            {/* Raft */}
            <div className="v-node">
              <p className="v-role">The network</p>
              <p className="v-project">Raft</p>
              <p className="v-body mt-5">
                An app for meeting people in real life around things you
                actually want to do — with live translation built in so language
                is never the barrier, and a slower, more intentional approach to
                friendship and dating. It turns strangers into friends, and
                friends into lasting relationships.
              </p>
              <p className="v-body">
                Its job in the plan: be the connective tissue. Raft is the
                platform everything upstream exists to make possible — and its
                physical form is where this whole thing has been heading.
              </p>
            </div>
          </div>
        </section>

        {/* ── Raft Cities — the life's work ───────── */}
        <section className="pt-24 md:pt-32">
          <p className="v-eyebrow mb-6">The point of all of it</p>
          <h2 className="v-h2">Raft Cities</h2>
          <p className="v-lead mt-7">
            Raft is the digital layer. The City is the physical one.
          </p>
          <p className="v-body mt-7">
            Raft Cities are purpose-built communities, designed so the ordinary
            path of daily life leads toward connection, health, and belonging
            instead of isolation. The aim is simple and old: to rebuild the way
            humans were always meant to live — together, interdependent, and
            known — for people who would otherwise be alone in a condo, ordering
            delivery and staring at a screen.
          </p>

          {/* Housing ladder */}
          <div className="pt-14">
            <h3 className="v-h3">A ladder, not a product.</h3>
            <p className="v-body mt-4">
              The spine of a Raft City is a set of stepping stones that carry
              someone from arriving to owning a home — without ever forcing them
              to leave.
            </p>

            <div className="v-ladder">
              <div className="v-rung">
                <span className="v-rung-step">01</span>
                <span className="v-rung-name">Hostel</span>
                <p className="v-rung-desc">
                  Clean, affordable, traveler-friendly. The way in — and how the
                  culture gets set from day one.
                </p>
              </div>
              <div className="v-rung">
                <span className="v-rung-step">02</span>
                <span className="v-rung-name">Private room</span>
                <p className="v-rung-desc">
                  The first step into actually living there.
                </p>
              </div>
              <div className="v-rung">
                <span className="v-rung-step">03</span>
                <span className="v-rung-name">Starter house</span>
                <p className="v-rung-desc">
                  A small home of your own, inside the community.
                </p>
              </div>
              <div className="v-rung v-rung--end">
                <span className="v-rung-step">04</span>
                <span className="v-rung-name">Family house</span>
                <p className="v-rung-desc">
                  The long-term home, where you raise a family.
                </p>
              </div>
            </div>

            <p className="v-body mt-8">
              What makes it different from any normal housing market is that the
              rungs connect. Pay into a starter house for two years and that
              money isn’t gone when you move up — it carries forward as equity
              toward the family house, the way a mortgage builds ownership,
              except tied to the community instead of the open market. Someone
              can arrive at twenty-two with a backpack and raise their kids in
              the same place at thirty-five.
            </p>
          </div>

          {/* Shared life */}
          <div className="pt-14">
            <h3 className="v-h3">Built around shared life.</h3>
            <p className="v-body mt-4">
              Communal kitchens where people cook together. Common floors where
              a neighbor notices when you’ve gone quiet for three days. Floors of
              men who actually know each other’s struggles, where accountability
              comes from being close rather than from a program. The single mom
              whose neighbors watch her kids while she’s at the clinic. The older
              man who would have died alone but shares meals every day.
            </p>
            <p className="v-body">
              Coffee shops, a gym, a clinic, a grocery, a place to gather and
              pray — third spaces that exist not to sell you something, but to
              put you in the same room as other people, again and again, until
              strangers become neighbors. And food grown on-site, in aquaponics
              domes, with real work for anyone who wants it.
            </p>
          </div>

          {/* The restart */}
          <div className="pt-14">
            <h3 className="v-h3">A real restart.</h3>
            <p className="v-body mt-4">
              There’s also a genuine restart for people who’ve run out of them.
              A dedicated building, hostel-style, with counselors on site — kept
              separate for everyone’s safety, because some people arrive with
              serious addiction or hard histories. But separate doesn’t mean
              cast out. They eat the City’s food, use an affordable clinic built
              for what they actually need, and have the dignity of being inside
              the community instead of sequestered from it. Anyone who wants to
              can trade work in the kitchens and the domes for housing, and step
              onto the same ladder as everyone else. A real restart — not a 7am
              eviction from a shelter cot.
            </p>
          </div>

          {/* City on a hill */}
          <div className="pt-14">
            <h3 className="v-h3">Designed to repeat.</h3>
            <p className="v-body mt-4">
              Everything is built to be built again — standard rooms, repeatable
              houses, modular domes — so a first City that works in Bangkok can
              go up again in Vietnam, the Philippines, and eventually the United
              States. Not fancy, because fancy doesn’t scale. Well-built and
              standardized, because that does.
            </p>
            <p className="v-body">
              The frame I keep coming back to is an old one — a city on a hill.
              Not a branded religious compound, but a community whose fruit is
              obvious enough that the tree doesn’t need explaining: less
              depression, less addiction, people who were on the street now
              working, neighbors who help each other by default. The kind of
              place others hear about and want for themselves.
            </p>
          </div>
        </section>

        {/* ── How it all connects ─────────────────── */}
        <section className="pt-24 md:pt-32">
          <p className="v-eyebrow mb-7">How it fits together</p>
          <p className="v-cadence">
            <span>Boardbox pays for it.</span>
            <span>WithCoach populates it.</span>
            <span>
              Raft is the point — and Raft Cities is where it{" "}
              <span className="v-accent">becomes real.</span>
            </span>
          </p>
          <p className="v-body mt-9">
            Software funds the communities. The communities prove the model. The
            model scales. That’s the whole plan, in order.
          </p>
          <p className="v-lead mt-7">
            It isn’t a startup. It’s a generational project — and it’s what I
            intend to spend my life building.
          </p>
        </section>

        {/* ── Sign-off ────────────────────────────── */}
        <footer className="pt-20 md:pt-28">
          <div className="v-rule" />
          <p className="v-signoff-name mt-8">Clayton</p>
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
