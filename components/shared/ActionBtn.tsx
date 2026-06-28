type ActionBtnProps = {
    label: string;
    secondary?: boolean;
};

export default function ActionBtn({
    label,
    secondary = false,
}: ActionBtnProps) {
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