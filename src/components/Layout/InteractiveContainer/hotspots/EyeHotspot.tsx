import React from "react";
import type { EyeHotspotProps } from "../types";
import { Hotspot } from "../hotspots";
import { EYE } from "../paths";
import { TRANSFORMS } from "../transforms";
// import { COLORS, STROKE, OPACITY } from "../constants";

export const EyeHotspot: React.FC<EyeHotspotProps> = ({
    animate,
    // showWord = true,
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
            // showWord={showWord}
            onNavigate={onNavigate}
        >
            {/* Área de Clique Oculta: toda a área interna do olho, incluindo o centro cibernético */}
            <path
                d={EYE.clickArea}
                fill="rgba(255,255,255,0.01)"
                stroke="transparent"
                strokeWidth={30}
                pointerEvents="all"
                className="cursor-pointer"
            />
            <path
                d={EYE.clickAreaInner}
                fill="rgba(255,255,255,0.01)"
                stroke="transparent"
                strokeWidth={18}
                pointerEvents="all"
                className="cursor-pointer"
            />
            <path
                d={EYE.clickAreaCenter}
                fill="rgba(255,255,255,0.01)"
                stroke="transparent"
                strokeWidth={18}
                pointerEvents="all"
                className="cursor-pointer"
            />
            <path
                d={EYE.irisRing}
                fill="rgba(255,255,255,0.01)"
                stroke="transparent"
                strokeWidth={18}
                pointerEvents="all"
                className="cursor-pointer"
            />

            {/* Contorno Principal */}
            {/* <path
                d={EYE.outline}
                fill="none"
                stroke={COLORS.eye}
                strokeWidth={STROKE.eye.outline}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: OPACITY.visible }}
                className="transition-opacity duration-500 group-hover:opacity-100 cursor-pointer"
            /> */}

            {/* Linha Inferior */}
            {/* <path
                d={EYE.bottomLine}
                fill="none"
                stroke={COLORS.eye}
                strokeWidth={STROKE.eye.line}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: OPACITY.visible }}
                className="cursor-pointer"
            /> */}
        </Hotspot>
    );
};