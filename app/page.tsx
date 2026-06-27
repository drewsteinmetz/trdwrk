"use client";

import { useState } from "react";
import Header from "@/components/Header";
type Tab = "feed" | "compete" | "post" | "ahj" | "profile";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("feed");

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-[1600px] px-4 py-6 md:px-6">
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {activeTab === "feed" && <FeedPage />}
        {activeTab === "compete" && <CompetePage />}
        {activeTab === "post" && <PostPage />}
        {activeTab === "ahj" && <AhjPage />}
        {activeTab === "profile" && <ProfilePage />}
      </div>
    </main>
  );
}

function FeedPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
      <div className="space-y-6">
        <section className="rounded-[28px] border border-yellow-500/30 bg-gradient-to-r from-yellow-500/15 via-zinc-950 to-black p-6 shadow-[0_0_40px_rgba(234,179,8,0.08)]">
          <div className="mb-3 flex items-center justify-between gap-4">
            <div className="text-xl font-black text-yellow-400 md:text-2xl">
              🔥 INSTALL OF THE WEEK
            </div>
            <div className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-300">
              #1 This Week
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative h-72 overflow-hidden rounded-2xl border border-yellow-500/20 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.20),transparent_30%),linear-gradient(135deg,rgba(234,179,8,0.18),rgba(10,10,10,0.85))]">
              <div className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-yellow-300">
                Winning Install Photo
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-lg text-zinc-500">
                [Winning Install]
              </div>
              <div className="absolute bottom-4 left-4 rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-bold text-emerald-300">
                Field Score 97
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-black/30 p-5">
              <div>
                <div className="text-sm text-zinc-400">
                  @PipeSavage · Electrical
                  <span className="ml-2 text-yellow-400">🔥 ELITE</span>
                </div>

                <h2 className="mt-3 text-3xl font-black leading-tight">
                  Perfect switchgear install
                </h2>

                <p className="mt-3 text-base leading-7 text-zinc-300">
                  Dead-even gear faces, clean terminations, matching bends, and
                  labeling that doesn’t look like it survived a tornado.
                </p>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <StatBox label="Score" value="97" accent="text-emerald-400" />
                  <StatBox label="Percentile" value="Top 1%" accent="text-yellow-400" />
                  <StatBox label="Views" value="3.2k" accent="text-sky-400" />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <ActionBtn label="🔥 Rate It" />
                <ActionBtn label="💾 Save" secondary />
                <ActionBtn label="📤 Share" secondary />
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-zinc-800 bg-zinc-950/80 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-black">Latest from the field</h3>
            <div className="text-sm text-zinc-500">Filtered to what actually matters</div>
          </div>

          <div className="space-y-5">
            <FeedCard
              imageLabel="Install Photo"
              user="@PipeSavage"
              trade="Electrical"
              badge="🔥 ELITE"
              badgeColor="text-yellow-400"
              title="Clean 480V gear install"
              desc="Hospital job. Straight runs, clean bends, labeled everything."
              score="94"
              scoreColor="text-emerald-400"
              scoreSub="Top 2% Electrical"
              reactions={["🔥 Clean 412", "💪 Strong 179", "🧠 Smart 96"]}
              gradient="from-yellow-500/20 to-black"
            />

            <FeedCard
              imageLabel="Bad Install"
              user="@StudFinder"
              trade="Framing"
              badge="💀 HACK"
              badgeColor="text-red-400"
              title="Hack of the day"
              desc="Framed around ductwork like physics isn’t real."
              score="23"
              scoreColor="text-red-400"
              scoreSub="Bottom 5%"
              reactions={["💀 Hack 522", "😂 Funny 210", "📸 Saved 61"]}
              gradient="from-red-500/20 to-black"
            />

            <FeedCard
              imageLabel="Code Question"
              user="@AZForeman"
              trade="Electrical"
              badge="🧠 CODE"
              badgeColor="text-sky-400"
              title="Normal + emergency in same enclosure?"
              desc="Need a real answer, not break-trailer mythology. Looking for code-backed guidance only."
              score="88"
              scoreColor="text-sky-400"
              scoreSub="AHJ-worthy"
              reactions={["🧠 Helpful 144", "⚖️ AHJ 3", "💬 Replies 26"]}
              gradient="from-sky-500/20 to-black"
            />
          </div>
        </section>
      </div>

      <aside className="space-y-6">
        <Panel title="🏆 Weekly leaderboard">
          <LeaderboardRow place="#1" user="@PipeSavage" score="97" note="Electrical" />
          <LeaderboardRow place="#2" user="@MudBoss" score="95" note="Concrete" />
          <LeaderboardRow place="#3" user="@TorchGod" score="93" note="Welding" />
          <LeaderboardRow place="#4" user="@StudStacker" score="91" note="Framing" />
        </Panel>

        <Panel title="⚡ Daily return triggers">
          <AlertLine text="You moved up 12 spots this week." />
          <AlertLine text="2 contractors viewed your profile." />
          <AlertLine text="Your install entered the Top 10%." />
          <AlertLine text="Verified AHJ answered your question." />
        </Panel>

        <Panel title="⚖️ Latest AHJ answer">
          <div className="rounded-2xl border border-zinc-800 bg-black/30 p-4">
            <div className="text-sm text-zinc-400">Phoenix · Electrical</div>
            <div className="mt-2 text-lg font-bold">
              Can normal + emergency share a box with divider?
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Verified AHJ: Allowed only where separation rules are met and the
              installation matches the applicable code requirements.
            </p>
            <button className="mt-4 rounded-full bg-slate-800 px-4 py-2 text-sm font-bold hover:bg-slate-700">
              Open thread
            </button>
          </div>
        </Panel>

        <Panel title="🔥 Crew wars">
          <div className="space-y-3">
            <CrewLine crew="Pipe Savages" points="2,480" />
            <CrewLine crew="Mud Bosses" points="2,210" />
            <CrewLine crew="Steel Psychos" points="1,940" />
          </div>
        </Panel>
      </aside>
    </div>
  );
}

function CompetePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-yellow-500/30 bg-gradient-to-r from-yellow-500/15 to-black p-6">
        <h2 className="text-3xl font-black text-yellow-400">Install of the Week</h2>
        <p className="mt-2 max-w-3xl text-zinc-300">
          This is where the best work in the trades gets posted, rated, roasted,
          and remembered.
        </p>
      </section>

      <div className="grid gap-5 md:grid-cols-3">
        {[
          ["#1", "@PipeSavage", "97", "Perfect switchgear install"],
          ["#2", "@MudBoss", "95", "Laser-straight slab layout"],
          ["#3", "@TorchGod", "93", "Filthy clean weld package"],
        ].map(([place, user, score, title]) => (
          <div key={user} className="rounded-[28px] border border-zinc-800 bg-zinc-950/80 p-5">
            <div className="h-48 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-black" />
            <div className="mt-4 flex items-center justify-between">
              <div className="text-2xl font-black text-yellow-400">{place}</div>
              <div className="text-xl font-black text-emerald-400">{score}</div>
            </div>
            <div className="mt-2 text-sm text-zinc-400">{user}</div>
            <div className="mt-1 text-lg font-bold">{title}</div>
            <button className="mt-4 rounded-full bg-yellow-500 px-4 py-2 text-sm font-bold text-black">
              Vote now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function PostPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
      <section className="rounded-[28px] border border-zinc-800 bg-zinc-950/80 p-6">
        <h2 className="text-3xl font-black">Post your work</h2>
        <p className="mt-2 text-zinc-400">
          Show the field what right looks like. Or show the field what should be roasted.
        </p>

        <div className="mt-6 space-y-4">
          <input
            className="w-full rounded-2xl border border-zinc-800 bg-black/40 px-4 py-4 outline-none"
            placeholder="Title your post"
          />
          <textarea
            className="h-36 w-full rounded-2xl border border-zinc-800 bg-black/40 px-4 py-4 outline-none"
            placeholder="Describe the install, the code issue, or the chaos."
          />
          <div className="rounded-2xl border border-dashed border-zinc-700 bg-black/30 p-8 text-center text-zinc-500">
            [Drag photos here]
          </div>
          <div className="flex flex-wrap gap-3">
            <ActionBtn label="📸 Upload Photos" />
            <ActionBtn label="🚀 Publish Post" secondary />
          </div>
        </div>
      </section>

      <Panel title="What gets traction">
        <AlertLine text="Big clean photos" />
        <AlertLine text="Clear title" />
        <AlertLine text="Code references if relevant" />
        <AlertLine text="Pride, competition, or useful pain" />
      </Panel>
    </div>
  );
}

function AhjPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
      <section className="rounded-[28px] border border-zinc-800 bg-zinc-950/80 p-6">
        <h2 className="text-3xl font-black">Ask an AHJ</h2>
        <p className="mt-2 text-zinc-400">
          Get real answers from inspectors and code-minded pros. Less folklore. More facts.
        </p>

        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-zinc-800 bg-black/30 p-4">
            <div className="text-sm text-zinc-400">Question</div>
            <div className="mt-2 text-lg font-bold">
              Can normal and emergency be in the same enclosure?
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-black/30 p-4">
            <div className="text-sm text-yellow-400">Verified AHJ</div>
            <div className="mt-2 text-lg font-bold">City of Phoenix Electrical Inspector</div>
            <p className="mt-3 text-zinc-300">
              Depends on the installation details and separation requirements. This should be handled with code compliance first, convenience second.
            </p>
          </div>
        </div>
      </section>

      <Panel title="Hot code topics">
        <AlertLine text="Emergency separation" />
        <AlertLine text="Working clearance" />
        <AlertLine text="Box fill and fittings" />
        <AlertLine text="Support and securement" />
      </Panel>
    </div>
  );
}

