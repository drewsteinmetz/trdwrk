import ActionBtn from "./ActionBtn";

type FeedCardProps = {
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
};

export default function FeedCard({
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
}: FeedCardProps) {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-black/30 p-5">
            <div className={`mb-4 h-56 rounded-xl bg-gradient-to-br ${gradient}`} />

            <div className="text-sm text-zinc-400">
                {imageLabel}
            </div>

            <div className="mt-3 text-sm text-zinc-400">
                {user} · {trade}
                <span className={`ml-2 ${badgeColor}`}>{badge}</span>
            </div>

            <h3 className="mt-3 text-2xl font-black">{title}</h3>

            <p className="mt-2 text-zinc-300">{desc}</p>

            <div className="mt-4">
                <div className={`text-3xl font-black ${scoreColor}`}>{score}</div>
                <div className="text-sm text-zinc-500">{scoreSub}</div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {reactions.map((reaction) => (
                    <span
                        key={reaction}
                        className="rounded-full border border-zinc-800 bg-black/30 px-3 py-1"
                    >
                        {reaction}
                    </span>
                ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
                <ActionBtn label="🔥 Rate It" />
                <ActionBtn label="💾 Save" secondary />
                <ActionBtn label="📤 Share" secondary />
            </div>
        </div>
    );
}