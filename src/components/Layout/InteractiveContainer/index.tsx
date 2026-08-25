import React, { useState, useEffect } from "react";
import type { InteractiveContainerProps, Section } from "./types";
import avatarImg from "../../../assets/images/mariah-avatar.png";
import { scrollToSection } from "../../../utils/navigation";
import { HairHotspot } from "./hotspots/HairHotspot";
import { MouthHotspot } from "./hotspots/MouthHotspot";
import { EyeHotspot } from "./hotspots/EyeHotspot";
// imports limpos: Hotspot, EYE e COLORS não eram usados aqui

export const InteractiveContainer: React.FC<InteractiveContainerProps> = ({
    showHotspots = true,
    onSelectHotspot,
}) => {
    const [maxWidth, setMaxWidth] = useState<string>("905px");
    const [hairHovered, setHairHovered] = useState<boolean>(false);
    const [revealWords, setRevealWords] = useState<boolean>(true);

    useEffect(() => {
        if (!showHotspots) return;
        const t = window.setTimeout(() => setRevealWords(false), 2000);
        return () => clearTimeout(t);
    }, [showHotspots]);

    useEffect(() => {
        const handleResize = () => {
            // remove o maxWidth em telas muito grandes
            if (window.innerWidth > 1920) setMaxWidth("none")
            else setMaxWidth("905px")
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const handleNavigation = (section: Section) => {
        console.log(`Navegando para a seção: ${section}`);
        if (onSelectHotspot) {
            onSelectHotspot();
        }

        const element = document.getElementById(section);
        if (element) {
            // use shared scroll util to calculate offsets consistently
            scrollToSection(element, 0);
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
                    {/* Hotspots do cabelo: área agrupada controla hover/click para os 3 cachos */}
                    <g
                        onMouseEnter={() => setHairHovered(true)}
                        onMouseLeave={() => setHairHovered(false)}
                        onClick={() => handleNavigation('projetos')}
                    >
                        <HairHotspot variant="left" animate={false} hovered={hairHovered} revealWords={revealWords} onNavigate={handleNavigation} />
                        <HairHotspot variant="right" animate={false} hovered={hairHovered} revealWords={revealWords} onNavigate={handleNavigation} />
                        <HairHotspot variant="center" animate={false} hovered={hairHovered} revealWords={revealWords} onNavigate={handleNavigation} />
                    </g>

                    {/* Hotspot único dos Olhos (Sobre) */}
                    <EyeHotspot animate={false} revealWords={revealWords} onNavigate={handleNavigation} />

                    {/* Hotspot da Boca (Contato) */}
                    <MouthHotspot animate={false} revealWords={revealWords} onNavigate={handleNavigation} />
                </svg>
            )}
        </div>
    );
};

export default InteractiveContainer;