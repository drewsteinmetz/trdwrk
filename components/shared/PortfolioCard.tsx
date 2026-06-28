export default function PortfolioCard({ title }: { title: string }) {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-black/30 p-4">
            <div className="mb-3 h-36 rounded-xl bg-gradient-to-br from-yellow-500/15 to-black" />
            <div className="font-bold">{title}</div>
        </div>
    );
}