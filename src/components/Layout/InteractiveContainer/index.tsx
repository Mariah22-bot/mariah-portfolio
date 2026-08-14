import React, { useState, useEffect } from "react";
import type { InteractiveContainerProps, Section } from "./types";
import avatarImg from "../../../assets/images/mariah-avatar.png";
import { EyeHotspot } from "./hotspots/EyeHotspot";
import { HairHotspot } from "./hotspots/HairHotspot";
import { MouthHotspot } from "./hotspots/MouthHotspot";

export const InteractiveContainer: React.FC<InteractiveContainerProps> = ({
    showHotspots = true,
    onSelectHotspot,
}) => {
    const [maxWidth, setMaxWidth] = useState<string>("905px");
    const [hairHovered, setHairHovered] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            // Se a tela for maior que 1920px, remove o limite de 905px (deixa crescer livre)
            if (window.innerWidth > 1920) {
                setMaxWidth("none");
            } else {
                // Para qualquer tela ATÉ 1920px, crava o limite máximo em 905px
                setMaxWidth("905px");
            }
        };

        // Executa ao montar o componente e adiciona o listener de redimensionamento
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNavigation = (section: Section) => {
        console.log(`Navegando para a seção: ${section}`);
        if (onSelectHotspot) {
            onSelectHotspot();
        }

        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        /* 
          Injetamos o max-width dinamicamente via style inline para garantir compatibilidade total,
          independentemente de como o compilador do Tailwind v4 esteja interpretando as classes.
        */
        <div
            style={{ maxWidth: maxWidth }}
            className="relative w-full mx-auto flex items-center justify-center overflow-hidden rounded-lg"
        >

            {/* Imagem Artística de Fundo */}
            <img
                src={avatarImg}
                alt="Mariáh Cyber Avatar"
                className="w-full h-auto select-none pointer-events-none block z-0"
            />

            {/* Camada SVG Interativa com Overlays */}
            {showHotspots && (
                <svg
                    viewBox="0 0 1000 500"
                    className="absolute top-0 left-0 w-full h-full select-none z-10 pointer-events-auto"
                    xmlns="http://www.w3.org/2000/svg"
                >
                        {/* Hotspots do Cabelo (Projetos)
                            Agora agrupados: uma única área ativa controla os três cachos.
                            Ordem ajustada para garantir que o cacho central seja renderizado por último,
                            fazendo com que sua palavra (`ShowWord`) fique acima dos outros hotspots.
                        */}
                        {/* Área agrupada que controla hover/click para os 3 cachos */}
                        <g
                            onMouseEnter={() => setHairHovered(true)}
                            onMouseLeave={() => setHairHovered(false)}
                            onClick={() => handleNavigation('projetos')}
                        >
                            <HairHotspot variant="left" animate={false} hovered={hairHovered} onNavigate={handleNavigation} />
                            <HairHotspot variant="right" animate={false} hovered={hairHovered} onNavigate={handleNavigation} />
                            <HairHotspot variant="center" animate={false} hovered={hairHovered} onNavigate={handleNavigation} />
                        </g>

                    {/* Hotspots dos Olhos (Sobre) */}
                    <EyeHotspot side="left" animate={false} onNavigate={handleNavigation} />
                    <EyeHotspot side="right" animate={false} onNavigate={handleNavigation} />

                    {/* Hotspot da Boca (Contato) */}
                    <MouthHotspot animate={false} onNavigate={handleNavigation} />
                </svg>
            )}
        </div>
    );
};

export default InteractiveContainer;