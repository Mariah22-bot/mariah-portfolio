import logoImg from "../../../assets/images/logo.png";
import menuImg from "../../../assets/images/menu.png";

type NavbarProps = {
    isOpen: boolean;
    onToggleMenu: () => void;
    onCloseMenu: () => void;
};

export const Navbar = ({ isOpen, onToggleMenu, onCloseMenu }: NavbarProps) => {
    return (
        <nav className="relative z-50 w-full">
            <div className="absolute left-0 top-0 z-50 flex w-full items-center justify-between px-2 pt-3">
                <img
                    src={logoImg}
                    alt="Logo Mariah Desenvolvedora Front-end"
                    className="h-auto w-28 object-contain"
                />

                <button
                    type="button"
                    onClick={isOpen ? onCloseMenu : onToggleMenu}
                    className="rounded-full p-2 transition-transform hover:scale-105 focus:outline-none"
                    aria-label="Abrir menu"
                    aria-expanded={isOpen}
                >
                    <img src={menuImg} alt="Ícone de menu" className="h-auto w-20 object-contain" />
                </button>
            </div>

        </nav>
    );
};
