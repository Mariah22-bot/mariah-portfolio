import React from "react";
import type { EyeHotspotProps } from "../types";
import { Hotspot } from "../hotspots";
import { EYE } from "../paths";
import { TRANSFORMS } from "../transforms";
import { COLORS, STROKE, OPACITY } from "../constants";

export const EyeHotspot: React.FC<EyeHotspotProps> = ({
    side,
    animate,
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
            onNavigate={onNavigate}
        >
            {/* Área de Clique Oculta (compatível com touch) */}
            {/* Usamos um preenchimento quase transparente para garantir que navegadores
                mobile registrem o toque mesmo em áreas SVG "transparentes". Além disso
                desenhamos um stroke invisível e largo para expandir a área sensível ao toque
                (especialmente útil em Android). */}
            <path d={EYE.clickArea} fill="rgba(0,0,0,0.001)" pointerEvents="all" className="cursor-pointer" />
            <path
                d={EYE.clickArea}
                fill="none"
                stroke="rgba(0,0,0,0.001)"
                strokeWidth={40}
                strokeLinecap="round"
                strokeLinejoin="round"
                pointerEvents="all"
                className="cursor-pointer"
            />

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