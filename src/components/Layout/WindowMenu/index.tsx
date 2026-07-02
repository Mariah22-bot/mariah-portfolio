type WindowMenuProps = {
    isOpen: boolean;
    onClose: () => void;
    onSelectItem: (item: "projetos" | "sobre" | "contato") => void;
};

export const WindowMenu = ({ isOpen, onClose, onSelectItem }: WindowMenuProps) => {
    if (!isOpen) {
        return null;
    }

    const handleSelect = (item: "projetos" | "sobre" | "contato") => {
        onSelectItem(item);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
            <div className="w-full max-w-3xl rounded-4xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-3xl">
                <div className="mb-6 flex items-center justify-between gap-4">
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <button
                        type="button"
                        onClick={() => handleSelect("projetos")}
                        className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-left transition hover:border-cyan-400/60 hover:bg-slate-950/90
                         flex justify-center
                        "
                    >
                        <span className="block text-4xl font-semibold text-cyan-200">Projetos</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleSelect("sobre")}
                        className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-left transition hover:border-cyan-400/60 hover:bg-slate-950/90
                        flex justify-center
                        "
                    >
                        <span className="block text-4xl font-semibold text-cyan-200">Sobre</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleSelect("contato")}
                        className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-left transition hover:border-cyan-400/60 hover:bg-slate-950/90
                        flex justify-center
                        "
                    >
                        <span className="block text-4xl font-semibold text-cyan-200">Contato</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WindowMenu;
