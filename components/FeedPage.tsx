import PortfolioCard from "./shared/PortfolioCard";
import Badge from "./shared/Badge";
import ActionBtn from "./shared/ActionBtn";
import StatBox from "./shared/StatBox";
import Panel from "./shared/Panel";
export default function FeedPage() {
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

                        <PortfolioCard
                            title="Perfect switchgear install"
                            author="@PipeSavage"
                            trade="Electrical"
                            description="Dead-even gear faces, clean terminations, matching bends, and labeling that doesn't look like it survived a tornado."
                        />
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
function CrewLine({ crew, points }: { crew: string; points: string }) {
    return (
        <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-black/30 p-4">
            <div className="font-bold">{crew}</div>
            <div className="text-yellow-400">{points}</div>
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