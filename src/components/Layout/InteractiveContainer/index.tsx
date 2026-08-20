import React, { useState, useEffect } from "react";
import type { InteractiveContainerProps, Section } from "./types";
import avatarImg from "../../../assets/images/mariah-avatar.png";
import { HairHotspot } from "./hotspots/HairHotspot";
import { MouthHotspot } from "./hotspots/MouthHotspot";
import { Hotspot } from "./hotspots";
import { EYE } from "./paths";
import { COLORS, 
    // OPACITY, STROKE 
} from "./constants";

export const InteractiveContainer: React.FC<InteractiveContainerProps> = ({
    showHotspots = true,
    onSelectHotspot,
}) => {
    const [maxWidth, setMaxWidth] = useState<string>("905px");
    const [hairHovered, setHairHovered] = useState<boolean>(false);

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
                    {/* Hotspots do cabelo: área agrupada controla hover/click para os 3 cachos */}
                    <g
                        onMouseEnter={() => setHairHovered(true)}
                        onMouseLeave={() => setHairHovered(false)}
                        onClick={() => handleNavigation('projetos')}
                    >
                        <HairHotspot variant="left" animate={false} hovered={hairHovered} onNavigate={handleNavigation} />
                        <HairHotspot variant="right" animate={false} hovered={hairHovered} onNavigate={handleNavigation} />
                        <HairHotspot variant="center" animate={false} hovered={hairHovered} onNavigate={handleNavigation} />
                    </g>

                    {/* Hotspot único dos Olhos (Sobre) */}
                    <Hotspot
                        href="#sobre"
                        section="sobre"
                        animate={false}
                        onNavigate={handleNavigation}
                    >
                        <path
                            d={EYE.clickArea}
                            fill="transparent"
                            className="cursor-pointer"
                            pointerEvents="all"
                        />

                        <g transform="translate(32 -225)">
                            {/* <path
                                d={EYE.outline}
                                fill="none"
                                stroke={COLORS.eye}
                                strokeWidth={STROKE.eye.outline}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ opacity: OPACITY.visible }}
                            />
                            <path
                                d={EYE.bottomLine}
                                fill="none"
                                stroke={COLORS.eye}
                                strokeWidth={STROKE.eye.line}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ opacity: OPACITY.visible }}
                            /> */}

                            {/* Detalhe central estilo olho biónico */}
                            <circle
                                cx={380}
                                cy={585}
                                r={30}
                                fill="none"
                                stroke={COLORS.eye}
                                strokeWidth={3}
                                opacity={0.95}
                            />
                            <circle
                                cx={380}
                                cy={585}
                                r={18}
                                fill="rgba(158, 246, 255, 0.18)"
                                stroke="rgba(158, 246, 255, 0.9)"
                                strokeWidth={2}
                            />
                            <circle
                                cx={380}
                                cy={585}
                                r={9}
                                fill="#8af4ff"
                                opacity={0.98}
                            />
                            <circle
                                cx={380}
                                cy={585}
                                r={4}
                                fill="#ffffff"
                                opacity={0.9}
                            />
                            <circle
                                cx={380}
                                cy={585}
                                r={40}
                                fill="none"
                                stroke="rgba(255,255,255,0.22)"
                                strokeWidth={1.2}
                            />
                            <path
                                d="M 325 334 L 365 334"
                                stroke="rgba(255,255,255,0.3)"
                                strokeWidth={1.4}
                                strokeLinecap="round"
                            />
                            <path
                                d="M 345 314 L 345 354"
                                stroke="rgba(255,255,255,0.3)"
                                strokeWidth={1.4}
                                strokeLinecap="round"
                            />
                        </g>
                    </Hotspot>

                    {/* Hotspot da Boca (Contato) */}
                    <MouthHotspot animate={false} onNavigate={handleNavigation} />
                </svg>
            )}
        </div>
    );
};

export default InteractiveContainer;