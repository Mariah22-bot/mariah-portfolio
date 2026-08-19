import React from "react";
import type { EyeHotspotProps } from "../types";
import { Hotspot } from "../hotspots";
import { EYE } from "../paths";
import { TRANSFORMS } from "../transforms";
import { COLORS, STROKE, OPACITY } from "../constants";

export const EyeHotspot: React.FC<EyeHotspotProps> = ({
    side,
    animate,
    showWord = true,
    onNavigate,
}) => {
    const section = "sobre";
    const transform = TRANSFORMS.eye[side];
    const href = `#${section}` as const;

    return (
        <Hotspot
            href={href}
            section={section}
            transform={transform}
            animate={animate}
            showWord={showWord}
            onNavigate={onNavigate}
        >
            {/* Área de Clique Oculta */}
            <path d={EYE.clickArea} 
                stroke="transparent" 
                strokeWidth={60} 
                strokeLinecap="round"
                pointerEvents="all"
                className="cursor-pointer" />

            {/* Contorno Principal */}
            <path
                d={EYE.outline}
                fill="none"
                stroke={COLORS.eye}
                strokeWidth={STROKE.eye.outline}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: OPACITY.visible }} /* Força a visibilidade imediata */
                className="transition-opacity duration-500 group-hover:opacity-100"
            />

            {/* Linha Inferior */}
            <path
                d={EYE.bottomLine}
                fill="none"
                stroke={COLORS.eye}
                strokeWidth={STROKE.eye.line}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: OPACITY.visible }}
            />
        </Hotspot>
    );
};