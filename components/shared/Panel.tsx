type PanelProps = {
    title: string;
    children: React.ReactNode;
};

export default function Panel({ title, children }: PanelProps) {
    return (
        <section className="rounded-[28px] border border-zinc-800 bg-zinc-950/80 p-5">
            <h3 className="text-xl font-black">{title}</h3>
            <div className="mt-4 space-y-3">{children}</div>
        </section>
    );
}