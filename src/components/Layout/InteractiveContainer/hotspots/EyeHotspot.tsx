import React from "react";
import type { EyeHotspotProps } from "../types";
import { Hotspot } from ".";
import { TRANSFORMS } from "../transforms";
import eyeImg from "../../../../assets/images/olho-bionico.png";
import { EYE } from "../paths";

export const EyeHotspot: React.FC<EyeHotspotProps> = ({
    animate,
    revealWords,
    onNavigate,
}) => {
    const section = "sobre";
    const transform = TRANSFORMS.eye;
    const href = `#${section}` as const;

    return (
        <Hotspot
            href={href}
            section={section}
            transform={transform}
            animate={animate}
            revealWords={revealWords}
            onNavigate={onNavigate}
        >

            {/* Área de Clique Oculta */}
            <path d={EYE.clickArea}
                fill="transparent" className="cursor-pointer" />

            <g
                transform="translate(32 -225)"
                tabIndex={0}
                role="button"
                aria-label="Ir para Sobre"
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onNavigate(section);
                    }
                }}
            >
                <image
                    href={eyeImg}
                    x={320}
                    y={525}
                    width={120}
                    height={120}
                    preserveAspectRatio="xMidYMid meet"
                    pointerEvents="all"
                    className="cursor-pointer"
                />
            </g>
        </Hotspot>
    );
};

export default EyeHotspot;
