"use client";

import { useState } from "react";
import Header from "@/components/Header";
import FeedPage from "@/components/FeedPage";
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
function PortfolioCard({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-black/30 p-4">
      <div className="mb-3 h-36 rounded-xl bg-gradient-to-br from-yellow-500/15 to-black" />
      <div className="font-bold">{title}</div>
    </div>
  );
}