function ProfilePage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
      <section className="rounded-[28px] border border-zinc-800 bg-zinc-950/80 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-sm text-zinc-400">@PipeSavage</div>
            <h2 className="text-3xl font-black">Top 1% Electrician</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge text="🔥 ELITE" color="yellow" />
              <Badge text="🏆 3 Wins" color="emerald" />
              <Badge text="⚖️ AHJ Approved" color="sky" />
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-black/30 px-5 py-4">
            <div className="text-sm text-zinc-400">Field Score</div>
            <div className="text-3xl font-black text-emerald-400">96</div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <StatBox label="Best Install" value="97" accent="text-yellow-400" />
          <StatBox label="Profile Views" value="2.8k" accent="text-sky-400" />
          <StatBox label="Contractor Interest" value="4" accent="text-emerald-400" />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <PortfolioCard title="Switchgear lineup" />
          <PortfolioCard title="Conduit rack" />
          <PortfolioCard title="Panel board trim" />
          <PortfolioCard title="Underground layout" />
        </div>
      </section>

      <Panel title="Why this profile matters">
        <AlertLine text="Proof beats resume fluff" />
        <AlertLine text="Best work stays visible" />
        <AlertLine text="Contractors scout real talent" />
        <AlertLine text="Badges create clout" />
      </Panel>
    </div>
  );
}

function FeedCard({
  imageLabel,
  user,
  trade,
  badge,
  badgeColor,
  title,
  desc,
  score,
  scoreColor,
  scoreSub,
  reactions,
  gradient,
}: {
  imageLabel: string;
  user: string;
  trade: string;
  badge: string;
  badgeColor: string;
  title: string;
  desc: string;
  score: string;
  scoreColor: string;
  scoreSub: string;
  reactions: string[];
  gradient: string;
}) {
  return (
    <div className="rounded-[28px] border border-zinc-800 bg-zinc-950/80 p-5">
      <div
        className={`mb-4 flex h-56 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-zinc-500`}
      >
        [{imageLabel}]
      </div>

      <div className="text-sm text-zinc-400">
        {user} · {trade}
        <span className={`ml-2 ${badgeColor}`}>{badge}</span>
      </div>

      <h3 className="mt-3 text-3xl font-black leading-tight">{title}</h3>

      <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">{desc}</p>

      <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className={`text-3xl font-black ${scoreColor}`}>{score}</div>
          <div className="text-sm text-zinc-500">{scoreSub}</div>
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          {reactions.map((r) => (
            <div key={r} className="rounded-full border border-zinc-800 bg-black/30 px-4 py-2">
              {r}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <ActionBtn label="🔥 Rate This Install" />
        <ActionBtn label="💀 Roast It" secondary />
        <ActionBtn label="💾 Save" secondary />
      </div>
    </div>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[28px] border border-zinc-800 bg-zinc-950/80 p-5">
      <h3 className="text-xl font-black">{title}</h3>
      <div className="mt-4 space-y-3">{children}</div>
    </section>
  );
}

function StatBox({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-black/30 p-4">
      <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</div>
      <div className={`mt-2 text-2xl font-black ${accent}`}>{value}</div>
    </div>
  );
}

function ActionBtn({
  label,
  secondary,
}: {
  label: string;
  secondary?: boolean;
}) {
  return (
    <button
      className={`rounded-full px-4 py-2 text-sm font-bold transition ${secondary
        ? "bg-slate-800 text-white hover:bg-slate-700"
        : "bg-yellow-500 text-black hover:bg-yellow-400"
        }`}
    >
      {label}
    </button>
  );
}

function LeaderboardRow({
  place,
  user,
  score,
  note,
}: {
  place: string;
  user: string;
  score: string;
  note: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-black/30 p-4">
      <div>
        <div className="text-sm text-zinc-500">{place}</div>
        <div className="text-lg font-bold">{user}</div>
        <div className="text-sm text-zinc-400">{note}</div>
      </div>
      <div className="text-2xl font-black text-emerald-400">{score}</div>
    </div>
  );
}

function AlertLine({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-black/30 p-4 text-sm text-zinc-300">
      {text}
    </div>
  );
}

function CrewLine({ crew, points }: { crew: string; points: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-black/30 p-4">
      <div className="font-bold">{crew}</div>
      <div className="text-yellow-400">{points}</div>
    </div>
  );
}

function PortfolioCard({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-black/30 p-4">
      <div className="mb-3 h-36 rounded-xl bg-gradient-to-br from-yellow-500/15 to-black" />
      <div className="font-bold">{title}</div>
    </div>
  );
}

function Badge({
  text,
  color,
}: {
  text: string;
  color: "yellow" | "emerald" | "sky";
}) {
  const styles =
    color === "yellow"
      ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
      : color === "emerald"
        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
        : "bg-sky-500/10 text-sky-400 border-sky-500/20";

  return (
    <span className={`rounded-full border px-3 py-1 text-sm font-bold ${styles}`}>
      {text}
    </span>
  );
}