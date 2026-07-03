import { useNavigate } from 'react-router-dom'
import logoImg from "../../../assets/images/logo.png";
import menuImg from "../../../assets/images/menu.png";

type NavbarProps = {
    isOpen: boolean;
    onToggleMenu: () => void;
    onCloseMenu: () => void;
};

export const NavBar = ({ isOpen, onToggleMenu, onCloseMenu }: NavbarProps) => {
    const navigate = useNavigate()

    return (
        <nav className="relative z-50 w-full">
            <div className="absolute left-0 top-0 z-50 flex w-full items-center justify-between px-2 pt-3">
                <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="rounded-full p-2 transition-transform hover:scale-105 focus:outline-none"
                    aria-label="Voltar para página principal"
                >
                    <img
                        src={logoImg}
                        alt="Logo Mariah Desenvolvedora Front-end"
                        className="h-auto w-28 object-contain cursor-pointer"
                    />
                </button>

                <button
                    type="button"
                    onClick={isOpen ? onCloseMenu : onToggleMenu}
                    className="rounded-full p-2 transition-transform hover:scale-105 focus:outline-none cursor-pointer botao-menu-sanduiche"
                    aria-label="Abrir menu"
                    aria-expanded={isOpen}
                >
                    <img src={menuImg} alt="Ícone de menu" className="h-auto w-20 object-contain pointer-events-none" />
                </button>
            </div>

        </nav>
    );
};
