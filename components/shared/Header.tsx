type Tab = "feed" | "compete" | "post" | "ahj" | "profile";

type HeaderProps = {
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
};

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
    const tabs: { key: Tab; label: string }[] = [
        { key: "feed", label: "FEED" },
        { key: "compete", label: "COMPETE" },
        { key: "post", label: "POST" },
        { key: "ahj", label: "AHJ" },
        { key: "profile", label: "PROFILE" },
    ];

    return (
        <header className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
                <h1 className="text-4xl font-black tracking-widest text-yellow-400 md:text-5xl">
                    TRDWRK
                </h1>
                <p className="mt-1 text-sm uppercase tracking-[0.25em] text-zinc-500">
                    Show your work. Earn your name.
                </p>
            </div>

            <div className="flex flex-wrap gap-3">
                {tabs.map((item) => (
                    <button
                        key={item.key}
                        onClick={() => setActiveTab(item.key)}
                        className={`rounded-full px-5 py-3 text-sm font-bold transition ${activeTab === item.key
                                ? "bg-yellow-500 text-black"
                                : "bg-slate-800 text-white hover:bg-slate-700"
                            }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </header>
    );
}