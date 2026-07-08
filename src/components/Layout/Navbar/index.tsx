import logoImg from "../../../assets/images/logo.png";
import menuImg from "../../../assets/images/menu.png";

type NavbarProps = {
    isOpen: boolean;
    onToggleMenu: () => void;
    onCloseMenu: () => void;
    onHomeClick: () => void;
};

export const NavBar = ({ isOpen, onToggleMenu, onCloseMenu, onHomeClick }: NavbarProps) => {

    return (
        <nav className="bg-[#EFD9C7]/80 md:bg-transparent lg:bg-transparent fixed z-50 w-full">

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
