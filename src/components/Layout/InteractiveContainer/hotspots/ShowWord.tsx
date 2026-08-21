import React from "react";
import type { Section } from "../types";

interface ShowWordProps {
    section: Section;
    /** Quando true, dispara a animação de aparecer/sumir (ex: hover) */
    hovered?: boolean;
}

export const ShowWord: React.FC<ShowWordProps> = ({ section, hovered }) => {
    const getLabel = () => {
        if (section === "sobre") return "SOBRE";
        if (section === "projetos") return "PROJETOS";
        if (section === "contato") return "CONTATO";
        return String(section).toUpperCase();
    };

    const label = getLabel();
    const letters = label.split("");

    const getCoordinates = () => {
        if (section === "sobre") {
            return { x: 515, y: 320 };
        }
        if (section === "contato") {
            return { x: 495, y: 800 };
        }
        if (section === "projetos") {
            return { x: 485, y: 300 };
        }
        return { x: 0, y: 0 };
    };

    const coords = getCoordinates();
    const visible = Boolean(hovered);
    const appearDuration = 250;

    const gradId = `sw-grad-${section}`;
    const glowId = `sw-glow-${section}`;

    return (
        <g
            style={{ opacity: visible ? 1 : 0, transition: `opacity ${appearDuration}ms ease` }}
            className="pointer-events-none select-none"
        >
            <defs>
                <linearGradient id={gradId} x1="0" x2="1">
                    <stop offset="0%" stopColor="#7df0ff" />
                    <stop offset="100%" stopColor="#ff80e1" />
                </linearGradient>

                <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <text
                x={coords.x}
                y={coords.y}
                textAnchor="middle"
                letterSpacing={"0.25em"}
                fill={`url(#${gradId})`}
                stroke="rgba(0,0,0,0.12)"
                strokeWidth={0.6}
                style={{
                    transformOrigin: `${coords.x}px ${coords.y}px`,
                    fontFamily: 'Orbitron, "Press Start 2P", sans-serif',
                    fontWeight: 700,
                    fontSize: 52,
                    paintOrder: 'stroke fill',
                    textRendering: 'geometricPrecision',
                }}
                filter={`url(#${glowId})`}
                className="pointer-events-none"
            >
                {letters.join("")}
            </text>
        </g>
    );
};