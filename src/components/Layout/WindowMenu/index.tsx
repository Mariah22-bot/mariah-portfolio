import { useEffect, useRef } from "react";

type WindowMenuProps = {
    isOpen: boolean;
    onClose: () => void;
    onSelectItem: (item: "home" | "projetos" | "sobre" | "contato") => void;
};

export const WindowMenu = ({ isOpen, onClose, onSelectItem }: WindowMenuProps) => {
    // Criamos uma referência para a caixinha do menu
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Se o menu não estiver aberto, não precisamos monitorar os cliques
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {

            const target = event.target as HTMLElement;

            // 1. Verifica se o clique foi na imagem ou no botão do sanduíche
            const clicouNoSanduiche = target.closest(".botao-menu-sanduiche");

            // 2. Se o clique foi fora do menu E não foi no botão sanduíche, fecha!
            if (
                menuRef.current &&
                !menuRef.current.contains(target) &&
                !clicouNoSanduiche
            ) {
                onClose();
            }
        };

        // Adiciona o ouvinte de clique na página inteira
        document.addEventListener("mousedown", handleClickOutside);

        // Limpa o ouvinte quando o componente fecha ou desmonta (evita vazamento de memória)
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
          Agora a div externa não tem background nem intercepta cliques, 
          ela serve apenas para posicionar o menu de forma fixa.
        */
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4 pointer-events-none">

            {/* 
              Adicionamos a ref e 'pointer-events-auto' para que os cliques 
              voltem a funcionar normalmente dentro do menu 
            */}
            <div
                ref={menuRef}
                className="w-full max-w-3xl rounded-4xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-3xl pointer-events-auto"
            >
                <div className="mb-6 flex items-center justify-between gap-4"></div>

                <div className="grid gap-4 md:grid-cols-3">
                    {/* <button
                        type="button"
                        onClick={() => handleSelect("projetos")}
                        className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-left transition hover:border-cyan-400/60 hover:bg-slate-950/90 flex justify-center cursor-pointer"
                    > */}

                    <button
                        type="button"
                        onClick={() => handleSelect('projetos')}
                        className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-left transition hover:border-cyan-400/60 hover:bg-slate-950/90 flex justify-center cursor-pointer"
                    >
                        <span className="block text-4xl font-semibold text-cyan-200">
                            Projetos
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleSelect('sobre')}
                        className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-left transition hover:border-cyan-400/60 hover:bg-slate-950/90 flex justify-center cursor-pointer"
                    >
                        <span className="block text-4xl font-semibold text-cyan-200">
                            Sobre
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleSelect('contato')}
                        className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-left transition hover:border-cyan-400/60 hover:bg-slate-950/90 flex justify-center cursor-pointer"
                    >
                        <span className="block text-4xl font-semibold text-cyan-200">
                            Contato
                        </span>
                    </button>

                </div>
            </div>
        </div >
    );
};

export default WindowMenu;