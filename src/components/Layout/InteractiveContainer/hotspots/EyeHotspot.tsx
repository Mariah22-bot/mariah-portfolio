import React from "react";
import type { EyeHotspotProps } from "../types";
import { Hotspot } from ".";
import { EYE } from "../paths";
import { TRANSFORMS } from "../transforms";
import { COLORS } from "../constants";

export const EyeHotspot: React.FC<EyeHotspotProps> = ({
    animate,
    showWord = true,
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
            showWord={showWord}
            onNavigate={onNavigate}
        >

            <path
                d={EYE.clickArea}
                fill="transparent"
                stroke="transparent"
                strokeWidth={60}
                pointerEvents="stroke"
            />

            <g transform="translate(32 -225)">
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
                <circle cx={380} cy={585} r={9} fill="#8af4ff" opacity={0.98} />
                <circle cx={380} cy={585} r={4} fill="#ffffff" opacity={0.9} />
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
    );
};

export default EyeHotspot;
