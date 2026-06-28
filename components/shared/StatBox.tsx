type StatBoxProps = {
    label: string;
    value: string;
    accent: string;
};

export default function StatBox({ label, value, accent }: StatBoxProps) {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-black/30 p-4">
            <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                {label}
            </div>
            <div className={`mt-2 text-2xl font-black ${accent}`}>{value}</div>
        </div>
    );
}