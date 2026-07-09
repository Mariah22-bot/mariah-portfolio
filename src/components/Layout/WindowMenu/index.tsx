import { useEffect, useRef } from "react";

type WindowMenuProps = {
    isOpen: boolean;
    onClose: () => void;
    onSelectItem: (item: "home" | "projetos" | "sobre" | "contato") => void;
};

export const WindowMenu = ({ isOpen, onClose, onSelectItem }: WindowMenuProps) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const clicouNoSanduiche = target.closest(".botao-menu-sanduiche");

            if (
                menuRef.current &&
                !menuRef.current.contains(target) &&
                !clicouNoSanduiche
            ) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    const handleSelect = (item: "home" | "projetos" | "sobre" | "contato") => {
        onSelectItem(item);
        onClose();
    };

    return (
        /* 
          1. No mobile: centralizado na tela cheia.
          2. No md/lg: muda para o topo direito, alinhado logo abaixo do local esperado do sanduíche.
        */
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4 pointer-events-none 
        md:inset-auto md:right-6 md:top-20 md:p-0
        ">

            {/* 
              A caixinha do menu:
              - md:max-w-xs -> Faz o menu ficar bem menor no computador.
              - md:before -> Cria o triângulo do balão de fala apontando para cima.
            */}
            <div
                ref={menuRef}
                className="relative w-full max-w-3xl rounded-4xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-3xl pointer-events-auto transition-all duration-300
                "
            >
                <div className="mb-6 flex items-center justify-between gap-4 md:hidden"></div>

                {/* No mobile mantém grid, mas a partir do md empilha os botões como uma lista de menu convencional */}
                <div className="grid gap-4 md:grid-cols-1 md:gap-2">

                    <button
                        type="button"
                        onClick={() => handleSelect('sobre')}
                        className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-left transition hover:border-cyan-400/60 hover:bg-slate-950/90 flex justify-center cursor-pointer md:rounded-xl md:p-3 md:justify-start"
                    >
                        <span className="block text-4xl font-semibold text-cyan-200 md:text-lg">
                            Sobre
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleSelect('projetos')}
                        className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-left transition hover:border-cyan-400/60 hover:bg-slate-950/90 flex justify-center cursor-pointer md:rounded-xl md:p-3 md:justify-start"
                    >
                        <span className="block text-4xl font-semibold text-cyan-200 md:text-lg">
                            Projetos
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleSelect('contato')}
                        className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-left transition hover:border-cyan-400/60 hover:bg-slate-950/90 flex justify-center cursor-pointer md:rounded-xl md:p-3 md:justify-start"
                    >
                        <span className="block text-4xl font-semibold text-cyan-200 md:text-lg">
                            Contato
                        </span>
                    </button>

                </div>
            </div>
        </div >
    );
};

export default WindowMenu;
