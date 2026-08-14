import { useState, useEffect } from "react";
import logoImg from "../../../assets/images/logo.png";
import menuImg from "../../../assets/images/menu.png";

type NavBarProps = {
    isOpen: boolean;
    onToggleMenu: () => void;
    onCloseMenu: () => void;
    onHomeClick: () => void;
};

export const NavBar = ({ isOpen, onToggleMenu, onCloseMenu, onHomeClick }: NavBarProps) => {
    // Estado para controlar se a NavBar deve ser exibida ou não
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsVisible(window.scrollY > 300);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navBaseClasses = "fixed z-50 w-full bg-[#EFD9C7]/80 md:bg-transparent lg:bg-transparent transition-all duration-500 ease-in-out";
    const navVisibilityClasses = isVisible || isOpen
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-5 pointer-events-none";

    return (
        <nav className={`${navBaseClasses} ${navVisibilityClasses}`}>
            <div className="flex w-full items-center justify-between px-2 pt-2">
                <button
                    type="button"
                    onClick={onHomeClick}
                    className="rounded-full p-1 transition-transform duration-300 ease-out hover:scale-[1.15] active:scale-[0.97] focus:outline-none"
                    aria-label="Voltar para página principal"
                >
                    <img
                        src={logoImg}
                        alt="Logo Mariah Desenvolvedora Front-end"
                        className="mb-2 h-auto w-16 md:w-20 lg:w-20 object-contain cursor-pointer"
                    />
                </button>

                <button
                    type="button"
                    onClick={isOpen ? onCloseMenu : onToggleMenu}
                    className="rounded-full p-1 transition-transform duration-300 ease-out hover:scale-[1.15] active:scale-[0.97] focus:outline-none cursor-pointer botao-menu-sanduiche"
                    aria-label="Abrir menu"
                    aria-expanded={isOpen}
                >
                    <img
                        src={menuImg}
                        alt="Ícone de menu"
                        className="mb-2 h-auto w-11 md:w-15 lg:w-15 object-contain pointer-events-none"
                    />
                </button>
            </div>
        </nav>
    );
};